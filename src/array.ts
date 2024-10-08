/**
 * @description 一维数组去重
 */
const arrayUnique = (arr: Array<string | number>) => {
    let hash: Array<string | number> = [];
    for (let i = 0; i < arr.length; i++) {
        // const element = array[i];
        if (hash.indexOf(arr[i]) === -1) {
            hash.push(arr[i])
        }
    }
    return hash
}

export {
    arrayUnique
}