let BeHavior = require('../behavior/my-base.js');
Component({
	behaviors: [BeHavior],
	properties: {},
	data: {
		text: ''
	},
	attached() {
		console.log(this.dataset.list);
		this.setData({
			text: this.dataset.list
		});
		console.log(this.data.myBehaviorProperty);
		console.log(this.data.myBehaviorData.a);
	}
});