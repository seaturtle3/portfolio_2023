$(function() {
	var seconds = 3;
	function counting() {
		$(".seconds").html(seconds--);
		setTimeout(counting, 1000);
	}
	counting();
});