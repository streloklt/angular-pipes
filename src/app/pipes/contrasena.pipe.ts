import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean): string {
    if (activar) {
      let password = '';
      for (let i = 0; i < value.length; i++) {
        password += '*';
      }

      value = password;
    }

    return value;
  }
}
