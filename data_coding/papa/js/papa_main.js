/*$(function () {
	$("#hide_list,head_ul").mouseleave(function () {
		$(".head_ul").stop().slideUp();
	});
	$("#hide_list").mouseenter(function () {
		$(".head_ul").stop().slideDown();
	});
});

/*
$(window).resize(function(){ 
	if (window.innerWidth > 768) { 
	
	} else {
		$(function () {
			$("#hide_list").click(function () {
				$(".head_ul").show();
			});
			$("#hide_list").click(function () {
				$(".head_ul").hide();

			});
		});
	}
}).resize();

$(document).ready(function() {
	$("#hide_list").mouseenter(function() {
		$(".head_ul").slidedown();
	});
	$("#hide_list").mouseleave(function() {
		$(".head_ul").slideup();
	});
});

$(document).ready(function() {
    $("#hide_list").click(function() {
        $(".head_ul").slideToggle(); // .head_ul 요소를 토글하여 보이거나 숨김
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const hideList = document.getElementById("hide_list");
    const menu = document.querySelector(".head_ul");

    // 초기 상태에서 메뉴 숨기기
    if (window.innerWidth <= 768) {
        menu.style.display = "none";
    }

    hideList.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
            if (menu.style.display === "flex" || menu.style.display === "") {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";
            }
        }
    });
});