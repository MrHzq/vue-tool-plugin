declare const _default: (storageKey: string, prefix: string) => {
    setItem?: undefined;
    getItem?: undefined;
    removeItem?: undefined;
    clearItem?: undefined;
    clearItemAll?: undefined;
} | {
    setItem: (key?: string, data?: any) => void;
    getItem: (key?: string) => any;
    removeItem: (key: string) => void;
    clearItem: (key: any) => void;
    clearItemAll: () => void;
};
export default _default;
