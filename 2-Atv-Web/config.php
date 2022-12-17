<?php

    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'cadastro-formulario';

    $conexao = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName)

    if ($conexao->connect_errno){

        echo "Falha na conexão!";
    }

    else {
        echo "Conectado com sucesso!";
    }

?>