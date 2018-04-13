$(document).ready(function(){
	var black = $('.black'),
	      fechar = $('#fechar')
	      img = $('.imgWelcome');
	black.hide();
	$('#pern').click(function(){
		black.fadeIn(500);
	});
	fechar.click(function() {
		black.fadeOut(500);
	});
	fechar.css({
		cursor: 'pointer'
	});

	function looping(time) {
		img.animate({
			marginTop: '120px',
			marginLeft: '130px'
		});
		delay(milliseconds, time);
		img.animate({
			marginTop: '100px',
			marginLeft: '110px'
		});
		delay(milliseconds, time)

		setTimeout(function(){
			looping();
		}, 10);
	}

	looping(1000);
});