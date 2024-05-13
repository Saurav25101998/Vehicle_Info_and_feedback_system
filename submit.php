<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "vims_db";

$con = mysqli_connect($server, $username, $password, $dbname);

if(!$con){
    echo "Database not connected successfully.";
}


// We need to fetch input data firstly in php file, so we need to create variables for each input value.

$name   = $_POST['name'];
$email   = $_POST['email'];
$password   = $_POST['password'];
$age   = $_POST['age'];
$contact   = $_POST['phone'];
$address   = $_POST['address'];


// now for inserting data into database we need to write query

$sql = "INSERT INTO `registration`(`name`, `email`, `password`, `age`, `contact`, `address`) VALUES ('$name','$email','$password','$age','$contact','$address')";

$result = mysqli_query($con, $sql);

if($result){
    echo "Data submitted";
}
else{
    echo "Query submission failed";
}

?>