setInterval(fnSlide, 3000);
function fnSlide() {
  $(".mobile_insta1").animate({ "margin-left": "-340px" }, 2300, function () {
    $(".mobile_insta1").css({ "margin-left": "0px" });
    $(".mobile_insta:first-child").insertAfter(".mobile_insta:last-child");
  });
};