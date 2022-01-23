let rotation = 0;
let boxList = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  boxList.push({
    vector: createVector(0, 0, 0),
    size: 200,
  });
  frameRate(144);
}

function draw() {
  background(080);
  rotateX(rotation);
  rotateY(rotation);
  lights();

  noFill();
  stroke(333, 333);

  boxList.forEach((boxE) => {
    show(boxE);
  });
  rotation += 0.01;
}

function mousePressed() {
  let newBoxList = [];
  boxList.forEach((boxI) => {
    generate(boxI).forEach((e) => newBoxList.push(e));
  });
  boxList = newBoxList;
}

function show(boxI) {
  push();
  fill(255);
  noStroke();
  translate(boxI.vector.x, boxI.vector.y, boxI.vector.z);
  box(boxI.size);
  pop();
}

function generate(boxI) {
  let newBoxList = [];
  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      for (let z = -1; z < 2; z++) {
        let sum = abs(x) + abs(y) + abs(z);
        if (sum > 1) {
          let newSize = boxI.size / 3;
          newBoxList.push({
            vector: createVector(
              boxI.vector.x + x * newSize,
              boxI.vector.y + y * newSize,
              boxI.vector.z + z * newSize
            ),
            size: newSize,
          });
        }
      }
    }
  }
  return newBoxList;
}
