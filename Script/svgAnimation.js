const svgRects = document.querySelectorAll(".svg-hero rect");

function animate() {
  svgInterval = setInterval(() => {
    let randNumOne = Math.floor(Math.random() * 8);
    let randNumTwo = Math.floor(Math.random() * 8) + 8;

    const xPos1 = document
      .querySelectorAll(".svg-hero rect")
      [randNumOne].getAttribute("x");
    const yPos1 = document
      .querySelectorAll(".svg-hero rect")
      [randNumOne].getAttribute("y");
    const xPos2 = document
      .querySelectorAll(".svg-hero rect")
      [randNumTwo].getAttribute("x");
    const yPos2 = document
      .querySelectorAll(".svg-hero rect")
      [randNumTwo].getAttribute("y");
    console.log(xPos1, xPos2, yPos1, yPos2);

    document
      .querySelectorAll(".svg-hero rect")
      [randNumOne].setAttribute("x", xPos2);
    document
      .querySelectorAll(".svg-hero rect")
      [randNumOne].setAttribute("y", yPos2);
    document
      .querySelectorAll(".svg-hero rect")
      [randNumTwo].setAttribute("x", xPos1);
    document
      .querySelectorAll(".svg-hero rect")
      [randNumTwo].setAttribute("y", yPos1);
  }, 3000);
}

animate();
