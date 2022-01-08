<?php
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$mail = $_POST['mail'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//Database connection
$conn = new mysqli('localhost', 'root', '', 'contact');
if($conn->connect_error){
    die('Connection Failed');
} else {
    $stmt = $conn->prepare("insert into contact(fname, lname, mail, phone, message) 
    values(?, ?, ?, ?, ?");
    $stmt->bind_param("sssss", $fname, $lname, $mail, $phone, $message);
    $stmt->execute();
    echo "registration successfully";
    $stmt->close();
    $conn->close();
    header("localhost/new");
} 
?>