/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

var c1, c2; // colour gradient variables
let meteorX = -480; //meteor start location x
let meteorY = -250; // meteor start location y

function draw_clock(obj) {
  if(obj.seconds_until_alarm < 0){
  translate(width/2, height/2)
  ellipseMode(CENTER)
  angleMode(DEGREES)
  c1 = color(0); //black
  c2 = color(140, 0, 255); //purple
  setGradient(c1, c2);

function setGradient(c1, c2) {
  // noprotect
  noFill();
  for (var y = -250; y < height; y++) {
    var inter = map(y, -250, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(-480, y, width, y);
  } // background gradient
}

let starX = [-351, -129, -214, 21, -381, -288, 201, 289, -7, 385, 200, -341, -212, -421, 46]
let starY = [59, -3, 234, -140, -48, 239, 173, 217, -161, 66, 42, 178, 188, -119, -161, 144]
for(let i = 0; i < starX.length; i++){
  stroke(255)
  strokeWeight(5)
  point(starX[i], starY[i]);
  strokeWeight(2)
  point(starX[i]-69, starY[i]-69);
  strokeWeight(3.5)
  point(starX[i]+80, starY[i]-20);
  strokeWeight(1.5)
  point(starX[i]-250, starY[i]+25)
  strokeWeight(2)
  point(starX[i]-225, starY[i])
  strokeWeight(1.8)
  point(starX[i]+250, starY[i]-20)
} // background star display

  push();
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'orange';
  fill(255, 140, 0); // orange
  noStroke();
  circle(0, 0, 180);
  pop(); // sun and glow effect - drawing context found on p5.js reference

  push()
  noStroke()
  fill(207, 180, 114) // beige
  let millisHand = map(obj.millis, 0, 999, 0, 360);
  rotate(millisHand) // clock milliseconds hand
  ellipse(0, -99, 36); // planet mercury
  fill(171, 142, 70) // tan/brown colour
  ellipse(0, -88.2, 9)
  ellipse(9, -104.4, 14.4)
  ellipse(-9, -102.6, 10.8) // planet detailing
  fill(255, 70)
  ellipse(0, -93.6, 27) // medium highlight
  fill(255, 80)
  ellipse(0, -90, 18) //  small highlight
  pop()

  push();
  noStroke();
  fill(237, 219, 104) // yellow(ish)
  let secondBarWidthChunky  = map(obj.seconds, 0, 59, 0, 360);
  let secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
  let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, 360);
  rotate(secondBarWidthSmooth); // clock minutes hand
  ellipse(0, -145, 54); // planet venus
  strokeWeight(4);
  strokeCap(ROUND);
  stroke(168, 129, 0); //brown colour
  line(-10.8, -130.4, 3.6, -130.4);
  line(-3.6, -143, 21.6, -143);
  line(-19.8, -152, 1.8, -152); // planet line details
  fill(255, 70)
  noStroke()
  ellipse(0, -137.8, 41.4); // medium highlight
  fill(255, 80)
  ellipse(0, -131.4, 27); // small highlight
  pop();

  push();
  noStroke()
  fill(74, 89, 255) // bright blue
  let minutesHand = map (obj.minutes, 0, 59, 0, 360);
  rotate(minutesHand)
  ellipse(0, -196, 63) // planet earth base
  fill(74, 255, 80) // bright green
  ellipse(0, -217.6, 9)
  ellipse(0, -178, 23.4)
  ellipse(-14.4, -196, 10.8)
  ellipse(18, -196, 5.4) // green "islands"
  fill(255, 70)
  ellipse(0, -190.6, 50.4) // medium highlight
  fill(255, 80)
  ellipse(0, -181.6, 36) // small highlight
  pop();

  push();
  noStroke();
  fill(255, 0, 0)
  let hoursHand = map (obj.hours, 0, 23, 0, 360);
  rotate(hoursHand);
  ellipse(0, -240, 50.4) // planet mars
  fill(255, 94, 0) // orange
  ellipse(0, -228.2, 27) // small highlight
  fill(255, 94, 0, 180) // orange
  ellipse (0, -234.5, 41.4) // medium highlight
  pop();
}

    else if(obj.seconds_until_alarm > 0){
      translate(width/2, height/2)
      ellipseMode(CENTER)
      angleMode(DEGREES)
      c1 = color(0); //black
      c2 = color(140, 0, 255); //purple
      setGradient(c1, c2);
    
      function setGradient(c1, c2) {
        // noprotect
        noFill();
        for (var y = -250; y < height; y++) {
          var inter = map(y, -250, height, 0, 1);
          var c = lerpColor(c1, c2, inter);
          stroke(c);
          line(-480, y, width, y);
        }
      }
      
      let starX = [-351, -129, -214, 21, -381, -288, 201, 289, -7, 385, 200, -341, -212, -421, 46]
      let starY = [59, -3, 234, -140, -48, 239, 173, 217, -161, 66, 42, 178, 188, -119, -161, 144]
      for(let i = 0; i < starX.length; i++){
        stroke(255)
        strokeWeight(5)
        point(starX[i], starY[i]);
        strokeWeight(2)
        point(starX[i]-69, starY[i]-69);
        strokeWeight(3.5)
        point(starX[i]+80, starY[i]-20);
        strokeWeight(1.5)
        point(starX[i]-250, starY[i]+25)
        strokeWeight(2)
        point(starX[i]-225, starY[i])
        strokeWeight(1.8)
        point(starX[i]+250, starY[i]-20)
      }
      
        push();
        drawingContext.shadowOffsetX = 0;
        drawingContext.shadowOffsetY = 0;
        drawingContext.shadowBlur = 30;
        drawingContext.shadowColor = 'orange';
        fill(255, 140, 0); // orange
        noStroke();
        circle(0, 0, 180);
        pop();
      
        push()
        noStroke()
        fill(207, 180, 114) // beige
        let millisHand = map(obj.millis, 0, 999, 0, 360);
        rotate(millisHand) // clock milliseconds hand
        ellipse(0, -99, 36); // planet mercury
        fill(171, 142, 70)
        ellipse(0, -88.2, 9)
        ellipse(9, -104.4, 14.4)
        ellipse(-9, -102.6, 10.8)
        fill(255, 70)
        ellipse(0, -93.6, 27)
        fill(255, 80)
        ellipse(0, -90, 18)
        pop()
      
        push();
        noStroke();
        fill(237, 219, 104) // yellow(ish)
        let secondBarWidthChunky  = map(obj.seconds, 0, 59, 0, 360);
        let secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
        let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, 360);
        rotate(secondBarWidthSmooth); // clock minutes hand
        ellipse(0, -145, 54); // planet venus
        strokeWeight(4);
        strokeCap(ROUND);
        stroke(168, 129, 0);
        line(-10.8, -130.4, 3.6, -130.4);
        line(-3.6, -143, 21.6, -143);
        line(-19.8, -152, 1.8, -152);
        fill(255, 70)
        noStroke()
        ellipse(0, -137.8, 41.4);
        fill(255, 80)
        ellipse(0, -131.4, 27);
        pop();
      
        push();
        noStroke()
        fill(74, 89, 255) // bright blue
        let minutesHand = map (obj.minutes, 0, 59, 0, 360);
        rotate(minutesHand)
        ellipse(0, -196, 63) // planet earth base
        fill(74, 255, 80) // bright green
        ellipse(0, -217.6, 9)
        ellipse(0, -178, 23.4)
        ellipse(-14.4, -196, 10.8)
        ellipse(18, -196, 5.4) // green "islands"
        fill(255, 70)
        ellipse(0, -190.6, 50.4)
        fill(255, 80)
        ellipse(0, -181.6, 36)
        pop();
      
        push();
        noStroke();
        fill(255, 0, 0)
        let hoursHand = map (obj.hours, 0, 23, 0, 360);
        rotate(hoursHand);
        ellipse(0, -240, 50.4) // planet mars
        fill(255, 94, 0) // orange
        ellipse(0, -228.2, 27) // small highlight
        fill(255, 94, 0, 180) // orange
        ellipse (0, -234.5, 41.4) // medium highlight
        pop();
    
}
else if(obj.seconds_until_alarm == 0){
  translate(width/2, height/2)
  ellipseMode(CENTER)
  angleMode(DEGREES)
  c1 = color(0); //black
  c2 = color(140, 0, 255); //purple
  setGradient(c1, c2);

  function setGradient(c1, c2) {
    // noprotect
    noFill();
    for (var y = -250; y < height; y++) {
      var inter = map(y, -250, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(-480, y, width, y);
    }
  }
  
  let starX = [-351, -129, -214, 21, -381, -288, 201, 289, -7, 385, 200, -341, -212, -421, 46]
  let starY = [59, -3, 234, -140, -48, 239, 173, 217, -161, 66, 42, 178, 188, -119, -161, 144]
  for(let i = 0; i < starX.length; i++){
    stroke(255)
    strokeWeight(5)
    point(starX[i], starY[i]);
    strokeWeight(2)
    point(starX[i]-69, starY[i]-69);
    strokeWeight(3.5)
    point(starX[i]+80, starY[i]-20);
    strokeWeight(1.5)
    point(starX[i]-250, starY[i]+25)
    strokeWeight(2)
    point(starX[i]-225, starY[i])
    strokeWeight(1.8)
    point(starX[i]+250, starY[i]-20)
  }
  
    push();
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = 'orange';
    fill(255, 140, 0); // orange
    noStroke();
    circle(0, 0, 180);
    pop();
  
    push()
    noStroke()
    fill(207, 180, 114) // beige
    let millisHand = map(obj.millis, 0, 999, 0, 360);
    rotate(millisHand) // clock milliseconds hand
    ellipse(0, -99, 36); // planet mercury
    fill(171, 142, 70)
    ellipse(0, -88.2, 9)
    ellipse(9, -104.4, 14.4)
    ellipse(-9, -102.6, 10.8)
    fill(255, 70)
    ellipse(0, -93.6, 27)
    fill(255, 80)
    ellipse(0, -90, 18)
    pop()
  
    push();
    noStroke();
    fill(237, 219, 104) // yellow(ish)
    let secondBarWidthChunky  = map(obj.seconds, 0, 59, 0, 360);
    let secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
    let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, 360);
    rotate(secondBarWidthSmooth); // clock minutes hand
    ellipse(0, -145, 54); // planet venus
    strokeWeight(4);
    strokeCap(ROUND);
    stroke(168, 129, 0);
    line(-10.8, -130.4, 3.6, -130.4);
    line(-3.6, -143, 21.6, -143);
    line(-19.8, -152, 1.8, -152);
    fill(255, 70)
    noStroke()
    ellipse(0, -137.8, 41.4);
    fill(255, 80)
    ellipse(0, -131.4, 27);
    pop();
  
    push();
    noStroke()
    fill(74, 89, 255) // bright blue
    let minutesHand = map (obj.minutes, 0, 59, 0, 360);
    rotate(minutesHand)
    ellipse(0, -196, 63) // planet earth base
    fill(74, 255, 80) // bright green
    ellipse(0, -217.6, 9)
    ellipse(0, -178, 23.4)
    ellipse(-14.4, -196, 10.8)
    ellipse(18, -196, 5.4) // green "islands"
    fill(255, 70)
    ellipse(0, -190.6, 50.4)
    fill(255, 80)
    ellipse(0, -181.6, 36)
    pop();
  
    push();
    noStroke();
    fill(255, 0, 0)
    let hoursHand = map (obj.hours, 0, 23, 0, 360);
    rotate(hoursHand);
    ellipse(0, -240, 50.4) // planet mars
    fill(255, 94, 0) // orange
    ellipse(0, -228.2, 27) // small highlight
    fill(255, 94, 0, 180) // orange
    ellipse (0, -234.5, 41.4) // medium highlight
    pop();
  //beginning of meteor shower effect code
  meteorX+=10
  meteorY+=10 // diagonal movement across canvas
  push()
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'orange';
  strokeWeight(50)
  strokeCap(ROUND);
  stroke(255, 204, 115); // brighter orange colour
  line(meteorX, meteorY, meteorX-50, meteorY-50)
  line(meteorX+480, meteorY-150, meteorX+380, meteorY-250)
  line(meteorX-300, meteorY-100, meteorX-400, meteorY-200)
  line(meteorX-300, meteorY-600, meteorX-200, meteorY-500)
  line(meteorX-300, meteorY-1000, meteorX, meteorY-700)
  line(meteorX, meteorY, meteorX-50, meteorY-50)
  line(meteorX-1300, meteorY-1100, meteorX-1400, meteorY-1200)
  line(meteorX-1300, meteorY-1600, meteorX-1200, meteorY-1500)
  line(meteorX-1600, meteorY-1600, meteorX-1270, meteorY-1300)
  pop()
  noStroke()
  fill(232, 148, 2) // orange
  ellipse(meteorX, meteorY, 40)
  ellipse(meteorX+480, meteorY-150, 40)
  ellipse(meteorX-300, meteorY-100, 40)
  ellipse(meteorX-200, meteorY-500, 40)
  ellipse(meteorX, meteorY-700, 40)
  ellipse(meteorX-1300, meteorY-1100, 40)
  ellipse(meteorX-1200, meteorY-1500, 40)
  ellipse(meteorX-1270, meteorY-1300, 40)
  //meteor lines and ellipses, movement and details
}
}