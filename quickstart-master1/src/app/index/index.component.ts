import { Component, OnInit } from '@angular/core';
import {MyHttpService} from '../utility/service/http.service'
@Component({
    selector: 'storeIndex',
    templateUrl:'./index.component.html',
    styleUrls:['assets/css/animate.css','assets/css/item_cat.css','assets/css/slide.css']
})

export class IndexComponent implements OnInit {
    carouselItems:Array<any>=[];
    recommendedItems:Array<any>=[];

    //图片之间轮播的间隔时间
    private NextPhotoInterval: number = 1000;
    //是否要禁用循环播放
    private noLoopSlides: boolean = false;
    //Photos
    private slides: Array<any> = [];
    constructor(private myHttpService:MyHttpService) { }

    ngOnInit() {
        this.myHttpService
        .sendRequest('http://127.0.0.1/admin/data/product/index.php')
        .subscribe((result:any)=>{
            console.log(result);
            this.carouselItems=result.carouselItems;
            this.recommendedItems=result.recommendedItems;
            for(var i=0;i<this.carouselItems.length;i++){
                var imgUrl = this.carouselItems[i].img;
                this.slides.push({image:imgUrl});
            }
            
            console.log(this.slides);
        })
     }
     loadproduct(){
         
     }
}