<?php
function generateCookie($fname,$lname,$email){
    // generate cookie for user
    $cookie_value = $fname+$lname;
    $cookie_name = 'STEAD';

    setcookie("fname", $fname, time() + (86400 * 31), "/"); // 86400 = 1 day
    setcookie("lname", $lname, time() + (86400 * 31), "/"); // 86400 = 1 day
    setcookie("email", $email, time() + (86400 * 31), "/"); // 86400 = 1 day

    if(!isset($_COOKIE["fname"]) or !isset($_COOKIE["lname"]) or !isset($_COOKIE["email"])) {
       // echo "Failed to set cookies... make sure cookies is enabled and try signing in again";
        return false;
    } else {
        echo "Cookies is set for authentication <br>";
        //echo "Value is: " . $_COOKIE[$cookie_name];
        return true;
    }
}

function validateUser(){
    $cookie = false;

    // generate cookie for user
    //$cookie_name = 'STEAD';


    if(!isset($_COOKIE['fname']) or !isset($_COOKIE['lname']) or !isset($_COOKIE['email'])) {
        $cookie = false;
        //echo "Not Signed in";
    } else {
        $cookie = true;
        //echo "Signed in";
    }


    return $cookie;
}

function removeCookie($fname,$lname,$email){
    // generate cookie for user
    $cookie_value = $fname+$lname;
    $cookie_name = 'STEAD';
    setcookie($cookie_name, $cookie_value, time() - (86400 * 31), "/"); // 86400 = 1 day

    if(($_COOKIE[$cookie_name])) {
        // echo "Failed to set cookies... make sure cookies is enabled and try signing in again";
        return false;
    } else {
        return true;
    }
}



?>