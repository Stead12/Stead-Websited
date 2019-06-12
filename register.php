<?php
require 'authenticate.php';

// server connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$db = "stead";

// database input parameters
$id =NULL;
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$password = $_POST['password'];
$cpassword = $_POST['cpassword'];
$userid = $_POST['userid'];
$phone = $_POST['phone'];
$birth = $_POST['birth'];
$address = $_POST['address'];
$gender = $_POST['gender'];
@$file = $_FILES['profilePic'];




if(@!validateUser($fname,$lname)){

$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["profilePic"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(@isset($_POST["submit"])) {
    $check = getimagesize($_FILES["profilePic"]["tmp_name"]);
    if($check !== false) {
      //  echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 1;
    }
}
// Check if file already exists
if (@file_exists($target_file)) {
    //echo "Sorry, file already exists.";
    $uploadOk = 1;
}
// Check file size
if (@$_FILES["profilePic"]["size"] > 500000) {
    //echo "Sorry, your file is too large.";
    $uploadOk = 1;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" ) {
    //echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    //echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (@move_uploaded_file($_FILES["profilePic"]["tmp_name"], $target_file)) {
      //  echo "The file ". basename( $_FILES["profilePic"]["name"]). " has been uploaded.";
    } else {
        //echo "Sorry, there was an error uploading your file.";
    }
}





    // database server connectivity procedure


    /*
// Create connection
   @ $conn =  new mysqli($servername, $username, $password);

// Check connection
    if (@$conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        echo "Connected successfully<br>";

    */

$host = "localhost";
$user = "root";
$password = '';

$db = "stead";


if(@$conn=mysqli_connect($host, $user, $password))
{
    //echo 'connected';
    if(@mysqli_select_db($conn,$db)){
        echo "db selected<br>";
    }
}

else
{
    //echo 'oops ... not connected';
}



    //}

    if ((($fname == NULL) or ($lname == NULL) or ($email == NULL) or ($password == NULL) or ($cpassword == NULL) or ($userid == NULL) or ($phone == NULL) or ($birth == NULL) or
            ($address == NULL) or ($gender == NULL) and ($password == $cpassword))) {
        $pword = $password;




        $dbase = mysqli_select_db($conn, $db);
        $sql = "INSERT INTO members VALUES (NULL,'$fname','$lname','$email','$pword','$userid','$phone','$birth','$address','$gender','$target_file')";

        if ($conn->query($sql) === TRUE) {
            echo "Successfully registered";
            // generate cookie for user
            //header("location:index.html");
            if (@generateCookie($fname, $lname, $email)) {
                echo "Cookies generated successfully";
            } else {
                echo "Failed to generate cookies... check your browser settings to make sure cookies is enabled.";
            }


        } else {
            echo "<br>Registration failed... try again later!<br>";
            //echo "Check to make sure all form fields are corectly filled";
            die();

        }
        $conn->close();
    }}
    else{
      echo 'Signed in';
    }
?>