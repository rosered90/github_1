/**
 * Created by Administrator on 2017/10/13.
 */
$(document).ready(function() {
    // 各个页面的跳转
    $("#halo_0 , #button").click(function () {
            $("#content-1").hide();
            $("#content-2").show();
            $("#light").hide();

        // dialog_1的显示与隐藏
        setTimeout(function () {
            $("#dialog_1").removeClass("hid");
        }, 500);

        setTimeout(function () {
            $("#dialog_1").addClass("hid");
        }, 3500);

        // dialog_2的显示与隐藏
        setTimeout(function () {
            $("#dialog_2").removeClass("hid");
        }, 3800);

        setTimeout(function () {
            $("#dialog_2").addClass("hid");
        }, 6800);

        // dialog_3的显示与隐藏
        setTimeout(function () {
            $("#dialog_3").removeClass("hid");

        }, 7000);

        setTimeout(function () {
            $("#dialog_3").addClass("hid");
            // $("#light").removeClass("hid");
        }, 10000);

        // dialog_4的显示与隐藏
        setTimeout(function () {
            $("#dialog_4").removeClass("hid");
        }, 10300);

        setTimeout(function () {
            $("#dialog_4").addClass("hid");
        }, 15300);

        // 更多答案显示
        setTimeout(function () {
            $("#button_1").removeClass("hid");
        }, 15500);

        // 光圈的显示
        setTimeout(function () {
            $("#light").show();
        }, 15700);
    });
    
     $("#button_1, #light").click(function () {
         $("#content-2").hide();
         $("#content-3").show();
         $("#quiz_footer").show();
         $("#button_2").show();
         $("#return_button_div").show();
        });

    $("#button_2").click(function () {
         $("#content-3").hide();
         $("#content-4").show();
         $("#quiz_footer1").show();
        $("#button_out").show();

        setTimeout(function () {
            $("#dialog_5").removeClass("hid");
        }, 500);

        });
    
        $("#button_3").click(function () {
         $("#content-4").hide();
         $("#content-5").show();
        });

    $("#button_5").click(function () {
         $("#content-5").hide();
         $("#content-6").show();
        $("#question_answer_01").html($("input:text").val());/*替换问答的内容*/

        });

    $("#button_6").click(function () {
         $("#content-6").hide();
         $("#content-8").show();
        });

    $("#last_button").click(function(){
        $("#content-new").hide();
        $("#content-10").show();
    });

    var mobile_check = $("#mobile_phone").val();
    var address_check = $("#address").val();
    var receive_check = $('#receive_name').val();


    $("#button_prize").click(function () {
        var prize_date = $("#prize_date").val();

        if (prize_date == 1){
            $("#rotate_hd").addClass("rotate_h");
            Dajaxice.haotuWeixin.caitong_security.start_lottery(lottery_call, {});
        } else {
            alert('很遗憾，活动已经结束');
        }

        });
        function alert_handle(data){
            alert(data.alert);
            $("#input_footer").show();
            $("#return_footer").hide();
            // if (data.type == 1){
            //     if (!mobile_check){
            //         $("#input_footer").show();
            //         $("#return_footer").hide();
            //     }else {
            //         $("#input_footer").hide();
            //         $("#return_footer").show();
            //     }
            // } else {
            //     if (mobile_check && address_check && receive_check){
            //         $("#input_footer").hide();
            //         $("#return_footer").show();
            //     } else {
            //         $("#input_footer").show();
            //         $("#return_footer").hide();
            //     }
            // }
        }

        function lottery_call(data){
        //alert(data.msg);
            if (data.status == 1){
                $("#prize_type").text(data.type);
                $("#bag_info").text(data.msg);
                $("#prize_info").text('获取' + data.msg + '一个');
                if (data.alert) {
                    alert_handle(data);
                    setTimeout(function () {
                        $("#content-8").addClass("hid");
                        $("#content-9").removeClass("hide");
                        //$("#content-new").removeClass("hide");
                    }, 1000);
                } else {
                    setTimeout(function () {
                        $("#content-8").addClass("hid");
                        $("#content-9").removeClass("hide");
                    }, 2000);
                }
            } else if (data.status == -1){
                $("#bag_info").text(data.msg);
                $("#prize_span").text('很遗憾');
                $("#prize_info").text('你没有中奖哦');

                setTimeout(function () {
                    $("#content-8").addClass("hid");
                    if (data.type == 1){
                        $("#content-9").removeClass("hide");
                        $("#input_footer").hide();
                        $("#return_footer").show();
                    } else {
                        $("#content-new").show();
                    }
                    if (data.alert) {
                        alert_handle(data);
                    }
                }, 2000);

            }
            if (data.type == 1){
                $("#input_title").text('输入手机号领取流量');
            } else {
                $("#input_title").text('输入地址 领取好礼');
            }
        }

       $(".button_0").click(function () {
         $("#answers-4,#answers-1,#answers-2,#answers-3,#answers-5,#div-content-input").hide();
           $("#content-6,#content-8").hide();
         $("#content-5").show();
        });


    // 由问答进入抽奖环节
    $(".answer_frame").click(function () {
         $("#answers-4,#answers-1,#answers-2,#answers-3,#answers-5, #div-content-input").hide();
           // $("#content-6,#content-8,#content-9").hide();
         $("#content-8").show();
        });

    // $("#button_0").click(function () {
    //      $("#content-5").hide();
    //      $("#content-10").show();
    //     $("#cover_1").addClass("cover_1_a");
    //     });

// 视频的操作
    // $("#video_button").click(function () {
    //     $("#video").removeClass("hide");
    // });

    //     $("#Video1").click(function () {
    //     $("#video").addClass("hide");
    // });

// 问答按钮的操作
      $("#q_1").click(function () {
         $("#answers-1").show();
         $("#content-5").hide();
        });

    $("#q_2").click(function () {
         $("#content-5").hide();
         $("#answers-2").show();
        });

    $("#q_3").click(function () {
         $("#content-5").hide();
         $("#answers-3").show();
        });

    $("#q_4").click(function () {
         $("#content-5").hide();
         $("#answers-4").show();
        });

    $("#q_5").click(function () {
         $("#content-5").hide();
         $("#answers-5").show();
        });

    });

    $("#input_jump").click(function () {
        $("#content-9").hide();
        $("#div-content-input").show();
        var type_num = $("#prize_type").text();
        if (type_num == 0){
            $("#address").show();
            $("#receive_name").show();
        }
    });

    $("#return_footer").click(function () {
        $("#content-9").hide();
        $("#content-new").show();
    });

    $("#input_submit").click(function () {
        var mobile_phone = $("#mobile_phone").val();
        var type_num = $("#prize_type").text();
        var address = $("#address").val();
        var receive_name = $("#receive_name").val();
        if (!mobile_phone){
            alert('请输入你的手机号码');
        }
        else if (mobile_phone.length != 11){
            alert('请输入正确的手机号码');
        }
        else if (type_num == 0 && !address){
            alert('请输入你的收件地址');
        }
        else if (type_num == 0 && !receive_name){
            alert('请输入收件人姓名');
        }
        else {
            Dajaxice.haotuWeixin.caitong_security.save_info(function jump (data) {
                if (data.status == 1){
                    $("#div-content-input").hide();
                    $("#content-new").show();

                } else {
                    alert('提交信息出错');
                }
            },{mobile_phone: mobile_phone, address: address, name: receive_name});
        }



        //$("#div-content-input").hide();
        //$("#content-10").show();
        //$("#cover_1").addClass("cover_1_a");
    });