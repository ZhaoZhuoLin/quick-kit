
/**
 * @description 校验邮箱地址
 * @param mail 
 * @returns boolean
 */
export const validateEmail = (mail: string): boolean => {
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    return reg.test(mail)
}


/**
 * @description 经纬度转为度分秒
 * @param {number} degrees 
 * @returns string
 */
export function convertDecimalDegrees(degrees: number) {
    // 确保输入是数字类型  
    if (typeof degrees !== 'number') {
        throw new Error('输入必须为数字类型');
    }

    // 提取整数部分和小数部分  
    const [integerPart, decimalPart] = degrees.toString().split('.');

    // 计算度、分、秒  
    const degreesInt = parseInt(integerPart);
    const minutes = parseInt((decimalPart || '0').slice(0, 2));
    const seconds = String(parseFloat((decimalPart || '0').slice(2)) * 60).slice(0, 3);

    // 返回度分秒格式的字符串  
    // return `${degreesInt}°${minutes}′${seconds.toFixed(4)}″`;  
    return `${degreesInt}°${minutes}′${seconds}″`;
}