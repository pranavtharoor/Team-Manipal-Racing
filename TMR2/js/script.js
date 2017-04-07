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

});