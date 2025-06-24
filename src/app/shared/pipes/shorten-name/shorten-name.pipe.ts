import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenName',
  standalone: true
})
export class ShortenNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value ? value.split(" ").map(item=> {
      return item.slice(0,1);
    }).join("").toUpperCase() : "";
  }

}
