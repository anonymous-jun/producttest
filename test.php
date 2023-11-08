<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerador de Senhas</title>
    <style>
        body {
            text-align: center;
            margin-top: 10%;
            font-size: 15pt;
        }

        table {
            margin-left: auto;
            margin-right: auto;
        }
        input[type="submit"]{

            font-size: 15pt;
            width: 200px;
            height: 30px;
        }
    </style>
</head>

<body>

    <header>
        <h1>Gerador de Senhas Fortes !</h1>
    </header>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">

        <label for="length">Quantidade de Caracteres: </label>
        <input type="number" name="length" step="1.0" min="8" value="<?php echo isset($_POST['length']) ? $length = $_POST['length'] : $length = 8; ?>"> <br> <br>

        <label for="Ucase">Incluir Letras maiúsculas? </label>
        <?php
        isset($_POST['Ucase']) ? $Ucase = $_POST['Ucase'] : $Ucase = 0;

        echo '<input type="checkbox" name="Ucase" id="Ucase" value="1" ' . ($Ucase == 1 ? 'checked' : '') . '>'; ?> <br> <br>

        <label for="symbols">Incluir Simbolos? </label>
        <?php
        isset($_POST['symbols']) ? $simbols = $_POST['symbols'] : $simbols = 0;

        echo '<input type="checkbox" name="symbols" id="" value="1" ' . ($simbols == 1 ? 'checked' : '') . '>'; ?> <br> <br>

        <label for="numbers">Incluir Números? </label>
        <?php
        isset($_POST['numbers']) ? $numbers = $_POST['numbers'] : $numbers = 0;

        echo '<input type="checkbox" name="numbers" id="" value="1" ' . ($numbers == 1 ? 'checked' : '') . '>'; ?> <br> <br>

        <input type="submit" value="Gerar" onclick="check()"> <br> <br> <br> <br>

        <?php
        $senha = '';
        $letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        $simbolos = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '+', '=', ',', '.', ';', ':', '/', '[', ']', '{', '}', '<', '>', '?', '|', '~', '^', '_', '`'];
        $numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        isset($_POST['length']) ? $length = $_POST['length'] : $length = '';



        for ($i = 0; $i < $length; $i++) {

            mt_rand(0, 1) == 1 && $Ucase == 1
            ? $senha = $senha . strtoupper($letras[array_rand($letras)])
            : (mt_rand(0, 1) == 1 && $simbols == 1
            ? $senha = $senha . $simbolos[array_rand($simbolos)]
            : (mt_rand(0, 1) == 1 && $numbers == 1
            ? $senha = $senha . $numeros[array_rand($numeros)]
            : $senha = $senha . $letras[array_rand($letras)]));
            
        }

        echo $length == '' ? null : "<table border='2.0'><td><strong>" . $senha . "</strong></td></table>";

        ?>

</body>

</html>
