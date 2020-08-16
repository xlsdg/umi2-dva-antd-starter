import Constant, { CDN_HOST, BASE_PATH } from './constant.local';

const PUBLIC_PATH = `${CDN_HOST}${BASE_PATH}`;

const define = {
  'process.env.UMI_ENV': 'local',
  ...Constant,
};

// https://umijs.org/config/
export default {
  base: BASE_PATH,
  publicPath: PUBLIC_PATH,
  cssPublicPath: PUBLIC_PATH,

  define,
  manifest: {
    basePath: PUBLIC_PATH,
  },
  cssLoaderOptions: {
    localIdentName: '[local]--[hash:base64:5]',
  },
};
