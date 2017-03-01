$(document).ready(function(){
	$('.links').click(function() {
		var section = $(this).attr("data-scroll");
		$('html, body').animate({
		scrollTop: $(section).offset().top
		}, 700);
	});
	$('#burger-container').on('click', function(){
		$(this).toggleClass('open');
	});
	var i = 1;
	setInterval( () => {
		$('#intro').css("background-image", "url('static/images/v" + i + ".jpg')");
		i++;
		if(i == 7) i = 1;
	}, 4000);

	
	var y_scroll_pos = window.pageYOffset;
	    var aboutUs = $('#about-us').offset().top;
    if(y_scroll_pos > aboutUs) {
	 	$('nav').css("background-color", "rgba(62, 70, 76, 1)");
	 } else {
	    $('nav').css("background-color", "rgba(62, 70, 76, 0.4)");
	 }

	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
	    var aboutUs = $('#about-us').offset().top - 65;

	    if(y_scroll_pos > aboutUs) {
	       	$('nav').css("background-color", "rgba(62, 70, 76, 1)");
	    } else {
	       		$('nav').css("background-color", "rgba(62, 70, 76, 0.4)");
	    }
	});

});