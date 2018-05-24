import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {OrderConfirmComponent} from './orderConfirm/orderConfirm.component';
import {UserCenterComponent} from './userCenter/userCenter.component';
import {NotFoundComponent} from './utility/notfound/notfound.component';
import {CartComponent} from './cart/cart.component';

import {orderConfirmStepTwoComponent} from './orderConfirm/orderConfirmStepTwo.Component';
import {orderConfirmStepOneComponent} from './orderConfirm/orderConfirmStepOne.Component';
import {orderConfirmStepThreeComponent} from './orderConfirm/orderConfirmStepThree.Component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'orderConfirm', component: OrderConfirmComponent,
    children:[
      {path: '' , component:orderConfirmStepOneComponent},
      {path: 'step1' , component:orderConfirmStepOneComponent},
      {path: 'step2' , component:orderConfirmStepTwoComponent},
      {path: 'step3' , component:orderConfirmStepThreeComponent}
    ]
  },
  { path: 'userCenter', component: UserCenterComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

//export const routedComponents = [NameComponent];