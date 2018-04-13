$(document).ready(function(){
	var black = $('.black'),
	      fechar = $('#fechar')
	      img = $('.imgWelcome');
	black.hide();
	$('#map a').click(function(){
		var id = $(this).attr('id');
		var title = $('.black > .title > .container > h1');
		var desc = $('.black > .title > .container > h6');
		var tools = $('.black > .toolbar > .container');

		switch(id){
			case 'riograndedonorte':
				id = 'Rio Grande do Norte';
				break;
			case 'matogrosso':
				id = 'Mato Grosso';
				break;
			case 'mattogrossodosul':
				id = 'Mato Grosso do Sul';
				break;
			case 'santacatarina':
				id = 'Santa Catarina';
				break;
			case 'riograndedosul':
				id = 'Rio Grande do Sul';
				break;
			case 'saopaulo':
				id = 'São Paulo';
				break;
			case 'minasgerais':
				id = 'Minas Gerais';
				break;
			case 'riodejaneiro':
				id = 'Rio de Janeiro';
				break;
			case 'espiritosanto':
				id = 'Espírito Santo';
				break;
			case 'distritofederal':
				id = 'Distrito Federal';
				break;
			case 'maranhao':
				id = 'Maranhão';
				break;
			case 'paraiba':
				id = 'Paraíba';
				break;
			case 'amapa':
				id = 'Amapá';
				break;
			case 'ceara':
				id = 'Ceará';
				break;
			case 'piaui':
				id = 'Piauí';
				break;
			case 'para':
				id = 'Pará';
				break;
		}

		title.html('<i class="fas fa-chart-area"></i> '+id+' data');
		desc.text('Uma descrição breve sobre '+id);
		tools.html('<i class="fas fa-info-circle"></i> '+id+' is 1º in healthy quality');

		black.fadeIn(500);
	});
	fechar.click(function() {
		black.fadeOut(500);
	});
	fechar.css({
		cursor: 'pointer'
	});
});