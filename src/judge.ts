/**
 * @description 判断value是否为defined 
 * @param value 
 * @returns boolean
 */
const defined = (value: any): boolean => {
    return value !== undefined && value !== null;
}

/**
 * @description 设置一个默认值
 * @param a any
 * @param b any
 * @returns a | b
 */
const defaultValue = (a: any, b: any): any => {
    if (a !== undefined && a !== null) {
        return a;
    }
    return b;
}

export {
    defined,
    defaultValue
}