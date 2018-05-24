import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/http.service';
import { Router } from '@angular/router'
@Component({
    selector: 'storeLogin',
    templateUrl:"./login.component.html",
    styleUrls:['assets/css/login.css']
})

export class LoginComponent implements OnInit {
    userName:string="";
    userPwd:string="";
    constructor(private myHttpService:MyHttpService,
                private myRouter:Router
    ) { }
    ngOnInit() {
        
     }
     login(){
         console.log(this.userName,this.userPwd)
        this.myHttpService.
        sendRequest('http://127.0.0.1/admin/data/user/login.php?uname='+this.userName+"&upwd="+this.userPwd)
        .subscribe((result:any)=>{
            console.log(result);
            if(result.code==200){
                this.myRouter.navigateByUrl('');
            }
            
        })
     }
}