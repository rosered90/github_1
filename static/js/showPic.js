/**
 * Created by Administrator on 2017/11/24.
 */
window.onload = function () {
	showPic();
	prepareGallery();
};
function showPic(whichpic) {
	var source=whichpic.getAttribute("href");
	var text = whichpic.getAttribute("title");
	var placeholder = document.getElementById("img"); //声明图片
	var description = document.getElementById("description");
	placeholder.setAttribute("src", source); //换图片
	description.firstChild.nodeValue = text;
	}

function prepareGallery() {
	var gallery = document.getElementById("gallery");
	var links = gallery.getElementsByTagName("a");
	for (var i=0; i<links.length; i++){
		links[i].onclick = function () {
			showPic(this);
			return false;
		}
	}

}


	$(document).ready(function () {

		$(".head").click(function () {
			$(this).next("div.content").slideToggle(1000);
		});

		//animate动画
		$("#panel1").css("opacity", "0.5"); //设置透明度
		$("#panel1").click(function () {
			$(this).animate({left:"500px", height:"200px", opacity:"1"}, 3000)
				.animate({top:"200px", width:"200px"},3000)
				.fadeOut("slow");
		});

		// 鼠标在图片上面是有鼠标的右边有图片预览
		var x = 50;
		var y = 20;
		$("#img").mouseover(function (e) {
		this.myTitle = this.title;
		this.title = "";
			var imgTitle = this.myTitle? "<br/>" + this.myTitle : "";
			var tooltip = "<div id='tooltip' style='width:20%;' ><img src='" + $(this).attr("src") +  "' alt='图片预览'/>" + imgTitle+ "</div>";  //创建<div>元素
			$("body").append(tooltip); //将它追加到文档中
			$("#tooltip")
					.css({
						"position": "absolute",
						"top": (e.pageY+y) + "px", //注意点：用，不用；
						"left": (e.pageX+x) + "px"
			}).show("fast"); //设置x坐标和y坐标，并且显示
		}).mouseout(function () {
			$("#tooltip").remove(); //移除
// {#			this.title = this.myTitle; //再次赋给title值#}
		}).mousemove(function (e) {
			$("#tooltip")
					.css({
						"top": (e.pageY+y) + "px", //注意点：用，不用；
						"left": (e.pageX+x) + "px"
					});
		});

		// bind绑定事件
		// $(".head").bind("click", function () {
		// 	var $content = $(this).next("div.content");
		// 	if($content.is(":visible")){
		// 		$content.hide();
		// 	}else{
		// 		$content.show();
		// 	}
		// });



	});


$(function () {
	// 视频切换翻页
		var page = 1;
		var i = 4;       //每版放4张图片
		$(".next").click(function () {    //绑定click事件
			var $parent = $(this).parents("div.v_show") ;   //根据当前单击的元素获得父元素
			var $v_show = $parent.find("div.v_content_list");    //找到视频内容展示区域
			var $v_content = $parent.find("div.v_content");   //找到视频内容展示区外围的div
			var v_width = $v_content.width();
			var len = $v_show.find("li").length;   //总的视频总数
			var page_count = Math.ceil(len/i);   //只要不是正数，就交王大的方向去最小的整数
			if (page == page_count){   //已经到最后一个版面了，如果再往后，必须跳转到第一个版面
				$v_show.animate({left:'0px'},  "slow");   //通过改变left值，跳转到第一个版面
				page = 1;
			}else{
				$v_show.animate({left: '-='+v_width}, "slow");   // 改变left值，达到每次换一个版面
				page++;
			}
		});
	// 测试视频移动
	// $(".next").click(function () {
	// 	$(".v_content_list").animate({right:"+=1400px", opacity:"1"}, 3000);
	//
	// })

	// 复选框的全选事件
	$("#CheckAll").click(function () {  //全选功能
		$('[name=items]:checkbox').attr('checked', true);
	});

	$("#CheckedNo").click(function () {  //全不选功能
		$('[name=items]:checkbox').attr('checked', false);
	});

	$("#CheckedRev").click(function () {  //反选功能
		$('[name=items]:checkbox').each(function () {
			this.checked = !this.checked;
		})
	});

	$("#send").click(function () { //提交显示选中的选项的值
		var str = "你选中的是：\r\n";
		$('[name=items]:checkbox:checked').each(function () {
			str += $(this).val() + "\r\n";
		});
		alert(str);
	});

	$("#checkedAll").click(function () {  //全选/全不选功能
		if(this.checked){    //如果当前的复选框被选中
			$('[name=items]:checkbox').attr("checked", true);
		}else{
			$('[name=items]:checkbox').attr("checked", false);
		}
	});

	//如果全选后，手动将复选框的一个取消后，此时全选/全不选框被没有被取消选中状态。此时更新为：
	$('[name=items]:checkbox').click(function () {
		var flag = true;   //定义一个flag变量，默认为true
		$('[name=items]:checkbox').each(function () {
			if(!this.checked){
				flag = false;    //此时全选/全不选框被取消选中状态
			}
		});
		$('#checkedAll').attr('checked', flag);
	});

	//加载样式出现于消失
	
});




