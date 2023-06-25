import { JetView } from "webix-jet";
import MenuView from "./MenuView";
export default class TopView extends JetView {
    config(){
        return {
            rows: [
              {
                view: "toolbar",
                padding: 6,
                elements: [
                  {
                    view: "icon",
                    icon: "mdi mdi-menu"
                  },
                  { view: "label", label: "Demo" },
                  {},
                  { view: "icon", icon: "mdi mdi-comment", badge: 4 },
                  { view: "icon", icon: "mdi mdi-bell", badge: 10 },
                ],
              },
              MenuView
            ],
          };
    }
}