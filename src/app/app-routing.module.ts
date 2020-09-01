import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { ProductInfoComponent } from './product-info/product-info.component';


const routes: Routes = [  {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full',
},
{
  path: 'login', component: LoginComponentComponent,
},
{
  path: 'product', component: ProductInfoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
