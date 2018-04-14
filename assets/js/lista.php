<?php 
	include 'conecta.php';

	// Recuperando informações
	$ultimo = (int) $_POST['ultimo'];

	// Selecionando mais três frases, a partir da última
	$query = mysql_query("SELECT * FROM autores");

	// Retornando frases
	while ($frase = mysql_fetch_object($query))
	echo "<p lang='{$frase->id}'>\"{$frase->texto}\" <br /> <em>{$frase->autor}</em></p>";

	echo json_encode(value)
?>