$(document).ready(function(){
	var black = $('.black'),
	      fechar = $('#fechar');
	black.hide();
	$('#pernambuco').click(function(){
		black.fadeIn(500);
	});
	fechar.click(function() {
		black.fadeOut(500);
	});
	fechar.css({
		cursor: 'pointer'
	});
});