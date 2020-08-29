<?php
include "db.php";
$auth = false;
 function cleanData(&$str)
 {
   $str = preg_replace("/\t/", "\\t", $str);
   $str = preg_replace("/\r?\n/", "\\n", $str);
   if(strstr($str, '"')) $str = '"' . str_replace('"', '""', $str) . '"';
 }

 if(isset($_POST['token']))
 {
    if($_POST['token']=="uptopAdmin1234")
    {
        $auth = true;
    }
 }
 if ($auth) {
     $data = [];
     $i=0;
     $res = $conn->query("SELECT * FROM userenquiry");
     while ($row=mysqli_fetch_assoc($res)) {
         $temp = [
        "Sno"=>$row['id'],
        "Date"=>$row['Date'],
        "CourseName"=>$row['Course'],
        "UserName"=>$row['Name'],
        "Email"=>$row['Email'],
        "Contact"=>$row['Phone'],
        "City"=>$row['City'],
        "Designation"=>$row['Designation'],
     ];
         $data[$i]=$temp;
         $i = $i + 1;
     }



     // filename for download
     $filename = "userenquiry_data_" . date('Ymd') . ".xls";

     header("Content-Disposition: attachment; filename=\"$filename\"");
     header("Content-Type: application/vnd.ms-excel");

     $flag = false;
     foreach ($data as $row) {
         if (!$flag) {
             // display field/column names as first row
             echo implode("\t", array_keys($row)) . "\r\n";
             $flag = true;
         }
         array_walk($row, __NAMESPACE__ . '\cleanData');
         echo implode("\t", array_values($row)) . "\r\n";
     }
     exit;
 }//auth
 else{
     echo "Access Denied";
 }



?>