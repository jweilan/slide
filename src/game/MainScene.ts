import { ui } from "../ui/layaMaxUI";
import SwiperItem from "./SwiperItem";

export default class MainScene extends ui.MainUI{
    private startPonint:Laya.Point;
    private endPoint:Laya.Point;
    private slideJuli:number = 100;

    private swiperList:Array<SwiperItem> =[];
    constructor(){
        super()
        this.initEvent();
        
    }
    onEnable():void{
        this.addSwiperItem(1334,500);
    }
    initEvent():void{
        this.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown);
        this.on(Laya.Event.MOUSE_MOVE,this,this.onMouseMove);
        this.on(Laya.Event.MOUSE_UP,this,this.onMouseUp);
    }
    private onMouseDown():void{
        this.startPonint = new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY);
     
    }
    private onMouseMove():void{

    }
    private onMouseUp():void{
        this.endPoint = new Laya.Point(Laya.stage.mouseX,Laya.stage.mouseY);
        var distance:number = this.endPoint.y-this.startPonint.y;
        var distanceX:number = this.endPoint.x-this.startPonint.x;
        
        if(distance<-this.slideJuli){//上滑
            this.slideType("next")
        }else if(distance>this.slideJuli){//下滑
            this.slideType("last")
        }else if(distanceX<-this.slideJuli){
            this.slideType("left")
        }else if(distanceX>this.slideJuli){
            this.slideType("right")
        }
    }
    private slideType(type:String):void{
        switch(type){
            case "next":
                this.removeCurrSwiperItem(-1334,0,500);
                this.addSwiperItem(1334,0,500);
                break;
            case "last":
                this.removeCurrSwiperItem(1334,0,500);
                this.addSwiperItem(-1334,0,500);
                break;
            case "left":
                this.removeCurrSwiperItem(0,-750,500);
                this.addSwiperItem(-0,750,500);
                break;
            case "right":
                this.removeCurrSwiperItem(0,750,500);
                this.addSwiperItem(0,-750,500);
                break;
        }
    }


    private addSwiperItem(movey:number=0,moveX:number=0,time:number=0):void{
        var item:SwiperItem = new SwiperItem();
            item.pos(moveX,movey);
        this.swiperList.push(item);
        this.addChild(item);
        Laya.Tween.to(item,{
            y:0,
            x:0,
        },time,null);
    }
    private removeCurrSwiperItem(movey:number,moveX:number,time:number):void{
        var item:SwiperItem = this.swiperList.pop();
        Laya.Tween.to(item,{
            y:movey,
            x:moveX,
        },time,null,Laya.Handler.create(this,this.removeSwiper,[item]));
    }
    private removeSwiper(item:SwiperItem):void{
        this.removeChild(item);
    }

}