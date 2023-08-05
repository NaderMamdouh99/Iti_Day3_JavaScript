var doSetInterval;
var t;
var winiOpen;
var WiniOpen2;
var NameValue;
var setTimeNew;

// Create text box
function TestKeyDown(e) {
  alert(e.key);
}
function TestMouse(e) {
  alert(e.button);
}

// Create Event button to make start clock

document.getElementById("Start").addEventListener("click", alertClock);
document.getElementById("STOP").addEventListener("click", stop_time);

function alertClock() {
  alert("Clock Started");
  doSetInterval = setInterval(StartDate, 1000);
}

// Get time
function StartDate() {
  var d = new Date();
  document.getElementById("Time").innerHTML = d.toLocaleTimeString().bold();
}
// stop time
function stop_time() {
  clearInterval(doSetInterval);
}

//Create a Login Form

function openWindow() {
  winiOpen = window.open(
    "/html/USER.html",
    "_blank",
    "width=300,height=300,screenX=500,screenY=300"
  );
  NameValue = document.getElementById("Name").value.bold();
  winiOpen.document.write(` <h2> Wellcome : ${NameValue}</h2> `);
  winiOpen.document.body.style.h2 = "font-size: 50px;";
  winiOpen.document.body.style.h3 = "font-size: 50px;";
  saveDate();
}
function saveDate() {
  localStorage.setItem("UserName", document.getElementById("Name").value);
  localStorage.setItem("Passowrd", document.getElementById("Passowrd").value);
}
function getLocalstorage() {
  if (localStorage.UserName) {
    document.getElementById("Name").value = localStorage.getItem("UserName");
  }
  if (localStorage.Passowrd) {
    document.getElementById("Passowrd").value =
      localStorage.getItem("Passowrd");
  }
}

function RemberMe() {}

// set Time Window To Open
function settimelink() {
  setTimeNew = setTimeout(`new_Window()`, 3000);
}
// Open Window Scrooll
function new_Window() {
  WiniOpen2 = window.open(
    "/html/Scroll.html",
    " ",
    "width=400,height=400,screenX=300,screenY=200"
  );
}
// Button to close Window
function CloseWindow() {
  WiniOpen2.close();
  winiOpen.close();
}

// PreventMehods

function Check(e) {
  if (e.keyCode > 47 && e.keyCode < 58) {
    e.preventDefault();
  }
}
