/**
 * 模仿android里面的Toast效果，主要是用于在不打断程序正常执行的情况下显示提示数据
 * @param config
 * @return
 */
var Toast = function (config) {
	this.context = config.context == null ? $('body') : config.context;//上下文
	this.message = config.message;//显示内容
	this.time = config.time == null ? 3000 : config.time;//持续时间
	this.left = config.left;//距容器左边的距离
	this.top = config.top;//距容器上方的距离
	this.init();
};
var msgEntity;
Toast.prototype = {
	//初始化显示的位置内容等
	init: function () {
		$("#toastMessage").remove();
		//设置消息体
		var msgDIV = new Array();
		msgDIV.push('<div id="toastMessage">');
		msgDIV.push('<span>' + this.message + '</span>');
		msgDIV.push('</div>');
		msgEntity = $(msgDIV.join('')).appendTo(this.context);
		msgEntity.css({
			'position': 'fixed',
			'padding': '5px 16px',
			'background-color': 'rgba(0,0,0,0.6)',
			'border-radius': '3px',
			'color': '#fff',
			'text-align': 'center',
			'z-index': '99',
			'line-height': '20px',
			'overflow': 'hidden',
			'max-width': '40%',
			'min-width': '2rem',
			'font-size': '0.5rem',
		});
		//设置消息样式
		var left = this.left == null ? this.context.width() / 2 - msgEntity.find("span").width() / 2 - 16: this.left;
		var top = this.top == null ? this.context.height() / 2 - 16: this.left;
		msgEntity.css({
			top:top,
			left:left
		});
		msgEntity.hide();
	},
	//显示动画
	show: function () {
		msgEntity.fadeIn(this.time / 2);
		msgEntity.fadeOut(this.time / 2);
	}

};

function toast(msg){
	new Toast({message:msg}).show();
}