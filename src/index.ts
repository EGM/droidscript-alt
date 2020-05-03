import Adv from "./adv";
import Aud from "./aud";
import Btl from "./btl";
import Btn from "./btn";
import Bts from "./bts";
import Cam from "./cam";
import Cde from "./cde";
import Chk from "./chk";
import Cld from "./cld";
import Crp from "./crp";
import Dlg from "./dlg";
import Dwn from "./dwn";
import EMAIL from "./email";
import Fil from "./fil";
import Img from "./img";
import Lay from "./lay";
import Ldg from "./ldg";
import Loc from "./loc";
import Lst from "./lst";
import Med from "./med";
import Net from "./net";
import Not from "./not";
import Ovl from "./ovl";
import Ply from "./ply";
import Pst from "./pst";
import Rec from "./rec";
import Scr from "./scr";
import Skb from "./skb";
import SMS from "./sms";
import Sns from "./sns";
import Spn from "./spn";
import Spr from "./spr";
import Svc from "./svc";
import Syn from "./syn";
import Sys from "./sys";
import Thm from "./thm";
import Tgl from "./tgl";
import Txe from "./txe";
import Txt from "./txt";
import Usb from "./usb";
import Vid from "./vid";
import Wbs from "./wbs";
import Web from "./web";
import Wpr from "./wpr";
import Ynd from "./ynd";
import Zip from "./zip";
import DSObject from "./dsobject";
import Component from "./component";
import { sqlitePlugin } from "./sql";
//import { cordova } from "./cp";

// Types
export type ActivityType = { labelName; packageName; className };
export type BTDeviceType = { name; address };
export type InstalledAppType = {
  packageName;
  className;
  uid;
  targetSdkVersion;
  dataDir;
  sourceDir;
  publicSourceDir;
  nativeLibraryDir;
};
export type IntentType = { action; type; data; flags; extras };
export type LayoutType = "Linear" | "Absolute" | "Frame" | "Card";
/** "TouchThrough" | "TouchSpy" | "Left" | "Top" | "Right" | "Bottom" | "Center" | "H/VCenter" | "Wrap" | "Horizontal" | "Vertical" | "FillX/Y" */
export type LayoutOptionsType = string;
export type MemoryInfoType = { avail; low; threshold; total };
export type RunningAppType = { user; pid; name; foreground };
export type SideType = "Left" | "Right";

// eslint-disable-next-line
export namespace alt {
  export const addAdView = function (
    lay: Lay,
    unitId: string,
    testId: string,
    width?: number,
    height?: number,
    options?: string
  ): Adv {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddAdView(\f${unitId}\f${testId}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Adv(ret);
    } else {
      return null;
    }
  };

