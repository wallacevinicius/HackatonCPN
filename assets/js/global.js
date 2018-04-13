$(document).ready(function(){
	var black = $('.black'),
	      fechar = $('#fechar')
	      img = $('.imgWelcome');
	//black.hide();
	$('#pern').click(function(){
		black.fadeIn(500);
	});
	fechar.click(function() {
		black.fadeOut(500);
	});
	fechar.css({
		cursor: 'pointer'
	});
});