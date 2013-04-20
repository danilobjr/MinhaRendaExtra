<?php
//print "Hoje é ";
//print date("j F o, \à\\s G.i a", time());

//5º exemplo Usando uma função propria do php:
//setlocale(LC_TIME,"ptb.UTF-8");
setlocale(LC_ALL, "pt_BR", "pt_BR.iso-8859-1", "pt_BR.utf-8", "portuguese");
$data_completa = strftime("Hoje é %A, %d de %B de %Y");
echo $data_completa;
?>