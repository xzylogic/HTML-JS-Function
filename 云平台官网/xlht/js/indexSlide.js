$(function(){
	var wh = $(window).height();
	$("body,html").animate({scrollTop:0},10);
	/* $(".nav").css({height:wh}); */
	/* function hover(HoverType,divClass,newBgColor){
		var hoverDiv = divClass;
		$(hoverDiv).on(HoverType,function(){$(this).css({backgroundColor:newBgColor})});
		$(hoverDiv).on("touchmove",function(){$(hoverDiv).css({backgroundColor:""})});
		$(hoverDiv).on("touchend",function(){$(hoverDiv).css({backgroundColor:""})});
	};
	hover("touchstart",$(".sludeCon ul li"),"#a8a8a8");
	hover("touchstart",$(".sorrll ul li"),"#01110d"); */

	var animationArry = {
		"transform":"rotate(0deg) scale(1) skew(0deg) translateY(0px)",
		"-webkit-transform": "rotate(0deg) scale(1) skew(0deg) translateY(0px)",
		"-moz-transform": "rotate(0deg) scale(1) skew(0deg) translateY(0px)",
		"-o-transform": "rotate(0deg) scale(1) skew(0deg) translateY(0px)",
		"-ms-transform": "rotate(0deg) scale(1) skew(0deg) translateY(0px)"
	}

	/* var btnHeight = $(".btn_0").height();
	$(".slideDown_0").click(function(){
		$(".btn_0").slideToggle();
	});
	$(".slideDown_1").click(function(){
		$(".btn_1").slideToggle();
	}) */
	var add = true;
	var add1 = true;
	function preventDefault(e){
		e.preventDefault();
	};
	$(".slidBtn").click(function(){
		var imgHeight = $(".slide_down .bakgs img").height();
		var btnsetoff = $(".slide_down .slidBtn").offset().top;
		if(add==true){		
			document.addEventListener("touchmove",preventDefault,false)
			$(".slide_down").css({"z-index":"9999"});
			$(".slide_down").css({"top":"0"});
			$(".bakgs").css(animationArry);
			 $(".slide_down .slidBtn").css(animationArry);
			$(".slideBg").fadeIn(1000,function(){
				add = false;
			});
			return;
		}
		if(add==false){
			$(".bakgs").css({
				"transform":"rotate(0deg) scale(1) skew(0deg) translateY(-"+imgHeight+"px)",
				"-webkit-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+imgHeight+"px)",
				"-moz-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+imgHeight+"px)",
				"-o-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+imgHeight+"px)",
				"-ms-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+imgHeight+"px)"
			});
			$(".slide_down .slidBtn").css({		
				"transform":"rotate(0deg) scale(1) skew(0deg) translateY(-"+btnsetoff+"px)",
				"-webkit-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+btnsetoff+"px)",
				"-moz-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+btnsetoff+"px)",
				"-o-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+btnsetoff+"px)",
				"-ms-transform": "rotate(0deg) scale(1) skew(0deg) translateY(-"+btnsetoff+"px)"
			 });
			
			$(".slideBg").fadeOut(1000,function(){
				$(".slide_down").css({"z-index":"-999"});
				$(".slide_down").css({"top":"-100%"});
				document.removeEventListener('touchmove',preventDefault,false); 
				add = true;
			});
			return;
		}

	});
	if(typeof(can_do) != "undefined"){
		if( can_do != 1 ) {
				$(".slideBg").fadeOut();
				$(".slide_down").css({"z-index":"-999"});
				document.removeEventListener('touchmove',preventDefault,false); 
				add = true;
		}else{
			$(".slide_down .slidBtn").click();
			setTimeout(function() {
				if($(".slideBg").attr("style")==undefined || $(".slideBg").attr("style")=="display: block;" || $(".slideBg").attr("style")==""){
					$(".slide_down .slidBtn").click();
					return;
				}
			},2000);
		}
		
	}/* 
	 	$(".slide_down .slidBtn").click();
		setTimeout(function() {
			if($(".slideBg").attr("style")==undefined || $(".slideBg").attr("style")=="display: block;"){
				$(".slide_down .slidBtn").click();
				return;
			}
		},2000);  */
	/* $(".navMuen").click(function(){
		$(".nav").css(animationArry);
		$(".slideBg").fadeIn(500)
	});

	$(".offNav,.nav").click(function(){
		var navHeight = $(window).width();
		$(".nav").css({
			"transform":"rotate(0deg) scale(1) skew(0deg) translateX("+navHeight+"px)",
			"-webkit-transform": "rotate(0deg) scale(1) skew(0deg) translateX("+navHeight+"px)",
			"-moz-transform": "rotate(0deg) scale(1) skew(0deg) translateX("+navHeight+"px)",
			"-o-transform": "rotate(0deg) scale(1) skew(0deg) translateX("+navHeight+"px)",
			"-ms-transform": "rotate(0deg) scale(1) skew(0deg) translateX("+navHeight+"px)",
			"height":wh

		});
		$(".slideBg").fadeOut(500);
	}) */
	
})