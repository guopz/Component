Component({
    properties: {},
    data: {
    	page: {
    		layerListPhoneFlag: false,
    		layerWrap: false,
    		layerListPhone: '',
    		layerListPhoneError: ''
    	}
    },
    methods: {
    	myTapComponentOpen() {
    		this.setData({
    			'page.layerListPhoneFlag': !this.data.page.layerListPhoneFlag
    		});
    	},
    	_myTapBaseClose() {
    		this.setData({
	            'page.layerListPhoneFlag': false,
	            'page.layerWrap': false,
	            'page.layerListPhone': ''
	        });
    	},
    	_myTapCallFalse() {
    		this._myTapBaseClose();
        	return false;
    	},
    	_myTapCallPhoneClose(e) {
    		console.log(e);
    		this._myTapBaseClose();
    	},
    	_myTapListPhone(e) {
    		console.log(e);
	        let layerListPhone = e.detail.value;
	        if (layerListPhone.length === 11) {
	            wx.hideKeyboard();
	        };
	        this.setData({
	            'page.layerListPhone': layerListPhone
	        });
    	},
    	_myTapListPhoneFocus() {
    		console.log('myTapListPhoneFocus');
	        this.setData({
	            'page.layerListPhoneError': ''
	        });
    	},
    	_layerListPhoneBtn() {
    		 let contact_phone = this.data.page.layerListPhone,
	            error = '',
	            en = 'beijing2',
	            localcity = wx.getStorageSync('fromWhereIntoAssess');
	        if (contact_phone.length !== 11) {
	            error = '请输入11位手机号码';
	            this.setData({
	                'page.layerListPhoneError': error
	            });
	            return;
	        };

    		this.triggerEvent('layerListPhoneBtn', { phone: this.data.page.layerListPhone});
    	}
    }
});