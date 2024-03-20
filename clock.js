/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

var c1, c2;
let meteorX = -480;
let meteorY = -250;
// let starXval = [-351, -129, -214, 21, -381, -288, 201, 289, -7, 385, 200, -341, -212, -421, 46];
// let starYval = [59, -3, 234, -140, -48, 239, 173, 217, -161, 66, 42, 178, 188, -119, -161, 144];

function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  // background(0);
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
  }
}

stroke(255)
fill(255)
// point(100, 100)

let starX = [-351, -129, -214, 21, -381, -288, 201, 289, -7, 385, 200, -341, -212, -421, 46]
let starY = [59, -3, 234, -140, -48, 239, 173, 217, -161, 66, 42, 178, 188, -119, -161, 144]
for(let i = 0; i < starX.length; i++){
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

  // let starXval = [-351, -129, -214, 21, -381, -288, 201, 289, -7, 385, 200, -341, -212, -421, 46];
  // let starYval = [59, -3, 234, -140, -48, 239, 173, 217, -161, 66, 42, 178, 188, -119, -161, 144];
  // // let starSize = [0.5, 2, 4, 1, 3];
  // for(let i = 0; i < starXval.length; i++){
  //   for(let j = 0; j < starYval.length; j++){
  //     // for(let s = 0; s < starSize.length; s++){
  //   fill(255, 235, 138)
  //   noStroke()
  //   ellipse(starXval[i], starYval[i], 4);
  //   // ellipse(i*30, starYval[i], 0.5);
  //   // ellipse(i*-15, starYval[i], 1);
  //   // ellipse(i*-26.7, starYval[i], 0.5);
  //   // ellipse(i*15-50, starYval[i], 1);
  //   // ellipse(i*26.7, i*30, 0.5);
  //     //}
  //   }
  // }

  push();
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'orange';
  fill(255, 140, 0); // orange
  noStroke();
  circle(0, 0, 100);
  pop();

  // noStroke();
  // fill(255, 248, 184);
  // quad(100, 164, 125, 95, 100, 20, 75, 95);
  // quad(300, 260, 305, 245, 300, 230, 295, 245); // (bottomx, y, rightx, y, topx, y, leftx, y)

  push()
  noStroke()
  fill(207, 180, 114) // beige
  let millisHand = map(obj.millis, 0, 999, 0, 360);
  rotate(millisHand) // clock milliseconds hand
  ellipse(0, -55, 20); // planet mercury
  pop()

  push();
  noStroke();
  fill(237, 219, 104) // yellow(ish)
  let secondBarWidthChunky  = map(obj.seconds, 0, 59, 0, 360);
  let secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
  let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, 360);
  rotate(secondBarWidthSmooth); // clock minutes hand
  ellipse(0, -85, 30); // planet venus
  pop();

  push();
  noStroke()
  fill(74, 89, 255) // bright blue
  let minutesHand = map (obj.minutes, 0, 59, 0, 360);
  rotate(minutesHand)
  ellipse(0, -120, 35) // planet earth base
  fill(74, 255, 80) // bright green
  ellipse(0, -132, 5)
  ellipse(0, -110, 13)
  ellipse(-8, -120, 6)
  ellipse(10, -120, 3) // green "islands"
  pop();

  push();
  noStroke();
  fill(255, 0, 0)
  let hoursHand = map (obj.hours, 0, 23, 0, 360);
  rotate(hoursHand);
  ellipse(0, -155, 28) // planet mars
  fill(255, 94, 0) // orange
  ellipse(0, -149, 15) // small highlight
  fill(255, 94, 0, 180) // orange
  ellipse (0, -152.5, 23) // medium highlight
  pop();
    
    let linex = -440;
    let liney = -180;
    let linex2 = -250;
    let liney2 = -80;
    push();
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = 'orange';
    strokeWeight(50)
    strokeCap(ROUND);
    stroke(255, 102, 0);
    line(linex, liney, linex2, liney2)
    pop()
    stroke(0, 38, 255)
    strokeWeight(5)
    line(linex+45, liney+35, linex2-60, liney2-20)
    stroke(0, 38, 255)
    strokeWeight(5)
    line(linex, liney, linex2, liney2)
    line(linex+40, liney+8, linex2-20, liney2-25)

    fill(255)
    noStroke()
    ellipse(linex+190, liney+100, 40)
}

