import View from "./view";
export default class Cam extends View {
    constructor(id) {
        super(id);
    }
    autoCapture(path, file, maxCount) {
        prompt(this.id, `Cam.AutoCapture(${path}\f${file}\f${maxCount}`);
    }
    findFaces(max) {
        return JSON.parse(prompt(this.id, `Cam.FindFaces(\f${max}`));
    }
    getCameraCount() {
        return parseInt(prompt(this.id, `Cam.GetCameraCount(`));
    }
    getColorEffects() {
        return prompt(this.id, `Cam.GetColorEffects(`);
    }
    getImageHeight() {
        return parseInt(prompt(this.id, `Cam.GetImageHeight(`));
    }
    getImageWidth() {
        return parseInt(prompt(this.id, `Cam.GetImageWidth(`));
    }
    getMaxZoom() {
        return parseInt(prompt(this.id, `Cam.GetMaxZoom(`));
    }
    getParameters() {
        return prompt(this.id, `Cam.GetParams(\f`);
    }
    getPictureSizes() {
        return prompt(this.id, `Cam.GetPictureSizes(`);
    }
    getPixelData(format, left, top, width, height) {
        return prompt(this.id, `Cam.GetPixelData(\f${format}\f${left}\f${top}\f${width}\f${height}`);
    }
    getType() {
        return "CameraView";
    }
    getZoom() {
        return parseInt(prompt(this.id, `Cam.GetZoom(`));
    }
    hasFlash() {
        return prompt(this.id, `Cam.HasFlash(`) === "true";
    }
    isRecording() {
        return prompt(this.id, `Cam.IsRecording(`) === "true";
    }
    motionMosaic(xtiles, ytiles, sensitivity, minPeriod, img) {
        prompt(this.id, `Cam.MotionMosaic(${xtiles}\f${ytiles}\f${sensitivity}\f${minPeriod}\f${img ? img.id : null}`);
    }
    record(file, seconds) {
        prompt(this.id, `Cam.Record(\f${file}\f${seconds}`);
    }
    reportColors(list, callback, sampSize, maxRate) {
        prompt(this.id, `Cam.ReportColors(\f${list}\f${_Cbm(callback)}\f${sampSize}\f${maxRate}`);
    }
    setColorEffect(effect) {
        prompt(this.id, `Cam.SetColorEffect(\f${effect}`);
        return this;
    }
    setDuplicateImage(img1, img2) {
        prompt(this.id, `Cam.SetDuplicateImage(\f${img1 ? img1.id : null}\f${img2 ? img2.id : null}`);
        return this;
    }
    setFlash(onoff) {
        prompt(this.id, `Cam.SetFlash(${onoff}`);
        return this;
    }
    setFocusMode(mode) {
        prompt(this.id, `Cam.SetFocusMode(\f${mode}`);
        return this;
    }
    setOnFocus(callback) {
        prompt(this.id, `Cam.SetOnFocus\f${_Cbm(callback)}`);
        return this;
    }
    setOnMotion(callback) {
        prompt(this.id, `Cam.SetOnMotion(${_Cbm(callback)}`);
        return this;
    }
    setOnPicture(callback) {
        prompt(this.id, `Cam.SetOnPicture\f${_Cbm(callback)}`);
        return this;
    }
    setOnReady(callback) {
        prompt(this.id, `Cam.SetOnReady(${_Cbm(callback)}`);
        return this;
    }
    setOrientation(angle) {
        prompt(this.id, `Cam.SetOrientation(\f${angle}`);
        return this;
    }
    setParameter(name, value) {
        if (typeof value === "string") {
            prompt(this.id, `Cam.SetParam(\f${name}\f${value}`);
        }
        else {
            prompt(this.id, `Cam.SetParamNum(\f${name}\f${value}`);
        }
        return this;
    }
    setPictureSize(width, height) {
        prompt(this.id, `Cam.SetPictureSize(\f${width}\f${height}`);
        return this;
    }
    setPostRotation(angle) {
        prompt(this.id, `Cam.SetPostRotation(\f${angle}`);
        return this;
    }
    setPreviewImage(img) {
        prompt(this.id, `Cam.SetPreviewImage(${img ? img.id : null}`);
        return this;
    }
    setSound(onoff) {
        prompt(this.id, `Cam.SetSound(${onoff}`);
        return this;
    }
    setVideoSize(width, height) {
        prompt(this.id, `Cam.SetVideoSize(\f${width}\f${height}`);
        return this;
    }
    setZoom(level) {
        prompt(this.id, `Cam.SetZoom(\f${level}`);
        return this;
    }
    startPreview() {
        prompt(this.id, `Cam.StartPreview(`);
    }
    stop() {
        prompt(this.id, `Cam.Stop(`);
    }
    stopPreview() {
        prompt(this.id, `Cam.StopPreview(`);
    }
    stream(ip, port, quality, fps, mtu) {
        prompt(this.id, `Cam.Stream(${ip}\f${port}\f${quality}\f${fps}\f${mtu}`);
    }
    takePicture(file) {
        prompt(this.id, `Cam.TakePicture(${file}`);
    }
}
