 import resolve from 'rollup-plugin-node-resolve';
 import commonjs from 'rollup-plugin-commonjs';
 import typescript from 'rollup-plugin-typescript2';


 import {
     terser
 } from "rollup-plugin-terser"

 export default [{
     input: "./src/index.ts",
     output: [{
             file: "./lib/qk.cjs.js",
             format: 'cjs',
         },
         {
             file: "./lib/qk.esm.js",
             format: 'esm',

         },
         {
             file: "./lib/qk.browser.js",
             format: 'umd',
             name: 'Wej',

         }
     ],
     plugins: [
         commonjs(), // 可以将CommonJS 转换为 ES2015
         typescript(), // 解析TypeScript
         terser(),
         resolve()
     ]
 }]