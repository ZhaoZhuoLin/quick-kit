/**
 * @description 判断value是否为defined
 * @param value
 * @returns boolean
 */
declare const defined: (value: any) => boolean;
/**
 * @description 设置一个默认值
 * @param a any
 * @param b any
 * @returns a | b
 */
declare const defaultValue: (a: any, b: any) => any;
export { defined, defaultValue };
