Component({
	options: {
		multipleSlots: true
	},
	/**
	 * 对外映射数据
	 * 数据接收部分
	 */
	properties: {
		title: {
			type: String,
			value: '标题'
		},
		content: {
			type: String,
			value: '内容'
		},
		cancelText: {
			type: String,
			value: '取消'
		},
		confirmText : {
			type: String,
			value: '确定'
		}
	},
	/**
	 * 私有数据，组件的初始化数据
	 * 可用于模板渲染
	 */
	data: {
		isShow: false,
		newtitle: 'data内数据'
	},
	/**
	 * 组件的方法
	 * @type {Object}
	 */
	methods: {
		/**
		 * 对外暴露的公有方法
		 */
		hideDialog() {
			this.setData({
				isShow: !this.data.isShow
			});
		},
		showDialog() {
			this.setData({
				isShow: !this.data.isShow
			});
		},
		/**
		 * 内部私有方法
		 * 建议使用下划线开头
		 */
		_cancelEvent() {
			this.triggerEvent('cancelEvent',{msg: '来自component的信息'},{a:'a'});
		},
		_confirmEvent() {
			this.triggerEvent('confirmEvent',{msg: this.data.newtitle},{b:'b'});
		}
	}
});