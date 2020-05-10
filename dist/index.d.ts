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
import YesNoDialog from "./yesnodialog";
import ZipUtil from "./ziputil";
import DSObject from "./dsobject";
export declare type ActivityType = {
    labelName: any;
    packageName: any;
    className: any;
};
export declare type BTDeviceType = {
    name: any;
    address: any;
};
export declare type InstalledAppType = {
    packageName: any;
    className: any;
    uid: any;
    targetSdkVersion: any;
    dataDir: any;
    sourceDir: any;
    publicSourceDir: any;
    nativeLibraryDir: any;
};
export declare type IntentType = {
    action: any;
    type: any;
    data: any;
    flags: any;
    extras: any;
};
export declare type LayoutType = "Linear" | "Absolute" | "Frame" | "Card";
/** "TouchThrough" | "TouchSpy" | "Left" | "Top" | "Right" | "Bottom" | "Center" | "H/VCenter" | "Wrap" | "Horizontal" | "Vertical" | "FillX/Y" */
export declare type LayoutOptionsType = string;
export declare type MemoryInfoType = {
    avail: any;
    low: any;
    threshold: any;
    total: any;
};
export declare type RunningAppType = {
    user: any;
    pid: any;
    name: any;
    foreground: any;
};
export declare type SideType = "Left" | "Right";
export declare type Permissions = "Camera" | "Storage" | "ExtSDcard" | "Network" | "Location" | "SMS" | "Calendar" | "Body" | "Contacts" | "Record" | "Phone" | "Accounts" | "License";
export declare type ContactType = "Phone" | "Email";
/** Namespace for DroidScript commands. */
export declare namespace alt {
    /** Creates and adds a AdView to a Layout. */
    const addAdView: (layout: Layout, unitId: string, testId: string, width?: number, height?: number, options?: string) => AdView;
    /** Creates and adds a Button to a Layout. */
    const addButton: (layout: Layout, text?: string, width?: number, height?: number, options?: string) => Button;
    /** Creates and adds a CameraView to a Layout. */
    const addCameraView: (layout: Layout, width?: number, height?: number, options?: string) => CameraView;
    /** Creates and adds a CheckBox to a Layout. */
    const addCheckBox: (layout: Layout, text?: string, width?: number, height?: number, options?: string) => CheckBox;
    /** Creates and adds a CodeEdit to a Layout. */
    const addCodeEdit: (layout: Layout, text?: string, width?: number, height?: number, options?: string) => CodeEdit;
    /** AddDrawer adds layout as drawer on a given side. */
    const addDrawer: (layout: Layout, side: SideType, width?: number, grabWidth?: number) => void;
    /** Creates and adds a Image to a Layout. */
    const addImage: (layout: Layout, file?: string, width?: number, height?: number, options?: string, w?: number, h?: number) => Image;
    /** AddLayout adds a layout to the screen so that it is visible (if not hidden with setVisibility) */
    const addLayout: (layout: Layout, type?: string, options?: string) => Layout;
    /** Creates and adds a List to a Layout. */
    const addList: (layout: Layout, list?: string, width?: number, height?: number, options?: number, delimiter?: string) => List;
    /** Creates and adds a Scroller to a Layout. */
    const addScroller: (layout: Layout, width?: number, height?: number, options?: string) => Scroller;
    /** Creates and adds a SeekBar to a Layout. */
    const addSeekBar: (layout: Layout, width?: number, height?: number, options?: string) => Seekbar;
    /** Creates and adds a Spinner to a Layout. */
    const addSpinner: (layout: Layout, list?: string, width?: number, height?: number, options?: string) => Spinner;
    /** Creates and adds a Text to a Layout. */
    const addText: (layout: Layout, text?: string, width?: number, height?: number, options?: string) => Text;
    /** Creates and adds a TextEdit to a Layout. */
    const addTextEdit: (layout: Layout, text?: string, width?: number, height?: number, options?: string) => TextEdit;
    /** Creates and adds a Toggle to a Layout. */
    const addToggle: (layout: Layout, text?: string, width?: number, height?: number, options?: string) => Toggle;
    /** Creates and adds a VideoView to a Layout. */
    const addVideoView: (layout: Layout, width?: number, height?: number, options?: number) => VideoView;
    /** Creates and adds a WebView to a Layout. */
    const addWebView: (layout: Layout, width?: number, height?: number, options?: string, zoom?: number) => WebView;
    /**
     * Shows a simple text dialog with a colored title and a 'Ok' button to exit.
     *
     * If title was not given the dialog looks like a normal alert box.
     *
     * Without the `NoDim` option the background behind the dialog will be darkened.
     */
    const alert: (message?: string, title?: string, options?: string, hue?: number) => void;
    /** `animate` calls a function repeatedly like `setInterval()` but with the
     * current time (`Date.getTime()`) and the difference to the last call in
     * milliseconds as parameter. */
    const animate: (callback: Function, fps?: number) => void;
    /** Used for broadcasting messages between DroidScript apps. */
    const broadcast: (type: string, message: string) => void;
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
    const broadcastIntent: (action: string, category: string, data: string, type: string, extras: string, options?: string) => void;
    /** Call is used to call the given phone number. */
    const call: (number: string) => void;
    /** Checks if the app is licensed with Google Play. */
    const checkLicense: (key: string) => void;
    /** CheckPermission checks whether the permission of a particular component
     * has been granted. */
    const checkPermission: (type: Permissions) => string;
    /** Opens an Android dialog and allows the user to select one of his
     * registered Google/Gmail accounts or add one. */
    const chooseAccount: (callback: Function) => void;
    /** Opens the Contacts app so that the user can select the name and either the
     * phone number or email address of a user. */
    const chooseContact: (type: ContactType, callback: Function) => void;
    /**
     * Opens a file picker for user to select a file.
     * @param message Message to display.
     * @param type Comma delimited list of mimetypes.
     * @param callback Function to call with resulting path.
     * @param folder Starting folder.
     */
    const chooseFile: (message?: string, type?: string, callback?: Function, folder?: string) => void;
    /**
     * Opens the photo gallery for user to select an image.
     * @param options Comma "," separated: "" or "internal" or "external".
     * @param callback Function to call with resulting path.
     */
    const chooseImage: (options?: string, callback?: Function) => void;
    const chooseWifi: (title1: any, title2: any, callback: any, options: any, extra: any) => void;
    const clearCookies: (session?: string) => void;
    const clearData: (file?: string) => void;
    const clearValue: (name: string, file?: string) => void;
    const closeDrawer: (side: SideType) => void;
    const copyFile: (src: string, dest: string) => void;
    const copyFolder: (src: string, dest: string, overwrite?: boolean, filter?: string) => void;
    const createAdView: (unitId: string, testId: string, width?: string, height?: string, options?: string) => AdView;
    const createAudioRecorder: () => AudioRecorder;
    const createBluetoothList: (filter?: string) => BluetoothList;
    const createBluetoothSerial: (mode: string) => BluetoothSerial;
    const createButton: (text?: string, width?: string, height?: string, options?: string) => Button;
    const createCameraView: (width?: number, height?: number, options?: string) => CameraView;
    const createCheckBox: (text?: string, width?: number, height?: number, options?: string) => CheckBox;
    const createCloudStore: (apiKey: string) => CloudStore;
    const createCodeEdit: (text?: string, width?: number, height?: number, options?: string) => CodeEdit;
    const createCrypt: (options?: string) => Crypt;
    const createDebug: () => void;
    const createDialog: (title?: string, options?: string) => Dialog;
    const createDownloader: (options?: string) => Downloader;
    const createEmail: (account: string, password: string) => Email;
    const createFile: (file?: string, mode?: string) => File;
    const createImage: (file?: string, width?: number, height?: number, options?: string, w?: string, h?: string) => Image;
    const createLayout: (type: LayoutType, options?: string) => Layout;
    const createList: (list?: string, width?: number, height?: number, options?: string, delim?: string) => List;
    const createListDialog: (title?: string, list?: string, options?: string) => ListDialog;
    const createLocator: (type: string, options?: string) => Locator;
    const createMediaPlayer: () => MediaPlayer;
    const createMediaStore: () => MediaStore;
    const createNetClient: (type: string) => NetClient;
    const createNotification: (options?: string) => Notification;
    const createObject: (name: string, type: string) => DSObject;
    const createOverlay: (options?: string) => Overlay;
    const createPhoneState: (types: string) => Pst;
    const createPlayStore: () => PlayStore;
    const createSMS: () => SMS;
    const createScroller: (width?: number, height?: number, options?: string) => Scroller;
    const createSeekBar: (width?: number, height?: number, options?: string) => Seekbar;
    const createSensor: (type: string, options?: string) => Sensor;
    const createService: (packageName: string, className?: string, callback?: Function, options?: string) => Service;
    const createShortcut: (name: string, iconFile: string, file: string, options?: string) => void;
    const createSpeechRec: (options?: string) => SpeechRec;
    const createSpinner: (list: any, width: any, height: any, options: any) => Spinner;
    const createSynth: (type: string) => Synth;
    const createSysProc: (cmd: string, env?: string, dir?: string, options?: string) => SysProc;
    const createText: (text?: string, width?: number, height?: number, options?: string) => Text;
    const createTextEdit: (text?: string, width?: number, height?: number, options?: string) => TextEdit;
    const createTheme: (baseTheme?: string) => Theme;
    const createToggle: (text?: string, width?: number, height?: number, options?: string) => Toggle;
    const createUSBSerial: (baudRate: number, dataBits: number, stopBits: number, parity: string, device: string) => USBSerial;
    const createVideoView: (width?: number, height?: number, options?: string) => VideoView;
    const createWallpaper: (options?: string) => Wallpaper;
    const createWebServer: (port?: number, options?: number) => WebServer;
    const createWebSocket: (id: string, ip: string, port: number, options: string) => DSObject;
    const createWebView: (width?: number, height?: number, options?: string, zoom?: number) => WebView;
    const createYesNoDialog: (message?: string, options?: string) => YesNoDialog;
    const createZipUtil: (mode?: string) => ZipUtil;
    const debug: (message: string) => void;
    const deleteDatabase: (name: string) => void;
    const deleteFile: (file: string) => void;
    const deleteFolder: (folder: string) => void;
    const destroyLayout: (layout: Layout) => void;
    const disableKeys: (keyList: string) => void;
    const disableTouch: (disable: boolean) => void;
    const discoverBtDevices: (filter: string, onFound: Function, onComplete: Function) => void;
    const downloadFile: (src: string, dest: string, title?: string, desc?: string, options?: string) => void;
    const enableBackKey: (enable: boolean) => void;
    const error: (message: string, line: number, file: string, quit: boolean) => void;
    const execute: (js: string) => void;
    const exit: (kill: boolean) => void;
    const extExec: (name: string, file: string, args: string, options?: string) => string;
    const extractAssets: (src: string, dest: string, overwrite?: boolean, options?: string) => void;
    const extractPlugins: () => void;
    const fileExists: (file: string) => boolean;
    const folderExists: (folder: string) => boolean;
    const getAccounts: () => string;
    const getActivities: () => ActivityType[];
    const getAppName: () => string;
    const getAppPath: () => string;
    const getBatteryLevel: () => number;
    const getBluetoothAddress: () => string;
    const getBluetoothName: () => string;
    const getBtProfileState: (type: string) => string;
    const getBuildNum: () => number;
    const getChargeType: () => string;
    const getClipboardText: () => string;
    const getCountry: () => string;
    const getCountryCode: () => string;
    const getDSVersion: () => number;
    const getData: (name: string) => string;
    const getDatabaseFolder: () => string;
    const getDefaultOrientation: () => string;
    const getDeviceId: () => string;
    const getDisplayHeight: () => number;
    const getDisplayWidth: () => number;
    const getDrawerState: (side: SideType) => string;
    const getEnv: (name: string) => string;
    const getExternalFolder: () => string;
    const getFileDate: (file: string) => Date;
    const getFileSize: (file: string) => number;
    const getFreeSpace: (mode: string) => number;
    const getIPAddress: () => string;
    const getInstalledApps: () => InstalledAppType[];
    const getIntent: () => IntentType;
    const getInternalFolder: () => string;
    const getJoystickName: (id: string) => string;
    const getJoystickState: (id: string, key: string) => number;
    const getKeyboardHeight: () => number;
    const getLanguage: () => string;
    const getLanguageCode: () => string;
    const getLastButton: () => DSObject;
    const getLastCheckBox: () => DSObject;
    const getLastImage: () => DSObject;
    const getLastToggle: () => DSObject;
    const getMacAddress: () => string;
    const getMediaFile: (appName: string, ext?: string) => string;
    const getMemoryInfo: () => MemoryInfoType;
    const getMetadata: (file: string, keys?: string) => string;
    const getModel: () => string;
    const getName: () => string;
    const getNotifyId: () => string;
    const getOSVersion: () => number;
    const getObjects: () => any;
    const getOptions: () => string;
    const getOrientation: () => string;
    const getPackageName: () => string;
    const getPairedBtDevices: () => BTDeviceType[];
    const getPath: () => string;
    const getPermission: (type: string, callback: Function) => void;
    const getPrivateFolder: (name: string) => string;
    const getRSSI: () => number;
    const getResourceId: (name: string, options?: string) => number;
    const getRingerMode: () => string;
    const getRotation: () => number;
    const getRunningApps: () => RunningAppType[];
    const getRunningServices: () => {
        user: any;
        pid: any;
        name: any;
    }[];
    const getSSID: () => string;
    const getScreenDensity: () => number;
    const getScreenHeight: (options?: string) => number;
    const getScreenWidth: (options?: string) => number;
    const getSharedFiles: () => string[];
    const getSharedText: (index: number) => string;
    const getSpeakerPhone: () => boolean;
    const getSpecialFolder: (name: string) => string;
    const getThumbnail: (src: string, dest: string, width: number, height: number) => void;
    const getTop: () => number;
    const getType: () => string;
    const getUser: () => string;
    const getVersion: () => number;
    const getVolume: (stream: any) => number;
    const goToSleep: () => void;
    const hasSoftNav: () => boolean;
    const hideKeyboard: () => void;
    const hideProgress: () => void;
    const hideProgressBar: () => void;
    const httpRequest: (type: any, baseUrl: any, path: any, params: any, callback: any, headers: any) => void;
    const inIDE: () => boolean;
    const installWallpaper: (packageName: any, className: any) => void;
    const isAPK: () => boolean;
    const isAppInstalled: (packageName: string) => boolean;
    const isBluetoothEnabled: () => boolean;
    const isBluetoothOn: () => boolean;
    const isBtDevicePaired: (name: string) => boolean;
    const isCharging: () => boolean;
    const isChrome: () => boolean;
    const isConnected: () => boolean;
    const isDebugEnabled: () => boolean;
    const isDebugging: () => boolean;
    const isEngine: () => boolean;
    const isFolder: (folder: string) => boolean;
    const isKeyboardShown: () => boolean;
    const isLocationEnabled: (types: string) => boolean;
    const isNavBarOnRight: () => boolean;
    const isNewVersion: () => boolean;
    const isPortrait: () => boolean;
    const isPremium: () => boolean;
    const isScreenOn: () => boolean;
    const isService: () => boolean;
    const isStarted: () => boolean;
    const isTablet: () => boolean;
    const isThings: () => boolean;
    const isWifiApEnabled: () => boolean;
    const isWifiEnabled: () => boolean;
    const killApp: (procId: string) => void;
    const language2Code: (name: string) => string;
    const listFolder: (path: string, filter?: string, limit?: number, options?: string) => string[];
    const loadBoolean: (name: string, dflt?: boolean, file?: string) => boolean;
    const loadNumber: (name: string, dflt?: number, file?: string) => number;
    const loadPlugin: (url: string) => void;
    const loadScript: (url: string, callback?: Function) => void;
    const loadText: (name: string, dflt?: string, file?: string) => string;
    const lock: () => void;
    const lockDrawer: (side: SideType) => void;
    const makeFolder: (folder: any) => void;
    const openDatabase: (name: any) => any;
    const openDrawer: (side: SideType) => void;
    const openFile: (file: string, type: string, choose: string) => void;
    const openUrl: (url: string, type: string, choose: string) => void;
    const pairBtDevice: (address: string, callback: Function) => void;
    const playRingtone: (type: string) => void;
    const playSound: (file: string) => void;
    const preventScreenLock: (mode: string) => void;
    const preventWifiSleep: () => void;
    const queryContent: (uri: string, columns: string, select: string, args: string, sort: string) => any;
    const quit: (message?: string, title?: string, options?: string) => void;
    const readFile: (file: string, encoding?: string) => string;
    const redirectAssets: (dir: string) => void;
    const removeDrawer: (side: SideType) => void;
    const removeLayout: (layout: Layout) => void;
    const renameFile: (src: string, dest: string) => void;
    const renameFolder: (src: string, dest: string) => void;
    const replaceInFile: (file: string, text: string, replace: string, options?: string) => void;
    const saveBoolean: (name: string, value: boolean, file?: string) => void;
    const saveCookies: () => void;
    const saveNumber: (name: string, value: number, file?: string) => void;
    const saveText: (name: string, value: string, file?: string) => void;
    const scanFile: (file: string) => void;
    const screenShot: (fileName: string, quality?: string) => void;
    const script: (file: string) => void;
    const sendFile: (file: string, subject?: string, text?: string, choose?: string) => void;
    const sendImage: (file: string, choose: string) => void;
    const sendIntent: (packageName?: string, className?: string, action?: string, category?: string, uri?: string, type?: string, extras?: string, options?: string, callback?: Function) => void;
    const sendMail: (address: string, subject?: string, body?: string, attach?: string, type?: string, options?: string) => void;
    const sendMessage: (message: string) => void;
    const sendSMS: (message: string, number: string) => void;
    const sendText: (text: string, subject?: string, choose?: string) => void;
    const setAlarm: (type: string, id: string, callback: Function, time: string, interval: string, options?: string) => string;
    const setAutoBoot: (auto: boolean) => void;
    const setAutoStart: (appName: string) => void;
    const setAutoWifi: (auto: boolean) => void;
    const setBackColor: (color: string) => void;
    const setBluetoothEnabled: (enable: boolean) => void;
    const setClipboardText: (text: string) => void;
    const setData: (name: string, value: string) => void;
    const setDebug: (switches: boolean) => void;
    const setDebugEnabled: (enable: boolean) => void;
    const setDensity: (dpi: number) => void;
    const setInBackground: () => void;
    const setInForeground: (title: string, text: string, largeIcon: string, smallIcon: string, importance: string) => void;
    const setJoystickOptions: (options?: string) => void;
    const setKioskMode: (mode: string, enable: boolean, options?: string) => void;
    const setLanguage: (name: string) => void;
    const setMenu: (list: string, iconPath?: string) => void;
    const setMockLocation: (lat: string, lng: string, accuracy: number, speed: number) => void;
    const setNavBarColor: (color: string) => void;
    const setOnBroadcast: (callback: Function, action: string) => void;
    const setOnDebug: (callback: Function) => void;
    const setOnError: (callback: Function) => void;
    const setOnKey: (callback: Function) => void;
    const setOnShowKeyboard: (callback: Function) => void;
    const setOnWifiChange: (callback: Function) => void;
    const setOptions: (options: string) => void;
    const setOrientation: (orient: string, callback?: Function) => void;
    const setPosition: (left: number, top: number, width?: number, height?: number, options?: string) => void;
    const setPriority: (level: string) => void;
    const setRingerMode: (mode: string) => void;
    const setScreenBrightness: (level: number) => void;
    const setScreenMode: (mode: string) => void;
    const setSharedApp: (name: string) => void;
    const setSpeakerPhone: (on: boolean) => void;
    const setStatusBarColor: (color: string) => void;
    const setTheme: (theme: Theme) => void;
    const setTitle: (title: string) => void;
    const setUserAgent: (agent: string) => void;
    const setUserCreds: (name: string, password: string) => void;
    const setVolume: (stream: string, level: number, options?: string) => void;
    const setWifiApEnabled: (enable: boolean, ssid: string, key: string) => void;
    const setWifiEnabled: (enable: boolean) => void;
    const showCheckList: (title?: string, list?: string, callback?: Function, width?: number, height?: number, options?: string) => DSObject;
    const showDebug: (show: string) => void;
    const showKeyboard: (obj: DSObject) => boolean;
    const showMenu: () => void;
    const showPopup: (message: string, options?: string) => void;
    const showProgress: (msg: string, options?: string) => void;
    const showProgressBar: (title: string, percent: number, options?: string) => void;
    const showTextDialog: (title?: string, deflt?: string, callback?: Function) => void;
    const showTip: (message: string, left?: number, top?: number, timeOut?: number, options?: string) => void;
    const simulateDrag: (obj: DSObject, x1: number, y1: number, x2: number, y2: number, step?: number, pause?: number) => void;
    const simulateKey: (obj: DSObject, keyName: string, modifiers?: string, pause?: number) => void;
    const simulateScroll: (obj: DSObject, x: number, y: number, dx: number, dy: number, count?: number, fling?: boolean) => void;
    const simulateTouch: (obj: DSObject, x: number, y: number, dir?: string) => void;
    const start: () => void;
    const startApp: (file: string, options?: string, intent?: string) => void;
    const startDebugServer: () => void;
    const startService: (packageName: string, className?: string) => void;
    const stopApp: (name: string) => void;
    const stopDebugServer: () => void;
    const stopService: () => void;
    const sysExec: (cmd: string, options?: string, maxRead?: number, timeout?: number) => string;
    const textToSpeech: (text?: string, pitch?: number, rate?: number, callback?: Function, stream?: string, locale?: string, engine?: string) => void;
    const toBack: () => void;
    const toFront: () => void;
    const translate: (cancel: string, ok: string) => void;
    const unlock: () => void;
    const unlockDrawer: (side: SideType) => void;
    const unpairBtDevice: (address: string, callback: Function) => void;
    const unzipFile: (src: string, dest: string) => void;
    const updateProgressBar: (percent: number) => void;
    const uploadFile: (url: string, file: string, name?: string, callback?: Function) => void;
    const uri2Path: (uri: string) => string;
    const vibrate: (pattern: string) => void;
    const wait: (secs: number) => void;
    const wakeUp: () => void;
    const wifiConnect: (ssid: string, key?: string) => void;
    const wifiScan: (callback: Function, options?: string) => void;
    const writeFile: (file: string, text: string, mode?: string, encoding?: string) => void;
    const zipFile: (src: string, dest: string) => void;
    const zipFolder: (src: string, dest: string) => void;
}
