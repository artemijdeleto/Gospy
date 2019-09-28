import { terser } from "rollup-plugin-terser";

let config = {};

if (process.env.BUILD === 'development') {
  config = {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/gospy.js',
        format: 'iife'
      }
    ]
  };
} else {
  config = {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/gospy.min.js',
        format: 'iife'
      }
    ],
    plugins: [
      terser()
    ]
  };
}

export default config;