function Name(){
  var myName, pswd;
  myName = document.getElementById('fullName').Value;
  pswd = document.getElementById('password').Value;

  if(pswd < 8){
    alert("Passowrd must be at least 8 characters");
  } else(
    alert("Dear " + myName + " Regisration was Succesful");
  )
}