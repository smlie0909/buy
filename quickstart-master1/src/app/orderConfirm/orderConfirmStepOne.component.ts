import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'orderConfirmStepOne',
    templateUrl:'./orderConfirmStepOne.component.html',
    styleUrls:['assets/css/order_confirm.css']
})

export class orderConfirmStepOneComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }
    jump(){
        this.myRouter.navigateByUrl('/orderConfirm/step2');
    }
}