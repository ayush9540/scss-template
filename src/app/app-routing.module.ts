import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScssTemplateComponent } from './scss-template/scss-template.component';
import { ScssOverviewComponent } from './scss-overview/scss-overview.component';


const routes: Routes = [
  {path: 'scssDemo', component: ScssTemplateComponent},
  {path: 'scssOverview', component: ScssOverviewComponent},
  {path: '', redirectTo: '/scssOverview', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
