import { defined, defaultValue } from "./judge"
import { isColorHex, hexToRgba } from "./color";
import { validateEmail } from "./validate"
import { arrayUnique } from "./array"
import { jsonToUrlParams } from "./jsonToUrlParams"
export default {
    isColorHex,
    hexToRgba,
    defined,
    defaultValue,
    validateEmail,
    arrayUnique,
    jsonToUrlParams
}