# quick-kit

Fast and easy-to-use front-end JS tool library
快速和易于使用的前端 JS 工具库

## 1.使用 npm 开发

```bash
# 进行安装
pnpm add quickKit

# 进入
import qk from "quickKit"
```

## Example

```js
/**
 * @description 判断value是否为defined
 * @param value
 * @returns boolean
 */
console.log(qk.defined("")); //true

/**
 * @description 设置一个默认值
 * @param a any
 * @param b any
 * @returns a | b
 */
let currentVal = 100;
console.log(qk.defaultValue(currentVal, 1000)); //100

/**
 * @description 判断字符串是否是十六进制的颜色值
 * @param value
 * @returns boolean
 */
console.log(qk.isColorHex("#000000")); //true

/**
 * @description 将十六进制字符串转为rgba
 * @param hex
 * @param alpha
 * @returns string
 */
console.log(qk.hexToRgba("#000000")); //rgba(0, 0, 0,1)

/**
 * @description 校验邮箱地址
 * @param mail
 * @returns boolean
 */
console.log(qk.validateEmail("zzl7220@163.com")); //true
console.log(qk.validateEmail("zzl7220@163")); //false

/**
 * @description 一维数组去重
 */
console.log(qk.arrayUnique([1, 1, 2, 2])); // [1,2]

/**
 * @description: 将JSON对象转为URL参数字符串
 * @param json
 * @returns string
 */
console.log(
  qk.jsonToUrlParams({
    name: "PRE",
    value: 1,
  })
); //name=PRE&value=1
```
