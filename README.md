# MY DEMO
#### Photo-Sphere-Viewer
###### VR插件的应用，这个是THREE.JS的VR封装的插件，为了在VUE中可以试用，便写了这个demo
#### axios的配置
###### 关于初学axios的应用，关于axios的配置与vue的结合试用
#### vue框架切换皮肤
###### 这个是关于这个项目有几个楼盘演练出来的demo，因为这几个楼盘都必须有不同的皮肤。
1. 利用sass的变量切换，实在是太多了，实在繁重复杂.
2. 所以我想到，写多个一样的vue-cli项目，这几个项目仅仅sass样式不一样。
3. 接着，将这几个项目打包出来的css文件，都放在一个项目打包之后的static/css中。
4. 改掉[data-code]统一为这1个项目的编号
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181128102724131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODM5ODY5OA==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181128102736591.png)
5. 这样把路径依据项目id，存入服务器，在我每次请求之后，都获取这个css路径。
6. 利用createElement来创建<link>来将这个css加入index.html中，以达到效果。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181128103023140.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODM5ODY5OA==,size_16,color_FFFFFF,t_70)
#### markdown编辑器
1. 利用mditor封装好的插件
2. 在create-react-app的框架中插入的小技巧demo
3. 源码：
> https://github.com/Houfeng/mditor/tree/master/packages/embed#%E5%B7%A5%E5%85%B7%E6%9D%A1%E9%85%8D%E7%BD%AE-api