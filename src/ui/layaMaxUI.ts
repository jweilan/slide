/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui {
    export class MainUI extends Scene {
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("Main");
        }
    }
    export class SwiperItemUI extends View {
		public contextLb:Laya.Label;
		public nameLb:Laya.Label;
        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"compId":2,"child":[{"type":"Box","props":{"y":264,"x":80},"compId":6,"child":[{"type":"Rect","props":{"width":605,"lineWidth":1,"height":853,"fillColor":"#e04343"},"compId":5}],"components":[]},{"type":"Label","props":{"y":435,"x":103.5,"wordWrap":true,"width":543,"var":"contextLb","text":"测试","height":338,"fontSize":30,"color":"#f4f3f3","align":"center"},"compId":3},{"type":"Image","props":{"y":867,"x":80,"skin":"comp/image.png"},"compId":4},{"type":"Label","props":{"y":1054,"x":305,"width":349,"var":"nameLb","text":"----jwei","height":30,"fontSize":30,"color":"#f1f1f1","align":"right"},"compId":7}],"loadList":["comp/image.png"],"loadList3D":[],"components":[]};
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.createView(SwiperItemUI.uiView);
        }
    }
}