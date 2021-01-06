// ScrollReveal().reveal('.punchline', { delay: 2000 });
var slideInLeft = {
  distance: "150%",
  origin: "right",
  opacity: 0,
  duration: 1500,
  mobile: false,
};
var slideInRight = {
  distance: "150%",
  origin: "left",
  opacity: 0,
  duration: 1500,
  mobile: false,
};
var slideInRightShort = {
  distance: "30%",
  origin: "left",
  opacity: 0,
  duration: 1500,
  mobile: false,
};

var scaleUp = {
  scale: 0.5,
  duration: 2000,
  opacity: 0,
  mobile: false,
};

var slideUp = {
  distance: "100%",
  origin: "bottom",
  opacity: 0,
  duration: 1500,
  mobile: false,
};

var slideUpDelay = {
  distance: "100%",
  origin: "bottom",
  opacity: 0,
  duration: 1500,
  delay: 300,
  mobile: false,
};

var slideUpDelayTwo = {
  distance: "100%",
  origin: "bottom",
  opacity: 0,
  duration: 1500,
  delay: 600,
  mobile: false,
};

ScrollReveal().reveal(".slideInLeft", slideInLeft);
ScrollReveal().reveal(".slideUp", slideUp);
ScrollReveal().reveal(".slideUpDelay", slideUpDelay);
ScrollReveal().reveal(".slideUpDelayTwo", slideUpDelayTwo);
ScrollReveal().reveal(".slideInRight", slideInRight);
ScrollReveal().reveal(".slideInRightShort", slideInRightShort);
ScrollReveal().reveal(".scaleUp", scaleUp);
