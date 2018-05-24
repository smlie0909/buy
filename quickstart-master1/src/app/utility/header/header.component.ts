import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../service/http.service'
@Component({
    selector: 'storeHeader',
    templateUrl:'./header.component.html'
})

export class HeaderComponent implements OnInit {
    isUserLogin:boolean=false;
    userName:string="";
    constructor(private myHttpService:MyHttpService) { }

    ngOnInit() {
        this.myHttpService
        .sendRequest('http://127.0.0.1/admin/data/user/session_data.php')
        .subscribe((result:any)=>{
            console.log(result);
            if(result.uname){
                this.isUserLogin=true;
                this.userName=result.uname;
            }else{
                this.isUserLogin=false;
                this.userName="";
            }
        });
     }
     logout(){
         this.myHttpService
         .sendRequest('http://127.0.0.1/admin/data/user/logout.php')
         .subscribe((result:any)=>{
             console.log(result);
             if(result.code==200){
                 this.isUserLogin=false;
                 this.userName="";
             }
         });
     }
}