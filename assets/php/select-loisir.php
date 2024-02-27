<?php
$host = 'localhost';
$dbname = 'resume';
$username = 'root';
$password = '';

$dsn = "mysql:host=$host;dbname=$dbname";
$sqlselect = "SELECT * FROM hobbies";

try {
    $pdo = new PDO($dsn, $username, $password);
    $stmtselect = $pdo->query($sqlselect);

    if ($stmtselect === false) {
        die("Erreur");
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
