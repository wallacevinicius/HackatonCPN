<?php
// Informações para conexão
$host = 'localhost';
$usuario = 'u999279455_admin';
$senha = 'wallace123';
$banco = 'u999279455_data';
// Realizando conexão e selecionando o banco de dados
$conn = mysql_connect($host, $usuario, $senha) or die(mysql_error());
$db = mysql_select_db($banco, $conn) or die(mysql_error());
// Definindo o charset como utf8 para evitar problemas com acentuação
$charset = mysql_set_charset('utf8');
?>