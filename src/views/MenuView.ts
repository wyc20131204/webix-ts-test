import { JetView,plugins } from "webix-jet";
import { menuRecords } from "../models/MenuModel";

export default class MenuView extends JetView {
    config(){
        return {
            type:"clean",
            cols: [
              {
                view: "sidebar",
                localId: "system:sidebar",
                scroll: "y",
                data: menuRecords
              },
              { $subview: true }
            ]
          }
    }
    init() {
        this.use(plugins.Menu, {
          id: "system:sidebar",
          urls: {
            system_1: "/system/test",
            "zj_3" : "/system/crud",
          },
        });
    }
}
