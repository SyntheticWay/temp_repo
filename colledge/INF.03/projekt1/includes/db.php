<?php

// удалить. будет присылаться с UI
$user = "admin";
$pass = "Z4@rnyHasz";
$host = "localhost";
$dbname = "ogloszenia";

try {
  $conn = new PDO("mysql:host=$host", $user, $pass);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $sql = "CREATE DATABASE $dbname";
  // use exec() because no results are returned
  $conn->exec($sql);
  echo "Database created successfully<br>";
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>