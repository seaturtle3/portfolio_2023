$(function () {
	$(".menu1").mouseenter(function () {
		$(".sub_menu1, .menu_bg").stop().slideDown(200);
	});
	$(".menu1").mouseleave(function () {
		$(".sub_menu1, .menu_bg").stop().slideUp();
	});
});
$(function () {
	$(".menu2").mouseenter(function () {
		$(".sub_menu2, .menu_bg").stop().slideDown(200);
	});
	$(".menu2").mouseleave(function () {
		$(".sub_menu2, .menu_bg").stop().slideUp();
	});
});
$(function () {
	$(".menu3").mouseenter(function () {
		$(".sub_menu3, .menu_bg").stop().slideDown(200);
	});
	$(".menu3").mouseleave(function () {
		$(".sub_menu3, .menu_bg").stop().slideUp();
	});
});
$(function () {
	$(".menu4").mouseenter(function () {
		$(".sub_menu4, .menu_bg").stop().slideDown(200);
	});
	$(".menu4").mouseleave(function () {
		$(".sub_menu4, .menu_bg").stop().slideUp();
	});
});
$(function () {
	$(".menu5").mouseenter(function () {
		$(".sub_menu5, .menu_bg").stop().slideDown(200);
	});
	$(".menu5").mouseleave(function () {
		$(".sub_menu5, .menu_bg").stop().slideUp();
	});
});
$(function () {
	$(".menu6").mouseenter(function () {
		$(".sub_menu6, .menu_bg").stop().slideDown(200);
	});
	$(".menu6").mouseleave(function () {
		$(".sub_menu6, .menu_bg").stop().slideUp();
	});
});

$(function () {
	$(".menu_hide_btn").mouseenter(function () {
		$(".hide_bg").stop().slideDown(500);
	});
	$("#close_btn, #close_btn_back").click(function () {
		$(".hide_bg").stop().slideUp(500);
	});
});