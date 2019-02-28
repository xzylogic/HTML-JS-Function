jQuery(document).ready(function(){
	$('.link_item').live('touchstart', function(e) {
		$(this).addClass('link_on');
	});
	$('.link_item').live('touchmove', function(e) {
		$(this).removeClass('link_on');
	});
	$('.link_item').live('touchend', function(e) {
		$(this).removeClass('link_on');
	});
	$('.link_item').live('mouseout', function(e) {
		$(this).removeClass('link_on');
	});
/*================panel================*/
	$(".panel_show").bind("click",function(){
		$(".panelbg").addClass("panelbgshow");
		$(".panel").addClass("panelshow");
	})
	$(".panel_close").bind("click",function(){
		$(".panelbg").removeClass("panelbgshow");
		$(".panel").removeClass("panelshow");
	})

/*================subtitle================*/
	$(window).load(function(){
		show_subnav_offset();
	})
	$(window).resize(function(){
		setTimeout(function(){
			show_subnav_offset();
		},300)
	})
	$(".show_subnav").bind("click",function(){
		show_subnav_offset();
		$(".subnav").addClass("subnav_show");
		$(".subnavshade").addClass("subnavshade_show");
	})
	$(".subnavshade").bind("click",function(){
		show_subnav_offset();
		$(".subnav").removeClass("subnav_show");
		$(".subnavshade").removeClass("subnavshade_show");
	})

/*================plug================*/
	$(".plug_big").bind("click",function(){
		if($(".plug").hasClass("active")){
			$(".plug").removeClass("active");
		}else{
			$(".plug").addClass("active");
		}
	})

/*================tab================*/
	$(".list_tab dt").bind("click",function(){
		if($(this).parents("dl").hasClass("active")){
			$(this).parents("dl").removeClass("active");
		}else{
			$(this).parents("dl").addClass("active");
		}
	})

	$(".list_tab2 dt").bind("click",function(){
		if($(this).parents("dl").hasClass("active")){
			$(".list_tab2 dl").removeClass("active");
		}else{
			$(".list_tab2 dl").removeClass("active");
			$(this).parents("dl").addClass("active");
		}
	})


/*================dialog================*/
	$(".dialog_show").bind("click",function(){
		$(".dialog").addClass("dialogshow");
	})
	$(".dialog_close").bind("click",function(){
		$(".dialog").removeClass("dialogshow");
	})

/*================dialog2================*/
	$(".dialog_close2").bind("click",function(){
		$(".dialog2").removeClass("dialog2show");
	})


/*================dialog================*/
	$(".dialog3_show").bind("click",function(){
		$(".dialog3").addClass("dialog3show");
	})
	$(".dialog3_close").bind("click",function(){
		$(".dialog3").removeClass("dialog3show");
	})

/*================dialog2================*/
	$(".dialog4_close").bind("click",function(){
		$(".dialog4").removeClass("dialog4show");
	})

/*================test_txt_focus================*/
	$(".test_txt_focus").focus(function(){
		if($(".test_txt_focus").val() == "请输入您的手机号码"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val() == "" || $(".test_txt_focus").val() == "请输入您的手机号码"){
			$(this).val("请输入您的手机号码");
		}
	});
/*================baidushare================*/
	$(".baidushare_show").bind("click",function(){
		$(".baidusharebg").addClass("baidusharebgshow");
		$(".baidushare").addClass("baidushareshow");
		$(".plug").removeClass("active");
	})
	$(".baidushare_close").bind("click",function(){
		$(".baidusharebg").removeClass("baidusharebgshow");
		$(".baidushare").removeClass("baidushareshow");
	})

/*================weixinshare================*/
	$(".weixinshare_show").bind("click",function(){
		$(".weixinshade").show();
		$(".plug").removeClass("active");
	})
	$(".weixinshare_close").bind("click",function(){
		$(".weixinshade").hide();
	})

});

function dialog2ajax(content){
	$(".tips").html(content);
	$(".dialog2").addClass("dialog2show");
	$(".message_form_tips_box").css({"margin-top":-$(".message_form_tips_box").height()/2});
	return false;
}

function dialog4ajax(content){
	$(".tips").html(content);
	$(".dialog4").addClass("dialog4show");
	$(".message_form_tips_box").css({"margin-top":-$(".message_form_tips_box").height()/2});
	return false;
}

function show_subnav_offset(){
	if($(".top_title").length > 0){
		show_subnav_top = $(".top_title").offset().top + $(".top_title").height() + 5;
		$("#subnav").css("top",show_subnav_top);
	}
}