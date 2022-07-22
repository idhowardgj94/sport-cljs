import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import { terser } from "rollup-plugin-terser";

export default {
  input: path.resolve(__dirname, "./index.js"),
  output: {
    file: "src/main/vendor/date-picker.js",
    format: "esm",
    sourcemap: true,
  },

  plugins: [
    image(),
    postcss({
      extensions: [".css"],
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    terser(),
    commonjs(),
  ]
};