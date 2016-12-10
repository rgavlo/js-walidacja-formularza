"use strict";

var cbxPierwszy = document.getElementById("zgoda-marketingowa-1")
var cbxDrugi = document.getElementById("zgoda-marketingowa-2")
var cbxWszystkie = document.getElementById("wszytskie-zgody");
var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var zgodaPierwsza = document.getElementById("zgoda-marketingowa-1");

cbxWszystkie.addEventListener("change", cbxWszystkieChange);

function cbxWszystkieChange() {


    if (cbxWszystkie.checked == true) {
        cbxPierwszy.disabled = true;
        cbxDrugi.disabled = true;
        cbxPierwszy.checked = true;
        cbxDrugi.checked = true;

    } else {
        cbxPierwszy.disabled = false;
        cbxDrugi.disabled = false;
        cbxWszystkie.checked = false;
        cbxPierwszy.checked = false;
        cbxDrugi.checked = false;
    }   
    
}


function validateForm(e) {

   if(inputName.value == '') {
       e.preventDefault();
       console.log("pole imie jest puste"); 
   }

    if (inputEmail.value == '') {
        e.preventDefault();
        console.log("pole email jest puste");
    }
    
    if (!zgodaPierwsza.checked) {
        e.preventDefault();
       console.log("checkboox jest pusty");
    }
    
    
    

}

document.getElementById("wyslij").addEventListener("click", validateForm);