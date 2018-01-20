//Esquisse
let people = [100, 100, 100, 100, 100, 100];
let base;
let round;
const h = 80;
function setup() {
  createCanvas(800, 600);
  base = createVector(100, 80);
  round = 0;
  frameRate(3);
}
function draw() {
  background('black');
  fill('white');
  textSize(40);
  textAlign(RIGHT, CENTER);
  //for (let i=0; i<people.length; i+=1) {
  //  const val = people[i];
  //  text(val, base.x, base.y+(h*i));
  //  rect(base.x+10, base.y+(h*i)-45, val*2, h);
  //}
  people.forEach( (val, i) => {text(val, base.x, base.y+(h*i)); rect(base.x+10, base.y+(h*i)-45, val*2, h);} );

  textAlign(LEFT, CENTER);
  text(`Round ${round}`, base.x, height-35);

  const d1 = floor(random(0, people.length));
  const d2 = floor(random(0, people.length));
  const v = 5;
  if (d1 != d2 && people[d1] >= v) {
    people[d1] -= v;
    people[d2] += v;
  }
  round += 1;
}