else if(obj.seconds_until_alarm > 0){
  translate(width/2, height/2)
  ellipseMode(CENTER)
  angleMode(DEGREES)
  c1 = color(0); //black
  c2 = color(140, 0, 255); //purple
  setGradient(c1, c2);
  meteorX+=10
  meteorY+=10

  function setGradient(c1, c2) {
    // noprotect
    noFill();
    for (var y = -250; y < height; y++) {
      var inter = map(y, -250, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(-480, y, width, y);
    }
  
    // let starXval = [0, -30, 130]
    // for(let i = 0; i < starXval.length; i++){
    //   fill(255, 235, 138)
    //   noStroke()
    //   ellipse(starXval[i], -100, 5)
    // } 

    push();
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = 'orange';
    fill(255, 140, 0); // orange
    noStroke();
    circle(0, 0, 100);
    pop();
  
    // noStroke();
    // fill(255, 248, 184);
    // quad(100, 164, 125, 95, 100, 20, 75, 95);
    // quad(300, 260, 305, 245, 300, 230, 295, 245); // (bottomx, y, rightx, y, topx, y, leftx, y)
  
    push()
    noStroke()
    fill(207, 180, 114) // beige
    let millisHand = map(obj.millis, 0, 999, 0, 360);
    rotate(millisHand) // clock milliseconds hand
    ellipse(0, -55, 20); // planet mercury
    pop()
  
    push();
    noStroke();
    fill(237, 219, 104) // yellow(ish)
    let secondBarWidthChunky  = map(obj.seconds, 0, 59, 0, 360);
    let secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
    let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, 360);
    // let secondsHand = map(obj.seconds, 0, 59, 0, 360);
    rotate(secondBarWidthSmooth); // clock minutes hand
    ellipse(0, -85, 30); // planet venus
    pop();
  
    push();
    noStroke()
    fill(74, 89, 255) // bright blue
    let minutesHand = map (obj.minutes, 0, 59, 0, 360);
    rotate(minutesHand)
    ellipse(0, -120, 35) // planet earth base
    fill(74, 255, 80) // bright green
    ellipse(0, -132, 5)
    ellipse(0, -110, 13)
    ellipse(-8, -120, 6)
    ellipse(10, -120, 3) // green "islands"
    pop();
  
    push();
    noStroke();
    fill(255, 0, 0)
    let hoursHand = map (obj.hours, 0, 23, 0, 360);
    // let secondBarWidthChunky  = map(obj.seconds, 0, 59, 0, 360);
    // let secondsWithFraction   = obj.seconds + (obj.millis / 1000.0);
    // let secondBarWidthSmooth  = map(secondsWithFraction, 0, 60, 0, 360);
    rotate(hoursHand);
    ellipse(0, -155, 28) // planet mars
    fill(255, 94, 0) // orange
    ellipse(0, -149, 15) // small highlight
    fill(255, 94, 0, 180) // orange
    ellipse (0, -152.5, 23) // medium highlight
    pop();

    // let meteorMovex = map(obj.seconds, 0, 59, 0, 360);
    // rotate(meteorMovex);
    let linex = -440;
    let liney = -180;
    let linex2 = -250;
    let liney2 = -80;
    push();
    drawingContext.shadowOffsetX = 0;
    drawingContext.shadowOffsetY = 0;
    drawingContext.shadowBlur = 30;
    drawingContext.shadowColor = 'orange';
    strokeWeight(50)
    strokeCap(ROUND);
    stroke(255, 102, 0);
    line(linex, liney, linex2, liney2)
    pop()
    // stroke(255, 102, 0, 50)
    // strokeWeight(70)
    // line(linex +5, liney -4, linex2 +20, liney2 -17)
    stroke(0, 38, 255)
    strokeWeight(5)
    line(linex-2, liney-2, linex2-2, liney2-2)
    stroke(0, 38, 255)
    strokeWeight(5)
    line(linex, liney, linex2, liney2)
    line(linex, liney, linex2, liney2)
  
    noStroke()
    fill(255)
    ellipse(meteorX, meteorY, 40)

    // ellipse(meteorX,meteorY,100,100);
}}}