import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'
import typescript from 'rollup-plugin-typescript2'

const production = process.env.NODE_ENV === 'production'

export default [
  {
    input: 'index.ts',
    output: {
      file: pkg.main,
      format: 'umd',
      sourcemap: true,
      name: 'library'
    },
    plugins: [
      resolve({ browser: true }),
      commonjs(),
      typescript(),
      babel({ extensions: ['.js', '.ts'] }),
      production && uglify()
    ]
  }
]
