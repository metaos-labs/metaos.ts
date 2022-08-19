import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import replace from '@rollup/plugin-replace'
import dts from 'rollup-plugin-dts'
import path from 'path'

import pkg from './package.json'

export const rollupExternal = [
  ...Object.keys(pkg.dependencies),
]

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'esm',
      },
    ],
    external: rollupExternal,
    plugins: [
      typescript({
        tsconfig: path.resolve(__dirname, 'tsconfig.build.json'),
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
            declarationMap: false,
          },
          exclude: ['proto', 'interface', 'scripts', 'docs'],
        },
      }),
      replace({
        NODE_ENV: JSON.stringify('production'),
        'process.env.NODE_ENV': JSON.stringify('production'),
        preventAssignment: true, // prevent build warning
      }),
      external(), // for reading the dist file
      commonjs(), // for @metamask/detect-provider
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: pkg.types, format: 'esm' }],
    plugins: [
      dts(),
    ],
  },
]
