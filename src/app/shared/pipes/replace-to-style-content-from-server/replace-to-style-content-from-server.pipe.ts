import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceToStyleContentFromServer',
  standalone: true,
})
export class ReplaceToStyleContentFromServerPipe implements PipeTransform {
  transform(value: string): string {
    return value
      .replace(/<p>/g, '<span class="orange">')
      .replace(/<\/p>/g, '</span>')
      .replace(/<c>/g, '<span class="green">')
      .replace(/<\/c>/g, '</span>')
      .replace(/<r>/g, '<span class="red">')
      .replace(/<\/r>/g, '</span>');
  }
}
