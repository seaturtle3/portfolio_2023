$(function() {
    $('.js-nav a, .js-connect').click(function(e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 750);
    });
  });

//explaination
$(function () {
  $(".duck,.explain").mouseenter(function () {
    $(".explain").stop(true, true).fadeIn();
  });
  $(".duck").mouseleave(function () {
    $(".explain").stop(true, true).fadeOut();
  });
})
$(function () {
  $(".flower,.explain2").mouseenter(function () {
    $(".explain2").stop(true, true).fadeIn();
  });
  $(".flower").mouseleave(function () {
    $(".explain2").stop(true, true).fadeOut();
  });
})
$(function () {
  $(".banner,.explain3").mouseenter(function () {
    $(".explain3").stop(true, true).fadeIn();
  });
  $(".banner").mouseleave(function () {
    $(".explain3").stop(true, true).fadeOut();
  });
})
$(function () {
  $(".sns_banner,.explain4").mouseenter(function () {
    $(".explain4").stop(true, true).fadeIn();
  });
  $(".sns_banner").mouseleave(function () {
    $(".explain4").stop(true, true).fadeOut();
  });
})
$(function () {
  $(".detail,.explain5").mouseenter(function () {
    $(".explain5").stop(true, true).fadeIn();
  });
  $(".detail").mouseleave(function () {
    $(".explain5").stop(true, true).fadeOut();
  });
})
$(function () {
  $(".cafe,.explain6").mouseenter(function () {
    $(".explain6").stop(true, true).fadeIn();
  });
  $(".cafe").mouseleave(function () {
    $(".explain6").stop(true, true).fadeOut();
  });
})

$(function () {
  $(".papa,.explain7").mouseenter(function () {
    $(".explain7").stop(true, true).fadeIn();
  });
  $(".papa").mouseleave(function () {
    $(".explain7").stop(true, true).fadeOut();
  });
})
$(function () {
  $(".coffine,.explain8").mouseenter(function () {
    $(".explain8").stop(true, true).fadeIn();
  });
  $(".coffine").mouseleave(function () {
    $(".explain8").stop(true, true).fadeOut();
  });
})
$(function () {
  $(".clone,.explain9").mouseenter(function () {
    $(".explain9").stop(true, true).fadeIn();
  });
  $(".clone").mouseleave(function () {
    $(".explain9").stop(true, true).fadeOut();
  });
})

//modal
$(function () {
  $(".duck").click(function () {
     $(".modal").stop().fadeIn();
   });
  $(".modal_bg").click(function () {
     $(".modal").stop().fadeOut();
   });
});

$(function () {
  $(".flower").click(function () {
    $(".modal_slide").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide").stop().fadeOut();
  });
});

$(function () {
  $(".banner").click(function () {
    $(".modal_slide2").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide2").stop().fadeOut();
  });
});

$(function () {
  $(".sns_banner").click(function () {
    $(".modal_slide3").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide3").stop().fadeOut();
  });
});

$(function () {
  $(".detail").click(function () {
    $(".modal_slide4").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide4").stop().fadeOut();
  });
});

$(function () {
  $(".cafe").click(function () {
    $(".modal_slide5").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide5").stop().fadeOut();
  });
});

$(function () {
  $(".papa").click(function () {
    $(".modal_slide6").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide6").stop().fadeOut();
  });
});
$(function () {
  $(".coffine").click(function () {
    $(".modal_slide7").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide7").stop().fadeOut();
  });
});
$(function () {
  $(".clone").click(function () {
    $(".modal_slide8").stop().fadeIn();
   });
   $(".modal_slide_bg").click(function () {
    $(".modal_slide8").stop().fadeOut();
  });
});

$(function () {
  $(".move_site2 > a > img").mouseenter(function () {
    $(".move_site2 > div ").stop().fadeIn();
   });
   $(".move_site2 > a > img").mouseleave(function () {
    $(".move_site2 > div ").stop().fadeOut();
  });
});
$(function () {
  $(".move_site3 > img").mouseenter(function () {
    $(".move_site3 > div ").stop().fadeIn();
   });
   $(".move_site3 > img").mouseleave(function () {
    $(".move_site3 > div ").stop().fadeOut();
  });
});