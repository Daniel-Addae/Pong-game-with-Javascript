console.log("hello");
var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");
/*c.fillRect(20,20,20,20);
console.log("canvas");

c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.strokeStyle = "turquoise";
c.stroke();


for(var i = 0; i<5; i++) {
    //var x = Math.random() *window.innerWidth;
    //var y = Math.random() *window.innerHeight;
    c.beginPath();
    c.arc(100*i+200,200, 100,0, Math.PI*2, false);
c.strokeStyle = "brown";
c.stroke();


}*/
//var x = Math.random() *window.innerWidth;
    //var y = Math.random() *window.innerHeight;
  

var x = 200;
var speed = 5;
var radius = 100;
var y = 200;
var dy = 4;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
   
    c.beginPath();
    c.arc(x,y, radius,0, Math.PI*2, false);
    c.strokeStyle = "brown";
    c.stroke();
    

    if ( x + radius > innerWidth || x - radius < 0 ) {
        speed = -speed;
        
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    
    
    x += speed;
    y += dy;
    
}



animate();

