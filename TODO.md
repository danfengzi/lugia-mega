# TODO

## import { isPlainObject } from '@lugia/mega-utils/lib/is';

## mega-webpack 的配置文件调整

[cosmiconfig](https://github.com/davidtheclark/cosmiconfig)

lugia.config.js

## lib ~ src sourcemap

## mega-scripts

- ~~[browser-sync](https://github.com/BrowserSync/browser-sync)~~
- ~~mock: 支持引入 json、excel、csv 格式的文件作为数据来源~~

browser-sync 热更新时命令行不刷新界面

## use [react-hot-loader](https://github.com/gaearon/react-hot-loader)

## [HMR] 支持

## BUG

### packages/mega-webpack/test/build.test.js

```
F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\loader-runner\
lib\loadLoader.js:35
                        throw new Error("Module '" + loader.path + "' is not a loader (must have normal or
pitch function)");
                        ^

Error: Module 'F:\yssgitlab\lugia-mega\packages\mega-webpack\lib\debugLoader.js' is not a loader (must have
 normal or pitch function)
    at loadLoader (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\loader-runner\lib\loadLoader.
js:35:10)
    at iteratePitchingLoaders (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\loader-runner\lib
\LoaderRunner.js:169:2)
    at runLoaders (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\loader-runner\lib\LoaderRunne
r.js:362:2)
    at NormalModule.doBuild (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\webpack\lib\NormalM
odule.js:182:3)
    at NormalModule.build (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\webpack\lib\NormalMod
ule.js:275:15)
    at Compilation.buildModule (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\webpack\lib\Comp
ilation.js:157:10)
    at moduleFactory.create (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\webpack\lib\Compila
tion.js:460:10)
    at factory (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\webpack\lib\NormalModuleFactory.
js:243:5)
    at applyPluginsAsyncWaterfall (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\webpack\lib\N
ormalModuleFactory.js:94:13)
    at F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\tapable\lib\Tapable.js:268:11
    at NormalModuleFactory.params.normalModuleFactory.plugin (F:\yssgitlab\lugia-mega\packages\mega-webpack
\node_modules\webpack\lib\CompatibilityPlugin.js:52:5)
    at F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\tapable\lib\Tapable.js:270:14
    at fileExistsWithCase (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-paths-
webpack-plugin\index.js:160:11)
    at that.fileExistsWithCase (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-p
aths-webpack-plugin\index.js:112:7)
    at that.fileExistsWithCase (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-p
aths-webpack-plugin\index.js:112:7)
    at CaseSensitivePathsPlugin.Object.<anonymous>.CaseSensitivePathsPlugin.fileExistsWithCase (F:\yssgitla
b\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-paths-webpack-plugin\index.js:82:5)
    at that.getFilenamesInDir (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-pa
ths-webpack-plugin\index.js:105:10)
    at CaseSensitivePathsPlugin.Object.<anonymous>.CaseSensitivePathsPlugin.getFilenamesInDir (F:\yssgitlab
\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-paths-webpack-plugin\index.js:50:5)
    at CaseSensitivePathsPlugin.Object.<anonymous>.CaseSensitivePathsPlugin.fileExistsWithCase (F:\yssgitla
b\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-paths-webpack-plugin\index.js:88:8)
    at that.getFilenamesInDir (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-pa
ths-webpack-plugin\index.js:105:10)
    at Array.fs.readdir (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\case-sensitive-paths-we
bpack-plugin\index.js:66:5)
    at Storage.Object.<anonymous>.Storage.finished (F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modu
les\webpack\node_modules\enhanced-resolve\lib\CachedInputFileSystem.js:40:15)
    at F:\yssgitlab\lugia-mega\packages\mega-webpack\node_modules\webpack\node_modules\enhanced-resolve\lib
```
