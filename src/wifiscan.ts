import { alt } from "./index";
import List from "./list";
import Dialog from "./dialog";

//Wifi scanning object.
/*
export class WiFiScan {
    private idProg: number;
    private dlgList: List;
    private dlgScan: Dialog;
    private extra: string;
    private filter: string;
    private list: string;
    private options: string;
    private self;
    private title1: string;
    private title2: string;
    constructor(
        title1 = "Scanning",
        title2 = "Select WiFi",
        callback: Function,
        options = "",
        extra?: string
    ) {
        this.extra = extra;
        this.options = options;
        this.self = this;
        this.title1 = title1;
        this.title2 = title2;
    }
    select(filter: string): void {
        alt.setDebugEnabled(false);
        this.filter = filter;
        this.list = "";

        //Create dialog window and layout.
        const ops = /force/i.test(this.options) ? "NoCancel" : "AutoCancel";
        this.dlgScan = alt
            .createDialog(this.title1, ops)
            .setOnCancel(this.self.OnCancel);
        const layout = alt.createLayout("Linear", "vertical,fillxy");

        //Create list.
        this.dlgList = alt
            .createList("", 0.7, 0.5)
            .setMargins(0.04, 0.02, 0.04, 0.02);
        if (/large/i.test(this.options)) {
            this.dlgList.setTextMargins(0, 0.02, 0, 0.02);
        }
        this.dlgList.setOnTouch(this.self.OnChoose);
        layout.addChild(this.dlgList);

        //Add dialog layout and show dialog.
        this.dlgScan.addLayout(layout);
        this.dlgScan.show();

        //Start scanning.
        alt.wifiScan(this.onDevice);

        //tScan = setTimeout( StopScan, 30000 );
        this.idProg = window.setInterval(this.showProgress, 500);

        alt.setDebugEnabled(true);
    }

    onDevice(ssids): void {
        alt.setDebugEnabled(false);

        if (this.extra) {
            const ext = this.extra.split("|");
            for (let i = 0; i < ext.length; i++) {
                this.dlgList.addItem(ext[i]);
            }
        }

        ssids = ssids.split("|");
        for (const ssid in ssids) {
            const id = ssids[ssid];
            if (this.filter == null || id.indexOf(this.filter) > -1) {
                if (this.list.indexOf(id) < 0) {
                    this.dlgList.addItem(id);
                    this.list += id + "|";
                }
            }
        }

        clearInterval(this.idProg);
        this.dlgScan.setTitle(this.title2);
        alt.setDebugEnabled(true);
    };

    showProgress(): void {
        alt.setDebugEnabled(false);
        let dots = "";
        for (let i = 0; i < prog; i++) {
            dots += ".";
        }
        if (prog++ === 5) {
            prog = 0;
        }
        this.dlgScan.setTitle(this.title1 + dots);
        alt.setDebugEnabled(true);
    };

    onChoose(title, body): void {
        alt.setDebugEnabled(false);

        address = body;
        WiFiScan.name = title;
        clearTimeout(tScan);

        if (this.onSelect) {
            onSelect(WiFiScan.name, address);
        }
        this.dlgScan.dismiss();
        alt.setDebugEnabled(true);
    };

    onCancel(): void {
        clearTimeout(tScan);
        clearInterval(tProg);
        this.dlgScan.dismiss();
    };


}*/


export function _WifiScan(
    title1 = "Scanning",
    title2 = "Select WiFi",
    callback: Function,
    options = "",
    extra?: string
): void {
    // eslint-disable-next-line
    const self = this;
    const
        // ctrl = null,
        onSelect = callback;
    let dlgScan: Dialog,
        dlgList,
        tScan,
        tProg,
        prog = 0,
        name = "",
        address = "",
        filter = null;
    let list = "";

    this.Select = function (filt): void {
        alt.setDebugEnabled(false);
        filter = filt;
        list = "";

        //Get options and default params.
        if (options) {
            options = options.toLowerCase();
        } else {
            options = "";
        }

        //Create dialog window and layout.
        const ops = /force/i.test(options) ? "NoCancel" : "AutoCancel";
        dlgScan = alt.createDialog(title1, ops).setOnCancel(self.OnCancel);
        const lay = alt.createLayout("Linear", "vertical,fillxy");
        //lay.SetPadding( 0.04, 0.02, 0.04, 0.02 );

        //Create list.
        dlgList = alt.createList("", 0.7, 0.5);
        dlgList.SetMargins(0.04, 0.02, 0.04, 0.02);
        if (options.indexOf("large") > -1) {
            dlgList.SetTextMargins(0, 0.02, 0, 0.02);
        }
        dlgList.SetOnTouch(self.OnChoose);
        lay.addChild(dlgList);

        //Add dialog layout and show dialog.
        dlgScan.addLayout(lay);
        dlgScan.show();

        //Start scanning.
        alt.wifiScan(this.OnDevice);

        //tScan = setTimeout( StopScan, 30000 );
        tProg = setInterval(this.ShowProgress, 500);

        alt.setDebugEnabled(true);
    };

    this.OnDevice = function (ssids): void {
        alt.setDebugEnabled(false);

        if (extra) {
            const ext = extra.split("|");
            for (let i = 0; i < ext.length; i++) {
                dlgList.AddItem(ext[i]);
            }
        }

        ssids = ssids.split("|");
        for (const ssid in ssids) {
            const id = ssids[ssid];
            if (filter == null || id.indexOf(filter) > -1) {
                if (list.indexOf(id) < 0) {
                    dlgList.AddItem(id);
                    list += id + "|";
                }
            }
        }

        clearInterval(tProg);
        dlgScan.setTitle(title2);
        alt.setDebugEnabled(true);
    };

    this.ShowProgress = function (): void {
        alt.setDebugEnabled(false);
        let dots = "";
        for (let i = 0; i < prog; i++) {
            dots += ".";
        }
        if (prog++ === 5) {
            prog = 0;
        }
        dlgScan.setTitle(title1 + dots);
        alt.setDebugEnabled(true);
    };

    this.OnChoose = function (title, body): void {
        alt.setDebugEnabled(false);

        address = body;
        name = title;
        clearTimeout(tScan);

        if (onSelect) {
            onSelect(name, address);
        }
        dlgScan.dismiss();
        alt.setDebugEnabled(true);
    };

    this.OnCancel = function (): void {
        clearTimeout(tScan);
        clearInterval(tProg);
        dlgScan.dismiss();
    };
}
