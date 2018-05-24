import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
    selector: 'orderConfirmStepTwo',
    templateUrl:'./orderConfirmStepTwo.component.html',
    styleUrls:['assets/css/payment.css']
})

export class orderConfirmStepTwoComponent implements OnInit {
    constructor(private myRouter:Router) { }

    ngOnInit() { }
    jump(){
        this.myRouter.navigateByUrl('/orderConfirm/step3');
    }
}