declare const _default: {
    copy(obj?: {}, type?: string): {};
    jsonCopy(obj?: {}): any;
    forinCopy(obj?: any): any;
    rem(val?: string | number): string | number;
    px(val?: string | number): string | number;
    fdate(date?: any, fmt?: string): string;
    fquery(query?: string): any;
    fprice(_str?: string | number, tofixd?: number): string;
    fnum(num?: string | number): string | number;
    checkCardID(cardID: string): boolean;
    hideCardID(cardID: string): string;
    checkPhone(phone: string): boolean;
    hidePhone(phone: string): string;
    checkEmail(email: string): boolean;
    checkValEmpty(str: any): boolean;
    checkBankCard(iccid: string): boolean;
};
export default _default;
