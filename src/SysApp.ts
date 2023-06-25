import {JetApp,EmptyRouter} from "webix-jet";
import TopView from "./views/TopView";
import MenuView from "./views/MenuView";
import "./styles/system.css";

export default class SysApp extends JetApp{
    constructor(config:any){
        const sysConfig = {
            "webix" : webix,
            debug: true,
            start : "/system", 
            router : EmptyRouter,
            animation : true,
            views: {
                "system":TopView,
                "menu" : MenuView
            }
        };
        super({...sysConfig,...config});
    }

}

webix.ready(() => {
    webix.CustomScroll.init();
    webix.i18n.setLocale("zh-CN");
    new SysApp({}).render();
  })
