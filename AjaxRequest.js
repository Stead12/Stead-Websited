function makerequest(serverPage, objID) {
  //Create a boolean variable to check for a valid Internet Explorer instance.
  var xmlhttp = false;
  //Check if we are using IE.
  try {
  //If the Javascript version is greater than 5.
  xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

  } catch (e) {
  //If not, then use the older active x object.
  try {
  //If we are using Internet Explorer.
  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

  } catch (E) {
  //Else we must be using a non-IE browser.
  xmlhttp = false;
  }
  }
  //If we are using a non-IE browser, create a javascript instance of the object.
  if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
  xmlhttp = new XMLHttpRequest();

  }

  var obj = document.getElementById(objID);
  xmlhttp.open("GET", serverPage);
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      obj.innerHTML = xmlhttp.responseText;
    }
  }

}

function authenticate(objID) {
    //Create a boolean variable to check for a valid Internet Explorer instance.
    var xmlhttp = false;
    //Check if we are using IE.
    try {
        //If the Javascript version is greater than 5.
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

    } catch (e) {
        //If not, then use the older active x object.
        try {
            //If we are using Internet Explorer.
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        } catch (E) {
            //Else we must be using a non-IE browser.
            xmlhttp = false;
        }
    }
    //If we are using a non-IE browser, create a javascript instance of the object.
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();

    }

    var obj = document.getElementById(objID);
    xmlhttp.open("GET", "http://localhost/STEAD SOCIETY/validate.php");
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var resp = xmlhttp.responseText;
            if(resp == 'Signed in'){
                obj.innerHTML = "<b>Logged in<b>";
            }
        }
    }

}



function register(serverPage, objID, firstname, lastname, email, password, confirmPassword , userId , phoneNumber , birthDate , homeAddress , profilePicture , gender) {
    /*
    *
    * serverPage : PHP file that handles subscription
    * objID : Document element to which the data from the serverPage loads
    * email : email input from the email text box
    *
    * */

    //Create a boolean variable to check for a valid Internet Explorer instance.
    var xmlhttp = false;
    //Check if we are using IE.
    try {
        //If the Javascript version is greater than 5.
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

    } catch (e) {
        //If not, then use the older active x object.
        try {
            //If we are using Internet Explorer.
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        } catch (E) {
            //Else we must be using a non-IE browser.
            xmlhttp = false;
        }
    }
    //If we are using a non-IE browser, create a javascript instance of the object.
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();

    }
    var estring = email;
    var obj = document.getElementById(objID);
    xmlhttp.open("POST", serverPage+"?email="+estring,true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            obj.innerHTML = xmlhttp.responseText;
            return true;
        }
    }

    /*
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(estring);
    xmlhttp.open("GET","getuser.php?q="+str,true);
    */
    var sreq = "fname="+firstname+"&lname="+lastname+"&email="+email+"&password="+password+"&cpassword="+confirmPassword+"&userid="+userId+"&phone="+phoneNumber+"&birth="+birthDate+"&address="+homeAddress+"&gender="+gender+"&profilePic="+profilePicture;
    xmlhttp.send(sreq);
}

function signUp(fname,lname,regNo,year,dept,serverPage, objID) {
    /*
    *
    * serverPage : PHP file that handles subscription
    * objID : Document element to which the data from the serverPage loads
    * email : email input from the email text box
    *
    * */

    alert(fname+" "+lname);

    //Create a boolean variable to check for a valid Internet Explorer instance.
    var xmlhttp = false;
    //Check if we are using IE.
    try {
        //If the Javascript version is greater than 5.
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");

    } catch (e) {
        //If not, then use the older active x object.
        try {
            //If we are using Internet Explorer.
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

        } catch (E) {
            //Else we must be using a non-IE browser.
            xmlhttp = false;
        }
    }
    //If we are using a non-IE browser, create a javascript instance of the object.
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();

    }

    /*
    var cstring = comment;
    var estring = email;
    */

    var obj = document.getElementById(objID);
    xmlhttp.open("GET", serverPage+"?fname="+fname+"&lname="+lname+"&regNo="+regNo
        +"&year="+year+"&dept="+dept,true);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            obj.innerHTML = xmlhttp.responseText;
            return true;

        }else{
            return false;
        }
    }

    /*
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(estring);
    xmlhttp.open("GET","getuser.php?q="+str,true);
    */
    xmlhttp.send();
}