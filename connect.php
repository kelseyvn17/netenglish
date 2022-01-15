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
    values(?, ?, ?, ?, ?)");
    $stmt->bind_param('sssss', $fname, $lname, $mail, $phone, $message);
    $stmt->execute();
    echo "registration successfully";
    $stmt->close();
    $conn->close();
    header("Location: index.html");
}
/*Validation*/
// Function to check mail regex
function is_mail($mail) {
    $is_mail = true;
    $regex = '/^(?!\.)(?!.*\.$)(?!.*?\.\.)^([a-zA-Z\d\-.]+)@([a-zA-Z\d\.]+)\.([a-zA-Z]{2,5})$/';
    if(!preg_match($regex, $mail)){
        $is_mail = false;
    }
    return $is_mail;
}
// Function to check phone regex
function is_phone($phone) {
    $is_phone = true;
    $regex = '/^(?!.*--)\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?\d{1}[-\s\.]?[\d{1}]?[-\s\.]?[\d{1}]?$/';
    if(!preg_match($regex, $phone) ){
        $is_phone = false;
    }
    return $is_phone;
}
function validateInput(){

        /* Form Validation */
        $has_error = false;
        // Checks if first name length is smaller than 3
        if(trim(strlen($firstName)) < 2){
            //error
            $_SESSION['fname_error'] = true;
            $has_error = true;
        }
        // Checks if last name length is smaller than 3
        if(trim(strlen($lastName)) < 2){
            //error
            $_SESSION['lname_error'] = true;
            $has_error = true;
        }
    }
            // Checks if mail is valid
            if(!is_mail($mail)) {
                //error
                $_SESSION['mail_error'] = true;
                $has_error = true;
            }
            // Checks if phone is valid
            if(!is_phone($phone)) {
                //error
                $_SESSION['phone_error'] = true;
                $has_error = true;
            }
?>