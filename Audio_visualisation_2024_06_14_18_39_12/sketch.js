let mic, fft;

function setup() {
  createCanvas(windowWidth, 300);
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  noStroke();
}

function draw() {
  background(lerpColor(color('yellow'), color('red'), frameCount / width));

  let centerX = width / 2,
    centerY = height / 2;
  translate(centerX, centerY);
  let spectrum = fft.analyze();
  for (let it = 0; it < spectrum.length; it++) {
    let freq = spectrum[it];
    let x = cos(it * it * it + freq / 200 * cos(it) + frameCount * sin(it) / 700) * centerX;
    let y = sin(it * it + frameCount * cos(it) / 900 + freq / 200 * sin(it * 2)) * centerY;

    if (random() > 0.5) {
      fill('black');
      square(x + 5, y + 5, freq / 4);
    } else {
      fill('black');
      triangle(x, y, x + 2 + freq / 2, y + 2 + freq / 2, x + 2 + freq / 2, y);
    }
  }
}
