<?php
include 'insert-message.php';
$date = isset($_POST['date']) ? $_POST['date'] : '';
  $nom = isset($_POST['nom']) ? $_POST['nom'] : '';
  $prenom = isset($_POST['prenom']) ? $_POST['prenom'] : '';
  $email = isset($_POST['email']) ? $_POST['email'] : '';
  $message = isset($_POST['message']) ? $_POST['message'] : '';

  $data = ['$date', '$nom', '$prenom',  '$email', '$message'];
  $annee = date("Y");
  $mois = date("m");
  $jours = date("j");
  $date = $annee . "/" . $mois . "/" . $jours;
  // print_r($date);

  $dsn = "mysql:host=$host;dbname=$dbname";
  $sqlinsert = "INSERT INTO `messages`(`date`, `nom`, `prenom`, `email`, `message`) VALUES ('$date','$nom','$prenom', '$email','$message')";
  // print_r($sql);
  try {
    $pdo = new PDO($dsn, $username, $password);
    $stmtinsert = $pdo->query($sqlinsert);

    if ($stmtinsert === false) {
      die("Erreur");
    }
  } catch (PDOException $e) {
    echo $e->getMessage();
  }
  ?>

  Message envoyer