  export const addButton = function (
    lay: Lay,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Btn {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddButton(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Btn(ret);
    } else {
      return null;
    }
  };

  export const addCameraView = function (
    lay: Lay,
    width?: number,
    height?: number,
    options?: string
  ): Cam {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddCameraView(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Cam(ret);
    } else {
      return null;
    }
  };

  export const addCheckBox = function (
    lay: Lay,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Chk {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddCheckBox(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Chk(ret);
    } else {
      return null;
    }
  };

  export const addCodeEdit = function (
    lay: Lay,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Cde {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddCodeEdit(\f${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Cde(ret);
    } else {
      return null;
    }
  };

  export const addDrawer = function (
    layout: Lay,
    side: SideType,
    width?: number,
    grabWidth?: number
  ): void {
    prompt(
      "#",
      `App.AddDrawer(\f${layout.id}\f${side}\f${width}\f${grabWidth}`
    );
  };

  export const addImage = function (
    lay: Lay,
    file?: string,
    width?: number,
    height?: number,
    options?: string,
    w?: number,
    h?: number
  ): Img {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddImage(${file}\f${width}\f${height}\f${options}\f${w}\f${h}`
    );
    if (ret) {
      return new Img(ret);
    } else {
      return null;
    }
  };

  export const addLayout = function (
    layout: Lay,
    type?: string,
    options?: string
  ): Lay {
    if (!type) {
      prompt("#", `App.AddLayout(${layout.id}`);
    } else {
      const ret = prompt(
        layout ? layout.id : null,
        `App.AddLayout(${type}\f${options}`
      );
      if (ret) {
        return new Lay(ret);
      } else {
        return null;
      }
    }
  };

  export const addList = function (
    lay: Lay,
    list?: string,
    width?: number,
    height?: number,
    options?: number,
    delim?: string
  ): Lst {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddList(\f${list}\f${width}\f${height}\f${options}\f${delim}`
    );
    if (ret) {
      return new Lst(ret);
    } else {
      return null;
    }
  };

  export const addScroller = function (
    lay: Lay,
    width?: number,
    height?: number,
    options?: string
  ): Scr {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddScroller(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Scr(ret);
    } else {
      return null;
    }
  };

  export const addSeekBar = function (
    lay: Lay,
    width?: number,
    height?: number,
    options?: string
  ): Skb {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddSeekBar(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Skb(ret);
    } else {
      return null;
    }
  };

  export const addSpinner = function (
    lay: Lay,
    list?: string,
    width?: number,
    height?: number,
    options?: string
  ): Spn {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddSpinner(${list}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Spn(ret);
    } else {
      return null;
    }
  };

  export const addText = function (
    lay: Lay,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Txt {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddText(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Txt(ret);
    } else {
      return null;
    }
  };

  export const addTextEdit = function (
    lay: Lay,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Txe {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddTextEdit(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Txe(ret);
    } else {
      return null;
    }
  };

  export const addToggle = function (
    lay: Lay,
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Tgl {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddToggle(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Tgl(ret);
    } else {
      return null;
    }
  };

  export const addVideoView = function (
    lay: Lay,
    width?: number,
    height?: number,
    options?: number
  ): Vid {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddVideoView(\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Vid(ret);
    } else {
      return null;
    }
  };

  export const addWebView = function (
    lay: Lay,
    width?: number,
    height?: number,
    options?: string,
    zoom?: number
  ): Web {
    const ret = prompt(
      lay ? lay.id : null,
      `App.AddWeb(\f${width}\f${height}\f${options}\f${zoom}`
    );
    if (ret) {
      return new Web(ret);
    } else {
      return null;
    }
  };

  export const alert = function (
    message?: string,
    title?: string,
    options?: string,
    hue?: number
  ): void {
    prompt("#", `App.Alert(\f${message}\f${title}\f${options}\f${hue}`);
  };

  export const animate = function (callback: Function, fps = 30): void {
    _cbAnimate = callback;
    // eslint-disable-next-line
    _anim_t = new Date().getTime();
    if (_isV8) {
      _fps = fps;
      if (_cbAnimate) {
        _tmAnimate = setInterval(_animatev8, 1000 / _fps);
      } else if (_tmAnimate) {
        clearInterval(_tmAnimate);
      }
    } else {
      window._fps = fps;
      requestAnimationFrame(_animate);
    }
  };

  export const broadcast = function (type: string, message: string): void {
    prompt("#", `App.Broadcast(${type}\f${message}`);
  };

  export const broadcastIntent = function (
    action,
    category,
    data,
    type,
    extras,
    options
  ): void {
    prompt(
      "#",
      `App.BroadcastIntent(\f${action}\f${category}\f${data}\f${type}\f${extras}\f${options}`
    );
  };

  export const call = function (number: string): void {
    prompt("#", `App.Call(\f${number}`);
  };

  export const checkLicense = function (key: string): void {
    prompt("#", `App.CheckLicense(\f${key}`);
  };

  export const checkPermission = function (type: string): string {
    return prompt("#", `App.CheckPermission(\f${type}`);
  };

  export const chooseAccount = function (callback: Function): void {
    prompt("#", `App.ChooseAccount(\f${_Cbm(callback)}`);
  };

  export const chooseContact = function (
    type: string,
    callback: Function
  ): void {
    prompt("#", `App.ChooseContact(\f${type}\f${_Cbm(callback)}`);
  };

  export const chooseFile = function (
    message?: string,
    type?: string,
    callback?: Function,
    folder?: string
  ): void {
    prompt(
      "#",
      `App.ChooseFile(\f${message}\f${type}\f${_Cbm(callback)}\f${folder}`
    );
  };

  export const chooseImage = function (
    options?: string,
    callback?: Function
  ): void {
    prompt("#", `App.ChooseImage(\f${options}\f${_Cbm(callback)}`);
  };

  /*
																											function chooseWifi(title1, title2, callback, options, extra) {
																												var wifi = new _WifiScan(title1, title2, callback, options, extra);
																												wifi.Select();
																											}
																										*/

  export const clearCookies = function (session?: string): void {
    prompt("#", `App.ClearCookies(\f${session}`);
  };

  export const clearData = function (file?: string): void {
    prompt("#", `App.ClearData(\f${file}`);
  };

  export const clearValue = function (name: string, file?: string): void {
    prompt("#", `App.ClearValue(\f${name}\f${file}`);
  };

  export const closeDrawer = function (side: SideType): void {
    prompt("#", `App.CloseDrawer(\f${side}`);
  };

  export const copyFile = function (src: string, dest: string): void {
    prompt("#", `App.CopyFile(${src}\f${dest}`);
  };

  export const copyFolder = function (
    src: string,
    dest: string,
    overwrite?: boolean,
    filter?: string
  ): void {
    prompt("#", `App.CopyFolder(\f${src}\f${dest}\f${overwrite}\f${filter}`);
  };

  export const createAdView = function (
    unitId: string,
    testId: string,
    width?: string,
    height?: string,
    options?: string
  ): Adv {
    const ret = prompt(
      "#",
      `App.CreateAdView(\f#${unitId}\f${testId}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Adv(ret);
    } else {
      return null;
    }
  };

  export const createAudioRecorder = function (): Rec {
    if (_rec) {
      _rec.Release();
    }
    const ret = prompt("#", `App.CreateAudioRecorder(`);
    if (ret) {
      _rec = new Rec(ret);
    } else {
      _rec = null;
      return _rec;
    }
  };

  export const createBluetoothList = function (filter?: string): Btl {
    if (_btl) {
      _btl.Release();
    }
    const ret = prompt("#", `App.CreateBluetoothList(${filter}`);
    if (ret) {
      _btl = new Btl(ret);
    } else {
      _btl = null;
      return _btl;
    }
  };

  export const createBluetoothSerial = function (mode: string): Bts {
    const ret = prompt("#", `App.CreateBluetoothSerial(\f${mode}`);
    if (ret) {
      return new Bts(ret);
    } else {
      return null;
    }
  };

  export const createButton = function (
    text?: string,
    width?: string,
    height?: string,
    options?: string
  ): Btn {
    const ret = prompt(
      "#",
      `App.CreateButton(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Btn(ret);
    } else {
      return null;
    }
  };

  export const createCameraView = function (
    width?: number,
    height?: number,
    options?: string
  ): Cam {
    const ret = prompt(
      "#",
      `App.CreateCameraView(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Cam(ret);
    } else {
      return null;
    }
  };

  export const createCheckBox = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Chk {
    const ret = prompt(
      "#",
      `App.CreateCheckBox(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Chk(ret);
    } else {
      return null;
    }
  };

  /*X*/
  export const createCloudStore = function (apiKey: string): Cld {
    const ret = prompt("#", `App.CreateCloudStore(\f${apiKey}`);
    if (ret) {
      return new Cld(ret);
    } else {
      return null;
    }
  };

  export const createCodeEdit = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Cde {
    const ret = prompt(
      "#",
      `App.CreateCodeEdit(\f${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Cde(ret);
    } else {
      return null;
    }
  };

  export const createCrypt = function (options?: string): Crp {
    if (_crp) {
      _crp.Release();
    }
    const ret = prompt("#", `App.CreateCrypt(\f${options}`);
    if (ret) {
      _crp = new Crp(ret);
    } else {
      _crp = null;
    }
    return _crp;
  };

  export const createDebug = function (): void {
    prompt("#", `App.CreateDebug(`);
  };

  export const createDialog = function (title?: string, options?: string): Dlg {
    const ret = prompt("#", `App.CreateDialog(\f${title}\f${options}`);
    if (ret) {
      return new Dlg(ret);
    } else {
      return null;
    }
  };

  export const createDownloader = function (options?: string): Dwn {
    const ret = prompt("#", `App.CreateDownloader(\f${options}`);
    if (ret) {
      return new Dwn(ret);
    } else {
      return null;
    }
  };

  export const createEmail = function (
    account: string,
    password: string
  ): EMAIL {
    if (_eml) {
      _eml.Release();
    }
    const ret = prompt("#", `App.CreateEmail(${account}\f${password}`);
    if (ret) {
      _eml = new EMAIL(ret);
    } else {
      _eml = null;
    }
    return _eml;
  };

  export const createFile = function (file?: string, mode?: string): Fil {
    const ret = prompt("#", `App.CreateFile(\f${file}\f${mode}`);
    if (ret) {
      return new Fil(ret);
    } else {
      return null;
    }
  };

  /*~~~~~X*/
  /*
			function createGLView(width, height, options) {
				var glv = null;
				if (options.toLowerCase().indexOf("fast2d") > -1) {
					//_LoadScriptSync("/Sys/cp.js");
					_LoadScriptSync("/Sys/gl.js");
					glv = new GLV(prompt("#", `App.CreateGLView(\f${width}\f${height}\f${options}`));
					glv.canvas = FastCanvas.create();
					glv.ctx = glv.canvas.getContext("2d`);
																														  glv.width = Math.round(getDisplayWidth() * width);
					glv.height = Math.round(getDisplayHeight() * height);
					glv.aspect = glv.width / glv.height;
					glv.GetType = function () { return "GLView"; }
				}
				return glv;
			}

			function createGame(file, orient) { return new _Game(file, orient) }

			function createGameView(width, height, options) {
				if (options) options = options.toLowerCase(); else options = "";
				if (options.indexOf("gles") > -1) {
					var obj = prompt("#", `App.CreateGameView(\f${width}\f${height}\f${options}`);
					if (obj) return new WGL(obj); else return null;
				}
				else {
					var obj = createWebView(width, height, "gameview");
					obj.GetType = function () { return "GameView"; }
					obj.SetFrameRate = function (fps) { }
					obj.SetFile = function (file) { obj.LoadHtml(_WglTemplate(file), "") }
					return obj;
				}
			}
		*/
  /*~~~~~X*/

  export const createImage = function (
    file?: string,
    width?: number,
    height?: number,
    options?: string,
    w?: string,
    h?: string
  ): Img {
    const ret = prompt(
      "#",
      `App.CreateImage(${file}\f${width}\f${height}\f${options}\f${w}\f${h}`
    );
    if (ret) {
      return new Img(ret);
    } else {
      return null;
    }
  };

  export const createLayout = function (
    type: LayoutType,
    options?: LayoutOptionsType
  ): Lay {
    const ret = prompt("#", `App.CreateLayout(${type}\f${options}`);
    if (ret) {
      return new Lay(ret);
    } else {
      return null;
    }
  };

  export const createList = function (
    list?: string,
    width?: number,
    height?: number,
    options?: string,
    delim?: string
  ): Lst {
    const ret = prompt(
      "#",
      `App.CreateList(\f${list}\f${width}\f${height}\f${options}\f${delim}`
    );
    if (ret) {
      return new Lst(ret);
    } else {
      return null;
    }
  };

  export const createListDialog = function (
    title?: string,
    list?: string,
    options?: string
  ): Ldg {
    if (_ldg) {
      _ldg.Release();
    }
    const ret = prompt(
      "#",
      `App.CreateListDialog(\f${title}\f${list}\f${options}`
    );
    if (ret) {
      _ldg = new Ldg(ret);
    } else {
      _ldg = null;
    }
    return _ldg;
  };

  export const createLocator = function (type: string, options?: string): Loc {
    const ret = prompt("#", `App.CreateLocator(${type}\f${options}`);
    if (ret) {
      return new Loc(ret);
    } else {
      return null;
    }
  };

  export const createMediaPlayer = function (): Aud {
    const ret = prompt("#", `App.CreateMediaPlayer(`);
    if (ret) {
      return new Aud(ret);
    } else {
      return null;
    }
  };

  export const createMediaStore = function (): Med {
    const ret = prompt("#", `App.CreateMediaStore(`);
    if (ret) {
      return new Med(ret);
    } else {
      return null;
    }
  };

  export const createNetClient = function (type: string): Net {
    const ret = prompt("#", `App.CreateNetClient(${type}`);
    if (ret) {
      return new Net(ret);
    } else {
      return null;
    }
  };

  export const createNotification = function (options?: string): Not {
    const ret = prompt("#", `App.CreateNotification(\f${options}`);
    if (ret) {
      return new Not(ret);
    } else {
      return null;
    }
  };

  //	function createNxt() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }

  // function createNxtRemote() { var ret = prompt("#", `App.CreateNxtRemote(`); if (ret) return new Nxt(ret, null); else return null; }

  export const createObject = function (name: string, type: string): DSObject {
    if (!type) {
      try {
        return JSON.parse(`new ${name}()`);
      } catch (e) {
        return null;
      }
    } else {
      const ret = prompt("#", `_Obj(\f${type}\f${name}`);
      if (ret) {
        return new Component(ret);
      } else {
        return null;
      }
    }
  };

  export const createOverlay = function (options?: string): Ovl {
    const ret = prompt("#", `App.CreateOverlay(\f${options}`);
    if (ret) {
      return new Ovl(ret);
    } else {
      return null;
    }
  };

  export const createPhoneState = function (types: string): Pst {
    if (_pst) {
      _pst.Release();
    }
    const ret = prompt("#", `App.CreatePhoneState(\f${types}`);
    if (ret) {
      _pst = new Pst(ret);
    } else {
      _pst = null;
    }
    return _pst;
  };

  export const createPlayStore = function (): Ply {
    const ret = prompt("#", `App.CreatePlayStore(`);
    if (ret) {
      return new Ply(ret);
    } else {
      return null;
    }
  };

  export const createSMS = function (): SMS {
    if (_sms) {
      _sms.Release();
    }
    const ret = prompt("#", `App.CreateSMS(`);
    if (ret) {
      _sms = new SMS(ret);
    } else {
      _sms = null;
    }
    return _sms;
  };

  export const createScroller = function (
    width?: number,
    height?: number,
    options?: string
  ): Scr {
    const ret = prompt(
      "#",
      `App.CreateScroller(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Scr(ret);
    } else {
      return null;
    }
  };

  export const createSeekBar = function (
    width?: number,
    height?: number,
    options?: string
  ): Skb {
    const ret = prompt(
      "#",
      `App.CreateSeekBar(${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Skb(ret);
    } else {
      return null;
    }
  };

  export const createSensor = function (type: string, options?: string): Sns {
    const ret = prompt("#", `App.CreateSensor(${type}\f${options}`);
    if (ret) {
      return new Sns(ret);
    } else {
      return null;
    }
  };

  export const createService = function (
    packageName: string,
    className?: string,
    callback?: Function,
    options?: string
  ): Svc {
    const ret = prompt(
      "#",
      `App.CreateService(\f${packageName}\f${className}\f${options}\f${_Cbm(
        callback
      )}`
    );
    if (ret) {
      return new Svc(ret);
    } else {
      return null;
    }
  };

  export const createShortcut = function (
    name: string,
    iconFile: string,
    file: string,
    options?: string
  ): void {
    prompt(
      "#",
      `App.CreateShortcut(\f${name}\f${iconFile}\f${file}\f${options}`
    );
  };

  /*
											function createSmartWatch(type) {
												if (_smw) _smw.Release();
												const ret = prompt("#", `App.CreateSmartWatch(\f${type);
												if (ret) _smw = new SMW(ret);
												else _smw = null;
												return _smw;
											}
											*/

  export const createSpeechRec = function (options?: string): Spr {
    if (_spr) {
      _spr.Release();
    }
    const ret = prompt("#", `App.CreateSpeechRec(\f${options}`);
    if (ret) {
      _spr = new Spr(ret);
    } else {
      _spr = null;
    }
    return _spr;
  };

  export const createSpinner = function (list, width, height, options): Spn {
    const ret = prompt(
      "#",
      `App.CreateSpinner(${list}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Spn(ret);
    } else {
      return null;
    }
  };

  export const createSynth = function (type: string): Syn {
    const ret = prompt("#", `App.CreateSynth(${type}`);
    if (ret) {
      return new Syn(ret);
    } else {
      return null;
    }
  };

  export const createSysProc = function (
    cmd: string,
    env?: string,
    dir?: string,
    options?: string
  ): Sys {
    const ret = prompt(
      "#",
      `App.CreateSysProc(\f${cmd}\f${env}\f${dir}\f${options}`
    );
    if (ret) {
      return new Sys(ret);
    } else {
      return null;
    }
  };
  /*
											  function createTabs(list, width, height, options) {
												return new _Tabs(list, width, height, options);
											  }
											*/
  export const createText = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Txt {
    const ret = prompt(
      "#",
      `App.CreateText(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Txt(ret);
    } else {
      return null;
    }
  };

  export const createTextEdit = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Txe {
    const ret = prompt(
      "#",
      `App.CreateTextEdit(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Txe(ret);
    } else {
      return null;
    }
  };

  export const createTheme = function (baseTheme?: string): Thm {
    const ret = prompt("#", `App.CreateTheme(\f${baseTheme}`);
    if (ret) {
      return new Thm(ret);
    } else {
      return null;
    }
  };

  export const createToggle = function (
    text?: string,
    width?: number,
    height?: number,
    options?: string
  ): Tgl {
    const ret = prompt(
      "#",
      `App.CreateToggle(${text}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Tgl(ret);
    } else {
      return null;
    }
  };

  export const createUSBSerial = function (
    baudRate: number,
    dataBits: number,
    stopBits: number,
    parity: string,
    device: string
  ): Usb {
    const ret = prompt(
      "#",
      `App.CreateUSBSerial(\f${baudRate}\f${dataBits}\f${stopBits}\f${parity}\f${device}`
    );
    if (ret) {
      return new Usb(ret);
    } else {
      return null;
    }
  };

  export const createVideoView = function (
    width?: number,
    height?: number,
    options?: string
  ): Vid {
    const ret = prompt(
      "#",
      `App.CreateVideoView(\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Vid(ret);
    } else {
      return null;
    }
  };

  export const createWallpaper = function (options?: string): Wpr {
    if (_wpr) {
      _wpr.Release();
    }
    const ret = prompt("#", `App.CreateWallpaper(\f${options}`);
    if (ret) {
      _wpr = new Wpr(ret);
    } else {
      _wpr = null;
    }
    return _wpr;
  };

  export const createWebServer = function (
    port?: number,
    options?: number
  ): Wbs {
    const ret = prompt("#", `App.CreateWebServer(${port}\f${options}`);
    if (ret) {
      return new Wbs(ret);
    } else {
      return null;
    }
  };

  export const createWebSocket = function (
    id: string,
    ip: string,
    port: number,
    options: string
  ): DSObject {
    return new _WebSock(id, ip, port, options);
  };

  export const createWebView = function (
    width?: number,
    height?: number,
    options?: string,
    zoom?: number
  ): Web {
    const ret = prompt(
      "#",
      `App.CreateWeb(\f${width}\f${height}\f${options}\f${zoom}`
    );
    if (ret) {
      return new Web(ret);
    } else {
      return null;
    }
  };

  /*X*/
  /*
											  function createWizard(title, width, height, callback, options) { return new _Wizard(title, width, height, callback, options) }
											  */

  export const createYesNoDialog = function (
    message?: string,
    options?: string
  ): Ynd {
    if (_ynd) {
      _ynd.Release();
    }
    const ret = prompt("#", `App.CreateYesNoDialog(\f${message}\f${options}`);
    if (ret) {
      _ynd = new Ynd(ret);
    } else {
      _ynd = null;
    }
    return _ynd;
  };

  export const createZipUtil = function (mode?: string): Zip {
    const ret = prompt("#", `App.CreateZipUtil(\f${mode}`);
    if (ret) {
      return new Zip(ret);
    } else {
      return null;
    }
  };

  export const debug = function (message: string): void {
    prompt("#", `App.Debug(\f${message}`);
  };

  export const deleteDatabase = function (name: string): void {
    prompt("#", `App.DeleteDatabase(\f${name}`);
  };

  export const deleteFile = function (file: string): void {
    prompt("#", `App.DeleteFile(${file}`);
  };

  export const deleteFolder = function (folder: string): void {
    prompt("#", `App.DeleteFolder(${folder}`);
  };

  export const destroyLayout = function (layout: Lay): void {
    prompt("#", `App.DestroyLayout(${layout.id}`);
  };

  export const disableKeys = function (keyList: string): void {
    prompt("#", `App.DisableKeys(\f${keyList}`);
  };

  export const disableTouch = function (disable: boolean): void {
    prompt("#", `App.DisableTouch(\f${disable}`);
  };

  export const discoverBtDevices = function (
    filter: string,
    onFound: Function,
    onComplete: Function
  ): void {
    prompt(
      "#",
      `App.DiscoverBtDevices(\f${filter}\f${_Cbm(onFound)}\f${_Cbm(onComplete)}`
    );
  };

  export const downloadFile = function (
    src: string,
    dest: string,
    title?: string,
    desc?: string,
    options?: string
  ): void {
    prompt(
      "#",
      `App.DownloadFile(\f${src}\f${dest}\f${title}\f${desc}\f${options}`
    );
  };

  export const enableBackKey = function (enable: boolean): void {
    prompt("#", `App.EnableBackKey(${enable}`);
  };

  export const error = function (
    message: string,
    line: number,
    file: string,
    quit: boolean
  ): void {
    prompt("#", `App.Error(\f${message}\f${line}\f${file}\f${quit}`);
  };

  export const execute = function (js: string): void {
    prompt("#", `App.Execute(${js}`);
  };

  export const exit = function (kill: boolean): void {
    prompt("#", `App.Exit(${kill}`);
  };

  export const extExec = function (
    name: string,
    file: string,
    args: string,
    options?: string
  ): string | null {
    return prompt("#", `App.ExtExec(\f${name}\f${file}\f${args}\f${options}`);
  };

  export const extractAssets = function (
    src: string,
    dest: string,
    overwrite?: boolean,
    options?: string
  ): void {
    prompt(
      "#",
      `App.ExtractAssets(\f${src}\f${dest}\f${overwrite}\f${options}`
    );
  };

  export const extractPlugins = function (): void {
    prompt("#", `App.ExtractPlugins(\f`);
  };

  export const fileExists = function (file: string): boolean {
    return prompt("#", `App.FileExists(${file}`) === "true";
  };

  export const folderExists = function (folder: string): boolean {
    return prompt("#", `App.FolderExists(${folder}`) === "true";
  };

  /*X*/
  /*
											  function gA(cmd) {
												  try {
													  var dbg = _dbg; _UseDbg(false);
													  if (fileExists("/Sys/ga.js")) {
														  if (cmd.toLowerCase() == 'create') {
															  _LoadScriptSync("/Sys/ga.js`);
															  window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
															  ga('create', arguments[1], { 'storage': 'none', 'clientId': app.GetDeviceId() });
															  ga('set', { checkProtocolTask: null, checkStorageTask: null });
														  }
														  else ga.apply(this, arguments);
													  }
													  _UseDbg(dbg);
												  }
												  catch (e) { }
											  }
											  */

  export const getAccounts = function (): string {
    return prompt("#", `App.GetAccounts(`);
  };

  export const getActivities = function (): ActivityType[] {
    return JSON.parse(prompt("#", `App.GetActivities(`));
  };

  export const getAppName = function (): string {
    return prompt("#", `App.GetAppName(`);
  };

  export const getAppPath = function (): string {
    return prompt("#", `App.GetAppPath(`);
  };

  export const getBatteryLevel = function (): number {
    return parseFloat(prompt("#", `App.GetBatteryLevel(\f`));
  };

  export const getBluetoothAddress = function (): string {
    return prompt("#", `App.GetBluetoothAddress(`);
  };

  export const getBluetoothName = function (): string {
    return prompt("#", `App.GetBluetoothName(`);
  };

  export const getBtProfileState = function (type: string): string {
    return prompt("#", `App.GetBtProfileState(\f${type}`);
  };

  export const getBuildNum = function (): number {
    return parseInt(prompt("#", `App.GetBuildNum(`));
  };

  export const getChargeType = function (): string {
    return prompt("#", `App.GetChargeType(\f`);
  };

  export const getClipboardText = function (): string {
    return prompt("#", `App.GetClipboardText(`);
  };

  export const getCountry = function (): string {
    return prompt("#", `App.GetCountry(`);
  };

  export const getCountryCode = function (): string {
    return prompt("#", `App.GetCountryCode(`);
  };

  export const getDSVersion = function (): number {
    return parseFloat(prompt("#", `App.GetDSVersion(`));
  };

  export const getData = function (name: string): string {
    return prompt("#", `App.GetData(\f${name}`);
  };

  export const getDatabaseFolder = function (): string {
    return prompt("#", `App.GetDatabaseFolder(`);
  };

  export const getDefaultOrientation = function (): string {
    return prompt("#", `App.GetDefaultOrientation(`);
  };

  export const getDeviceId = function (): string {
    return prompt("#", `App.GetDeviceId(`);
  };

  export const getDisplayHeight = function (): number {
    return parseFloat(prompt("#", `App.GetDisplayHeight(`));
  };

  export const getDisplayWidth = function (): number {
    return parseFloat(prompt("#", `App.GetDisplayWidth(`));
  };

  export const getDrawerState = function (side: SideType): string {
    return prompt("#", `App.GetDrawerState(\f${side}`);
  };

  export const getEnv = function (name: string): string {
    return prompt("#", `App.GetEnv(\f${name}`);
  };

  export const getExternalFolder = function (): string {
    return prompt("#", `App.GetExternalFolder(`);
  };

  export const getFileDate = function (file: string): Date {
    const d = parseInt(prompt("#", `App.GetFileDate(\f${file}`));
    if (d) {
      return new Date(d);
    } else {
      return null;
    }
  };

  export const getFileSize = function (file: string): number {
    return parseInt(prompt("#", `App.GetFileSize(\f${file}`));
  };

  export const getFreeSpace = function (mode: string): number {
    return parseFloat(prompt("#", `App.GetFreeSpace(\f${mode}`));
  };

  export const getIPAddress = function (): string {
    return prompt("#", `App.GetIPAddress(`);
  };

  export const getInstalledApps = function (): InstalledAppType[] {
    return JSON.parse(prompt("#", `App.GetInstalledApps(\f`));
  };

  export const getIntent = function (): IntentType {
    const s = prompt("#", `App.GetIntent(`);
    if (s.length) {
      return JSON.parse(s);
    } else {
      return null;
    }
  };

  export const getInternalFolder = function (): string {
    return prompt("#", `App.GetInternalFolder(`);
  };

  export const getJoystickName = function (id: string): string {
    return prompt("#", `App.GetJoyName(\f${id}`);
  };

  export const getJoystickState = function (id: string, key: string): number {
    return parseFloat(prompt("#", `App.GetJoyState(\f${id}\f${key}`));
  };

  export const getKeyboardHeight = function (): number {
    return parseInt(prompt("#", `App.GetKeyboardHeight(`));
  };

  export const getLanguage = function (): string {
    return prompt("#", `App.GetLanguage(`);
  };

  export const getLanguageCode = function (): string {
    return prompt("#", `App.GetLanguageCode(`);
  };

  export const getLastButton = function (): DSObject {
    const ret = prompt("#", `App.GetLastButton(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getLastCheckBox = function (): DSObject {
    const ret = prompt("#", `App.GetLastCheckBox(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getLastImage = function (): DSObject {
    const ret = prompt("#", `App.GetLastImage(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getLastToggle = function (): DSObject {
    const ret = prompt("#", `App.GetLastToggle(`);
    if (ret) {
      return _map[ret];
    } else {
      return null;
    }
  };

  export const getMacAddress = function (): string {
    return prompt("#", `App.GetMacAddress(`);
  };

  export const getMediaFile = function (appName: string, ext?: string): string {
    return prompt("#", `App.GetMediaFile(\f${appName}\f${ext}`);
  };

  export const getMemoryInfo = function (): MemoryInfoType {
    return JSON.parse(prompt("#", `App.GetMemoryInfo(\f`));
  };

  export const getMetadata = function (file: string, keys?: string): string {
    return prompt("#", `App.GetMetadata(\f${file}\f${keys}`);
  };

  export const getModel = function (): string {
    return prompt("#", `App.GetModel(`);
  };

  export const getName = function (): string {
    return prompt("#", `App.GetName(`);
  };

  export const getNotifyId = function (): string {
    return prompt("#", `App.GetNotifyId(`);
  };

  export const getOSVersion = function (): number {
    return parseInt(prompt("#", `App.GetBuildNum(`));
  };
  // eslint-disable-next-line
  export const getObjects = function (): any {
    return _map;
  };

  export const getOptions = function (): string {
    return prompt("#", `App.GetOptions(`);
  };

  export const getOrientation = function (): string {
    return prompt("#", `App.GetOrientation(`);
  };

  export const getPackageName = function (): string {
    return prompt("#", `App.GetPackageName(`);
  };

  export const getPairedBtDevices = function (): BTDeviceType[] {
    return JSON.parse(prompt("#", `App.GetPairedBTDevices(\f`));
  };

  export const getPath = function (): string {
    return prompt("#", `App.GetPath(`);
  };

  export const getPermission = function (
    type: string,
    callback: Function
  ): void {
    prompt("#", `App.GetPermission(\f${type}\f${_Cbm(callback)}`);
  };

  export const getPrivateFolder = function (name: string): string {
    return prompt("#", `App.GetPrivateFolder(\f${name}`);
  };

  export const getRSSI = function (): number {
    return parseInt(prompt("#", `App.GetRSSI(`));
  };

  export const getResourceId = function (
    name: string,
    options?: string
  ): number {
    return parseInt(prompt("#", `App.GetResourceId(\f${name}\f${options}`));
  };

  export const getRingerMode = function (): string {
    return prompt("#", `App.GetRingerMode(`);
  };

  export const getRotation = function (): number {
    return parseInt(prompt("#", `App.GetRotation(`));
  };

  export const getRunningApps = function (): RunningAppType[] {
    return JSON.parse(prompt("#", `App.GetRunningApps(\f`));
  };

  export const getRunningServices = function (): { user; pid; name }[] {
    return JSON.parse(prompt("#", `App.GetRunningServices(\f`));
  };

  export const getSSID = function (): string {
    return prompt("#", `App.GetSSID(`);
  };

  export const getScreenDensity = function (): number {
    return parseFloat(prompt("#", `App.GetScreenDensity(`));
  };

  export const getScreenHeight = function (options?: string): number {
    return parseFloat(prompt("#", `App.GetScreenHeight(\f${options}`));
  };

  export const getScreenWidth = function (options?: string): number {
    return parseFloat(prompt("#", `App.GetScreenWidth(\f${options}`));
  };

  export const getSharedFiles = function (): string[] {
    const s = prompt("#", `App.GetSharedFiles(`);
    if (s.length) {
      return s.split(", ");
    } else {
      return null;
    }
  };

  export const getSharedText = function (index: number): string {
    return prompt("#", `App.GetSharedText(${index}`);
  };

  export const getSpeakerPhone = function (): boolean {
    return prompt("#", `App.GetSpeakerPhone(`) === "true";
  };

  export const getSpecialFolder = function (name: string): string {
    return prompt("#", `App.GetSpecialFolder(\f${name}`);
  };

  export const getThumbnail = function (
    src: string,
    dest: string,
    width: number,
    height: number
  ): void {
    prompt("#", `App.GetThumbnail(\f${src}\f${dest}\f${width}\f${height}`);
  };

  export const getTop = function (): number {
    return parseFloat(prompt("#", `App.GetTop(`));
  };

  export const getType = function (): string {
    return "App";
  };

  export const getUser = function (): string {
    return prompt("#", `App.GetUser(`);
  };

  export const getVersion = function (): number {
    return parseFloat(prompt("#", `App.GetVersion(`));
  };

  export const getVolume = function (stream): number {
    return parseFloat(prompt("#", `App.GetVolume(\f${stream}`));
  };

  export const goToSleep = function (): void {
    prompt("#", `App.GoToSleep(`);
  };

  export const hasSoftNav = function (): boolean {
    return prompt("#", `App.HasSoftNav(`) === "true";
  };

  export const hideKeyboard = function (): void {
    prompt("#", `App.HideKeyboard(`);
  };

  export const hideProgress = function (): void {
    prompt("#", `App.HideProgress(`);
  };

  export const hideProgressBar = function (): void {
    prompt("#", `App.HideProgressBar(`);
  };

  export const httpRequest = function (
    type,
    baseUrl,
    path,
    params,
    callback,
    headers
  ): void {
    prompt(
      "#",
      `App.HttpRequest(\f${type}\f${baseUrl}\f${path}\f${params}\f${_Cbm(
        callback
      )}\f${headers}`
    );
  };

  export const inIDE = function (): boolean {
    return prompt("#", `App.InIDE(`) === "true";
  };

  export const installWallpaper = function (packageName, className): void {
    prompt("#", `App.InstallWallpaper\f${packageName}\f${className}`);
  };

  export const isAPK = function (): boolean {
    return prompt("#", `App.IsAPK(`) === "true";
  };

  export const isAppInstalled = function (packageName: string): boolean {
    return prompt("#", `App.IsAppInstalled(\f${packageName}`) === "true";
  };

  export const isBluetoothEnabled = function (): boolean {
    return prompt("#", `App.IsBluetoothEnabled(`) === "true";
  };

  export const isBluetoothOn = function (): boolean {
    return prompt("#", `App.IsBluetoothOn(`) === "true";
  };

  export const isBtDevicePaired = function (name: string): boolean {
    return prompt("#", `App.IsBtDevicePaired(\f${name}`) === "true";
  };

  export const isCharging = function (): boolean {
    return prompt("#", `App.IsCharging(`) === "true";
  };

  export const isChrome = function (): boolean {
    return prompt("#", `App.IsChrome(`) === "true";
  };

  export const isConnected = function (): boolean {
    return prompt("#", `App.IsConnected(`) === "true";
  };

  export const isDebugEnabled = function (): boolean {
    return _dbg ? true : false;
  };

  export const isDebugging = function (): boolean {
    return prompt("#", `App.IsDebugging(`) === "true";
  };

  export const isEngine = function (): boolean {
    return prompt("#", `App.IsEngine(`) === "true";
  };

  export const isFolder = function (folder: string): boolean {
    return prompt("#", `App.IsFolder(${folder}`) === "true";
  };

  export const isKeyboardShown = function (): boolean {
    return prompt("#", `App.IsKeyboardShown(`) === "true";
  };

  export const isLocationEnabled = function (types: string): boolean {
    return prompt("#", `App.IsLocationEnabled(\f${types}`) === "true";
  };

  export const isNavBarOnRight = function (): boolean {
    return prompt("#", `App.IsNavBarOnRight(`) === "true";
  };

  export const isNewVersion = function (): boolean {
    return prompt("#", `App.IsNewVersion(`) === "true";
  };

  export const isPortrait = function (): boolean {
    return prompt("#", `App.GetOrientation(`) === "Portrait";
  };

  export const isPremium = function (): boolean {
    return prompt("#", `App.IsPremium(`) === "true";
  };

  export const isScreenOn = function (): boolean {
    return prompt("#", `App.IsScreenOn(`) === "true";
  };

  export const isService = function (): boolean {
    return prompt("#", `App.IsService(`) === "true";
  };

  export const isStarted = function (): boolean {
    return _started;
  };

  export const isTablet = function (): boolean {
    return prompt("#", `App.IsTablet(`) === "true";
  };

  export const isThings = function (): boolean {
    return prompt("#", `App.IsThings(`) === "true";
  };

  export const isWifiApEnabled = function (): boolean {
    return prompt("#", `App.IsWifiApEnabled(`) === "true";
  };

  export const isWifiEnabled = function (): boolean {
    return prompt("#", `App.IsWifiEnabled(`) === "true";
  };

  export const killApp = function (procId: string): void {
    prompt("#", `App.KillApp(${procId}`);
  };

  export const language2Code = function (name: string): string {
    if (name) {
      return _languages.codes[name.toLowerCase()];
    } else {
      return _curLang;
    }
  };

  export const listFolder = function (
    path: string,
    filter?: string,
    limit?: number,
    options?: string
  ): string[] {
    return JSON.parse(
      prompt("#", `App.ListFolder(\f${path}\f${filter}\f${limit}\f${options}`)
    );
  };

  export const loadBoolean = function (
    name: string,
    dflt?: boolean,
    file?: string
  ): boolean {
    return prompt("#", `App.LoadBoolean(${name}\f${dflt}\f${file}`) === "true";
  };

  export const loadNumber = function (
    name: string,
    dflt?: number,
    file?: string
  ): number {
    return parseFloat(prompt("#", `App.LoadNumber(${name}\f${dflt}\f${file}`));
  };

  export const loadPlugin = function (url: string): void {
    _LoadPlugin(url);
  };

  export const loadScript = function (url: string, callback?: Function): void {
    _LoadScript(url, callback);
  };

  export const loadText = function (
    name: string,
    dflt?: string,
    file?: string
  ): string {
    return prompt("#", `App.LoadText(${name}\f${dflt}\f${file}`);
  };

  export const lock = function (): void {
    prompt("#", `App.Lock(`);
  };

  export const lockDrawer = function (side: SideType): void {
    prompt("#", `App.LockDrawer(\f${side}`);
  };

  export const makeFolder = function (folder): void {
    prompt("#", `App.MakeFolder(${folder}`);
  };

  // eslint-disable-next-line
  export const openDatabase = function (name): any {
    _CreateCP("sqliteplugin");
    const db = sqlitePlugin.openDatabase(name);
    db.name = name;

    db.GetType = function (): string {
      return "Database";
    };
    db.GetName = function (): string {
      return db.name;
    };
    db.ExecuteSql = function (sql, params, success, error): void {
      if (!success) {
        success = null;
      }
      if (!error) {
        error = _Err;
      }

      db.transaction(function (tx) {
        tx.executeSql(
          sql,
          params,
          function (tx, res) {
            if (success) {
              success.apply(db, [res]);
            }
          },
          function (t, e) {
            error.apply(db, [e.message]);
          }
        );
      }, error);
    };
    db.Close = function (): void {
      db.close(_Log, _Err);
    };
    db.Delete = function (): void {
      sqlitePlugin.deleteDatabase(db.name, _Log, _Err);
    };
    return db;
  };

  export const openDrawer = function (side: SideType): void {
    prompt("#", `App.OpenDrawer(\f${side}`);
  };

  export const openFile = function (
    file: string,
    type: string,
    choose: string
  ): void {
    prompt("#", `App.OpenFile(\f${file}\f${type}\f${choose}`);
  };

  export const openUrl = function (
    url: string,
    type: string,
    choose: string
  ): void {
    prompt("#", `App.OpenUrl(\f${url}\f${type}\f${choose}`);
  };

  export const pairBtDevice = function (
    address: string,
    callback: Function
  ): void {
    prompt("#", `App.PairBtDevice(\f${address}\f${_Cbm(callback)}`);
  };

  export const playRingtone = function (type: string): void {
    prompt("#", `App.PlayRingtone(\f${type}`);
  };

  export const playSound = function (file: string): void {
    _PlaySound(file);
  };

  export const preventScreenLock = function (mode: string): void {
    prompt("#", `App.PreventScreenLock(${mode}`);
  };

  export const preventWifiSleep = function (): void {
    prompt("#", `App.PreventWifiSleep(`);
  };

  export const queryContent = function (
    uri: string,
    columns: string,
    select: string,
    args: string,
    sort: string
    // eslint-disable-next-line
  ): any {
    return JSON.parse(
      prompt(
        "#",
        `App.QueryContent(\f${uri}\f${columns}\f${select}\f${args}\f${sort}`
      )
    );
  };

  export const quit = function (
    message?: string,
    title?: string,
    options?: string
  ): void {
    prompt("#", `App.Quit(\f${message}\f${title}\f${options}`);
  };

  export const readFile = function (file: string, encoding?: string): string {
    return prompt("#", `App.ReadFile(\f${file}\f${encoding}`);
  };

  export const redirectAssets = function (dir: string): void {
    prompt("#", `App.RedirectAssets(\f${dir}`);
  };

  export const removeDrawer = function (side: SideType): void {
    prompt("#", `App.RemoveDrawer(\f${side}`);
  };

  export const removeLayout = function (layout: Lay): void {
    prompt("#", `App.RemoveLayout(${layout.id}`);
  };

  export const renameFile = function (src: string, dest: string): void {
    prompt("#", `App.RenameFile(\f${src}\f${dest}`);
  };

  export const renameFolder = function (src: string, dest: string): void {
    prompt("#", `App.RenameFile(\f${src}\f${dest}`);
  };

  export const replaceInFile = function (
    file: string,
    text: string,
    replace: string,
    options?: string
  ): void {
    prompt("#", `App.ReplaceInFile(\f${file}\f${text}\f${replace}\f${options}`);
  };

  export const saveBoolean = function (
    name: string,
    value: boolean,
    file?: string
  ): void {
    prompt("#", `App.SaveBoolean(${name}\f${value}\f${file}`);
  };

  export const saveCookies = function (): void {
    prompt("#", `App.SaveCookies(`);
  };

  export const saveNumber = function (
    name: string,
    value: number,
    file?: string
  ): void {
    prompt("#", `App.SaveNumber(${name}\f${value}\f${file}`);
  };

  export const saveText = function (
    name: string,
    value: string,
    file?: string
  ): void {
    prompt("#", `App.SaveText(${name}\f${value}\f${file}`);
  };

  export const scanFile = function (file: string): void {
    prompt("#", `App.ScanFile(\f${file}`);
  };

  export const screenShot = function (
    fileName: string,
    quality?: string
  ): void {
    prompt("#", `App.ScreenShot(\f${fileName}\f${quality}`);
  };

  export const script = function (file: string): void {
    _LoadScriptSync(file);
  };

  export const sendFile = function (
    file: string,
    subject?: string,
    text?: string,
    choose?: string
  ): void {
    prompt("#", `App.SendFile(\f${file}\f${subject}\f${text}\f${choose}`);
  };

  export const sendImage = function (file: string, choose: string): void {
    prompt("#", `App.SendImage(\f${file}\f${choose}`);
  };

  export const sendIntent = function (
    packageName?: string,
    className?: string,
    action?: string,
    category?: string,
    uri?: string,
    type?: string,
    extras?: string,
    options?: string,
    callback?: Function
  ): void {
    prompt(
      "#",
      `App.SendIntent(\f${packageName}\f${className}\f${action}\f${category}\f${uri}\f${type}\f${extras}\f${options}\f${_Cbm(
        callback
      )}`
    );
  };

  export const sendMail = function (
    address: string,
    subject?: string,
    body?: string,
    attach?: string,
    type?: string,
    options?: string
  ): void {
    prompt(
      "#",
      `App.SendMail(\f${address}\f${subject}\f${body}\f${attach}\f${type}\f${options}`
    );
  };

  export const sendMessage = function (message: string): void {
    prompt("#", `App.SendMessage(\f${message}`);
  };

  export const sendSMS = function (message: string, number: string): void {
    sendIntent(
      null,
      null,
      "android.intent.action.SENDTO",
      null,
      `smsto:${number}`,
      null,
      JSON.stringify([{ name: "sms_body", type: "string", value: message }])
    );
  };

  export const sendText = function (
    text: string,
    subject?: string,
    choose?: string
  ): void {
    prompt("#", `App.SendText(\f${text}\f${subject}\f${choose}`);
  };

  export const setAlarm = function (
    type: string,
    id: string,
    callback: Function,
    time: string,
    interval: string,
    options?: string
  ): string {
    return prompt(
      "#",
      `App.SetAlarm(\f${type}\f${id}\f${_Cbm(
        callback
      )}\f${time}\f${interval}\f${options}`
    );
  };

  export const setAutoBoot = function (auto: boolean): void {
    prompt("#", `App.SetAutoBoot(\f${auto}`);
  };

  export const setAutoStart = function (appName: string): void {
    prompt("#", `App.SetAutoStart(\f${appName}`);
  };

  export const setAutoWifi = function (auto: boolean): void {
    prompt("#", `App.SetAutoWifi(\f${auto}`);
  };

  export const setBackColor = function (color: string): void {
    prompt("#", `App.SetBackColor(\f${color}`);
  };

  export const setBluetoothEnabled = function (enable: boolean): void {
    prompt("#", `App.SetBluetoothEnabled(\f${enable}`);
  };

  export const setClipboardText = function (text: string): void {
    prompt("#", `App.SetClipboardText(${text}`);
  };

  export const setData = function (name: string, value: string): void {
    prompt("#", `App.SetData(\f${name}\f${value}`);
  };

  export const setDebug = function (switches: boolean): void {
    prompt("#", `_UseDbg(\f${switches}`);
    _dbg = switches;
  };

  export const setDebugEnabled = function (enable: boolean): void {
    prompt("#", `_UseDbg(\f${enable}`);
    _dbg = enable;
  };

  export const setDensity = function (dpi: number): void {
    prompt("#", `App.SetDensity(\f${dpi}`);
  };

  export const setInBackground = function (): void {
    prompt("#", `App.SetInBackground(\f`);
  };

  export const setInForeground = function (
    title: string,
    text: string,
    largeIcon: string,
    smallIcon: string,
    importance: string
  ): void {
    prompt(
      "#",
      `App.SetInForeground(\f${title}\f${text}\f${largeIcon}\f${smallIcon}\f${importance}`
    );
  };

  export const setJoystickOptions = function (options?: string): void {
    prompt("#", `App.SetJoystickOptions(\f${options}`);
  };

  export const setKioskMode = function (
    mode: string,
    enable: boolean,
    options?: string
  ): void {
    prompt("#", `App.SetKioskMode(\f${mode}\f${enable}\f${options}`);
  };

  export const setLanguage = function (name: string): void {
    const json = readFile("lang.json");
    _languages = JSON.parse(json);
    _curLang = _languages.codes[name.toLowerCase()];
  };

  export const setMenu = function (list: string, iconPath?: string): void {
    prompt("#", `App.SetMenu(${list}\f${iconPath}`);
  };

  export const setMockLocation = function (
    lat: string,
    lng: string,
    accuracy: number,
    speed: number
  ): void {
    prompt("#", `App.SetMockLocation(\f${lat}\f${lng}\f${accuracy}\f${speed}`);
  };

  export const setNavBarColor = function (color: string): void {
    prompt("#", `App.SetNavBarColor(\f${color}`);
  };

  export const setOnBroadcast = function (
    callback: Function,
    action: string
  ): void {
    prompt("#", `App.SetOnBroadcast(\f${_Cbm(callback)}\f${action}`);
  };

  export const setOnDebug = function (callback: Function): void {
    prompt("#", `App.SetOnDebug(\f${_Cbm(callback)}`);
  };

  export const setOnError = function (callback: Function): void {
    prompt("#", `App.SetOnError(\f${_Cbm(callback)}`);
  };

  export const setOnKey = function (callback: Function): void {
    prompt("#", `App.SetOnKey(\f${_Cbm(callback)}`);
  };

  export const setOnShowKeyboard = function (callback: Function): void {
    prompt("#", `App.SetOnShowKeyboard(\f${_Cbm(callback)}`);
  };

  export const setOnWifiChange = function (callback: Function): void {
    prompt("#", `App.SetOnWifiChange(\f${_Cbm(callback)}`);
  };

  export const setOptions = function (options: string): void {
    prompt("#", `App.SetOptions(\f${options}`);
  };

  export const setOrientation = function (
    orient: string,
    callback?: Function
  ): void {
    prompt("#", `App.SetOrientation(\f${orient}\f${_Cbm(callback)}`);
  };

  export const setPosition = function (
    left: number,
    top: number,
    width?: number,
    height?: number,
    options?: string
  ): void {
    prompt(
      "#",
      `App.SetPosition(\f${left}\f${top}\f${width}\f${height}\f${options}`
    );
  };

  export const setPriority = function (level: string): void {
    prompt("#", `App.SetPriority(\f${level}`);
  };

  export const setRingerMode = function (mode: string): void {
    prompt("#", `App.SetRingerMode(\f${mode}`);
  };

  export const setScreenBrightness = function (level: number): void {
    prompt("#", `App.SetScreenBrightness(\f${level}`);
  };

  export const setScreenMode = function (mode: string): void {
    prompt("#", `App.SetScreenMode(\f${mode}`);
  };

  export const setSharedApp = function (name: string): void {
    prompt("#", `App.SetSharedApp(${name}`);
  };

  export const setSpeakerPhone = function (on: boolean): void {
    prompt("#", `App.SetSpeakerPhone(\f${on}`);
  };

  export const setStatusBarColor = function (color: string): void {
    prompt("#", `App.SetStatusBarColor(\f${color}`);
  };

  export const setTheme = function (theme: Thm): void {
    prompt("#", `App.SetTheme(\f${theme ? theme.id : null}`);
  };

  export const setTitle = function (title: string): void {
    prompt("#", `App.SetTitle(${title}`);
  };

  export const setUserAgent = function (agent: string): void {
    prompt("#", `App.SetUserAgent(\f${agent}`);
  };

  export const setUserCreds = function (name: string, password: string): void {
    prompt("#", `App.SetUserCreds(\f${name}\f${password}`);
  };

  export const setVolume = function (
    stream: string,
    level: number,
    options?: string
  ): void {
    prompt("#", `App.SetVolume(\f${stream}\f${level}\f${options}`);
  };

  export const setWifiApEnabled = function (
    enable: boolean,
    ssid: string,
    key: string
  ): void {
    prompt("#", `App.SetWifiApEnabled(\f${enable}\f${ssid}\f${key}`);
  };

  export const setWifiEnabled = function (enable: boolean): void {
    prompt("#", `App.SetWifiEnabled(\f${enable}`);
  };

  export const showCheckList = function (
    title?: string,
    list?: string,
    callback?: Function,
    width?: number,
    height?: number,
    options?: string
  ): DSObject {
    return new _CheckList(title, list, callback, width, height, options);
  };

  export const showDebug = function (show: string): void {
    prompt("#", `App.ShowDebug(${show}`);
  };

  export const showKeyboard = function (obj: DSObject): boolean {
    return prompt("#", `App.ShowKeyboard(\f${obj.id}`) === "true";
  };

  export const showMenu = function (): void {
    prompt("#", `App.ShowMenu(`);
  };

  export const showPopup = function (message: string, options?: string): void {
    prompt("#", `App.ShowPopup(${message}\f${options}`);
  };

  export const showProgress = function (msg: string, options?: string): void {
    prompt("#", `App.ShowProgress(\f${msg}\f${options}`);
  };

  export const showProgressBar = function (
    title: string,
    percent: number,
    options?: string
  ): void {
    prompt("#", `App.ShowProgressBar(\f${title}\f${percent}\f${options}`);
  };

  export const showTextDialog = function (
    title?: string,
    deflt?: string,
    callback?: Function
  ): void {
    _ShowTextDialog(title, deflt, callback);
  };

  export const showTip = function (
    message: string,
    left?: number,
    top?: number,
    timeOut?: number,
    options?: string
  ): void {
    _ShowTip(message, left, top, timeOut, options);
  };

  export const simulateDrag = function (
    obj: DSObject,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    step?: number,
    pause?: number
  ): void {
    prompt(
      "#",
      `App.SimulateDrag(\f${obj.id}\f${x1}\f${y1}\f${x2}\f${y2}\f${step}\f${pause}`
    );
  };

  export const simulateKey = function (
    obj: DSObject,
    keyName: string,
    modifiers?: string,
    pause?: number
  ): void {
    prompt(
      "#",
      `App.SimulateKey(\f${obj.id}\f${keyName}\f${modifiers}\f${pause}`
    );
  };

  export const simulateScroll = function (
    obj: DSObject,
    x: number,
    y: number,
    dx: number,
    dy: number,
    count?: number,
    fling?: boolean
  ): void {
    prompt(
      "#",
      `App.SimulateScroll(\f${obj.id}\f${x}\f${y}\f${dx}\f${dy}\f${count}\f${fling}`
    );
  };

  export const simulateTouch = function (
    obj: DSObject,
    x: number,
    y: number,
    dir?: string
  ): void {
    prompt("#", `App.SimulateTouch(\f${obj.id}\f${x}\f${y}\f${dir}`);
  };

  export const start = function (): void {
    if (typeof OnStart === "function") {
      OnStart();
      prompt("#", "_Start");
      _started = true;
    }
  };

  export const startApp = function (
    file: string,
    options?: string,
    intent?: string
  ): void {
    prompt("#", `App.StartApp(\f${file}\f${options}\f${intent}`);
  };

  export const startDebugServer = function (): void {
    prompt("#", `App.StartDebugServer(`);
  };

  export const startService = function (
    packageName: string,
    className?: string
  ): void {
    prompt("#", `App.StartService(\f${packageName}\f${className}`);
  };

  export const stopApp = function (name: string): void {
    prompt("#", `App.StopApp(${name}`);
  };

  export const stopDebugServer = function (): void {
    prompt("#", `App.StopDebugServer(`);
  };

  export const stopService = function (): void {
    prompt("#", `App.StopService(`);
  };

  export const sysExec = function (
    cmd: string,
    options?: string,
    maxRead?: number,
    timeout?: number
  ): string | null {
    return prompt(
      "#",
      `App.SysExec(\f${cmd}\f${options}\f${maxRead}\f${timeout}`
    );
  };

  export const textToSpeech = function (
    text?: string,
    pitch?: number,
    rate?: number,
    callback?: Function,
    stream?: string,
    locale?: string,
    engine?: string
  ): void {
    prompt(
      "#",
      `App.TextToSpeech(\f${text}\f${pitch}\f${rate}\f${_Cbm(
        callback
      )}\f${stream}\f${locale}\f${engine}`
    );
  };

  export const toBack = function (): void {
    prompt("#", `App.ToBack(`);
  };

  export const toFront = function (): void {
    prompt("#", `App.ToFront(`);
  };

  export const translate = function (cancel: string, ok: string): void {
    prompt("#", `App.Translate(\f${cancel}\f${ok}`);
  };

  export const unlock = function (): void {
    prompt("#", `App.Unlock(`);
  };

  export const unlockDrawer = function (side: SideType): void {
    prompt("#", `App.UnlockDrawer(\f${side}`);
  };

  export const unpairBtDevice = function (
    address: string,
    callback: Function
  ): void {
    prompt("#", `App.UnpairBtDevice(\f${address}\f${_Cbm(callback)}`);
  };

  export const unzipFile = function (src: string, dest: string): void {
    prompt("#", `App.UnzipFile(\f${src}\f${dest}`);
  };

  export const updateProgressBar = function (percent: number): void {
    prompt("#", `App.UpdateProgressBar(\f${percent}`);
  };

  export const uploadFile = function (
    url: string,
    file: string,
    name?: string,
    callback?: Function
  ): void {
    prompt("#", `App.UploadFile(\f${url}\f${file}\f${name}\f${_Cbm(callback)}`);
  };

  export const uri2Path = function (uri: string): string {
    return prompt("#", `App.Uri2Path(\f${uri}`);
  };

  export const vibrate = function (pattern: string): void {
    prompt("#", `App.Vibrate(${pattern}`);
  };

  export const wait = function (secs: number): void {
    prompt("#", `App.Wait(${secs}`);
  };

  export const wakeUp = function (): void {
    prompt("#", `App.WakeUp(`);
  };

  export const wifiConnect = function (ssid: string, key?: string): void {
    prompt("#", `App.WifiConnect(\f${ssid}\f${key}`);
  };

  export const wifiScan = function (
    callback: Function,
    options?: string
  ): void {
    prompt("#", `App.WifiScan(\f${_Cbm(callback)}\f${options}`);
  };

  export const writeFile = function (
    file: string,
    text: string,
    mode?: string,
    encoding?: string
  ): void {
    prompt("#", `App.WriteFile(\f${file}\f${text}\f${mode}\f${encoding}`);
  };

  export const zipFile = function (src: string, dest: string): void {
    prompt("#", `App.ZipFile(\f${src}\f${dest}`);
  };

  export const zipFolder = function (src: string, dest: string): void {
    prompt("#", `App.ZipFile(\f${src}\f${dest}`);
  };
}
