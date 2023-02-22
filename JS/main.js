  let name = prompt("What is your name? ");
  let welcome = document.getElementById("welcome");
  let test = document.getElementById("test");
  let stops = document.getElementById("stop");

  

if(name !== null && name!== ''){
  welcome.innerHTML = "Welcome Here "+ name;
}else {
  welcome.style.display='none';
  test.style.display='none';
  stops.style.borderStyle = "none"
}
  test.innerHTML = 'OK';
  

function stop(){
  welcome.style.display='none';
  test.style.display='none';
  stops.style.borderStyle = "none"
  
}