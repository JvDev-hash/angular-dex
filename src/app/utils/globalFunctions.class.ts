import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GlobalFunctions {

  padWithLeadingZeros(num: number, totalLength: number) {
    if(String(num).length >= totalLength) {
      return String(num);
    }
    return String(num).padStart(totalLength, '0');
  }
    
  capFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  unitConversion(type: string, val: number){
    let result;

    switch(type){
      case 'hect':
        result = (val/4.536).toFixed(1);
        break;
      
      case 'deci':
        result = this.formatHeightFt((val/3.048).toString());
        break;
    }

    return result;
  }

  formatHeightFt(val: string){
    let tmpDecimalVal = val.split('.')[1];
    let decimalVal = tmpDecimalVal.slice(0, 2)+'"';
    let intVal = val.split('.')[0]+"'";

    return `${intVal} ${decimalVal}`
  }
}

