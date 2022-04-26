import { Routes } from '@angular/router';
import { EstadisticaComponent } from '../ingreso-egro/estadistica/estadistica.component';
import { IngresoEgroComponent } from '../ingreso-egro/ingreso-egro.component';
import { DetalleComponent } from '../ingreso-egro/detalle/detalle.component';


export const dashboardRoutes: Routes = [
    {path: '', component: EstadisticaComponent},
    {path: 'ingreso-egreso', component: IngresoEgroComponent},
    {path: 'detalle', component: DetalleComponent},
];