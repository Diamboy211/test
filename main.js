var array = [];
var len = 800;
let antirecord = 2000000000;
let selected = 0;

function setup() {
  createCanvas(800, 800);
  background(0);
  for (let i = 0; i < 800; i++) {
    let n = floor(random(0,800));
    array.push(n);
  }
}

function draw() {
  for (let i = 0; i < len; i++) {
    stroke(255);
    line(i, 800, i, array[i]);

    for (let j = i; j < array.length; i++) {
      if (array[j] < antirecord) {
        antirecord = array[j];
        selected = j;
      }
    let temp = array[i];
    array[i] = array[selected];
    array[selected] = temp
    }
  }
}


