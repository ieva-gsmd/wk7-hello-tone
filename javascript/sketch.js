let synth;
let playing, note;

function setup() {

cnv = createCanvas(windowWidth, windowHeight);
cnv.mousePressed(playSynth);

const lfilter = new Tone.Filter({
  frequency: 500,
  type: 'lowpass',
  rolloff: -48
}).toDestination();

synth = new Tone.Synth({
  volume: -6
}).connect(lfilter);


const reverb = new Tone.Reverb({
  wet: 0.5,
  decay: 5
}).toDestination();

lfilter.connect(reverb);

}

function draw() {
  background(220);

  note = map(mouseY, 0, height, 20, 1000);
  
  if (playing) {
    
    synth.setNote(note, 0.1);
  }

}

function playSynth() {
  synth.triggerAttack("C4", 0.3);
  playing = true;
}

function mouseReleased() {
  synth.triggerRelease("+0.2")
  playing = false;
}