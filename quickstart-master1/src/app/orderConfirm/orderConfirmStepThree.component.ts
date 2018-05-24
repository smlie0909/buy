import { Component, OnInit,OnDestroy } from '@angular/core';
import {Router} from '@angular/router'
@Component({
    selector: 'orderConfirmStepThree',
    templateUrl:'./orderConfirmStepThree.component.html'
})

export class orderConfirmStepThreeComponent implements OnInit,OnDestroy {
    count:number=5;
    myTimer:any;
    constructor(private myRouter:Router) { }

    ngOnInit() {
        this.myTimer=setInterval(()=>{
            this.count--;
            if(this.count==0){
                // clearInterval(this.myTimer);
                // this.myTimer=null;
                this.myRouter.navigateByUrl('/index');
            }
        },1000);
     }
     ngOnDestroy(){
         if(this.myTimer){
             clearInterval(this.myTimer);
                this.myTimer=null;
         }
     }
}