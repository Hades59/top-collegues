import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value > 0) {
      return '<font color="green"><strong>+'+value+'</strong></font>'
    }else if(value < 0){
      return '<font color="red"><strong>'+value+'</strong></font>'
    }else{
      return ""+value
    }   
  }

}
