import { alt } from "./index";
let curTabName = null;
let lst;
let opts;
let wdth;
// eslint-disable-next-line
function _Tabs_OnTouch(ev) {
    if (ev.action === "Down") {
        alt.setDebugEnabled(false);
        const text = ev.source;
        text.data.tabs.showTab(text.getText());
        alt.setDebugEnabled(true);
    }
}
export class Tabs {
    constructor(list, width, height, options) {
        lst = list.split(",");
        wdth = width;
        opts = options;
        alt.setDebugEnabled(false);
        //Create main layout.
        this.lay = alt.createLayout("Linear", "Vertical");
        this.lay.setBackColor("#ff303030");
        this.lay.setSize(width, height);
        this.onChange = null;
        this.lay._parent = this;
        //Create top (tab strip) layout.
        this.layTop = alt.createLayout("Linear", "Horizontal");
        this.layTop.setBackColor("#ff000000");
        this.lay.addChild(this.layTop);
        //Create body layout.
        this.layBody = alt.createLayout("Frame", "");
        this.layBody.setSize(width, height - 0.1);
        this.lay.addChild(this.layBody);
        // Add tabs.
        lst.forEach(function (name) {
            this.addTab(name);
        });
        // Set default tab.
        this.showTab(lst[0]);
        //Re-enable debug.
        alt.setDebugEnabled(true);
    }
    addTab(name) {
        alt.setDebugEnabled(false);
        const layTab = alt.createLayout("Linear", "Vertical,VCenter");
        layTab.setMargins(0, 0, 0.002, 0);
        layTab.setSize(wdth / lst.length, 0.1);
        const txtTab = alt.createText(name, wdth / lst.length, 0.1, "FillXY,Bold");
        txtTab.setBackground("/Sys/Img/Tab.png");
        txtTab.setPadding(0, 0.03, 0, 0);
        txtTab.setOnTouch(_Tabs_OnTouch);
        txtTab.data.tabs = this;
        layTab.addChild(txtTab);
        this.layTop.addChild(layTab);
        //Save array of tab info.
        this.tabs[name] = { txt: txtTab, content: null };
        //Add tab content layout to body.
        this.tabs[name].content = alt.createLayout("Linear", "fillxy" + opts);
        this.layBody.addChild(this.tabs[name].content);
        alt.setDebugEnabled(true);
    }
    getLayout(name) {
        return this.tabs[name].content;
    }
    getType() {
        return "Tabs";
    }
    setOnChange(callback) {
        this.onChange = callback;
    }
    showTab(name) {
        // Drop out if no change.
        if (name === curTabName) {
            alt.setDebugEnabled(true);
            return;
        }
        // Get tab info.
        curTabName = name;
        const tab = this.tabs[name];
        if (!tab) {
            alt.setDebugEnabled(true);
            return;
        }
        // Clear all tab selections.
        this.tabs.forEach(function (t) {
            t.txt.setBackground("/Sys/Img/Tab.png");
            t.content.setVisibility("Hide");
        });
        // Select chosen tab.
        tab.txt.SetBackground("/Sys/Img/TabHi.png");
        tab.content.SetVisibility("Show");
        alt.setDebugEnabled(true);
        // Fire callback if set.
        if (this.onChange) {
            this.onChange(name);
        }
    }
}
