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
});


