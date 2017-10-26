/**
 * 引入微信JS
 *  
 */
document.write("<script language=javascript src='http://res.wx.qq.com/open/js/jweixin-1.0.0.js'></script>");

/**
 * 附录2-所有JS接口列表
 */
var interfaces = [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',
    'startRecord',
    'stopRecord',
    'onVoiceRecordEnd',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'onVoicePlayEnd',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'translateVoice',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard'
];

/**
 * 附录3-所有菜单项列表
 */
var menuItems = {
	//基本类
	exposeArticle:"menuItem:exposeArticle", //举报
	setFont:"menuItem:setFont", //调整字体
	dayMode:"menuItem:dayMode", //日间模式
	nightMode:"menuItem:nightMode", //夜间模式
	refresh:"menuItem:refresh", //刷新
	profile:"menuItem:profile", //查看公众号（已添加）
	addContact:"menuItem:addContact", //查看公众号（未添加）
	//传播类
	appMessage:"menuItem:share:appMessage", //发送给朋友
	timeline:"menuItem:share:timeline", //分享到朋友圈
	shareQQ:"menuItem:share:qq", //分享到QQ
	shareWeiBoApp:"menuItem:share:weiboApp", //分享到Weibo
	favorite:"menuItem:favorite", //收藏
	shareFaceBook:"menuItem:share:facebook", //分享到FB
	shareQZone:"menuItem:share:QZone", //分享到 QQ 空间
	//保护类
	editTag:"menuItem:editTag", //编辑标签
	itemDelete:"menuItem:delete", //删除
	copyUrl:"menuItem:copyUrl", //复制链接
	originPage:"menuItem:originPage", //原网页
	readMode:"menuItem:readMode", //阅读模式
	openWithQQBrowser:"menuItem:openWithQQBrowser", //在QQ浏览器中打开
	openWithSafari:"menuItem:openWithSafari", //在Safari中打开
	email:"menuItem:share:email", //邮件
	shareBrand:"menuItem:share:brand" //一些特殊公众号
}

///**
// * ajax异步请求
// * @param  {[type]} type   [description]
// * @param  {[type]} reqUrl [description]
// * @return {[type]}        [description]
// */
function getWxConfig(wxShare) {
	Dajaxice.haotuWeixin.Wx_Config(function(jsonObj){
		if(jsonObj.status){
			wxManager(jsonObj, wxShare);
		}
	},{"url": window.location.href});

}

/**
 * 微信分享权限验证处理
 * @param  {[type]} jsonObj [description]
 * @param  {[type]} obj     [description]
 * @return {[type]}         [description]
 */
function wxManager(jsonObj, obj) {
	//通过config接口注入权限验证配置
	wx.config({
	    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
	    appId: jsonObj.appId, // 必填，公众号的唯一标识 
	    timestamp: jsonObj.timestamp, // 必填，生成签名的时间戳
	    nonceStr: jsonObj.noncestr, // 必填，生成签名的随机串
	    signature: jsonObj.signature,// 必填，签名，见附录1
	    jsApiList: interfaces // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
	
	//通过ready接口处理成功验证
	wx.ready(function(){
	    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
		if (undefined != obj.hideMenuItems && obj.hideMenuItems.length > 0) {
			//批量隐藏功能按钮接口
			wx.hideMenuItems({
				menuList: obj.hideMenuItems // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
			});
		}
		
		var _title = obj.title;
		var _desc = obj.desc;
		var _imgUrl = obj.imgUrl;
		var _link = obj.link;
		var _success = obj.success;
		var _cancel = obj.cancel;
		
		//获取“分享给朋友”按钮点击状态及自定义分享内容接口
		wx.onMenuShareAppMessage({
		    title: _title, // 分享标题
		    desc: _desc, // 分享描述
		    link: _link, // 分享链接
		    imgUrl: _imgUrl, // 分享图标
		    type: '', // 分享类型,music、video或link，不填默认为link
		    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		    success: _success,
			    //function () {
		        // 用户确认分享后执行的回调函数
		        //alert('用户已确认分享给好友');
		    //},
		    cancel: _cancel
			 //   function () {
		    //    // 用户取消分享后执行的回调函数
		    //    //alert('用户取消分享给好友');
		    //}
		});
		//获取“分享到QQ”按钮点击状态及自定义分享内容接口
		wx.onMenuShareQQ({
		    title: _title, // 分享标题
		    desc: _desc, // 分享描述
		    link: _link, // 分享链接
		    imgUrl: _imgUrl, // 分享图标
		    success: _success,
		    cancel: _cancel
		});
		//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
		wx.onMenuShareWeibo({
		    title: _title, // 分享标题
		    desc: _desc, // 分享描述
		    link: _link, // 分享链接
		    imgUrl: _imgUrl, // 分享图标
		    success: _success,
		    cancel: _cancel
		});
		//获取“分享到QQ空间”按钮点击状态及自定义分享内容接口
		wx.onMenuShareQZone({
		    title: _title, // 分享标题
		    desc: _desc, // 分享描述
		    link: _link, // 分享链接
		    imgUrl: _imgUrl, // 分享图标
		    success: _success,
		    cancel: _cancel
		});
		wx.onMenuShareTimeline({
			title: _title,
			link: _link, // 分享链接
			imgUrl: _imgUrl, // 分享图标
			success: _success,
			cancel: _cancel
		});
	});
}

///**
// * 我的微信分享
// */
function WxShare() {
	this.title = '';
	this.imgUrl = '';
	this.link = '';
	this.desc = '';
	this.hideMenuItems = [];
	this.share = function () {
		var wxShare = this;
		getWxConfig(wxShare);
	}
}

function share_config(title, desc, imgUrl, link, hideMenuItems, success, cancel) {
	var share = new WxShare();
	share.title = title;
	share.desc = desc;
	share.imgUrl = imgUrl;
	share.link = link;
	share.hideMenuItems = hideMenuItems; //隐藏分享到朋友圈
	share.success = success;
	share.cancel = cancel;
	share.share();
}