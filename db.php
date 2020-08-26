
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "uptop";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
  if ($conn->connect_error) {
        $connStatus=0;
        die("Connection failed: " . $conn->connect_error);
  } else {
      $connStatus = 1;
  }
?>