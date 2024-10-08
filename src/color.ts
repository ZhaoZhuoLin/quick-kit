/**
 * @description 判断字符串是否是十六进制的颜色值
 * @param value 
 * @returns boolean
 */
const isColorHex = (value: string): boolean => {
    return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value);
}

/**
 * @description 将十六进制字符串转为rgba
 * @param hex 
 * @param alpha 
 * @returns string 
 */
const hexToRgba = (hex: string, alpha = 1) => {
    hex = hex.replace("#", '');
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b},${alpha})`
}

export {
    isColorHex,
    hexToRgba
};
