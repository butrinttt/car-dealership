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

// function displayTime(){
//     var dateTime = new Date();
//     var hrs = dateTime.getHours();
//     var min = dateTime.getMinutes();
//     var sec = dateTime.getSeconds();
//     var session = document.getElementById('session');

//     if(hrs >= 12){
//         session.innerHTML = 'PM';
//     }else{
//         session.innerHTML = 'AM';
//     }

//     if(hrs > 12){
//         hrs = hrs - 12;
//     }

//     document.getElementById('hours').innerHTML = hrs;
//     document.getElementById('minutes').innerHTML = min;
//     document.getElementById('seconds').innerHTML = sec;
// }
// setInterval(displayTime, 10);


function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startTime();

