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
});