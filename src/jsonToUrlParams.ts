/**
 * @description: 将JSON对象转为URL参数字符串
 * @param json 
 * @returns string
 */
const jsonToUrlParams = (json: Record<string, any>): string => {
    return new URLSearchParams(json).toString()
}

export {
    jsonToUrlParams
}