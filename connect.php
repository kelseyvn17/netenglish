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
/*Validation*/
// Function to check email regex
function is_email($email) {
    $is_email = true;
    $regex = '/^(?!\.)(?!.*\.$)(?!.*?\.\.)^([a-zA-Z\d\-.]+)@([a-zA-Z\d\.]+)\.([a-zA-Z]{2,5})$/';
    if(!preg_match($regex, $email)){
        $is_email = false;
    }
    return $is_email;
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
            // Checks if email is valid
            if(!is_email($email)) {
                //error
                $_SESSION['email_error'] = true;
                $has_error = true;
            }
            // Checks if phone is valid
            if(!is_phone($phone)) {
                //error
                $_SESSION['phone_error'] = true;
                $has_error = true;
            }
            return $has_error;        
?>