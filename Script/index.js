// ScrollReveal().reveal('.punchline', { delay: 2000 });
var slideInLeft = {
  distance: "30%",
  origin: "right",
  opacity: 0,
  duration: 2000,
  reset: true,
  mobile: false,
};
var slideInRight = {
  distance: "30%",
  origin: "left",
  opacity: 0,
  duration: 2000,
  mobile: false,
  reset: true,
};
var slideInRightShort = {
  distance: "30%",
  origin: "left",
  opacity: 0,
  duration: 2000,
  mobile: false,
};

var scaleUp = {
  scale: 0.5,
  duration: 2000,
  opacity: 0,
  mobile: false,
  reset: true,
};

var slideUp = {
  distance: "70%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  mobile: false,
  reset: true,
};

var slideUpDelay = {
  distance: "50%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 300,
  mobile: false,
  reset: true,
};

var slideUpDelayTwo = {
  distance: "50%",
  origin: "bottom",
  opacity: 0,
  duration: 2000,
  delay: 600,
  mobile: false,
  reset: true,
};

ScrollReveal().reveal(".slideInLeft", slideInLeft);
ScrollReveal().reveal(".slideUp", slideUp);
ScrollReveal().reveal(".slideUpDelay", slideUpDelay);
ScrollReveal().reveal(".slideUpDelayTwo", slideUpDelayTwo);
ScrollReveal().reveal(".slideInRight", slideInRight);
ScrollReveal().reveal(".slideInRightShort", slideInRightShort);
ScrollReveal().reveal(".scaleUp", scaleUp);
