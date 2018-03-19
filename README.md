# CtripDemo_RN
React Native实现仿携程首页，只实现了"首页"Tab的页面显示（采取直接读取本地Json文件），其他Tab未实现。在iPhone上显示正常，未对Android做适配。

1、对应组件说明：

MainPage：应用主页，包含底部四个Tab和对应的页面，在App.js文件可以找到该入口

HomePage：首页组件

data/homebean.json：首页Json数据

components:从首页抽离出来的一些组件文件夹

image：项目中用到的图片文件夹

2、底部栏引用了TabNavigator库，需要在项目根目录下执行这个命令：

npm install react-native-tab-navigator --save

3、运行项目：

进入到该项目的根目录，执行命令

react-native run-ios 或者 react-native run-android 

4、运行截图：

![截图1](screen/screen1.png)
![截图2](screen/screen2.png)
