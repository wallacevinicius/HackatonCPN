$(document).ready(function(){
	var black = $('.black'),
	      fechar = $('#fechar')
	      img = $('.imgWelcome');
	black.hide();
	$('#map a').click(function(){
		var id = $(this).attr('id');
		var popu = 0;
		var title = $('.black > .title > .container > h1');
		var desc = $('.black > .title > .container > h6');
		var tools = $('.black > .toolbar > .container');
		var alert = $('.black > .container > .infos');
		var table = $('.black > .container > .table > tbody > tr');

		var amazonas = [["MOBILIDADE",934120],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",505266926.45],["PESQUISA/EDUCAÇÃO",4238538.84],["MEDICAMENTOS",8620451.32],["ESTRUTURA",35632047.96],["PROJETOS DE SANEMANTO",2614977.28]];
		var roraima = [["MOBILIDADE",1162347.50],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",70101652.90],["PESQUISA/EDUCAÇÃO",49500.00],["MEDICAMENTOS",1118095.11],["ESTRUTURA",5899278.71],["PROJETOS DE SANEMANTO",1056193.08]];
		var amapa = [["MOBILIDADE",2603080.00],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",120964128.87],["PESQUISA/EDUCAÇÃO",194500.00],["MEDICAMENTOS",528552.92],["ESTRUTURA",10994669.61],["PROJETOS DE SANEMANTO",3166085.20]];
		var para = [["MOBILIDADE",3023242.12],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",318927789.37],["PESQUISA/EDUCAÇÃO",4498128.11],["MEDICAMENTOS",7841157.14],["ESTRUTURA",26364172.11],["PROJETOS DE SANEMANTO",13781633.71]];
		var tocantins = [["MOBILIDADE",238110.03],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",259271317.24],["PESQUISA/EDUCAÇÃO",324500.00],["MEDICAMENTOS",1615367.95],["ESTRUTURA",8921108.24],["PROJETOS DE SANEMANTO",1349566.80]];
		var rondonia = [["MOBILIDADE",83160.00],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",192555166.82],["PESQUISA/EDUCAÇÃO",1549500.00],["MEDICAMENTOS",2801875.80],["ESTRUTURA",6890661.49],["PROJETOS DE SANEMANTO",1312390.32]];
		var acre = [["MOBILIDADE",9544315.70],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",201248857.50],["PESQUISA/EDUCAÇÃO",349500.00],["MEDICAMENTOS",638862.75],["ESTRUTURA",5981215.48],["PROJETOS DE SANEMANTO",2302882.50]];

		var indice = [[0.02],[0.51],[0.35],[0.67],[0.60],[0.15],[0.39]];

		if(id == "amazonas"){
			if(indice[6] >= 0 && indice[6] <= 0.3){
				alert.html('<div class="alert alert-danger" role="alert">O indice de '+indice[6]+' esta em uma condição péssima</div>');
			}else if(indice[6] > 0.3 && indice[6] <= 0.6){
				alert.html('<div class="alert alert-warning" role="alert">O indice de '+indice[6]+' esta em uma condição razoavel</div>');
			}else if(indice[6] > 0.6 && indice[6] <=1){
				alert.html('<div class="alert alert-success" role="alert">O indice de '+indice[6]+' esta em uma condição boa</div>');
			}
		}

		for(var i = 0; i < 7; i++){
			table.append('<td>'+indice[i]+'</td>');
		}

		// Chartkick.configure({language: "de"});
		// Chartkick.configure({mapsApiKey: "test123"})
		// Chartkick.options = {colors: ["#b00", "#666"]};
		// Chartkick.options = {legend: "right"};
		// Chartkick.options = {title: "Bingo"};

		var CustomAdapter = {
			name: "custom",
			// renderLineChart: function (chart) {
			//   chart.getElement().innerHTML = "Hi";
			// },
			renderCustomChart: function (chart) {
			chart.getElement().innerHTML = "Custom Chart";
			}
		};

		Chartkick.CustomChart = function (element, dataSource, options) {
			Chartkick.createChart("CustomChart", this, element, dataSource, options);
		};

		Chartkick.adapters.push(CustomAdapter);

		switch(id){
			case 'riograndedonorte':
				id = 'Rio Grande do Norte';
				new Chartkick.ColumnChart("column-prefix", riograndedonorte, {prefix: "R$"});
				break;
			case 'matogrosso':
				id = 'Mato Grosso';
				new Chartkick.ColumnChart("column-prefix", matogrosso, {prefix: "R$"});
				break;
			case 'mattogrossodosul':
				id = 'Mato Grosso do Sul';
				new Chartkick.ColumnChart("column-prefix", mattogrossodosul, {prefix: "R$"});
				break;
			case 'santacatarina':
				id = 'Santa Catarina';
				new Chartkick.ColumnChart("column-prefix", santacatarina, {prefix: "R$"});
				break;
			case 'riograndedosul':
				id = 'Rio Grande do Sul';
				new Chartkick.ColumnChart("column-prefix", riograndedosul, {prefix: "R$"});
				break;
			case 'saopaulo':
				id = 'São Paulo';
				new Chartkick.ColumnChart("column-prefix", saopaulo, {prefix: "R$"});
				break;
			case 'minasgerais':
				id = 'Minas Gerais';
				new Chartkick.ColumnChart("column-prefix", minasgerais, {prefix: "R$"});
				break;
			case 'riodejaneiro':
				id = 'Rio de Janeiro';
				new Chartkick.ColumnChart("column-prefix", riodejaneiro, {prefix: "R$"});
				break;
			case 'espiritosanto':
				id = 'Espírito Santo';
				new Chartkick.ColumnChart("column-prefix", espiritosanto, {prefix: "R$"});
				break;
			case 'distritofederal':
				id = 'Distrito Federal';
				new Chartkick.ColumnChart("column-prefix", distritofederal, {prefix: "R$"});
				break;
			case 'maranhao':
				id = 'Maranhão';
				new Chartkick.ColumnChart("column-prefix", maranhao, {prefix: "R$"});
				break;
			case 'paraiba':
				id = 'Paraíba';
				new Chartkick.ColumnChart("column-prefix", paraiba, {prefix: "R$"});
				break;
			case 'amapa':
				id = 'Amapá';
				popu= "766.679";
				new Chartkick.ColumnChart("column-prefix", amapa, {prefix: "R$"});
				break;
			case 'ceara':
				id = 'Ceará';
				new Chartkick.ColumnChart("column-prefix", ceara, {prefix: "R$"});
				break;
			case 'piaui':
				id = 'Piauí';
				new Chartkick.ColumnChart("column-prefix", piaui, {prefix: "R$"});
				break;
			case 'para':
				id = 'Pará';
				popu = "8.175.113";
				new Chartkick.ColumnChart("column-prefix", para, {prefix: "R$"});
				break;
			case 'rondonia':
				id = 'Rondônia';
				popu = "1.768.204";
				new Chartkick.ColumnChart("column-prefix", rondonia, {prefix: "R$"});
				break;
			case 'acre':
				popu = "803.513";
				new Chartkick.ColumnChart("column-prefix", acre, {prefix: "R$"});
				break;
			case 'amazonas': 
				popu = "3.938.336";
				new Chartkick.ColumnChart("column-prefix", amazonas, {prefix: "R$"});
				break;
			case 'roraima':
				popu = "505.665";
				new Chartkick.ColumnChart("column-prefix", roraima, {prefix: "R$"});
				break;
			case 'tocantins':
				popu = "1.515.126";
				new Chartkick.ColumnChart("column-prefix", tocantins, {prefix: "R$"});
				break;
		}

		title.html('<i class="fas fa-chart-area"></i> '+id+' data');
		desc.text('Know more about '+id+' healthy');
		tools.html('<i class="fas fa-info-circle"></i> '+id+' had <span class="numPop">'+popu+' people</span> in 2015');

		black.fadeIn(500);
	});
	fechar.click(function() {
		black.fadeOut(500);
	});
	fechar.css({
		cursor: 'pointer'
	});

});