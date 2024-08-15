declare module 'rollup-plugin-terser';
declare module 'rollup-plugin-peer-deps-external';

declare module '*.module.css';

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
