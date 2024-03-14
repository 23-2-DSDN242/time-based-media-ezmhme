/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
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
  background(0); //  beige
  //fill(0); // dark grey
  //textSize(40);
  //textAlign(CENTER, CENTER);
  //text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);
  translate(width/2, height/2)
  ellipseMode(CENTER)
  angleMode(DEGREES)


  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);

  // fill(255, 179, 0);
  // circle(480, 250, 150);
  // fill(255, 179, 0, 50);
  // circle(480, 250, 200);

  push();
  drawingContext.shadowOffsetX = 2;
  drawingContext.shadowOffsetY = -2;
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = 'orange';
  fill(255, 140, 0);
  noStroke();
  circle(0, 0, 100);
  pop();

  // fill(117, 100, 77);
  // circle(0, 0, 20);

  // fill(255, 183, 0);
  // circle(0, 0, 30);

  // noStroke();
  // fill(255, 248, 184);
  // quad(100, 164, 125, 95, 100, 20, 75, 95);
  // quad(300, 260, 305, 245, 300, 230, 295, 245); // (bottomx, y, rightx, y, topx, y, leftx, y)

  // noStroke();
  // fill(255, 248, 184);
  // circle(0, 0, 8);

  // push()
  noStroke()
  fill(207, 180, 114)
  let minuteHand = map(obj.minutes, 0, 59, 0, 360);
  // push()
  rotate(minuteHand)
  ellipse(0, -55, 20);
  // pop()
}