function dogreen() {
  var canvas = document.getElementById("wow");
  canvas.style.backgroundColor = "lightgreen";
}


function doSquare(){
  var slrInput =    document.getElementById("slide")
  var len = slrInput.value;
  var canvas = document.getElementById("wow");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0,0, canvas.width, canvas.height);
   ctx.fillStyle = "yellow";
  ctx.fillRect(10,10,len,len);
    ctx.fillRect(parseInt(len)+20,10,len,len);
  ctx.fillRect(len*3,10,len,len);
}