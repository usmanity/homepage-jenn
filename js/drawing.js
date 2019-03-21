var $canvas = $("body");

//Select the first, only canvas element. Select the actual HTML element using the array syntax [index], get the 2d context.
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;


//On mouse events on the canvas
$canvas.mousedown(function(e) {
    lastEvent = e;
    mouseDown = true;

}).mousemove(function(e) {
    if (mouseDown) {
        //Draw lines
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = 'red';
        context.lineWidth = 2;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function() {
    mouseDown = false;
}).mouseleave(function() {
    $canvas.mouseup();
});

$(document).ready(function(){
  
  // click function
  $('canvas').mousedown(function(){
    // playing the audio
    // $('#tattoo-sound')[0].play();
  });
  
});