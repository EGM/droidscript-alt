import AdView from "./adview";
import MediaPlayer from "./mediaplayer";
import BluetoothList from "./bluetoothlist";
import Button from "./button";
import BluetoothSerial from "./bluetoothserial";
import CameraView from "./cameraview";
import CodeEdit from "./codeedit";
import CheckBox from "./checkbox";
import CloudStore from "./cloudstore";
import Crypt from "./crypt";
import Dialog from "./dialog";
import Downloader from "./downloader";
import Email from "./email";
import File from "./file";
import Image from "./image";
import Layout from "./layout";
import ListDialog from "./listdialog";
import Locator from "./locator";
import List from "./list";
import MediaStore from "./mediastore";
import NetClient from "./netclient";
import Notification from "./notification";
import Overlay from "./overlay";
import PlayStore from "./playstore";
import Pst from "./phonestate";
import AudioRecorder from "./audiorecorder";
import Scroller from "./scroller";
import Seekbar from "./seekbar";
import SMS from "./sms";
import Sensor from "./sensor";
import Spinner from "./spinner";
import SpeechRec from "./speechrec";
import Service from "./service";
import Synth from "./synth";
import SysProc from "./sysproc";
import Theme from "./theme";
import Toggle from "./toggle";
import TextEdit from "./textedit";
import Text from "./text";
import USBSerial from "./usbserial";
import VideoView from "./videoview";
import WebServer from "./webserver";
import WebView from "./webview";
import Wallpaper from "./wallpaper";
import { _WifiScan } from "./wifiscan";
import YesNoDialog from "./yesnodialog";
import ZipUtil from "./ziputil";
import Component from "./component";
import { sqlitePlugin } from "./sql";
/** Namespace for DroidScript commands. */
// eslint-disable-next-line
export var alt;
(function (alt) {
    /** Creates and adds a AdView to a Layout. */
    alt.addAdView = function (layout, unitId, testId, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddAdView(\f${unitId}\f${testId}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new AdView(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a Button to a Layout. */
    alt.addButton = function (layout, text, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddButton(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Button(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a CameraView to a Layout. */
    alt.addCameraView = function (layout, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddCameraView(${width}\f${height}\f${options}`);
        if (ret) {
            return new CameraView(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a CheckBox to a Layout. */
    alt.addCheckBox = function (layout, text, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddCheckBox(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new CheckBox(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a CodeEdit to a Layout. */
    alt.addCodeEdit = function (layout, text, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddCodeEdit(\f${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new CodeEdit(ret);
        }
        else {
            return null;
        }
    };
    /** AddDrawer adds layout as drawer on a given side. */
    alt.addDrawer = function (layout, side, width, grabWidth) {
        prompt("#", `App.AddDrawer(\f${layout.id}\f${side}\f${width}\f${grabWidth}`);
    };
    /** Creates and adds a Image to a Layout. */
    alt.addImage = function (layout, file, width, height, options, w, h) {
        const ret = prompt(layout ? layout.id : null, `App.AddImage(${file}\f${width}\f${height}\f${options}\f${w}\f${h}`);
        if (ret) {
            return new Image(ret);
        }
        else {
            return null;
        }
    };
    /** AddLayout adds a layout to the screen so that it is visible (if not hidden with setVisibility) */
    alt.addLayout = function (layout, type, options) {
        if (!type) {
            prompt("#", `App.AddLayout(${layout.id}`);
        }
        else {
            const ret = prompt(layout ? layout.id : null, `App.AddLayout(${type}\f${options}`);
            if (ret) {
                return new Layout(ret);
            }
            else {
                return null;
            }
        }
    };
    /** Creates and adds a List to a Layout. */
    alt.addList = function (layout, list, width, height, options, delimiter) {
        const ret = prompt(layout ? layout.id : null, `App.AddList(\f${list}\f${width}\f${height}\f${options}\f${delimiter}`);
        if (ret) {
            return new List(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a Scroller to a Layout. */
    alt.addScroller = function (layout, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddScroller(${width}\f${height}\f${options}`);
        if (ret) {
            return new Scroller(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a SeekBar to a Layout. */
    alt.addSeekBar = function (layout, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddSeekBar(${width}\f${height}\f${options}`);
        if (ret) {
            return new Seekbar(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a Spinner to a Layout. */
    alt.addSpinner = function (layout, list, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddSpinner(${list}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Spinner(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a Text to a Layout. */
    alt.addText = function (layout, text, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddText(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Text(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a TextEdit to a Layout. */
    alt.addTextEdit = function (layout, text, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddTextEdit(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new TextEdit(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a Toggle to a Layout. */
    alt.addToggle = function (layout, text, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddToggle(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Toggle(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a VideoView to a Layout. */
    alt.addVideoView = function (layout, width, height, options) {
        const ret = prompt(layout ? layout.id : null, `App.AddVideoView(\f${width}\f${height}\f${options}`);
        if (ret) {
            return new VideoView(ret);
        }
        else {
            return null;
        }
    };
    /** Creates and adds a WebView to a Layout. */
    alt.addWebView = function (layout, width, height, options, zoom) {
        const ret = prompt(layout ? layout.id : null, `App.AddWeb(\f${width}\f${height}\f${options}\f${zoom}`);
        if (ret) {
            return new WebView(ret);
        }
        else {
            return null;
        }
    };
    /**
     * Shows a simple text dialog with a colored title and a 'Ok' button to exit.
     *
     * If title was not given the dialog looks like a normal alert box.
     *
     * Without the `NoDim` option the background behind the dialog will be darkened.
     */
    alt.alert = function (message, title, options, hue) {
        prompt("#", `App.Alert(\f${message}\f${title}\f${options}\f${hue}`);
    };
    /** `animate` calls a function repeatedly like `setInterval()` but with the
     * current time (`Date.getTime()`) and the difference to the last call in
     * milliseconds as parameter. */
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
    /** Used for broadcasting messages between DroidScript apps. */
    alt.broadcast = function (type, message) {
        prompt("#", `App.Broadcast(${type}\f${message}`);
    };
    /**
     * Send a broadcasting intent with a custom action.
     * @param action The general action to be performed, such as ACTION_VIEW,
     * ACTION_EDIT, ACTION_MAIN, etc.
     * @param category Gives additional information about the action to execute.
     * For example, CATEGORY_LAUNCHER means it should appear in the Launcher as a
     * top-level application, while CATEGORY_ALTERNATIVE means it should be included
     * in a list of alternative actions the user can perform on a piece of data.
     * @param data The data to operate on, such as a person record in the contacts
     * database, expressed as a Uri.
     * @param type MIMETYPE of data
     * @param extras This is a Bundle of any additional information. This can be
     * used to provide extended information to the component. For example, if we
     * have a action to send an e-mail message, we could also include extra pieces
     * of data here to supply a subject, body, etc.
     * @param options Comma seperated list.
     */
    alt.broadcastIntent = function (action, category, data, type, extras, options) {
        prompt("#", `App.BroadcastIntent(\f${action}\f${category}\f${data}\f${type}\f${extras}\f${options}`);
    };
    /** Call is used to call the given phone number. */
    alt.call = function (number) {
        prompt("#", `App.Call(\f${number}`);
    };
    /** Checks if the app is licensed with Google Play. */
    alt.checkLicense = function (key) {
        prompt("#", `App.CheckLicense(\f${key}`);
    };
    /** CheckPermission checks whether the permission of a particular component
     * has been granted. */
    alt.checkPermission = function (type) {
        return prompt("#", `App.CheckPermission(\f${type}`);
    };
    /** Opens an Android dialog and allows the user to select one of his
     * registered Google/Gmail accounts or add one. */
    alt.chooseAccount = function (callback) {
        prompt("#", `App.ChooseAccount(\f${_Cbm(callback)}`);
    };
    /** Opens the Contacts app so that the user can select the name and either the
     * phone number or email address of a user. */
    alt.chooseContact = function (type, callback) {
        prompt("#", `App.ChooseContact(\f${type}\f${_Cbm(callback)}`);
    };
    /**
     * Opens a file picker for user to select a file.
     * @param message Message to display.
     * @param type Comma delimited list of mimetypes.
     * @param callback Function to call with resulting path.
     * @param folder Starting folder.
     */
    alt.chooseFile = function (message, type, callback, folder) {
        prompt("#", `App.ChooseFile(\f${message}\f${type}\f${_Cbm(callback)}\f${folder}`);
    };
    /**
     * Opens the photo gallery for user to select an image.
     * @param options Comma "," separated: "" or "internal" or "external".
     * @param callback Function to call with resulting path.
     */
    alt.chooseImage = function (options, callback) {
        prompt("#", `App.ChooseImage(\f${options}\f${_Cbm(callback)}`);
    };
    alt.chooseWifi = function (title1, title2, callback, options, extra) {
        const wifi = new _WifiScan(title1, title2, callback, options, extra);
        wifi.Select();
    };
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
            return new AdView(ret);
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
            _rec = new AudioRecorder(ret);
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
            _btl = new BluetoothList(ret);
        }
        else {
            _btl = null;
            return _btl;
        }
    };
    alt.createBluetoothSerial = function (mode) {
        const ret = prompt("#", `App.CreateBluetoothSerial(\f${mode}`);
        if (ret) {
            return new BluetoothSerial(ret);
        }
        else {
            return null;
        }
    };
    alt.createButton = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateButton(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Button(ret);
        }
        else {
            return null;
        }
    };
    alt.createCameraView = function (width, height, options) {
        const ret = prompt("#", `App.CreateCameraView(${width}\f${height}\f${options}`);
        if (ret) {
            return new CameraView(ret);
        }
        else {
            return null;
        }
    };
    alt.createCheckBox = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateCheckBox(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new CheckBox(ret);
        }
        else {
            return null;
        }
    };
    alt.createCloudStore = function (apiKey) {
        const ret = prompt("#", `App.CreateCloudStore(\f${apiKey}`);
        if (ret) {
            return new CloudStore(ret);
        }
        else {
            return null;
        }
    };
    alt.createCodeEdit = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateCodeEdit(\f${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new CodeEdit(ret);
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
            _crp = new Crypt(ret);
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
            return new Dialog(ret);
        }
        else {
            return null;
        }
    };
    alt.createDownloader = function (options) {
        const ret = prompt("#", `App.CreateDownloader(\f${options}`);
        if (ret) {
            return new Downloader(ret);
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
            _eml = new Email(ret);
        }
        else {
            _eml = null;
        }
        return _eml;
    };
    alt.createFile = function (file, mode) {
        const ret = prompt("#", `App.CreateFile(\f${file}\f${mode}`);
        if (ret) {
            return new File(ret);
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
            return new Image(ret);
        }
        else {
            return null;
        }
    };
    alt.createLayout = function (type, options) {
        const ret = prompt("#", `App.CreateLayout(${type}\f${options}`);
        if (ret) {
            return new Layout(ret);
        }
        else {
            return null;
        }
    };
    alt.createList = function (list, width, height, options, delim) {
        const ret = prompt("#", `App.CreateList(\f${list}\f${width}\f${height}\f${options}\f${delim}`);
        if (ret) {
            return new List(ret);
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
            _ldg = new ListDialog(ret);
        }
        else {
            _ldg = null;
        }
        return _ldg;
    };
    alt.createLocator = function (type, options) {
        const ret = prompt("#", `App.CreateLocator(${type}\f${options}`);
        if (ret) {
            return new Locator(ret);
        }
        else {
            return null;
        }
    };
    alt.createMediaPlayer = function () {
        const ret = prompt("#", `App.CreateMediaPlayer(`);
        if (ret) {
            return new MediaPlayer(ret);
        }
        else {
            return null;
        }
    };
    alt.createMediaStore = function () {
        const ret = prompt("#", `App.CreateMediaStore(`);
        if (ret) {
            return new MediaStore(ret);
        }
        else {
            return null;
        }
    };
    alt.createNetClient = function (type) {
        const ret = prompt("#", `App.CreateNetClient(${type}`);
        if (ret) {
            return new NetClient(ret);
        }
        else {
            return null;
        }
    };
    alt.createNotification = function (options) {
        const ret = prompt("#", `App.CreateNotification(\f${options}`);
        if (ret) {
            return new Notification(ret);
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
            return new Overlay(ret);
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
            return new PlayStore(ret);
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
            return new Scroller(ret);
        }
        else {
            return null;
        }
    };
    alt.createSeekBar = function (width, height, options) {
        const ret = prompt("#", `App.CreateSeekBar(${width}\f${height}\f${options}`);
        if (ret) {
            return new Seekbar(ret);
        }
        else {
            return null;
        }
    };
    alt.createSensor = function (type, options) {
        const ret = prompt("#", `App.CreateSensor(${type}\f${options}`);
        if (ret) {
            return new Sensor(ret);
        }
        else {
            return null;
        }
    };
    alt.createService = function (packageName, className, callback, options) {
        const ret = prompt("#", `App.CreateService(\f${packageName}\f${className}\f${options}\f${_Cbm(callback)}`);
        if (ret) {
            return new Service(ret);
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
            _spr = new SpeechRec(ret);
        }
        else {
            _spr = null;
        }
        return _spr;
    };
    alt.createSpinner = function (list, width, height, options) {
        const ret = prompt("#", `App.CreateSpinner(${list}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Spinner(ret);
        }
        else {
            return null;
        }
    };
    alt.createSynth = function (type) {
        const ret = prompt("#", `App.CreateSynth(${type}`);
        if (ret) {
            return new Synth(ret);
        }
        else {
            return null;
        }
    };
    alt.createSysProc = function (cmd, env, dir, options) {
        const ret = prompt("#", `App.CreateSysProc(\f${cmd}\f${env}\f${dir}\f${options}`);
        if (ret) {
            return new SysProc(ret);
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
            return new Text(ret);
        }
        else {
            return null;
        }
    };
    alt.createTextEdit = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateTextEdit(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new TextEdit(ret);
        }
        else {
            return null;
        }
    };
    alt.createTheme = function (baseTheme) {
        const ret = prompt("#", `App.CreateTheme(\f${baseTheme}`);
        if (ret) {
            return new Theme(ret);
        }
        else {
            return null;
        }
    };
    alt.createToggle = function (text, width, height, options) {
        const ret = prompt("#", `App.CreateToggle(${text}\f${width}\f${height}\f${options}`);
        if (ret) {
            return new Toggle(ret);
        }
        else {
            return null;
        }
    };
    alt.createUSBSerial = function (baudRate, dataBits, stopBits, parity, device) {
        const ret = prompt("#", `App.CreateUSBSerial(\f${baudRate}\f${dataBits}\f${stopBits}\f${parity}\f${device}`);
        if (ret) {
            return new USBSerial(ret);
        }
        else {
            return null;
        }
    };
    alt.createVideoView = function (width, height, options) {
        const ret = prompt("#", `App.CreateVideoView(\f${width}\f${height}\f${options}`);
        if (ret) {
            return new VideoView(ret);
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
            _wpr = new Wallpaper(ret);
        }
        else {
            _wpr = null;
        }
        return _wpr;
    };
    alt.createWebServer = function (port, options) {
        const ret = prompt("#", `App.CreateWebServer(${port}\f${options}`);
        if (ret) {
            return new WebServer(ret);
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
            return new WebView(ret);
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
            _ynd = new YesNoDialog(ret);
        }
        else {
            _ynd = null;
        }
        return _ynd;
    };
    alt.createZipUtil = function (mode) {
        const ret = prompt("#", `App.CreateZipUtil(\f${mode}`);
        if (ret) {
            return new ZipUtil(ret);
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
    // eslint-disable-next-line
    alt.openDatabase = function (name) {
        _CreateCP("sqliteplugin");
        const db = sqlitePlugin.openDatabase(name);
        db.name = name;
        db.GetType = function () {
            return "Database";
        };
        db.GetName = function () {
            return db.name;
        };
        db.ExecuteSql = function (sql, params, success, error) {
            if (!success) {
                success = null;
            }
            if (!error) {
                error = _Err;
            }
            db.transaction(function (tx) {
                tx.executeSql(sql, params, function (tx, res) {
                    if (success) {
                        success.apply(db, [res]);
                    }
                }, function (t, e) {
                    error.apply(db, [e.message]);
                });
            }, error);
        };
        db.Close = function () {
            db.close(_Log, _Err);
        };
        db.Delete = function () {
            sqlitePlugin.deleteDatabase(db.name, _Log, _Err);
        };
        return db;
    };
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
