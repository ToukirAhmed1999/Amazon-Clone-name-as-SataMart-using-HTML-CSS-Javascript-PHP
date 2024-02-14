<?php
$name = $_POST['name'];
$number = $_POST['number'];
$password = $_POST['password'];



$conn = new mysqli('localhost', 'satamart_toukir', 'toukir1999@', 'satamart_satamart');

if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);

}

else{
    $stmt = $conn->prepare("insert into customer_info(name,number,password) values(?, ?, ?)");
    $stmt->bind_param("sss",$name, $number, $password);
    $stmt->execute();
    echo "registration successful...";
    $stmt->close();
    $conn->close();
}


?>