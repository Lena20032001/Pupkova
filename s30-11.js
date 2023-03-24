var mainCanvas=document.getElementById("myCanvas");
var mainContext=mainCanvas.getContext('2d');
var canvasWidth=mainCanvas.width;
var canvasHeight=mainCanvas.height;
var angle=0;
var requestAnimationFrame=window.requestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.msRequestAnimationFrame;
var continueAnimating=true;

function drawCircle() {
  if(!continueAnimating) {return;}
  mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
  mainContext.fillStyle = "red";
  mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
  mainContext.beginPath();
  var radius = 25 + 15 * Math.abs(Math.cos(angle));
  mainContext.arc(50, 50, radius, 0, Math.PI * 2, false);
  mainContext.closePath();
  mainContext.fillStyle = "white";
  mainContext.fill();
  angle += Math.PI / 64;
  requestAnimationFrame(drawCircle);
}

drawCircle();
document.getElementById('stopAnimating').addEventListener('click',function(){
 setTimeout(() => {
    continueAnimating=false;
  }, Math.floor(Math.random() * 5000));
});