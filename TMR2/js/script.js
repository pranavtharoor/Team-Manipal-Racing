$(document).ready(function(){
	// $('.links').click(function() {
	// 	var section = $(this).attr("data-scroll");
	// 	$('html, body').animate({
	// 	scrollTop: $(section).offset().top
	// 	}, 700);
	// });
	// $('#burger-container').on('click', function(){
	// 	$(this).toggleClass('open');
	// });

	var i = 1;
	setInterval( () => {
		$('#home .fullpage').css("background-image", "url('images/pics/IMG_" + i + ".JPG')");
		i++;
		if(i == 10) i = 0;
	}, 4000);
	// var y_scroll_pos = window.pageYOffset;
	//     var aboutUs = $('#about-us').offset().top - 65;
 //    if(y_scroll_pos > aboutUs) {
	//  	$('nav').css("background-color", "rgba(38, 50, 56, 1)");
	//  } else {
	//     $('nav').css("background-color", "rgba(38, 50, 56, 0.7)");
	//  }

	// $(window).on('scroll', function() {
	// 	var y_scroll_pos = window.pageYOffset;
	//     var aboutUs = $('#about-us').offset().top - 65;

	//     if(y_scroll_pos > aboutUs) {
	//        	$('nav').css("background-color", "rgba(38, 50, 56, 1)");
	//     } else {
	//        		$('nav').css("background-color", "rgba(38, 50, 56, 0.7)");
	//     }
	// });

});