// A-Frame related functions

function sendPos(val){
  console.log(val);
}

function updateTankOne(val){
  var sceneEl=document.querySelector('a-scene');
  var tankV=sceneEl.querySelector('#tankpointer-A');
  var nVal = String(val+" cm");
  //console.log(nVal);
  tankV.setAttribute('value', nVal);
  tankV.setAttribute('position',{x:4,y:0, z:(((-0.25*val))-0.5)});
}

function updateTankTwo(val){
  var sceneEl=document.querySelector('a-scene');
  var tankV=sceneEl.querySelector('#tankpointer-B');
  var nVal = String(val+" cm");
  //console.log(nVal);
  tankV.setAttribute('value', nVal);
  tankV.setAttribute('position',{x:4,y:0, z:(((-0.22583*val))+7.475)});
}


//Connection related functions

/* function Connect(){
  setInterval(Recebe,100);
}
  
function Recebe(){
  fetch('http://172.20.9.110:8080')
  MyInterval = setInterval(function(){
    var Texto =  document.getElementById("valBox").textContent;
    var Url = "http://172.20.9.110:8080?setpoint=" + Texto;
    
    xmlHttp = new XMLHttpRequest(); 
    xmlHttp.open( "GET", Url, false );
    xmlHttp.send(Texto);
    
    var stringData = xmlHttp.responseText.split("|");
    
    document.getElementById("tank1").innerHTML = stringData[1];
    document.getElementById("tank2").innerHTML = stringData[3];    },100);
}

function getValue(){
    document.getElementById("valBox").innerHTML = document.getElementById("Setpoint").value
  }

function showVal(newVal) {
    document.getElementById("valBox").innerHTML = newVal;
} */

var MyInterval;
function Recebe(){
    MyInterval = setInterval(function(){
    var Texto =  document.getElementById("valBox").textContent;

    var Url = "https://172.20.9.110:8080?setpoint=" + Texto;
    fetch(Url)
        .then(response => {
            console.log('Response', response)
            return response.json()
        })
        .then(data => {
            console.log(data)
            var stringData = JSON.stringify(data).split("|");
            document.getElementById("tank1").innerHTML = stringData[1];
            document.getElementById("tank2").innerHTML = stringData[3];
        })
        .catch(error => {console.log(error)
            clearInterval(MyInterval);
        })
},100);
}
function Connect(){
  MyInterval = setInterval(function(){
  var Texto =  document.getElementById("valBox").textContent;
  var Url = "https://172.20.9.110:8080?setpoint=" + Texto;
  xmlHttp = new XMLHttpRequest(); 
  xmlHttp.open( "GET", Url, false );
  xmlHttp.send(Texto);
  var stringData = xmlHttp.responseText.split("|");
  
  updateTankOne(stringData[1]);
  updateTankTwo(stringData[3]);
  });
}

function getValue(){
document.getElementById("valBox").innerHTML = document.getElementById("Setpoint").value;
}

function showVal(newVal) {
document.getElementById("valBox").innerHTML = newVal;
}



