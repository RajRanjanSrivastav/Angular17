import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccode',
  standalone: true
})
export class CcodePipe implements PipeTransform {

  transform(value: unknown, code:String): unknown {
    if(code=="USA") return "+1" + value;
    else return "+91" + value;
  }

}
