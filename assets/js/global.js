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
		var amazonas = [["MOBILIDADE",934120],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",505266926.45],["PESQUISA/EDUCAÇÃO",4238538.84],["MEDICAMENTOS",8620451.32],["ESTRUTURA",35632047.96],["PROJETOS DE SANEMANTO",2614977.28]];
		var roraima = [["MOBILIDADE",1162347.50],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",70101652.90],["PESQUISA/EDUCAÇÃO",49500.00],["MEDICAMENTOS",1118095.11],["ESTRUTURA",5899278.71],["PROJETOS DE SANEMANTO",1056193.08]];
		var amapa = [["MOBILIDADE",2603080.00],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",120964128.87],["PESQUISA/EDUCAÇÃO",194500.00],["MEDICAMENTOS",528552.92],["ESTRUTURA",10994669.61],["PROJETOS DE SANEMANTO",3166085.20]];
		var para = [["MOBILIDADE",3023242.12],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",318927789.37],["PESQUISA/EDUCAÇÃO",4498128.11],["MEDICAMENTOS",7841157.14],["ESTRUTURA",26364172.11],["PROJETOS DE SANEMANTO",13781633.71]];
		var tocantins = [["MOBILIDADE",238110.03],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",259271317.24],["PESQUISA/EDUCAÇÃO",324500.00],["MEDICAMENTOS",1615367.95],["ESTRUTURA",8921108.24],["PROJETOS DE SANEMANTO",1349566.80]];
		var rondonia = [["MOBILIDADE",83160.00],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",192555166.82],["PESQUISA/EDUCAÇÃO",1549500.00],["MEDICAMENTOS",2801875.80],["ESTRUTURA",6890661.49],["PROJETOS DE SANEMANTO",1312390.32]];
		var acre = [["MOBILIDADE",9544315.70],["IMPLEMENTAÇÃO DE PROJETOS/SISTEMAS",201248857.50],["PESQUISA/EDUCAÇÃO",349500.00],["MEDICAMENTOS",638862.75],["ESTRUTURA",5981215.48],["PROJETOS DE SANEMANTO",2302882.50]];

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
	});;

});