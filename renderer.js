function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
  
const date = document.getElementById('displayDate');
const today = new Date();
date.innerText = today.toDateString();

const time = document.getElementById('displayTime');
const clock = setInterval(() => {
    const now = new Date();
    const hours = addZero(now.getHours());
    const minutes = addZero(now.getMinutes());
    const seconds = addZero(now.getSeconds());
    const ampm = hours >= 12 ? 'PM' : 'AM';
    time.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
});

function deleteCurRow(e){
  window.open("../html/pass.html","_blank","width=600,height=400")
  setTimeout(() => {
  console.log(e.parentElement.parentElement);
  e.parentElement.parentElement.style.display='none';}, 5000);
  
}

function authDelete(){
  window.close();
  
}

let editLevel = "";
let editLat = "";
let editLong = "";
let editPostal = "";
let editIncident = "";
let editCount = "0";
let editEvent = "";

function editCurRow(e){

  if(editCount === "0"){
    editEvent = e;
    editLevel = e.parentElement.parentElement.children[1].innerText;
    editLat = e.parentElement.parentElement.children[2].innerText;
    editLong = e.parentElement.parentElement.children[3].innerText;
    editPostal = e.parentElement.parentElement.children[4].innerText;
    editIncident = e.parentElement.parentElement.children[5].innerText;
    window.open("../html/editArchive.html","_blank","width=600,height=800");
    
  }
  setInterval(() => {
    e.parentElement.parentElement.children[1].innerText = "0";
    e.parentElement.parentElement.children[2].innerText = "0";
  }
  , 6000);
    editCount = "0";
  }

function incidentEdit(){
  window.close();
  editLevel = "0";
  editLat = "0";
  editCount = "1";
  editCurRow(editEvent);
  
}





const consoleMsg = [
  {
    "alert-type": "Level-1 Alert!",
    "latitude": "27.46° N",
    "longitude": "64.12° E",
    "alert": "Criminal Detected",
    "src": "assests/videos/crime.gif",
    "view": "True"
  },
  {
    "alert-type": "Level-2 Alert!",
    "latitude": "32.46° N",
    "longitude": "76.12° E",
    "alert": "Abuse Detected",
    "src": "assests/videos/crime.gif",
    "view": "False"
  },
  {
    "alert-type": "Level-1 Alert!",
    "latitude": "32.46° N",
    "longitude": "76.12° E",
    "alert": "Abuse Detected",
    "src": "assests/videos/crime.gif",
    "view": "True"
  },
]

const alertsId = [
  "conAlert-1", "conAlert-2", "conAlert-3", 
  "conAlert-4", "conAlert-5", "conAlert-6",
  "conAlert-7", "conAlert-8", "conAlert-9",
];

const videoSrc = ["https://streamable.com/e/cmj66b?autoplay=1","https://streamable.com/e/02477b?autoplay=1"];
const level2VideoSrc = ["https://streamable.com/e/dwpuam?autoplay=1", "https://streamable.com/e/agdzx4?autoplay=1"];

var prevAlert = 0;
function consoleAlerts(){
  const a = Math.floor(Math.random() * alertsId.length);
  if (prevAlert === a) {
    document.getElementById(alertsId[a]).style.display = "none";
    const randNum = Math.floor(Math.random() * videoSrc.length);
    document.getElementById("highlightVideo").src = videoSrc[randNum];
    consoleAlerts();
  } else if(alertsId[a]=="conAlert-6") {
    const highlightLat = document.getElementById('conLat').innerText;
    const highlightLong = document.getElementById('conLong').innerText;
    const highlightAlert = document.getElementById('conAlert').innerText;

    document.getElementById(alertsId[a]).style.display = "block";

    const randNum = Math.floor(Math.random() * level2VideoSrc.length);

    document.getElementById("highlightVideo").src = level2VideoSrc[randNum];
    document.getElementById("latitude").innerText = highlightLat;
    document.getElementById("longitude").innerText = highlightLong;
    document.getElementById("alert").innerText = highlightAlert;
  }
  else{
    document.getElementById(alertsId[a]).style.display = "block";
  }
  prevAlert = a;
  
}


function changeHighlight(){

 const video = document.getElementById('highlightVideo');
 if(video.src == "https://streamable.com/e/agdzx4?autoplay=1" || video.src == "https://streamable.com/e/dwpuam?autoplay=1"){
  const videoStatus = document.getElementById('video-status');
  
  videoStatus.innerText = "No Views Available";
  videoStatus.style.marginTop = "15px";
 }
 else{
  const randNum = Math.floor(Math.random() * videoSrc.length);
  video.src = videoSrc[randNum];
 }
 
}

const ignoreSrc = ["https://streamable.com/e/t2tdyg?autoplay=1","https://streamable.com/e/0j6trv?autoplay=1","https://streamable.com/e/i1o5nt?autoplay=1","https://streamable.com/e/dwpuam?autoplay=1"]

function ignoreHighlight(){

  const video = document.getElementById('highlightVideo');
  if(video.src == "https://streamable.com/e/agdzx4?autoplay=1" || video.src == "https://streamable.com/e/dwpuam?autoplay=1"){
   const videoStatus = document.getElementById('video-status');
   
   videoStatus.innerText = "No Views Available";
   videoStatus.style.marginTop = "15px";
  }
  else{
   const randNum = Math.floor(Math.random() * ignoreSrc.length);
   video.src = ignoreSrc[randNum];
  }
  
 }

