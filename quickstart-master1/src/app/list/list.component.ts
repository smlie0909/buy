import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../utility/service/http.service'
@Component({
    selector: 'storeList',
    templateUrl:'./list.component.html',
    styleUrls:['assets/css/products.css']
})

export class ListComponent implements OnInit {
    nowPage:number=1;
    pageCount:number=1;
    pageList:Array<any>=[];
    list:Array<any>=[];
    constructor(private myHttpService:MyHttpService) { }

    ngOnInit() {
        this.loadDate();
     }
     changePage(pageNo:number){
         this.nowPage=pageNo;
         this.loadDate();
     }
     modifyPage(isNext:boolean){
        if(isNext){
            if(this.nowPage==this.pageCount){
                return;
            }
            this.nowPage++;
        }else{
            if(this.nowPage==1){
                return;
            }
            this.nowPage--;
        }
        this.loadDate();
     }
     loadDate(){
        this.myHttpService
        .sendRequest('http://127.0.0.1/admin/data/product/list.php?pno='+this.nowPage)
        .subscribe((result:any)=>{
            console.log(result);
            this.list=result.data;
            this.pageCount=result.pageCount;
            this.pageList=[];
            for(var i=0;i<this.pageCount;i++){
                var page=i+1;
                this.pageList.push(page);
            }
        });
     }
}