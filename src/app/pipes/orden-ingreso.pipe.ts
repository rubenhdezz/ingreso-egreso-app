import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Pipe({
  name: 'ordenIngreso'
})
export class OrdenIngresoPipe implements PipeTransform {

  transform(items: Array<IngresoEgreso>): Array<IngresoEgreso> {
    return items?.slice().sort( (a,b) => {

      if( a.tipo === 'ingreso'){
        return -1;
      } else {
        return 1;
      }

    });
  }

}
