/**
 * @description 判断字符串是否是十六进制的颜色值
 * @param value
 * @returns boolean
 */
declare const isColorHex: (value: string) => boolean;
/**
 * @description 将十六进制字符串转为rgba
 * @param hex
 * @param alpha
 * @returns string
 */
declare const hexToRgba: (hex: string, alpha?: number) => string;
export { isColorHex, hexToRgba };
