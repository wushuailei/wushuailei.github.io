# NPM 命令

## link

```shell
# 查看本项目本地链接的包
npm ls --link
# 在项目中链接本地包
npm link package-name
# 在项目中取消链接本地包
npm unlink package-name
# 在本地包中 创建链接符号
npm link
# 在本地包中 取消链接
npm unlink
# 查看全局可链接的包
npm ls -g --link=true
# 卸载全局某个可链接的包
npm unlink -g package-name
```

## yalc

[yalc](https://github.com/wclr/yalc)
[原文](https://blog.csdn.net/weixin_50794208/article/details/131924256)

```shell
# 1. 安装yalc
npm i yalc -g
# or
yarn global add yalc
# 2. yalc publish (发布依赖)
# 在包项目执行
yalc publish
# 2. yalc add (添加依赖)
# 在使用包的项目中执行
yalc add package-name
# 3. yalc remove (移除依赖)
# 在使用包的项目中执行
yalc remove package-name
# 4. yalc push (更新和推送)
yalc push
# 5. 更多的其他用法
yalc update good-ui # 更新依赖
yalc remove --all # 移除当前包里的全部yalc依赖
# and so many...
```

## 使用vite创建npm项目

[原文](https://blog.csdn.net/weixin_50794208/article/details/131924256)

```shell
# 1. 初始化
npm init -y
# 2. 安装vite
npm i vite -D
# 3. src目录下创建一个main.js 入口文件
# 4. 创建vite.config.js，并配置为库模式，可到[vite官网](https://cn.vitejs.dev/guide/build#library-mode)查看更多
# 5. 构建
npx vite build
# 6. 执行打包后，控制台不会退出，而是监听文件变化，并自动构建
npx vite build --watch
```

+ 配置package.json

```json
{
    "name": "lib-name", // 安装该库时，的库名字
    "version": "0.0.2", // 当前库的版本
    "main": "dist/lib-name.umd.js", // 非es模块化方式导入时的文件
    "module": "dist/lib-name.mjs", // es模块化导入时的文件
    "typings": "dist/lib-name.d.ts", // 声明文件地址，否则导入模块不识别类型
    "files": [
        "dist" // 要发布的文件，发布后只会提交dist目录里的所有文件，还有package.json文件
    ]
}
```
