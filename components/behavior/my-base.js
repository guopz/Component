module.exports = Behavior({
	behaviors: [],
	properties: {
		myBehaviorProperty: {
			type: String,
			value: 'myBehaviorProperty'
		}
	},
	data: {
		myBehaviorData: {
			a: 'myBehaviorData/a'
		}
	},
	attached() {
		console.log('../behavior/my-base.js');
	},
	methods: {
		myBehaviorMethods(){
			console.log('myBehaviorMethods');
		}
	}
});