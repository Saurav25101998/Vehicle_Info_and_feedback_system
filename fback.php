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

//Start
$name  = $_POST['fname'];
$email = $_POST['email'];
$vehiclemake = $_POST['vmake'];
$vehiclemodel = $_POST['vmodel'];
$feedback = $_POST['fback'];

$sql = "INSERT INTO `feedback`(`name`, `email`, `vmake`, `vmodel`, `fback`) VALUES ('$name','$email','$vehiclemake','$vehiclemodel','$feedback')";

$result = mysqli_query($con , $sql);

if($result);
{
    echo "data submitted";
}

//End
?>