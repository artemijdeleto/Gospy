import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/gospy.js',
      format: 'iife'
    }
  ],
  plugins: [
    terser()
  ]
};