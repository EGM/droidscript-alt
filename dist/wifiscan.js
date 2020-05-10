import { alt } from "./index";
//Wifi scanning object.
export function _WifiScan(title1 = "Scanning", title2 = "Select WiFi", callback, options = "", extra) {
    // eslint-disable-next-line
    const self = this;
    const 
    // ctrl = null,
    onSelect = callback;
    let dlgScan, dlgLst, tScan, tProg, prog = 0, name = "", address = "", filter = null;
    let list = "";
    this.Select = function (filt) {
        alt.setDebugEnabled(false);
        filter = filt;
        list = "";
        //Get options and default params.
        if (options) {
            options = options.toLowerCase();
        }
        else {
            options = "";
        }
        //Create dialog window and layout.
        const ops = /force/i.test(options) ? "NoCancel" : "AutoCancel";
        dlgScan = alt.createDialog(title1, ops).setOnCancel(self.OnCancel);
        const lay = alt.createLayout("Linear", "vertical,fillxy");
        //lay.SetPadding( 0.04, 0.02, 0.04, 0.02 );
        //Create list.
        dlgLst = alt.createList("", 0.7, 0.5);
        dlgLst.SetMargins(0.04, 0.02, 0.04, 0.02);
        if (options.indexOf("large") > -1) {
            dlgLst.SetTextMargins(0, 0.02, 0, 0.02);
        }
        dlgLst.SetOnTouch(self.OnChoose);
        lay.addChild(dlgLst);
        //Add dialog layout and show dialog.
        dlgScan.addLayout(lay);
        dlgScan.show();
        //Start scanning.
        alt.wifiScan(this.OnDevice);
        //tScan = setTimeout( StopScan, 30000 );
        tProg = setInterval(this.ShowProgress, 500);
        alt.setDebugEnabled(true);
    };
    this.OnDevice = function (ssids) {
        alt.setDebugEnabled(false);
        if (extra) {
            const ext = extra.split("|");
            for (let i = 0; i < ext.length; i++) {
                dlgLst.AddItem(ext[i]);
            }
        }
        ssids = ssids.split("|");
        for (const ssid in ssids) {
            const id = ssids[ssid];
            if (filter == null || id.indexOf(filter) > -1) {
                if (list.indexOf(id) < 0) {
                    dlgLst.AddItem(id);
                    list += id + "|";
                }
            }
        }
        clearInterval(tProg);
        dlgScan.setTitle(title2);
        alt.setDebugEnabled(true);
    };
    this.ShowProgress = function () {
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
    this.OnChoose = function (title, body) {
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
    this.OnCancel = function () {
        clearTimeout(tScan);
        clearInterval(tProg);
        dlgScan.dismiss();
    };
}