window.addEventListener('load', (event) =>{
  setInterval(consoleAlerts, 5000);
});

const vidEmbedd = [
  {
  "src": "https://streamable.com/e/3jrdw3?autoplay=1",
  "latitude": "27.46° N",
  "longitude": "64.12° E",
  "alert": "Criminal Detected",
  "level": "1",
  },
  {
  "src": "https://streamable.com/e/d9kptf?autoplay=1",
  "latitude": "32.46° N",
  "longitude": "76.12° E",
  "alert": "Abuse Detected",
  "level": "2",
  },
  {
  "src": "https://streamable.com/e/agdzx4?autoplay=1",
  "latitude": "32.46° N",
  "longitude": "76.12° E",
  "alert": "Abuse Detected",
  "level": "1",
  },
  {
  "src": "https://streamable.com/e/dwpuam?autoplay=1",
  "latitude": "32.46° N",
  "longitude": "76.12° E",
  "alert": "Abuse Detected",
  "level": "2",
  },
  {
  "src": "https://streamable.com/e/0j6trv?autoplay=1",
  "latitude": "32.46° N",
  "longitude": "76.12° E",
  "alert": "Abuse Detected",
  "level": "1",
  }
]

const consoleVideo = ["https://streamable.com/e/i1o5nt?autoplay=1", "https://streamable.com/e/bfa6t2?autoplay=1", "https://streamable.com/e/t2tdyg?autoplay=1"]

function changeView(){
    const video = document.getElementById('highlightVideo');
    const randNum = Math.floor(Math.random() * vidEmbedd.length);
    video.src = vidEmbedd[randNum].src;

    document.getElementById('latitude').innerHTML = vidEmbedd[randNum].latitude;
    document.getElementById('longitude').innerHTML = vidEmbedd[randNum].longitude;
    document.getElementById('alert').innerHTML = vidEmbedd[randNum].alert;

    document.getElementById('conAlert-1').style.display = "none";
    document.getElementById('conAlert-3').innerHTML = `<code class="white">$ ~ </code>
    <code class="">Level-1 Alert!</code>
    <code class="code-info">
      <code class="code-lines yellow">Latitude: 23.259° N | Longitude: 77.412° E | Alert: <span class="red">Abuse!</span> | <a class="view-link" onclick="changeView2()">View</a></code>
    </code>`;

}

const incidentSrc = ["incident1.html","incident2.html","incident3.html"];

function incidentVideo(){
  const randNum = Math.floor(Math.random() * incidentSrc.length);
  window.open(incidentSrc[randNum], "_blank", "toolbar=yes,scrollbars=yes,width=400,height=600");
}

function callPolice(){
  const randNum = Math.floor(Math.random() * incidentSrc.length);
  window.open("./html/police.html", "_blank", "toolbar=yes,scrollbars=yes,width=400,height=600");
}

function callAmbulance(){
  const randNum = Math.floor(Math.random() * incidentSrc.length);
  window.open("./html/ambulance.html", "_blank", "toolbar=yes,scrollbars=yes,width=400,height=600");
}
function callAll(){
  const randNum = Math.floor(Math.random() * incidentSrc.length);
  window.open("./html/all.html", "_blank", "toolbar=yes,scrollbars=yes,width=400,height=600");
}

function callFire(){
  const randNum = Math.floor(Math.random() * incidentSrc.length);
  window.open("./html/fire.html", "_blank", "toolbar=yes,scrollbars=yes,width=400,height=600");
}

function openCalendar(){
  const calendarArea = document.getElementById("style-3");
  const iconSrc = document.getElementById("calendarIcon").src;
  if (iconSrc == "file:///C:/Users/shamb/Desktop/SIH/FinalApp/assests/logos/calendar.png") {
    window.open("./parallax-flipping-calendar/dist/index.html","_self");
  } else if(iconSrc == "file:///C:/Users/shamb/Desktop/SIH/FinalApp/assests/logos/live.png") {
    window.open("file:///C:/Users/shamb/Desktop/SIH/FinalApp/index.html","_self");
  }
  else{
    console.log("No Match Found! ",iconSrc);
  }
  
}


// Temporary Function
function changeView2(){
    const video = document.getElementById('highlight-video');
    video.src = "assests/videos/abuse.gif";

    document.getElementById('latitude').innerHTML = "23.259° N";
    document.getElementById('longitude').innerHTML = "77.412° E";
    document.getElementById('alert').innerHTML = "Abuse Detected";

    document.getElementById('conAlert-1').style.display = "none";
    document.getElementById('conAlert-3').innerHTML = `<code class="white">$ ~ </code>
    <code class="">Level-1 Alert!</code>
    <code class="code-info">
      <code class="code-lines yellow">Latitude: 27.46° N | Longitude: 64.12° E | Alert: <span class="red">Criminal Detected</span> | <a class="view-link" onclick="changeView()">View</a></code>
    </code>`;

}

const func = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
  }
  
  func()
