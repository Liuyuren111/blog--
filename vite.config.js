import {defineConfig, loadEnv} from "vite";
import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {ElementPlusResolver} from "unplugin-vue-components/resolvers";
import legacyPlugin from '@vitejs/plugin-legacy' // IE11和旧版chrome兼容
// import postcsspxtoviewport from 'postcss-px-to-viewport'
import {resolve} from "path";
// https://vitejs.dev/config/
// export default defineConfig({
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [
      vue(),
      vueJsx(),
      eslintPlugin({
        include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"],
      }),
      legacyPlugin({
        targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    base: env.VITE_MODE === 'production' ? './' : '/',
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          // @import '@/assets/scss/variables.scss';
          // @import '@/assets/scss/mixins.scss';
        `,
        },
      },
      postcss: {
        plugins: [
          /**
            postcsspxtoviewport({
              unitToConvert: 'px', // 需要转换的单位，默认为"px"
              viewportWidth: 1920, // 设计稿的视口宽度
              unitPrecision: 5, // 单位转换后保留的精度
              propList: ['*'], // 能转化为vw的属性列表
              viewportUnit: 'vw', // 希望使用的视口单位
              fontViewportUnit: 'vw', // 字体使用的视口单位
              selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
              minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
              mediaQuery: false, // 媒体查询里的单位是否需要转换单位
              replace: true, //  是否直接更换属性值，而不添加备用属性
              exclude: undefined, // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
              include: undefined, // 如果设置了include，那将只有匹配到的文件才会被转换
              landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
              landscapeUnit: 'vw', // 横屏时使用的单位
              landscapeWidth: 1920, // 横屏时使用的视口宽度
            })
          */
        ]
      }
    },
    // 本地运行配置，及反向代理配置
    server: {
      host: 'localhost', // 指定服务器主机名
      port: 3000, // 指定服务器端口
      https: false, // 是否开启 https
      open: false, // 在服务器启动时自动在浏览器中打开应用程序
      hmr: true,  // 开启热更新
      proxy: {
        "/api": {
          target: "http://jsonplaceholder.typicode.com",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    // 打包配置
    build: {
      target: 'modules', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
      outDir: 'dist', // 指定输出路径
      assetsDir: 'static', // 指定生成静态资源的存放路径
      sourcemap: false, // 构建后是否生成 source map 文件
      minify: 'terser' // 混淆器，terser构建后文件体积更小
    },
  }
});
