import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './components/class/class.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ChartComponent } from "./components/chart/chart.component";

const routes: Routes = [
  { path: '', component: ClassComponent },
  { path: 'chart', component: ChartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
