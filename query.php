<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "vims_db";

$con = mysqli_connect($server, $username, $password, $dbname);

if(!$con){
    echo "not connected";
}
else{
    echo "connected";
}


// We need to fetch input data firstly in php file, so we need to create variables for each input value.

$name   = $_POST['name'];
$topic   = $_POST['topic'];
$email   = $_POST['email'];
$details   = $_POST['details'];



// now for inserting data into database we need to write query

$sql = "INSERT INTO `query`(`name`, `topic`, `email`, `detail`) VALUES ('$name','$topic','$email','$details')";

$result = mysqli_query($con, $sql);

if($result){
    echo "Data submitted";
}
// else{
//     echo "Query submission failed";
// }

?>