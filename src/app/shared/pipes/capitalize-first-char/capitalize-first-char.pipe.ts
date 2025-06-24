import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'capitalizeFirstChar',
  standalone: true
})
export class CapitalizeFirstCharPipe implements PipeTransform {

  transform(value: string|null): string|null {
    if(!value) return null;
    return value.slice(0,1).toUpperCase() + value.substring(1, value.length);
  }

}
