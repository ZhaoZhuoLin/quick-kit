declare const _default: {
    isColorHex: (value: string) => boolean;
    hexToRgba: (hex: string, alpha?: number) => string;
    defined: (value: any) => boolean;
    defaultValue: (a: any, b: any) => any;
    validateEmail: (mail: string) => boolean;
    arrayUnique: (arr: Array<string | number>) => (string | number)[];
    jsonToUrlParams: (json: Record<string, any>) => string;
};
export default _default;
