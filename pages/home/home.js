//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        flag: true,
        flag1: true
    },
    onLoad: function() {
        console.log('onload');
    },
    onReady: function() {
        this.dialog = this.selectComponent('#dialog');
        this.layer = this.selectComponent('#layer');
        console.log(this.dialog);
    },
    //checkMe1
    showDialog: function() {
        this.dialog.showDialog()
    },
    _cancelEventHome(e) {
        console.log(e);
        console.log('点击取消');
        this.dialog.hideDialog();
    },
    _confirmEventHome(e) {
        console.log(e);
        console.log('点击确定');
        this.dialog.hideDialog();
    },
    // checkMe2
    showDialog2(e) {
        this.layer.myTapComponentOpen();
    },
    _myComponentOpenLayer(e) {

    },
    _layerListPhoneBtn(e) {
        console.log(e.detail.phone);
        this.layer.myTapComponentOpen();
    },
    ceshi1() {
        let self = this;
        this.setData({
            'flag': !this.data.flag,
            'flag1': true
        });
    },
    ceshi2() {
        this.setData({
            'flag1': !this.data.flag1,
            'flag': true
        });
    }
})