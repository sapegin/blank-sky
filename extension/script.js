const MIN_HUE = 200;
const MAX_HUE = 330;
const MIN_SATURATION = 35;
const MAX_SATURATION = 50;
const MIN_LIGHTNESS = 40;
const MAX_LIGHTNESS = 75;

function rnd(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateBackground() {
  const startHue = rnd(MIN_HUE, MAX_HUE);
  const startSaturation = rnd(MIN_SATURATION, MAX_SATURATION);
  const startLightness = rnd(
    MIN_LIGHTNESS,
    MAX_LIGHTNESS - (MAX_LIGHTNESS - MIN_LIGHTNESS) / 2,
  );
  document.body.style.setProperty(
    '--gradient-start',
    `hsl(${startHue}, ${startSaturation}%, ${startLightness}%)`,
  );

  const endHue = rnd(MIN_HUE, MAX_HUE);
  const endSaturation = rnd(
    startSaturation,
    Math.min(startSaturation + 30, MAX_SATURATION),
  );
  const endLightness = rnd(
    MIN_LIGHTNESS + (MAX_LIGHTNESS - MIN_LIGHTNESS) / 2,
    MAX_LIGHTNESS,
  );
  document.body.style.setProperty(
    '--gradient-end',
    `hsl(${endHue}, ${endSaturation}%, ${endLightness}%)`,
  );
}

function enableTransition() {
  // Show the first gradient immediately,
  // and enable transition for the future colors
  setTimeout(() => {
    document.body.style.transition =
      '--gradient-start 10s linear, --gradient-end 10s linear';
  }, 0);
}

updateBackground();
enableTransition();
setInterval(updateBackground, 10000);
