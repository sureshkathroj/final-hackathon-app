import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import(`../app/login/login.module`).then(m => m.LoginModule)
}, {
  path: 'ibank',
  loadChildren: () => import(`../app/beneficiary/beneficiary.module`).then(m => m.BeneficiaryModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
