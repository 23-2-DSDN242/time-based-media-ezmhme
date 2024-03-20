// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); //  beige
  fill(255); // dark grey
  // textSize(400);
  // textAlign(CENTER, CENTER);
  // text("9", width/4, height/2);

  // fill(100);
  // textSize(100);
  // text("49", width/1.5, height/2);

  // noFill();
  // stroke(255,204,0);
  // strokeWeight(5);
  // circle(100,80,50);

  // noFill();
  // stroke(255,204,0);
  // strokeWeight(5);
  // circle(100,160,50);

  // noFill();
  // stroke(255,204,0);
  // strokeWeight(5);
  // circle(100,240,50);

  // noFill();
  // stroke(255,204,0);
  // strokeWeight(5);
  // circle(100,320,50);

  // noFill();
  // stroke(255,204,0);
  // strokeWeight(5);
  // circle(100,400,50);

  // noFill();
  // stroke(255,0,0);
  // strokeWeight(5);
  // circle(100,80,30);

  // noFill();
  // stroke(255,0,0);
  // strokeWeight(5);
  // circle(100,160,30);

  // noFill();
  // stroke(255,0,0);
  // strokeWeight(5);
  // circle(100,240,30);

  // noFill();
  // stroke(255,0,0);
  // strokeWeight(5);
  // circle(100,320,30);

  // noFill();
  // stroke(255,0,0);
  // strokeWeight(5);
  // circle(100,400,30);

  // noFill();
  // stroke(0,0,255);
  // strokeWeight(5);
  // circle(100,400,70);

  // noFill();
  // stroke(0,0,255);
  // strokeWeight(5);
  // circle(100,320,70);

  // noFill();
  // stroke(0,0,255);
  // strokeWeight(5);
  // circle(100,240,70);

  // noFill();
  // stroke(0,0,255);
  // strokeWeight(5);
  // circle(100,160,70);

  // noFill();
  // stroke(0,0,255);
  // strokeWeight(5);
  // circle(100,80,70);

  let circlesize = 70;
  let circleposx = 250;
  let circleposx2 = 560;
  let circleposy = 80;

  noFill();
  stroke(255,255,0);
  strokeWeight(5);
  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx
    let y = 80
    let d = 60
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx2
    let y = 80
    let d = 60
    circle(x, y, d)
  }

  // noFill();
  // stroke(255,255,0);
  // strokeWeight(5);
  // circle(circleposx, circleposy, circlesize);
}