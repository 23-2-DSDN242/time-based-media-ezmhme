// Update this function to draw you own maeda clock on a 960x500 canvas
let circlesize = 60;
let circleposx = 250;
let circleposx2 = 560;
let circleposy = 75;

function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
  background(0); // black

  noFill();
  stroke(255,255,0);
  strokeWeight(4);
  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx - 60
    let y = circleposy
    let d = circlesize
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx2 + 60
    let y = circleposy
    let d = circlesize
    circle(x, y, d)
  }

  for (let i = 0; i < 4; i++){
    let x = circleposx - 55 - 60
    let y = i * 75 + circleposy + 65
    let d = circlesize
    circle(x, y, d)
  }

  for (let i = 0; i < 4; i++){
    let x = circleposx2 + 20
    let y = i * 75 + circleposy + 65
    let d = circlesize
    circle(x, y, d)
  }

  for(let i = 0; i < 4; i++){
    let x = circleposx2 - 110 - 60
    let y = i * 75 + circleposy + 65
    let d = circlesize
    circle(x, y, d)
  }

  for(let i = 0; i < 4; i++){
    let x = circleposx2 + 260
    let y = i * 75 + circleposy + 65
    let d = circlesize
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx2 +60
    let y = circleposy + 360
    let d = circlesize
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx - 60
    let y = circleposy + 360
    let d = circlesize
    circle(x, y, d)
  }

  stroke(255, 0, 0)
  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx + 155
    let y = circleposy
    let d = circlesize + 5
    circle(x, y, d)
  }

  for(let i = 0; i < 2; i++){
    let x = circleposx2 - 235
    let y = i * 75 + circleposy + 65
    let d = circlesize + 5
    circle(x, y, d)
  }

  for(let i = 0; i < 4; i++){
    let x = circleposx + 395
    let y = i * 75 + circleposy + 65
    let d = circlesize + 5
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx + 155
    let y = circleposy + 360
    let d = circlesize + 5
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 95 + circleposx + 140
    let y = circleposy + 215
    let d = circlesize + 5
    circle(x, y, d)
  }

  stroke(0, 0, 255)
  for (let i = 0; i < 5; i++){
    let x = i * 70 + circleposx - 125
    let y = circleposy
    let d = circlesize - 25
    circle(x, y, d)
  }

  for(let i = 0; i < 2; i++){
    let x = circleposx -115
    let y = i * 75 + circleposy + 65
    let d = circlesize -25
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx - 60
    let y = circleposy + 360
    let d = circlesize - 25
    circle(x, y, d)
  }

  for(let i = 0; i <2; i++){
    let x = circleposx + 140
    let y = i * 75 + circleposy + 215
    let d = circlesize -25
    circle(x, y, d)
  }

  for (let i = 0; i < 3; i++){
    let x = i * 60 + circleposx - 50
    let y = circleposy + 140
    let d = circlesize - 25
    circle(x, y, d)
  }

  circle(circleposx - 115, circleposy + 290, circlesize - 25)

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx + 370
    let y = circleposy
    let d = circlesize - 25
    circle(x, y, d)
  }

  for (let i = 0; i < 1; i++){
    let x = circleposx + 570
    let y = i * 75 + circleposy + 65
    let d = circlesize - 25
    circle(x, y, d)
  }

  for (let i = 0; i < 2; i++){
    let x = circleposx + 570
    let y = i * 75 + circleposy + 215
    let d = circlesize - 25
    circle(x, y, d)
  }

  for (let i = 0; i < 2; i++){
    let x = i * 60 + circleposx + 450
    let y = circleposy + 140
    let d = circlesize - 25
    circle(x, y, d)
  }

  circle(circleposx + 330, circleposy + 290, circlesize - 25)
  circle(circleposx + 330, circleposy + 65, circlesize - 25)

  for (let i = 0; i < 3; i++){
    let x = i * 75 + circleposx + 370
    let y = circleposy + 360
    let d = circlesize - 25
    circle(x, y, d)
  }
}