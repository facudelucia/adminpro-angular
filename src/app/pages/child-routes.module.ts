import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { UsuariosComponent } from './mantenimientos/usuarios/usuarios.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './../guards/admin.guard';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MedicoComponent } from './mantenimientos/medicos/medico.component';
import { HospitalesComponent } from './mantenimientos/hospitales/hospitales.component';
import { MedicosComponent } from './mantenimientos/medicos/medicos.component';

const childRoutes: Routes = [
  { path: "", component: DashboardComponent, data: { titulo: "Dashboard" } },
  { path: "progress", component: ProgressComponent, data: { titulo: "ProgressBar" } },
  { path: "grafica1", component: Grafica1Component, data: { titulo: "Grafica #1" } },
  { path: "account-settings", component: AccountSettingsComponent, data: { titulo: "Ajustes de Cuenta" } },
  { path: "rxjs", component: RxjsComponent, data: { titulo: "RxJs" } },
  { path: "perfil", component: PerfilComponent, data: { titulo: "Perfil de Usuario" } },
  { path: "buscar/:termino", component: BusquedaComponent, data: { titulo: "Busqueda global" } },
  //Mantenimientos
  { path: "usuarios", canActivate: [AdminGuard], component: UsuariosComponent, data: { titulo: "Mantenimiento de usuarios" } },
  { path: "medicos", component: MedicosComponent, data: { titulo: "Mantenimiento de medicos" } },
  { path: "hospitales", component: HospitalesComponent, data: { titulo: "Mantenimiento de hospitales" } },
  { path: "medico/:id", component: MedicoComponent, data: { titulo: "Mantenimiento de medicos" } },
]


@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule]
})
export class ChildRoutesModule { }
