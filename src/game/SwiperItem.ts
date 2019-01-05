import { ui } from "../ui/layaMaxUI";
import ConfigData from "./ConfigData";

export default class SwiperItem extends ui.SwiperItemUI{
    constructor(){
        super();
        this.initData();
    }
    initData(){
        ConfigData.currNum++;
        if(ConfigData.currNum>=ConfigData.data.length)ConfigData.currNum=0;

        var obj= ConfigData.data[ConfigData.currNum];
        this.contextLb.text= obj.context;
        this.nameLb.text = obj.name;

    }
}