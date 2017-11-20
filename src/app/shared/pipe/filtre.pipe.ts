import { Pipe, PipeTransform } from '@angular/core';
import {Collegue} from '../domain/collegue'
@Pipe({
  name: 'filter'
})
export class FiltrePipe implements PipeTransform {

  transform(value: Collegue[], args?: any): Collegue[] {
    
    if (args) {
      return value.filter(col=>col._nom.toLocaleUpperCase().includes(args.toLocaleUpperCase()))
    }else{
      return value;
    }    
  }
}
