#### Component

##### 基本属性、方法
https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html
1. 数据设置
> properties: {type: String, value:'初始值',observer (n,o){console.log("数据变化出发，旧值，新值")}}  <br/>
> data: {}

2. 常用函数
> methods: {}  // 自定义函数 <br/>
> behaviors: []  // 设置组件内公共模块 <br/>
> relations:[]  // 组件的关系定义 <br/>

3. 组件生命周期 Function
> created  // 在组件实例进入页面节点树时执行，注意此时不能调用 setData <br/>
> attached   // 在组件实例进入页面节点树时执行 (`常用`) <br/>
> ready  // 在组件布局完成后执行，此时可以获取节点信息 <br/>
> moved  // 在组件实例被移动到节点树另一个位置时执行 <br/>
> detached  //  在组件实例被从页面节点树移除时执行 <br/>


4. 组件默认添加一个 `<slot></slot>`, 开启 multipleSlots 可以添加多个 `<slot>`
```
options: {
	multipleSlots: true
}
```
5. triggerEvent 事件触发 传递到 Page 页面
``` 
this.triggerEvent('cancelEvent',{msg: '来自component的信息'},{});
```
6. selectComponent
```
使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
this.dialog = this.selectComponent('#dialog');
```
7. page 传递数据 组件
> 在组件内 properties 预定义字段。 <br/>
> 在page页面通过data-xxx="xx"传递数据，在组件内通过this.dataset获取。


注意
> 1. 组件内的样式独立存在
> 2. 组件文件夹名称可以与文件名称不用
> 3. Component 构造器构造的组件也可以作为页面使用。

##### Dialog
1. 创建一个组件 dialog 包含4个文件
>dialog.wxml <br/>
>dialog.wxss <br/>
>dialog.js <br/>
>dialog.json <br/>

2. 在 dialog.json 文件中设置
```
{
    "component": true
}
```
3. 调用组件的 home.json 添加

```
{
	"usingComponents": {
		"dialog": "/components/dialog/dialog",
		"test": "/components/test/a",
		"layer": "/components/list-clue-layer/list-clue-layer"
	}
}
```
目前在设置了三个组件
4. 通过 Behavior 设置组件公共模块，设置公共函数，属性等等