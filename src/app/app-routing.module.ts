import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientFormComponent } from './client-form/client-form.component';
import { RecapFormComponent } from './recap-form/recap-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/client-form', pathMatch: 'full' },
  { path: 'client-form', component: ClientFormComponent },
  { path: 'client-recap', component: RecapFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
