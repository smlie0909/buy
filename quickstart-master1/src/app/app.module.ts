import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule} from './app.router'

import { MyHttpService } from './utility/service/http.service'


import { AppComponent }  from './app.component';

import {HeaderComponent} from './utility/header/header.component';
import {FooterComponent} from './utility/footer/footer.component';
import {IndexComponent} from './index/index.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ListComponent} from './list/list.component';
import {DetailComponent} from './detail/detail.component';
import {OrderConfirmComponent} from './orderConfirm/orderConfirm.component';
import {UserCenterComponent} from './userCenter/userCenter.component';
import {NotFoundComponent} from './utility/notfound/notfound.component';
import {CartComponent} from './cart/cart.component';
import {Carousel} from './utility/carousel/carousel.component'
import {Slide} from './utility/carousel/slide.component'
import {orderConfirmStepTwoComponent} from './orderConfirm/orderConfirmStepTwo.Component'
import {orderConfirmStepOneComponent} from './orderConfirm/orderConfirmStepOne.Component'
import {orderConfirmStepThreeComponent} from './orderConfirm/orderConfirmStepThree.Component'
@NgModule({
  imports:      [  BrowserModule,AppRoutingModule,HttpModule,FormsModule ],
  declarations: [ AppComponent ,
  Carousel,Slide,
    HeaderComponent,FooterComponent,IndexComponent,
    LoginComponent,RegisterComponent,ListComponent,DetailComponent,
    CartComponent,OrderConfirmComponent,UserCenterComponent,
    NotFoundComponent,orderConfirmStepTwoComponent,orderConfirmStepOneComponent,
    orderConfirmStepThreeComponent
  ],
  bootstrap:    [ AppComponent ],
  //依赖服务
  providers:    [ MyHttpService  ]
})
export class AppModule { }
