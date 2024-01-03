// vite.config.ts
import {UserConfig, ConfigEnv, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
 
export default ({command, mode}: ConfigEnv): UserConfig => {
  // 获取 .env 环境配置文件
  const env = loadEnv(mode, process.cwd())
 
  return (
      {
        plugins: [
          vue()
        ],
        // 本地反向代理解决浏览器跨域限制
        server: {
          host: 'localhost',
          port: Number(env.VITE_APP_PORT),
          open: true, // 启动是否自动打开浏览器
          proxy: {
            [env.VITE_APP_BASE_API]: {
              target: 'http://vapi.youlai.tech', // 有来商城线上接口地址
              changeOrigin: true,
              rewrite: path => path.replace(new RegExp('^' + env.VITE_APP_BASE_API), '')
            }
          }
        },
        resolve: {
          alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
          }
        }
      }
  )
}