import path from 'path';
import { cssModules } from 'rollup-plugin-css-modules';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import url from 'rollup-plugin-url';
import { fileURLToPath } from 'url';

import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import svgr from '@svgr/rollup';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json' with { type: 'json' };

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    alias({
      entries: [{ find: '@src', replacement: path.resolve(__dirname, 'src') }],
    }),
    url({
      include: '**/*.svg',
      limit: 0,
    }),
    svgr(),
    postcss({
      modules: true,
      extract: false,
      inject: true,
      autoModules: true,
    }),
    cssModules({
      include: '**/*.module.css',
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    babel({
      exclude: 'node_modules/**',
      configFile: './.babelrc',
      babelHelpers: 'runtime',
    }),
    terser(),
    external(),
    resolve(),
  ],
};
