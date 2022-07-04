import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IngresoEgreso } from 'src/app/models/ingreso-egreso.model';
import { AppStateWithIngreso } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit {
  ingresos: number = 0;
  egresos: number = 0;
  totalIngresos: number = 0;
  totalEgresos: number = 0;

  constructor(
  private store: Store<AppStateWithIngreso>
  ) { }

  ngOnInit() {
    this.store.select('ingresosEgresos')
    .subscribe( ({items}) => this.generarEstadistica(items));
  }

  generarEstadistica( items: Array<IngresoEgreso> ){
    this.totalEgresos = 0;
    this.totalIngresos = 0
    this.ingresos = 0;
    this.egresos = 0;
    for(const item of items) {
      if(item.tipo === 'ingreso') {
        this.totalIngresos += item.monto;
        this.ingresos++;
      } else {
        this.totalEgresos += item.monto;
        this.egresos++;
      }
    }
  }

}
