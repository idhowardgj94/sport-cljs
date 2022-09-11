import { ReactBundle } from './util';
import path from 'path'
export default [
  ReactBundle(path.resolve(__dirname, "./date-picker/index.js"), "public/date-picker.js"),
];
