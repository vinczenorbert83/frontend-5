document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() { 

var button = document.getElementById('button');
button.addEventListener('click', onSubmit);
var frm = document.getElementById('frm');
frm.addEventListener('submit', onSending);


//frm.onsubmit = onSending;


function onSending(evt){

	
	//alert("test");
	// if (validate())
    // 	return true;
    // else
    	validate();
    	
     	//if (validate()) {
     	//	console.log('not submitting');
     	//	return true;
     	//}
     	//else {
     		evt.preventDefault();
     		return false;
     	//}
}

function validate(){

	var fname = document.getElementById("fname");
	var lname = document.getElementById("lname");
	var fnameVal = fname.value;
	var lnameVal = lname.value;
	var error = false;
	//console.log((fname == "" || lname == ""))

	if (fnameVal === ""){
		error = true;
	    setErrorStyle(fname);
	}
	else {
		setNoStyle(fname);
	}

	if (lnameVal === ""){
		error = true;
	    setErrorStyle(lname);
	}
	else {
		setNoStyle(lname);
	}

	if (!error){
		setSuccessMessage("Thank you " + fnameVal + "!");
	}
	else{
		hideSuccessMessage();
	}



}

function setErrorStyle(obj){

		obj.style.border = "2px";
    	obj.style.borderColor="red";
    	obj.style.borderStyle = "solid";	
}

function setNoStyle(obj){

		obj.style.border = "";
    	obj.style.borderColor="";
    	obj.style.borderStyle = "";	
}

function setSuccessMessage(txt){

	document.getElementById("confirmation").style.visibility = 'visible';
	document.getElementById("confirmation").innerHTML = txt;
}

function hideSuccessMessage(){

	document.getElementById("confirmation").style.visibility = 'hidden';
	document.getElementById("confirmation").innerHTML = "";
}


function onSubmit(){

  /*
  if (fname.val === 0) {
    fname.style.border = "2px",
    fname.style.borderColor="red"
    }
  
  if (lname.val === 0) {
    lname.style.border = "2px",
    lname.style.borderColor="red"
    }
    */

}
}