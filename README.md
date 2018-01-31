# wx-component

在小程序中有模板跟组件的概念。但模板更多的用于内容的展示，更复杂的交互逻辑就没办法了。所以在小程序中也定义了一些组件来解决一些简单逻辑的功能。
但有时预定义的组件并不能满足我们的需求，这时就需要我们自己定义了。

这里主要讲用**Component构造器**来自定义组件。

本例为一个评分的小组件。

![image](https://github.com/adoctors/wx-component/raw/master/img/pf.png)


**首先定义组件**

创建自定义组件目录（与正常页面结构相同拥有：.js,.json,.wxml,.wxss）

在mycom.json中声明该文件为Component 构造器构造的组件
```
{
    "component": true
}
```
在mycom.js中定义组件的逻辑
```
Page({});    //有时微信的编译器会报错，添上这句
Component({
    properties:{
        initscore:{    //属性名，调用组建时传值用的
            type:Number,    //类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value:0 //属性初始值（可选）
        }
    },
    data: {
        list: [],
        ...
        //可以写一些组件内部用的数据
    },
    <!--与普通页面不同的是，内部的方法要统一放在methods中-->
    methods: {
        checked(e) {
            //自定义组件可以触发任意的事件，引用组件的页面可以监听这些事件
            this.triggerEvent('getscoreevent',this.data.score)  
        },
    },
    //注意声明周期函数也有所变化
    attached: function() {
        //...
    }
})


```
其余的mycom.wxml跟mycom.wxss和正常的页面一样写。

**引用自定义的组件**

在index.json中声明要用的组件名字及路径

```
{
    "usingComponents":
    {
        "mycom": "../mycom/mycom"
    }
}
```
在index.wxml中
```
    //监听并响应事件
<mycom  bind:getscoreevent="getScore"  initscore="{{initScore}}"> </mycom>

```
在index.js中
```
getScore(e) {
    let score = e.detail;  //获取组件内数据的变化
    this.setData({
        score: score
    })
}

```
