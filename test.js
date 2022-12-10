var xPos = 345;
var yPos = 42;
var rectWidth = 50;
var rectHeight = 100;
var doorwidth = 13;
var doorHeight = 26;
var xx = 300;
var yy = 299;
var moonSize = 140;
var xCar = 9;
var yCar = 369;
var carSize = 17;


draw = function() {
    background(54, 94, 112);
    fill(235, 234, 228);
    ellipse(xPos, yPos, 10, 10);
      ellipse(xPos - 50, yPos + 50, 10, 10);
      ellipse(107, 92, moonSize, moonSize);
       
    
    //buildings
    fill(148, 139, 139);
    // 1st building
    rect(xx, yy, rectWidth, rectHeight, 0);
    rect(xx + 16, yy + 73, doorwidth, doorHeight, 0);
    rect(xx + 5, yy + 8, 8, 10, 0);
    rect(xx + 36, yy + 8, 8, 10, 0);
    rect(xx + 36, yy + 30, 8, 10, 0);
    rect(xx + 5, yy + 30, 8, 10, 0);
    
    // 2nd building
    rect(xx - 53 , yy, rectWidth, rectHeight, 0);
    rect(xx - 35, yy + 73 , doorwidth, doorHeight, 0);
    rect(xx - 45, yy + 8, 8, 10, 0);
    rect(xx - 18, yy + 8, 8, 10, 0);
    rect(xx - 18, yy + 30, 8, 10, 0);
    rect(xx - 45, yy + 30, 8, 10, 0);
    
    //3rd building
    rect(xx-165, yy, rectWidth, rectHeight, 0);
    rect(xx - 145, yy + 73 , doorwidth, doorHeight, 0);
     rect(xx - 130, yy + 8, 8, 10, 0);
    rect(xx - 158, yy + 8, 8, 10, 0);
    rect(xx - 158, yy + 30, 8, 10, 0);
    rect(xx - 130, yy + 30, 8, 10, 0);
    
    //4th building
     rect(xx-220, yy, rectWidth, rectHeight, 0);
    rect(xx - 201, yy + 73 , doorwidth, doorHeight, 0);
     rect(xx - 184, yy + 8, 8, 10, 0);
    rect(xx - 213, yy + 8, 8, 10, 0);
    rect(xx - 212, yy + 30, 8, 10, 0);
    rect(xx - 184, yy + 30, 8, 10, 0);
    
    // a car
    fill(7, 235, 189);
    rect(xCar, yCar, 70, 23, 10);
    rect(xCar + 17, yCar - 23, 37, 23, 0);
    fill(23, 20, 20);
    ellipse(xCar + 16, yCar + 22, carSize, carSize);
    ellipse(xCar + 49, yCar + 22, carSize, carSize);
    
    xPos += -6;
    yPos += 4;
    moonSize *= 99/100;
    xCar += 1;
    
 
    
    
     
    
};



