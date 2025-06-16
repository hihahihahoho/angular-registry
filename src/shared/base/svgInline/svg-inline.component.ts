import { CommonModule } from "@angular/common";
import { Component, HostBinding, Input, OnInit } from "@angular/core";
import { ImageFormatType } from "../../enums/UI/ui.enum";
import { InlineSVGModule } from "ng-inline-svg-2";

interface IImageExtension {
  imageName?: string;
  imageType: ImageFormatType | null;
}

@Component({
  selector: "app-svg",
  standalone: true,
  imports: [CommonModule, InlineSVGModule],
  templateUrl: "./svg-inline.component.html",
  styleUrls: ["./svg-inline.component.scss"],
})
export class SvgInlineComponent implements OnInit {
  @HostBinding("class.app-svg") inline = true;

  @Input() src!: string;
  @Input() color!: string;
  @Input() size?: number = 6;
  @Input() extendClass!: string;
  @Input() colorChange: boolean = true;

  initClass() {
    let classs = ["icon-svg"];
    let iconName =
      "icon-svg-" + this.getNameAndTypeOfImage(this.src)?.imageName || "";
    classs.push(iconName);
    classs.push(this.initSizeAndExtendClass());
    if (this.color) classs.push(this.color);
    if (!this.colorChange) classs.push("no-change");
    return classs.join(" ");
  }

  initSizeAndExtendClass(): string {
    let classs = [];
    if (this.size) classs.push("size-" + this.size);
    if (this.extendClass) classs.push(this.extendClass);
    return classs.join(" ");
  }

  imageType!: any;

  ngOnInit(): void {
    const imageExtension = this.getNameAndTypeOfImage(this.src);
    this.imageType = imageExtension?.imageType;
  }

  private getNameAndTypeOfImage(src: string): IImageExtension {
    const urlWithoutQuery = src.split("?")[0];
    return {
      imageName: urlWithoutQuery.split("/").pop()?.split(".")[0],
      imageType: urlWithoutQuery
        .split("/")
        .pop()
        ?.split(".")[1] as ImageFormatType,
    };
  }

  onSVGLoaded(svg: SVGElement): SVGElement {
    this.modifySvgIds(svg);
    return svg;
  }

  private modifySvgIds(svg: SVGElement) {
    const elementsWithId = svg.querySelectorAll("[id]");

    elementsWithId.forEach((element: Element) => {
      const originalId = element.id;
      const uniqueId = `${originalId}-${Math.random().toString(36).substr(2, 9)}`;
      element.setAttribute("id", uniqueId);

      // Update references to this id within the SVG
      this.updateReferences(svg, originalId, uniqueId);
    });
  }

  private updateReferences(
    svg: SVGElement,
    originalId: string,
    uniqueId: string,
  ) {
    // Iterate over all elements and check their attributes directly
    const allElements = svg.getElementsByTagName("*");
    for (let i = 0; i < allElements.length; i++) {
      const element = allElements[i];
      for (let j = 0; j < element.attributes.length; j++) {
        const attr = element.attributes[j];
        if (attr.value.includes(`#${originalId}`)) {
          attr.value = attr.value.replace(`#${originalId}`, `#${uniqueId}`);
        }
      }
    }
  }
}
