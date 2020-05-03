export declare const sqlitePlugin: {
    sqliteFeatures: {
        isSQLitePlugin: boolean;
    };
    openDatabase: (...args: any[]) => any;
    deleteDatabase: (first: any, success: any, error: any) => void;
};
