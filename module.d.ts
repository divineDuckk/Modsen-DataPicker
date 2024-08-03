declare module 'rollup-plugin-terser';
declare module 'rollup-plugin-peer-deps-external';

declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  const content: string;
  export default content;
}
