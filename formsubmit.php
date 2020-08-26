<?php
include "db.php";
$name=$_POST['NAME'];
$contact = $_POST['CONTACT']; 
$email = $_POST['EMAIL']; 
$city = $_POST['CITY']; 
$designation = $_POST['DESIGNATION']; 
$coursename = $_POST['COURSE']; 

try {
    $stmt = $conn->prepare("INSERT INTO userenquiry(Name, Email, Phone, City, Designation, Course) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssisss", $name, $email, $contact, $city, $designation, $coursename);
    $stmt->execute();
    $stmt->close();
    echo "Success";
}
catch(Exception $e){
    echo 'Fail:'.$e->getMessage(); 
}

?>