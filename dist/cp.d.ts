export declare const cordova: {
    /**
     * Plugin callback mechanism.
     */
    callbackId: number;
    callbacks: {};
    callbackStatus: {
        NO_RESULT: number;
        OK: number;
        CLASS_NOT_FOUND_EXCEPTION: number;
        ILLEGAL_ACCESS_EXCEPTION: number;
        INSTANTIATION_EXCEPTION: number;
        MALFORMED_URL_EXCEPTION: number;
        IO_EXCEPTION: number;
        INVALID_ACTION: number;
        JSON_EXCEPTION: number;
        ERROR: number;
    };
    exec: (success: Function, fail: Function, service: any, action: any, args: any) => void;
    /**
     * Called by native code when returning successful result from an action.
     */
    callbackSuccess: (callbackId: any, args: any) => void;
    /**
     * Called by native code when returning error result from an action.
     */
    callbackError: (callbackId: any, args: any) => void;
    /**
     * Called by native code when returning the result from an action.
     */
    callbackFromNative: (callbackId: any, success: any, status: any, message: any, keepCallback: any) => void;
};
