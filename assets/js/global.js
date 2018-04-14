$(document).ready(function(){
	var black = $('.black'),
	      fechar = $('#fechar')
	      map = $('#map a');
	black.hide();

	function ShowIndices(id) {
		var table = $('.black > .container > .table > tbody > tr');
		var indice = [[0],[0],[0],[0],[0],[0],[0],[0]];

		switch(id){
			case 'riograndedonorte':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'matogrosso':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'mattogrossodosul':
				table.empty();
				iindice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'santacatarina':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'riograndedosul':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'saopaulo':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'minasgerais':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'riodejaneiro':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'espiritosanto':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'distritofederal':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'maranhao':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'paraiba':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'amapa':
				table.empty();
				indice = [[0.28],[0.63],[0.08],[0.21],[0.96],[0.92],[0.51]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}	
				break;
			case 'ceara':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'piaui':
				table.empty();
				indice = [[0],[0],[0],[0],[0],[0],[0],[0]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'para':
				table.empty();
				indice = [[0.02],[0.51],[0.35],[0.67],[0.60],[0.15],[0.39]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'rondonia':
				table.empty();
				indice = [[0.02],[0.51],[0.35],[0.67],[0.60],[0.15],[0.39]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'acre':
				table.empty();
				indice = [[0.02],[0.51],[0.35],[0.67],[0.60],[0.15],[0.39]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'amazonas': 
				table.empty();
				indice = [[0.02],[0.51],[0.35],[0.67],[0.60],[0.15],[0.39]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'roraima':
				table.empty();
				indice = [[0.02],[0.51],[0.35],[0.67],[0.60],[0.15],[0.39]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
			case 'tocantins':
				table.empty();
				indice = [[0.02],[0.51],[0.35],[0.67],[0.60],[0.15],[0.39]];
				for(var i = 0; i < 7; i++){
						table.append('<td>'+indice[i]+'</td>');
				}
				break;
		}
	}

	function ShowAlert(indiceGeral) {
		var alert = $('.black > .container > .infos');

		if(indiceGeral >= 0 && indiceGeral <= 0.3){
			alert.html('<div class="alert alert-danger" role="alert"><i class="fas fa-exclamation-circle"></i> O indice de <strong>'+indiceGeral+'</strong> esta em uma condição péssima</div>');
		}else if(indiceGeral > 0.3 && indiceGeral <= 0.6){
			alert.html('<div class="alert alert-warning" role="alert"><i class="fas fa-exclamation-circle"></i> O indice de <strong>'+indiceGeral+'</strong> esta em uma condição razoavel</div>');
		}else if(indiceGeral > 0.6 && indice <=1){
			alert.html('<div class="alert alert-success" role="alert"><i class="fas fa-exclamation-circle"></i> O indice de <strong>'+indiceGeral+'</strong> esta em uma condição boa</div>');
		}
	}

	function ShowPlot(id) {
		//Variavel que recebe a população do estado
		var popu = 0;

		//Variavel que define o local de inserir o valor da população
		var tools = $('.black > .toolbar > .container');

		//Variaveis dos dados de investimento de cada estado
		var amazonas = [["Mobilidade",934120],["Implementação de Projetos/Sistemas",505266926.45],["Pesquisa/Educação",4238538.84],["Medicamentos",8620451.32],["Estrutura",35632047.96],["Projetos de Saneamento",2614977.28]];
		var roraima = [["Mobilidade",1162347.50],["Implementação de Projetos/Sistemas",70101652.90],["Pesquisa/Educação",49500.00],["Medicamentos",1118095.11],["Estrutura",5899278.71],["Projetos de Saneamento",1056193.08]];
		var amapa = [["Mobilidade",2603080.00],["Implementação de Projetos/Sistemas",120964128.87],["Pesquisa/Educação",194500.00],["Medicamentos",528552.92],["Estrutura",10994669.61],["Projetos de Saneamento",3166085.20]];
		var para = [["Mobilidade",3023242.12],["Implementação de Projetos/Sistemas",318927789.37],["Pesquisa/Educação",4498128.11],["Medicamentos",7841157.14],["Estrutura",26364172.11],["Projetos de Saneamento",13781633.71]];
		var tocantins = [["Mobilidade",238110.03],["Implementação de Projetos/Sistemas",259271317.24],["Pesquisa/Educação",324500.00],["Medicamentos",1615367.95],["Estrutura",8921108.24],["Projetos de Saneamento",1349566.80]];
		var rondonia = [["Mobilidade",83160.00],["Implementação de Projetos/Sistemas",192555166.82],["Pesquisa/Educação",1549500.00],["Medicamentos",2801875.80],["Estrutura",6890661.49],["Projetos de Saneamento",1312390.32]];
		var acre = [["Mobilidade",9544315.70],["Implementação de Projetos/Sistemas",201248857.50],["Pesquisa/Educação",349500.00],["Medicamentos",638862.75],["Estrutura",5981215.48],["Projetos de Saneamento",2302882.50]];

		Chartkick.options = {colors: ["#f1c40f", "#CCC"]};
		var CustomAdapter = {
			name: "custom",
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
				new Chartkick.BarChart("column-prefix", riograndedonorte, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'matogrosso':
				id = 'Mato Grosso';
				new Chartkick.BarChart("column-prefix", matogrosso, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'mattogrossodosul':
				id = 'Mato Grosso do Sul';
				new Chartkick.BarChart("column-prefix", mattogrossodosul, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'santacatarina':
				id = 'Santa Catarina';
				new Chartkick.BarChart("column-prefix", santacatarina, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'riograndedosul':
				id = 'Rio Grande do Sul';
				new Chartkick.BarChart("column-prefix", riograndedosul, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'saopaulo':
				id = 'São Paulo';
				new Chartkick.BarChart("column-prefix", saopaulo, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'minasgerais':
				id = 'Minas Gerais';
				new Chartkick.BarChart("column-prefix", minasgerais, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'riodejaneiro':
				id = 'Rio de Janeiro';
				new Chartkick.BarChart("column-prefix", riodejaneiro, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'espiritosanto':
				id = 'Espírito Santo';
				new Chartkick.BarChart("column-prefix", espiritosanto, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'distritofederal':
				id = 'Distrito Federal';
				new Chartkick.BarChart("column-prefix", distritofederal, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'maranhao':
				id = 'Maranhão';
				new Chartkick.BarChart("column-prefix", maranhao, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'paraiba':
				id = 'Paraíba';
				new Chartkick.BarChart("column-prefix", paraiba, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'amapa':
				id = 'Amapá';
				popu= "766.679";
				new Chartkick.BarChart("column-prefix", amapa, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'ceara':
				id = 'Ceará';
				new Chartkick.BarChart("column-prefix", ceara, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'piaui':
				id = 'Piauí';
				new Chartkick.BarChart("column-prefix", piaui, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'para':
				id = 'Pará';
				popu = "8.175.113";
				new Chartkick.BarChart("column-prefix", para, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'rondonia':
				id = 'Rondônia';
				popu = "1.768.204";
				new Chartkick.BarChart("column-prefix", rondonia, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'acre':
				popu = "803.513";
				new Chartkick.BarChart("column-prefix", acre, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'amazonas': 
				popu = "3.938.336";
				new Chartkick.BarChart("column-prefix", amazonas, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"},);
				break;
			case 'roraima':
				popu = "505.665";
				new Chartkick.BarChart("column-prefix", roraima, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
			case 'tocantins':
				popu = "1.515.126";
				new Chartkick.BarChart("column-prefix", tocantins, {prefix: "R$", "xtitle": "Quantidade de dinheiro", "ytitle": "Tipo de investimento"});
				break;
		}

		tools.html('<i class="fas fa-info-circle"></i> '+id+' had <span class="numPop">'+popu+' people</span> in 2015');
	}

	map.click(function(){
		var id = $(this).attr('id');
		var title = $('.black > .title > .container > h1');
		var desc = $('.black > .title > .container > h6');
		var indicesGerais = [[0.39],[0.45],[0.52],[0.21],[0.28],[0.27],[0.58]];

		ShowIndices(id);

		if(id == "amazonas"){
			ShowAlert(indicesGerais[0]);
		}else if(id == "roraima"){
			ShowAlert(indicesGerais[1]);
		}else if(id == "amapa"){
			ShowAlert(indicesGerais[2]);
		}else if(id == "para"){
			ShowAlert(indicesGerais[3]);
		}else if(id == "tocantins"){
			ShowAlert(indicesGerais[4]);
		}else if(id == "rondonia"){
			ShowAlert(indicesGerais[5]);
		}else if(id == "acre"){
			ShowAlert(indicesGerais[6]);
		}

		ShowPlot(id);

		title.html('<i class="fas fa-chart-area"></i> '+id+' data');
		desc.text('Know more about '+id+' healthy');

		black.fadeIn(500);
	});
	fechar.click(function() {
		black.fadeOut(500);
	}).css({
		cursor: 'pointer'
	});

});