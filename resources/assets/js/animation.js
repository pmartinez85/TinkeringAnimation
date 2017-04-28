/**
 * Created by pedro on 26/04/17.
 */
var x,y

function drawCircle(x,y){

        //draw first frame
        var c = document.getElementById("animation");
        if (c){
            console.log('OK')
            var ctx = c.getContext("2d");
            ctx.beginPath();
            // x=95
            // y=50
            ctx.arc(x,y,40,0,2*Math.PI);
            ctx.stroke();
            x++
            y++
        }
        else{
            console.log('not Ok')
        }

}
function init() {
    //draw first frame
  drawCircle(95,50)

    setInterval(drawCircle(x,y),35/1000)

}

init()

//$(document).ready

document.addEventListener("DOMContentLoaded", function(event){

        init()



});

