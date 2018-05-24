import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../utility/service/http.service';
import {Router} from '@angular/router';
@Component({
    selector: 'storeCart',
    templateUrl:'./cart.component.html',
    styleUrls:['assets/css/cart.css']
})

export class CartComponent implements OnInit {
    list:Array<any>=[];
    isAllSelected:boolean=false;
    constructor(private myHttpService:MyHttpService,
                private myRouter:Router
    ) { }

    ngOnInit() {
        this.myHttpService
        .sendRequest('http://127.0.0.1/admin/data/cart/list.php')
        .subscribe((result:any)=>{
            console.log(result);
            this.list=result.data;
            for(var i=0;i<this.list.length;i++){
                this.list[i].isSelected=false;
            }
        });
     }
     selectAll(){
         for(var i=0;i<this.list.length;i++){
             this.list[i].isSelected=this.isAllSelected;
         }
     }
     selectOne(){
         let result:boolean=true;
         for(var i=0;i<this.list.length;i++){
            result = this.list[i].isSelected && result
         }
         this.isAllSelected=result;
     }
     jumpToOrderConfirm(){
        this.myRouter.navigateByUrl('/orderConfirm');
     }
     modifyProductCount(isAdd:boolean,index:number){
        if(isAdd){
            this.list[index].count++;
        }else{
            if(this.list[index].count==1){
                return;
            }
            this.list[index].count--;
        }
     }
}
