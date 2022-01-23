let a = 0;

let box1 = {
  "v1": null,
  "v2": null,
  "size": 200,
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  box1.v1 = createVector(40, 50);
  box1.v2 = createVector(40, 50);
}

function draw() {
  background(080);
  rotateX(a);
  rotateY(a);

  noFill();
  stroke(333, 333);

  show(box1);
  a += 0.01;
}

function show(boxI){
  box(boxI.size);
}
