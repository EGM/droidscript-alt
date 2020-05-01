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
import Component from "./component";
// eslint-disable-next-line
export var alt;
(function (alt) {
    alt.addAdView = function (lay, unitId, testId, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddAdView(\f${unitId}\f${testId}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Adv(ret);
        }
        else {
            return null;
        }
    };
    alt.addButton = function (lay, text, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddButton(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Btn(ret);
        }
        else {
            return null;
        }
    };
    alt.addCameraView = function (lay, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddCameraView(${width}\f${height}\f${options}`);
        if (ret) {
            return new Cam(ret);
        }
        else {
            return null;
        }
    };
    alt.addCheckBox = function (lay, text, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddCheckBox(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Chk(ret);
        }
        else {
            return null;
        }
    };
    alt.addCodeEdit = function (lay, text, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddCodeEdit(\f${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Cde(ret);
        }
        else {
            return null;
        }
    };
    alt.addDrawer = function (layout, side, width, grabWidth) {
        prompt("#", `App.AddDrawer(\f${layout.id}\f${side}\f${width}\f${grabWidth}`);
    };
    alt.addImage = function (lay, file, width, height, options, w, h) {
        const ret = prompt(lay ? lay.id : null, `App.AddImage(${file}\f${width}\f${height}\f${options}\f${w}\f${h}`);
        if (ret) {
            return new Img(ret);
        }
        else {
            return null;
        }
    };
    alt.addLayout = function (layout, type, options) {
        if (!type) {
            prompt("#", `App.AddLayout(${layout.id}`);
        }
        else {
            const ret = prompt(layout ? layout.id : null, `App.AddLayout(${type}\f${options}`);
            if (ret) {
                return new Lay(ret);
            }
            else {
                return null;
            }
        }
    };
    alt.addList = function (lay, list, width, height, options, delim) {
        const ret = prompt(lay ? lay.id : null, `App.AddList(\f${list}\f${width}\f${height}\f${options}\f${delim}`);
        if (ret) {
            return new Lst(ret);
        }
        else {
            return null;
        }
    };
    alt.addScroller = function (lay, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddScroller(${width}\f${height}\f${options}`);
        if (ret) {
            return new Scr(ret);
        }
        else {
            return null;
        }
    };
    alt.addSeekBar = function (lay, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddSeekBar(${width}\f${height}\f${options}`);
        if (ret) {
            return new Skb(ret);
        }
        else {
            return null;
        }
    };
    alt.addSpinner = function (lay, list, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddSpinner(${list}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Spn(ret);
        }
        else {
            return null;
        }
    };
    alt.addText = function (lay, text, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddText(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Txt(ret);
        }
        else {
            return null;
        }
    };
    alt.addTextEdit = function (lay, text, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddTextEdit(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Txe(ret);
        }
        else {
            return null;
        }
    };
    alt.addToggle = function (lay, text, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddToggle(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Tgl(ret);
        }
        else {
            return null;
        }
    };
    alt.addVideoView = function (lay, width, height, options) {
        const ret = prompt(lay ? lay.id : null, `App.AddVideoView(\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Vid(ret);
        }
        else {
            return null;
        }
    };
    alt.addWebView = function (lay, width, height, options, zoom) {
        const ret = prompt(lay ? lay.id : null, `App.AddWeb(\f${width}\f${height}\f${options}\f${zoom}`);
        if (ret) {
            return new Web(ret);
        }
        else {
            return null;
        }
    };
    alt.alert = function (message, title, options, hue) {
        prompt("#", `App.Alert(\f${message}\f${title}\f${options}\f${hue}`);
    };
    alt.animate = function (callback, fps = 30) {
        _cbAnimate = callback;
        // eslint-disable-next-line
        _anim_t = new Date().getTime();
        if (_isV8) {
            _fps = fps;
            if (_cbAnimate) {
                _tmAnimate = setInterval(_animatev8, 1000 / _fps);
            }
            else if (_tmAnimate) {
                clearInterval(_tmAnimate);
            }
        }
        else {
            window._fps = fps;
            requestAnimationFrame(_animate);
        }
    };
    alt.broadcast = function (type, message) {
        prompt("#", `App.Broadcast(${type}\f${message}`);
    };
    alt.broadcastIntent = function (action, category, data, type, extras, options) {
        prompt("#", `App.BroadcastIntent(\f${action}\f${category}\f${data}\f${type}\f${extras}\f${options}`);
    };
    alt.call = function (number) {
        prompt("#", `App.Call(\f${number}`);
    };
    alt.checkLicense = function (key) {
        prompt("#", `App.CheckLicense(\f${key}`);
    };
    alt.checkPermission = function (type) {
        return prompt("#", `App.CheckPermission(\f${type}`);
    };
    alt.chooseAccount = function (callback) {
        prompt("#", `App.ChooseAccount(\f${_Cbm(callback)}`);
    };
    alt.chooseContact = function (type, callback) {
        prompt("#", `App.ChooseContact(\f${type}\f${_Cbm(callback)}`);
    };
    alt.chooseFile = function (message, type, callback, folder) {
        prompt("#", `App.ChooseFile(\f${message}\f${type}\f${_Cbm(callback)}\f${folder}`);
    };
    alt.chooseImage = function (options, callback) {
        prompt("#", `App.ChooseImage(\f${options}\f${_Cbm(callback)}`);
    };
    /*
                                                                                                              function chooseWifi(title1, title2, callback, options, extra) {
                                                                                                                  var wifi = new _WifiScan(title1, title2, callback, options, extra);
                                                                                                                  wifi.Select();
                                                                                                              }
                                                                                                          */
    alt.clearCookies = function (session) {
        prompt("#", `App.ClearCookies(\f${session}`);
    };
    alt.clearData = function (file) {
        prompt("#", `App.ClearData(\f${file}`);
    };
    alt.clearValue = function (name, file) {
        prompt("#", `App.ClearValue(\f${name}\f${file}`);
    };
    alt.closeDrawer = function (side) {
        prompt("#", `App.CloseDrawer(\f${side}`);
    };
    alt.copyFile = function (src, dest) {
        prompt("#", `App.CopyFile(${src}\f${dest}`);
    };
    alt.copyFolder = function (src, dest, overwrite, filter) {
        prompt("#", `App.CopyFolder(\f${src}\f${dest}\f${overwrite}\f${filter}`);
    };
    alt.createAdView = function (unitId, testId, width, height, options) {
        const ret = prompt("#", `App.CreateAdView(\f#${unitId}\f${testId}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Adv(ret);
        }
        else {
            return null;
        }
    };
    alt.createAudioRecorder = function () {
        if (_rec) {
            _rec.Release();
        }
        const ret = prompt("#", `App.CreateAudioRecorder(`);
        if (ret) {
            _rec = new Rec(ret);
        }
        else {
            _rec = null;
            return _rec;
        }
    };
    alt.createBluetoothList = function (filter) {
        if (_btl) {
            _btl.Release();
        }
        const ret = prompt("#", `App.CreateBluetoothList(${filter}`);
        if (ret) {
            _btl = new Btl(ret);
        }
        else {
            _btl = null;
            return _btl;
        }
    };
    alt.createBluetoothSerial = function (mode) {
        const ret = prompt("#", `App.CreateBluetoothSerial(\f${mode}`);
        if (ret) {
            return new Bts(ret);
        }
        else {
            return null;
        }
    };
    alt.createButton = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateButton(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Btn(ret);
        }
        else {
            return null;
        }
    };
    alt.createCameraView = function (width, height, options) {
        const ret = prompt("#", `App.CreateCameraView(${width}\f${height}\f${options}`);
        if (ret) {
            return new Cam(ret);
        }
        else {
            return null;
        }
    };
    alt.createCheckBox = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateCheckBox(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Chk(ret);
        }
        else {
            return null;
        }
    };
    /*X*/
    alt.createCloudStore = function (apiKey) {
        const ret = prompt("#", `App.CreateCloudStore(\f${apiKey}`);
        if (ret) {
            return new Cld(ret);
        }
        else {
            return null;
        }
    };
    alt.createCodeEdit = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateCodeEdit(\f${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Cde(ret);
        }
        else {
            return null;
        }
    };
    alt.createCrypt = function (options) {
        if (_crp) {
            _crp.Release();
        }
        const ret = prompt("#", `App.CreateCrypt(\f${options}`);
        if (ret) {
            _crp = new Crp(ret);
        }
        else {
            _crp = null;
        }
        return _crp;
    };
    alt.createDebug = function () {
        prompt("#", `App.CreateDebug(`);
    };
    alt.createDialog = function (title, options) {
        const ret = prompt("#", `App.CreateDialog(\f${title}\f${options}`);
        if (ret) {
            return new Dlg(ret);
        }
        else {
            return null;
        }
    };
    alt.createDownloader = function (options) {
        const ret = prompt("#", `App.CreateDownloader(\f${options}`);
        if (ret) {
            return new Dwn(ret);
        }
        else {
            return null;
        }
    };
    alt.createEmail = function (account, password) {
        if (_eml) {
            _eml.Release();
        }
        const ret = prompt("#", `App.CreateEmail(${account}\f${password}`);
        if (ret) {
            _eml = new EMAIL(ret);
        }
        else {
            _eml = null;
        }
        return _eml;
    };
    alt.createFile = function (file, mode) {
        const ret = prompt("#", `App.CreateFile(\f${file}\f${mode}`);
        if (ret) {
            return new Fil(ret);
        }
        else {
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
    alt.createImage = function (file, width, height, options, w, h) {
        const ret = prompt("#", `App.CreateImage(${file}\f${width}\f${height}\f${options}\f${w}\f${h}`);
        if (ret) {
            return new Img(ret);
        }
        else {
            return null;
        }
    };
    alt.createLayout = function (type, options) {
        const ret = prompt("#", `App.CreateLayout(${type}\f${options}`);
        if (ret) {
            return new Lay(ret);
        }
        else {
            return null;
        }
    };
    alt.createList = function (list, width, height, options, delim) {
        const ret = prompt("#", `App.CreateList(\f${list}\f${width}\f${height}\f${options}\f${delim}`);
        if (ret) {
            return new Lst(ret);
        }
        else {
            return null;
        }
    };
    alt.createListDialog = function (title, list, options) {
        if (_ldg) {
            _ldg.Release();
        }
        const ret = prompt("#", `App.CreateListDialog(\f${title}\f${list}\f${options}`);
        if (ret) {
            _ldg = new Ldg(ret);
        }
        else {
            _ldg = null;
        }
        return _ldg;
    };
    alt.createLocator = function (type, options) {
        const ret = prompt("#", `App.CreateLocator(${type}\f${options}`);
        if (ret) {
            return new Loc(ret);
        }
        else {
            return null;
        }
    };
    alt.createMediaPlayer = function () {
        const ret = prompt("#", `App.CreateMediaPlayer(`);
        if (ret) {
            return new Aud(ret);
        }
        else {
            return null;
        }
    };
    alt.createMediaStore = function () {
        const ret = prompt("#", `App.CreateMediaStore(`);
        if (ret) {
            return new Med(ret);
        }
        else {
            return null;
        }
    };
    alt.createNetClient = function (type) {
        const ret = prompt("#", `App.CreateNetClient(${type}`);
        if (ret) {
            return new Net(ret);
        }
        else {
            return null;
        }
    };
    alt.createNotification = function (options) {
        const ret = prompt("#", `App.CreateNotification(\f${options}`);
        if (ret) {
            return new Not(ret);
        }
        else {
            return null;
        }
    };
    //	function createNxt() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }
    // function createNxtRemote() { var ret = prompt("#", `App.CreateNxtRemote(`); if (ret) return new Nxt(ret, null); else return null; }
    alt.createObject = function (name, type) {
        if (!type) {
            try {
                return JSON.parse(`new ${name}()`);
            }
            catch (e) {
                return null;
            }
        }
        else {
            const ret = prompt("#", `_Obj(\f${type}\f${name}`);
            if (ret) {
                return new Component(ret);
            }
            else {
                return null;
            }
        }
    };
    alt.createOverlay = function (options) {
        const ret = prompt("#", `App.CreateOverlay(\f${options}`);
        if (ret) {
            return new Ovl(ret);
        }
        else {
            return null;
        }
    };
    alt.createPhoneState = function (types) {
        if (_pst) {
            _pst.Release();
        }
        const ret = prompt("#", `App.CreatePhoneState(\f${types}`);
        if (ret) {
            _pst = new Pst(ret);
        }
        else {
            _pst = null;
        }
        return _pst;
    };
    alt.createPlayStore = function () {
        const ret = prompt("#", `App.CreatePlayStore(`);
        if (ret) {
            return new Ply(ret);
        }
        else {
            return null;
        }
    };
    alt.createSMS = function () {
        if (_sms) {
            _sms.Release();
        }
        const ret = prompt("#", `App.CreateSMS(`);
        if (ret) {
            _sms = new SMS(ret);
        }
        else {
            _sms = null;
        }
        return _sms;
    };
    alt.createScroller = function (width, height, options) {
        const ret = prompt("#", `App.CreateScroller(${width}\f${height}\f${options}`);
        if (ret) {
            return new Scr(ret);
        }
        else {
            return null;
        }
    };
    alt.createSeekBar = function (width, height, options) {
        const ret = prompt("#", `App.CreateSeekBar(${width}\f${height}\f${options}`);
        if (ret) {
            return new Skb(ret);
        }
        else {
            return null;
        }
    };
    alt.createSensor = function (type, options) {
        const ret = prompt("#", `App.CreateSensor(${type}\f${options}`);
        if (ret) {
            return new Sns(ret);
        }
        else {
            return null;
        }
    };
    alt.createService = function (packageName, className, callback, options) {
        const ret = prompt("#", `App.CreateService(\f${packageName}\f${className}\f${options}\f${_Cbm(callback)}`);
        if (ret) {
            return new Svc(ret);
        }
        else {
            return null;
        }
    };
    alt.createShortcut = function (name, iconFile, file, options) {
        prompt("#", `App.CreateShortcut(\f${name}\f${iconFile}\f${file}\f${options}`);
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
    alt.createSpeechRec = function (options) {
        if (_spr) {
            _spr.Release();
        }
        const ret = prompt("#", `App.CreateSpeechRec(\f${options}`);
        if (ret) {
            _spr = new Spr(ret);
        }
        else {
            _spr = null;
        }
        return _spr;
    };
    alt.createSpinner = function (list, width, height, options) {
        const ret = prompt("#", `App.CreateSpinner(${list}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Spn(ret);
        }
        else {
            return null;
        }
    };
    alt.createSynth = function (type) {
        const ret = prompt("#", `App.CreateSynth(${type}`);
        if (ret) {
            return new Syn(ret);
        }
        else {
            return null;
        }
    };
    alt.createSysProc = function (cmd, env, dir, options) {
        const ret = prompt("#", `App.CreateSysProc(\f${cmd}\f${env}\f${dir}\f${options}`);
        if (ret) {
            return new Sys(ret);
        }
        else {
            return null;
        }
    };
    /*
                                                function createTabs(list, width, height, options) {
                                                  return new _Tabs(list, width, height, options);
                                                }
                                              */
    alt.createText = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateText(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Txt(ret);
        }
        else {
            return null;
        }
    };
    alt.createTextEdit = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateTextEdit(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Txe(ret);
        }
        else {
            return null;
        }
    };
    alt.createTheme = function (baseTheme) {
        const ret = prompt("#", `App.CreateTheme(\f${baseTheme}`);
        if (ret) {
            return new Thm(ret);
        }
        else {
            return null;
        }
    };
    alt.createToggle = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateToggle(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Tgl(ret);
        }
        else {
            return null;
        }
    };
    alt.createUSBSerial = function (baudRate, dataBits, stopBits, parity, device) {
        const ret = prompt("#", `App.CreateUSBSerial(\f${baudRate}\f${dataBits}\f${stopBits}\f${parity}\f${device}`);
        if (ret) {
            return new Usb(ret);
        }
        else {
            return null;
        }
    };
    alt.createVideoView = function (width, height, options) {
        const ret = prompt("#", `App.CreateVideoView(\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Vid(ret);
        }
        else {
            return null;
        }
    };
    alt.createWallpaper = function (options) {
        if (_wpr) {
            _wpr.Release();
        }
        const ret = prompt("#", `App.CreateWallpaper(\f${options}`);
        if (ret) {
            _wpr = new Wpr(ret);
        }
        else {
            _wpr = null;
        }
        return _wpr;
    };
    alt.createWebServer = function (port, options) {
        const ret = prompt("#", `App.CreateWebServer(${port}\f${options}`);
        if (ret) {
            return new Wbs(ret);
        }
        else {
            return null;
        }
    };
    alt.createWebSocket = function (id, ip, port, options) {
        return new _WebSock(id, ip, port, options);
    };
    alt.createWebView = function (width, height, options, zoom) {
        const ret = prompt("#", `App.CreateWeb(\f${width}\f${height}\f${options}\f${zoom}`);
        if (ret) {
            return new Web(ret);
        }
        else {
            return null;
        }
    };
    /*X*/
    /*
                                                function createWizard(title, width, height, callback, options) { return new _Wizard(title, width, height, callback, options) }
                                                */
    alt.createYesNoDialog = function (message, options) {
        if (_ynd) {
            _ynd.Release();
        }
        const ret = prompt("#", `App.CreateYesNoDialog(\f${message}\f${options}`);
        if (ret) {
            _ynd = new Ynd(ret);
        }
        else {
            _ynd = null;
        }
        return _ynd;
    };
    alt.createZipUtil = function (mode) {
        const ret = prompt("#", `App.CreateZipUtil(\f${mode}`);
        if (ret) {
            return new Zip(ret);
        }
        else {
            return null;
        }
    };
    alt.debug = function (message) {
        prompt("#", `App.Debug(\f${message}`);
    };
    alt.deleteDatabase = function (name) {
        prompt("#", `App.DeleteDatabase(\f${name}`);
    };
    alt.deleteFile = function (file) {
        prompt("#", `App.DeleteFile(${file}`);
    };
    alt.deleteFolder = function (folder) {
        prompt("#", `App.DeleteFolder(${folder}`);
    };
    alt.destroyLayout = function (layout) {
        prompt("#", `App.DestroyLayout(${layout.id}`);
    };
    alt.disableKeys = function (keyList) {
        prompt("#", `App.DisableKeys(\f${keyList}`);
    };
    alt.disableTouch = function (disable) {
        prompt("#", `App.DisableTouch(\f${disable}`);
    };
    alt.discoverBtDevices = function (filter, onFound, onComplete) {
        prompt("#", `App.DiscoverBtDevices(\f${filter}\f${_Cbm(onFound)}\f${_Cbm(onComplete)}`);
    };
    alt.downloadFile = function (src, dest, title, desc, options) {
        prompt("#", `App.DownloadFile(\f${src}\f${dest}\f${title}\f${desc}\f${options}`);
    };
    alt.enableBackKey = function (enable) {
        prompt("#", `App.EnableBackKey(${enable}`);
    };
    alt.error = function (message, line, file, quit) {
        prompt("#", `App.Error(\f${message}\f${line}\f${file}\f${quit}`);
    };
    alt.execute = function (js) {
        prompt("#", `App.Execute(${js}`);
    };
    alt.exit = function (kill) {
        prompt("#", `App.Exit(${kill}`);
    };
    alt.extExec = function (name, file, args, options) {
        return prompt("#", `App.ExtExec(\f${name}\f${file}\f${args}\f${options}`);
    };
    alt.extractAssets = function (src, dest, overwrite, options) {
        prompt("#", `App.ExtractAssets(\f${src}\f${dest}\f${overwrite}\f${options}`);
    };
    alt.extractPlugins = function () {
        prompt("#", `App.ExtractPlugins(\f`);
    };
    alt.fileExists = function (file) {
        return prompt("#", `App.FileExists(${file}`) === "true";
    };
    alt.folderExists = function (folder) {
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
    alt.getAccounts = function () {
        return prompt("#", `App.GetAccounts(`);
    };
    alt.getActivities = function () {
        return JSON.parse(prompt("#", `App.GetActivities(`));
    };
    alt.getAppName = function () {
        return prompt("#", `App.GetAppName(`);
    };
    alt.getAppPath = function () {
        return prompt("#", `App.GetAppPath(`);
    };
    alt.getBatteryLevel = function () {
        return parseFloat(prompt("#", `App.GetBatteryLevel(\f`));
    };
    alt.getBluetoothAddress = function () {
        return prompt("#", `App.GetBluetoothAddress(`);
    };
    alt.getBluetoothName = function () {
        return prompt("#", `App.GetBluetoothName(`);
    };
    alt.getBtProfileState = function (type) {
        return prompt("#", `App.GetBtProfileState(\f${type}`);
    };
    alt.getBuildNum = function () {
        return parseInt(prompt("#", `App.GetBuildNum(`));
    };
    alt.getChargeType = function () {
        return prompt("#", `App.GetChargeType(\f`);
    };
    alt.getClipboardText = function () {
        return prompt("#", `App.GetClipboardText(`);
    };
    alt.getCountry = function () {
        return prompt("#", `App.GetCountry(`);
    };
    alt.getCountryCode = function () {
        return prompt("#", `App.GetCountryCode(`);
    };
    alt.getDSVersion = function () {
        return parseFloat(prompt("#", `App.GetDSVersion(`));
    };
    alt.getData = function (name) {
        return prompt("#", `App.GetData(\f${name}`);
    };
    alt.getDatabaseFolder = function () {
        return prompt("#", `App.GetDatabaseFolder(`);
    };
    alt.getDefaultOrientation = function () {
        return prompt("#", `App.GetDefaultOrientation(`);
    };
    alt.getDeviceId = function () {
        return prompt("#", `App.GetDeviceId(`);
    };
    alt.getDisplayHeight = function () {
        return parseFloat(prompt("#", `App.GetDisplayHeight(`));
    };
    alt.getDisplayWidth = function () {
        return parseFloat(prompt("#", `App.GetDisplayWidth(`));
    };
    alt.getDrawerState = function (side) {
        return prompt("#", `App.GetDrawerState(\f${side}`);
    };
    alt.getEnv = function (name) {
        return prompt("#", `App.GetEnv(\f${name}`);
    };
    alt.getExternalFolder = function () {
        return prompt("#", `App.GetExternalFolder(`);
    };
    alt.getFileDate = function (file) {
        const d = parseInt(prompt("#", `App.GetFileDate(\f${file}`));
        if (d) {
            return new Date(d);
        }
        else {
            return null;
        }
    };
    alt.getFileSize = function (file) {
        return parseInt(prompt("#", `App.GetFileSize(\f${file}`));
    };
    alt.getFreeSpace = function (mode) {
        return parseFloat(prompt("#", `App.GetFreeSpace(\f${mode}`));
    };
    alt.getIPAddress = function () {
        return prompt("#", `App.GetIPAddress(`);
    };
    alt.getInstalledApps = function () {
        return JSON.parse(prompt("#", `App.GetInstalledApps(\f`));
    };
    alt.getIntent = function () {
        const s = prompt("#", `App.GetIntent(`);
        if (s.length) {
            return JSON.parse(s);
        }
        else {
            return null;
        }
    };
    alt.getInternalFolder = function () {
        return prompt("#", `App.GetInternalFolder(`);
    };
    alt.getJoystickName = function (id) {
        return prompt("#", `App.GetJoyName(\f${id}`);
    };
    alt.getJoystickState = function (id, key) {
        return parseFloat(prompt("#", `App.GetJoyState(\f${id}\f${key}`));
    };
    alt.getKeyboardHeight = function () {
        return parseInt(prompt("#", `App.GetKeyboardHeight(`));
    };
    alt.getLanguage = function () {
        return prompt("#", `App.GetLanguage(`);
    };
    alt.getLanguageCode = function () {
        return prompt("#", `App.GetLanguageCode(`);
    };
    alt.getLastButton = function () {
        const ret = prompt("#", `App.GetLastButton(`);
        if (ret) {
            return _map[ret];
        }
        else {
            return null;
        }
    };
    alt.getLastCheckBox = function () {
        const ret = prompt("#", `App.GetLastCheckBox(`);
        if (ret) {
            return _map[ret];
        }
        else {
            return null;
        }
    };
    alt.getLastImage = function () {
        const ret = prompt("#", `App.GetLastImage(`);
        if (ret) {
            return _map[ret];
        }
        else {
            return null;
        }
    };
    alt.getLastToggle = function () {
        const ret = prompt("#", `App.GetLastToggle(`);
        if (ret) {
            return _map[ret];
        }
        else {
            return null;
        }
    };
    alt.getMacAddress = function () {
        return prompt("#", `App.GetMacAddress(`);
    };
    alt.getMediaFile = function (appName, ext) {
        return prompt("#", `App.GetMediaFile(\f${appName}\f${ext}`);
    };
    alt.getMemoryInfo = function () {
        return JSON.parse(prompt("#", `App.GetMemoryInfo(\f`));
    };
    alt.getMetadata = function (file, keys) {
        return prompt("#", `App.GetMetadata(\f${file}\f${keys}`);
    };
    alt.getModel = function () {
        return prompt("#", `App.GetModel(`);
    };
    alt.getName = function () {
        return prompt("#", `App.GetName(`);
    };
    alt.getNotifyId = function () {
        return prompt("#", `App.GetNotifyId(`);
    };
    alt.getOSVersion = function () {
        return parseInt(prompt("#", `App.GetBuildNum(`));
    };
    // eslint-disable-next-line
    alt.getObjects = function () {
        return _map;
    };
    alt.getOptions = function () {
        return prompt("#", `App.GetOptions(`);
    };
    alt.getOrientation = function () {
        return prompt("#", `App.GetOrientation(`);
    };
    alt.getPackageName = function () {
        return prompt("#", `App.GetPackageName(`);
    };
    alt.getPairedBtDevices = function () {
        return JSON.parse(prompt("#", `App.GetPairedBTDevices(\f`));
    };
    alt.getPath = function () {
        return prompt("#", `App.GetPath(`);
    };
    alt.getPermission = function (type, callback) {
        prompt("#", `App.GetPermission(\f${type}\f${_Cbm(callback)}`);
    };
    alt.getPrivateFolder = function (name) {
        return prompt("#", `App.GetPrivateFolder(\f${name}`);
    };
    alt.getRSSI = function () {
        return parseInt(prompt("#", `App.GetRSSI(`));
    };
    alt.getResourceId = function (name, options) {
        return parseInt(prompt("#", `App.GetResourceId(\f${name}\f${options}`));
    };
    alt.getRingerMode = function () {
        return prompt("#", `App.GetRingerMode(`);
    };
    alt.getRotation = function () {
        return parseInt(prompt("#", `App.GetRotation(`));
    };
    alt.getRunningApps = function () {
        return JSON.parse(prompt("#", `App.GetRunningApps(\f`));
    };
    alt.getRunningServices = function () {
        return JSON.parse(prompt("#", `App.GetRunningServices(\f`));
    };
    alt.getSSID = function () {
        return prompt("#", `App.GetSSID(`);
    };
    alt.getScreenDensity = function () {
        return parseFloat(prompt("#", `App.GetScreenDensity(`));
    };
    alt.getScreenHeight = function (options) {
        return parseFloat(prompt("#", `App.GetScreenHeight(\f${options}`));
    };
    alt.getScreenWidth = function (options) {
        return parseFloat(prompt("#", `App.GetScreenWidth(\f${options}`));
    };
    alt.getSharedFiles = function () {
        const s = prompt("#", `App.GetSharedFiles(`);
        if (s.length) {
            return s.split(", ");
        }
        else {
            return null;
        }
    };
    alt.getSharedText = function (index) {
        return prompt("#", `App.GetSharedText(${index}`);
    };
    alt.getSpeakerPhone = function () {
        return prompt("#", `App.GetSpeakerPhone(`) === "true";
    };
    alt.getSpecialFolder = function (name) {
        return prompt("#", `App.GetSpecialFolder(\f${name}`);
    };
    alt.getThumbnail = function (src, dest, width, height) {
        prompt("#", `App.GetThumbnail(\f${src}\f${dest}\f${width}\f${height}`);
    };
    alt.getTop = function () {
        return parseFloat(prompt("#", `App.GetTop(`));
    };
    alt.getType = function () {
        return "App";
    };
    alt.getUser = function () {
        return prompt("#", `App.GetUser(`);
    };
    alt.getVersion = function () {
        return parseFloat(prompt("#", `App.GetVersion(`));
    };
    alt.getVolume = function (stream) {
        return parseFloat(prompt("#", `App.GetVolume(\f${stream}`));
    };
    alt.goToSleep = function () {
        prompt("#", `App.GoToSleep(`);
    };
    alt.hasSoftNav = function () {
        return prompt("#", `App.HasSoftNav(`) === "true";
    };
    alt.hideKeyboard = function () {
        prompt("#", `App.HideKeyboard(`);
    };
    alt.hideProgress = function () {
        prompt("#", `App.HideProgress(`);
    };
    alt.hideProgressBar = function () {
        prompt("#", `App.HideProgressBar(`);
    };
    alt.httpRequest = function (type, baseUrl, path, params, callback, headers) {
        prompt("#", `App.HttpRequest(\f${type}\f${baseUrl}\f${path}\f${params}\f${_Cbm(callback)}\f${headers}`);
    };
    alt.inIDE = function () {
        return prompt("#", `App.InIDE(`) === "true";
    };
    alt.installWallpaper = function (packageName, className) {
        prompt("#", `App.InstallWallpaper\f${packageName}\f${className}`);
    };
    alt.isAPK = function () {
        return prompt("#", `App.IsAPK(`) === "true";
    };
    alt.isAppInstalled = function (packageName) {
        return prompt("#", `App.IsAppInstalled(\f${packageName}`) === "true";
    };
    alt.isBluetoothEnabled = function () {
        return prompt("#", `App.IsBluetoothEnabled(`) === "true";
    };
    alt.isBluetoothOn = function () {
        return prompt("#", `App.IsBluetoothOn(`) === "true";
    };
    alt.isBtDevicePaired = function (name) {
        return prompt("#", `App.IsBtDevicePaired(\f${name}`) === "true";
    };
    alt.isCharging = function () {
        return prompt("#", `App.IsCharging(`) === "true";
    };
    alt.isChrome = function () {
        return prompt("#", `App.IsChrome(`) === "true";
    };
    alt.isConnected = function () {
        return prompt("#", `App.IsConnected(`) === "true";
    };
    alt.isDebugEnabled = function () {
        return _dbg ? true : false;
    };
    alt.isDebugging = function () {
        return prompt("#", `App.IsDebugging(`) === "true";
    };
    alt.isEngine = function () {
        return prompt("#", `App.IsEngine(`) === "true";
    };
    alt.isFolder = function (folder) {
        return prompt("#", `App.IsFolder(${folder}`) === "true";
    };
    alt.isKeyboardShown = function () {
        return prompt("#", `App.IsKeyboardShown(`) === "true";
    };
    alt.isLocationEnabled = function (types) {
        return prompt("#", `App.IsLocationEnabled(\f${types}`) === "true";
    };
    alt.isNavBarOnRight = function () {
        return prompt("#", `App.IsNavBarOnRight(`) === "true";
    };
    alt.isNewVersion = function () {
        return prompt("#", `App.IsNewVersion(`) === "true";
    };
    alt.isPortrait = function () {
        return prompt("#", `App.GetOrientation(`) === "Portrait";
    };
    alt.isPremium = function () {
        return prompt("#", `App.IsPremium(`) === "true";
    };
    alt.isScreenOn = function () {
        return prompt("#", `App.IsScreenOn(`) === "true";
    };
    alt.isService = function () {
        return prompt("#", `App.IsService(`) === "true";
    };
    alt.isStarted = function () {
        return _started;
    };
    alt.isTablet = function () {
        return prompt("#", `App.IsTablet(`) === "true";
    };
    alt.isThings = function () {
        return prompt("#", `App.IsThings(`) === "true";
    };
    alt.isWifiApEnabled = function () {
        return prompt("#", `App.IsWifiApEnabled(`) === "true";
    };
    alt.isWifiEnabled = function () {
        return prompt("#", `App.IsWifiEnabled(`) === "true";
    };
    alt.killApp = function (procId) {
        prompt("#", `App.KillApp(${procId}`);
    };
    alt.language2Code = function (name) {
        if (name) {
            return _languages.codes[name.toLowerCase()];
        }
        else {
            return _curLang;
        }
    };
    alt.listFolder = function (path, filter, limit, options) {
        return JSON.parse(prompt("#", `App.ListFolder(\f${path}\f${filter}\f${limit}\f${options}`));
    };
    alt.loadBoolean = function (name, dflt, file) {
        return prompt("#", `App.LoadBoolean(${name}\f${dflt}\f${file}`) === "true";
    };
    alt.loadNumber = function (name, dflt, file) {
        return parseFloat(prompt("#", `App.LoadNumber(${name}\f${dflt}\f${file}`));
    };
    alt.loadPlugin = function (url) {
        _LoadPlugin(url);
    };
    alt.loadScript = function (url, callback) {
        _LoadScript(url, callback);
    };
    alt.loadText = function (name, dflt, file) {
        return prompt("#", `App.LoadText(${name}\f${dflt}\f${file}`);
    };
    alt.lock = function () {
        prompt("#", `App.Lock(`);
    };
    alt.lockDrawer = function (side) {
        prompt("#", `App.LockDrawer(\f${side}`);
    };
    alt.makeFolder = function (folder) {
        prompt("#", `App.MakeFolder(${folder}`);
    };
    /*X*/
    /*
                                                function openDatabase(name) {
                                                    _LoadScriptSync("/Sys/cp.js`);
                                                    _LoadScriptSync("/Sys/sql.js`);
                                                    _CreateCP("sqliteplugin`);
  
                                                    var db = sqlitePlugin.openDatabase(name);
                                                    db.name = name;
  
                                                    db.GetType = function () { return "Database"; }
                                                    db.GetName = function () { return db.name; }
                                                    db.ExecuteSql = function (sql, params, success, error) {
                                                        if (!success) success = null;
                                                        if (!error) error = _Err;
  
                                                        db.transaction(function (tx) {
                                                            tx.executeSql(sql, params,
                                                                function (tx, res) { if (success) success.apply(db, [res]) },
                                                                function (t, e) { error.apply(db, [e.message]); }
                                                            );
                                                        }, error
                                                        );
                                                    }
                                                    db.Close = function () { db.close(_Log, _Err); }
                                                    db.Delete = function () { sqlitePlugin.deleteDatabase(db.name, _Log, _Err); }
                                                    return db;
                                                }
                                                */
    alt.openDrawer = function (side) {
        prompt("#", `App.OpenDrawer(\f${side}`);
    };
    alt.openFile = function (file, type, choose) {
        prompt("#", `App.OpenFile(\f${file}\f${type}\f${choose}`);
    };
    alt.openUrl = function (url, type, choose) {
        prompt("#", `App.OpenUrl(\f${url}\f${type}\f${choose}`);
    };
    alt.pairBtDevice = function (address, callback) {
        prompt("#", `App.PairBtDevice(\f${address}\f${_Cbm(callback)}`);
    };
    alt.playRingtone = function (type) {
        prompt("#", `App.PlayRingtone(\f${type}`);
    };
    alt.playSound = function (file) {
        _PlaySound(file);
    };
    alt.preventScreenLock = function (mode) {
        prompt("#", `App.PreventScreenLock(${mode}`);
    };
    alt.preventWifiSleep = function () {
        prompt("#", `App.PreventWifiSleep(`);
    };
    alt.queryContent = function (uri, columns, select, args, sort
    // eslint-disable-next-line
    ) {
        return JSON.parse(prompt("#", `App.QueryContent(\f${uri}\f${columns}\f${select}\f${args}\f${sort}`));
    };
    alt.quit = function (message, title, options) {
        prompt("#", `App.Quit(\f${message}\f${title}\f${options}`);
    };
    alt.readFile = function (file, encoding) {
        return prompt("#", `App.ReadFile(\f${file}\f${encoding}`);
    };
    alt.redirectAssets = function (dir) {
        prompt("#", `App.RedirectAssets(\f${dir}`);
    };
    alt.removeDrawer = function (side) {
        prompt("#", `App.RemoveDrawer(\f${side}`);
    };
    alt.removeLayout = function (layout) {
        prompt("#", `App.RemoveLayout(${layout.id}`);
    };
    alt.renameFile = function (src, dest) {
        prompt("#", `App.RenameFile(\f${src}\f${dest}`);
    };
    alt.renameFolder = function (src, dest) {
        prompt("#", `App.RenameFile(\f${src}\f${dest}`);
    };
    alt.replaceInFile = function (file, text, replace, options) {
        prompt("#", `App.ReplaceInFile(\f${file}\f${text}\f${replace}\f${options}`);
    };
    alt.saveBoolean = function (name, value, file) {
        prompt("#", `App.SaveBoolean(${name}\f${value}\f${file}`);
    };
    alt.saveCookies = function () {
        prompt("#", `App.SaveCookies(`);
    };
    alt.saveNumber = function (name, value, file) {
        prompt("#", `App.SaveNumber(${name}\f${value}\f${file}`);
    };
    alt.saveText = function (name, value, file) {
        prompt("#", `App.SaveText(${name}\f${value}\f${file}`);
    };
    alt.scanFile = function (file) {
        prompt("#", `App.ScanFile(\f${file}`);
    };
    alt.screenShot = function (fileName, quality) {
        prompt("#", `App.ScreenShot(\f${fileName}\f${quality}`);
    };
    alt.script = function (file) {
        _LoadScriptSync(file);
    };
    alt.sendFile = function (file, subject, text, choose) {
        prompt("#", `App.SendFile(\f${file}\f${subject}\f${text}\f${choose}`);
    };
    alt.sendImage = function (file, choose) {
        prompt("#", `App.SendImage(\f${file}\f${choose}`);
    };
    alt.sendIntent = function (packageName, className, action, category, uri, type, extras, options, callback) {
        prompt("#", `App.SendIntent(\f${packageName}\f${className}\f${action}\f${category}\f${uri}\f${type}\f${extras}\f${options}\f${_Cbm(callback)}`);
    };
    alt.sendMail = function (address, subject, body, attach, type, options) {
        prompt("#", `App.SendMail(\f${address}\f${subject}\f${body}\f${attach}\f${type}\f${options}`);
    };
    alt.sendMessage = function (message) {
        prompt("#", `App.SendMessage(\f${message}`);
    };
    alt.sendSMS = function (message, number) {
        alt.sendIntent(null, null, "android.intent.action.SENDTO", null, `smsto:${number}`, null, JSON.stringify([{ name: "sms_body", type: "string", value: message }]));
    };
    alt.sendText = function (text, subject, choose) {
        prompt("#", `App.SendText(\f${text}\f${subject}\f${choose}`);
    };
    alt.setAlarm = function (type, id, callback, time, interval, options) {
        return prompt("#", `App.SetAlarm(\f${type}\f${id}\f${_Cbm(callback)}\f${time}\f${interval}\f${options}`);
    };
    alt.setAutoBoot = function (auto) {
        prompt("#", `App.SetAutoBoot(\f${auto}`);
    };
    alt.setAutoStart = function (appName) {
        prompt("#", `App.SetAutoStart(\f${appName}`);
    };
    alt.setAutoWifi = function (auto) {
        prompt("#", `App.SetAutoWifi(\f${auto}`);
    };
    alt.setBackColor = function (color) {
        prompt("#", `App.SetBackColor(\f${color}`);
    };
    alt.setBluetoothEnabled = function (enable) {
        prompt("#", `App.SetBluetoothEnabled(\f${enable}`);
    };
    alt.setClipboardText = function (text) {
        prompt("#", `App.SetClipboardText(${text}`);
    };
    alt.setData = function (name, value) {
        prompt("#", `App.SetData(\f${name}\f${value}`);
    };
    alt.setDebug = function (switches) {
        prompt("#", `_UseDbg(\f${switches}`);
        _dbg = switches;
    };
    alt.setDebugEnabled = function (enable) {
        prompt("#", `_UseDbg(\f${enable}`);
        _dbg = enable;
    };
    alt.setDensity = function (dpi) {
        prompt("#", `App.SetDensity(\f${dpi}`);
    };
    alt.setInBackground = function () {
        prompt("#", `App.SetInBackground(\f`);
    };
    alt.setInForeground = function (title, text, largeIcon, smallIcon, importance) {
        prompt("#", `App.SetInForeground(\f${title}\f${text}\f${largeIcon}\f${smallIcon}\f${importance}`);
    };
    alt.setJoystickOptions = function (options) {
        prompt("#", `App.SetJoystickOptions(\f${options}`);
    };
    alt.setKioskMode = function (mode, enable, options) {
        prompt("#", `App.SetKioskMode(\f${mode}\f${enable}\f${options}`);
    };
    alt.setLanguage = function (name) {
        const json = alt.readFile("lang.json");
        _languages = JSON.parse(json);
        _curLang = _languages.codes[name.toLowerCase()];
    };
    alt.setMenu = function (list, iconPath) {
        prompt("#", `App.SetMenu(${list}\f${iconPath}`);
    };
    alt.setMockLocation = function (lat, lng, accuracy, speed) {
        prompt("#", `App.SetMockLocation(\f${lat}\f${lng}\f${accuracy}\f${speed}`);
    };
    alt.setNavBarColor = function (color) {
        prompt("#", `App.SetNavBarColor(\f${color}`);
    };
    alt.setOnBroadcast = function (callback, action) {
        prompt("#", `App.SetOnBroadcast(\f${_Cbm(callback)}\f${action}`);
    };
    alt.setOnDebug = function (callback) {
        prompt("#", `App.SetOnDebug(\f${_Cbm(callback)}`);
    };
    alt.setOnError = function (callback) {
        prompt("#", `App.SetOnError(\f${_Cbm(callback)}`);
    };
    alt.setOnKey = function (callback) {
        prompt("#", `App.SetOnKey(\f${_Cbm(callback)}`);
    };
    alt.setOnShowKeyboard = function (callback) {
        prompt("#", `App.SetOnShowKeyboard(\f${_Cbm(callback)}`);
    };
    alt.setOnWifiChange = function (callback) {
        prompt("#", `App.SetOnWifiChange(\f${_Cbm(callback)}`);
    };
    alt.setOptions = function (options) {
        prompt("#", `App.SetOptions(\f${options}`);
    };
    alt.setOrientation = function (orient, callback) {
        prompt("#", `App.SetOrientation(\f${orient}\f${_Cbm(callback)}`);
    };
    alt.setPosition = function (left, top, width, height, options) {
        prompt("#", `App.SetPosition(\f${left}\f${top}\f${width}\f${height}\f${options}`);
    };
    alt.setPriority = function (level) {
        prompt("#", `App.SetPriority(\f${level}`);
    };
    alt.setRingerMode = function (mode) {
        prompt("#", `App.SetRingerMode(\f${mode}`);
    };
    alt.setScreenBrightness = function (level) {
        prompt("#", `App.SetScreenBrightness(\f${level}`);
    };
    alt.setScreenMode = function (mode) {
        prompt("#", `App.SetScreenMode(\f${mode}`);
    };
    alt.setSharedApp = function (name) {
        prompt("#", `App.SetSharedApp(${name}`);
    };
    alt.setSpeakerPhone = function (on) {
        prompt("#", `App.SetSpeakerPhone(\f${on}`);
    };
    alt.setStatusBarColor = function (color) {
        prompt("#", `App.SetStatusBarColor(\f${color}`);
    };
    alt.setTheme = function (theme) {
        prompt("#", `App.SetTheme(\f${theme ? theme.id : null}`);
    };
    alt.setTitle = function (title) {
        prompt("#", `App.SetTitle(${title}`);
    };
    alt.setUserAgent = function (agent) {
        prompt("#", `App.SetUserAgent(\f${agent}`);
    };
    alt.setUserCreds = function (name, password) {
        prompt("#", `App.SetUserCreds(\f${name}\f${password}`);
    };
    alt.setVolume = function (stream, level, options) {
        prompt("#", `App.SetVolume(\f${stream}\f${level}\f${options}`);
    };
    alt.setWifiApEnabled = function (enable, ssid, key) {
        prompt("#", `App.SetWifiApEnabled(\f${enable}\f${ssid}\f${key}`);
    };
    alt.setWifiEnabled = function (enable) {
        prompt("#", `App.SetWifiEnabled(\f${enable}`);
    };
    alt.showCheckList = function (title, list, callback, width, height, options) {
        return new _CheckList(title, list, callback, width, height, options);
    };
    alt.showDebug = function (show) {
        prompt("#", `App.ShowDebug(${show}`);
    };
    alt.showKeyboard = function (obj) {
        return prompt("#", `App.ShowKeyboard(\f${obj.id}`) === "true";
    };
    alt.showMenu = function () {
        prompt("#", `App.ShowMenu(`);
    };
    alt.showPopup = function (message, options) {
        prompt("#", `App.ShowPopup(${message}\f${options}`);
    };
    alt.showProgress = function (msg, options) {
        prompt("#", `App.ShowProgress(\f${msg}\f${options}`);
    };
    alt.showProgressBar = function (title, percent, options) {
        prompt("#", `App.ShowProgressBar(\f${title}\f${percent}\f${options}`);
    };
    alt.showTextDialog = function (title, deflt, callback) {
        _ShowTextDialog(title, deflt, callback);
    };
    alt.showTip = function (message, left, top, timeOut, options) {
        _ShowTip(message, left, top, timeOut, options);
    };
    alt.simulateDrag = function (obj, x1, y1, x2, y2, step, pause) {
        prompt("#", `App.SimulateDrag(\f${obj.id}\f${x1}\f${y1}\f${x2}\f${y2}\f${step}\f${pause}`);
    };
    alt.simulateKey = function (obj, keyName, modifiers, pause) {
        prompt("#", `App.SimulateKey(\f${obj.id}\f${keyName}\f${modifiers}\f${pause}`);
    };
    alt.simulateScroll = function (obj, x, y, dx, dy, count, fling) {
        prompt("#", `App.SimulateScroll(\f${obj.id}\f${x}\f${y}\f${dx}\f${dy}\f${count}\f${fling}`);
    };
    alt.simulateTouch = function (obj, x, y, dir) {
        prompt("#", `App.SimulateTouch(\f${obj.id}\f${x}\f${y}\f${dir}`);
    };
    alt.start = function () {
        if (typeof OnStart === "function") {
            OnStart();
            prompt("#", "_Start");
            _started = true;
        }
    };
    alt.startApp = function (file, options, intent) {
        prompt("#", `App.StartApp(\f${file}\f${options}\f${intent}`);
    };
    alt.startDebugServer = function () {
        prompt("#", `App.StartDebugServer(`);
    };
    alt.startService = function (packageName, className) {
        prompt("#", `App.StartService(\f${packageName}\f${className}`);
    };
    alt.stopApp = function (name) {
        prompt("#", `App.StopApp(${name}`);
    };
    alt.stopDebugServer = function () {
        prompt("#", `App.StopDebugServer(`);
    };
    alt.stopService = function () {
        prompt("#", `App.StopService(`);
    };
    alt.sysExec = function (cmd, options, maxRead, timeout) {
        return prompt("#", `App.SysExec(\f${cmd}\f${options}\f${maxRead}\f${timeout}`);
    };
    alt.textToSpeech = function (text, pitch, rate, callback, stream, locale, engine) {
        prompt("#", `App.TextToSpeech(\f${text}\f${pitch}\f${rate}\f${_Cbm(callback)}\f${stream}\f${locale}\f${engine}`);
    };
    alt.toBack = function () {
        prompt("#", `App.ToBack(`);
    };
    alt.toFront = function () {
        prompt("#", `App.ToFront(`);
    };
    alt.translate = function (cancel, ok) {
        prompt("#", `App.Translate(\f${cancel}\f${ok}`);
    };
    alt.unlock = function () {
        prompt("#", `App.Unlock(`);
    };
    alt.unlockDrawer = function (side) {
        prompt("#", `App.UnlockDrawer(\f${side}`);
    };
    alt.unpairBtDevice = function (address, callback) {
        prompt("#", `App.UnpairBtDevice(\f${address}\f${_Cbm(callback)}`);
    };
    alt.unzipFile = function (src, dest) {
        prompt("#", `App.UnzipFile(\f${src}\f${dest}`);
    };
    alt.updateProgressBar = function (percent) {
        prompt("#", `App.UpdateProgressBar(\f${percent}`);
    };
    alt.uploadFile = function (url, file, name, callback) {
        prompt("#", `App.UploadFile(\f${url}\f${file}\f${name}\f${_Cbm(callback)}`);
    };
    alt.uri2Path = function (uri) {
        return prompt("#", `App.Uri2Path(\f${uri}`);
    };
    alt.vibrate = function (pattern) {
        prompt("#", `App.Vibrate(${pattern}`);
    };
    alt.wait = function (secs) {
        prompt("#", `App.Wait(${secs}`);
    };
    alt.wakeUp = function () {
        prompt("#", `App.WakeUp(`);
    };
    alt.wifiConnect = function (ssid, key) {
        prompt("#", `App.WifiConnect(\f${ssid}\f${key}`);
    };
    alt.wifiScan = function (callback, options) {
        prompt("#", `App.WifiScan(\f${_Cbm(callback)}\f${options}`);
    };
    alt.writeFile = function (file, text, mode, encoding) {
        prompt("#", `App.WriteFile(\f${file}\f${text}\f${mode}\f${encoding}`);
    };
    alt.zipFile = function (src, dest) {
        prompt("#", `App.ZipFile(\f${src}\f${dest}`);
    };
    alt.zipFolder = function (src, dest) {
        prompt("#", `App.ZipFile(\f${src}\f${dest}`);
    };
})(alt || (alt = {}));
