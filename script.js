
const slider = document.getElementById("volumeSlider");
const valueDisplay = document.getElementById("sliderValue");
const bubble = document.getElementById("bubble");

slider.oninput = function() {
  valueDisplay.textContent = `Current volume: ${this.value} mL`;
};

function checkVolume() {
  const value = parseInt(slider.value);
  bubble.classList.remove("hidden");
  if (value >= 95 && value <= 105) {
    bubble.textContent = "That glows";
  } else {
    bubble.textContent = "Ankles!";
  }
  bubble.style.animation = "none";
  bubble.offsetHeight; // trigger reflow
  bubble.style.animation = null;
}
