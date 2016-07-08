const radiusInc = window.innerWidth / 50;
const numRings = Math.floor(window.innerWidth / 3 / radiusInc);
const body = document.querySelector('body');

function range(length) {
  return [...Array(length).keys()];
}

function makeRings(className) {
  const daddy = range(numRings)
    .map(i => {
      const diameter = (i + 1) * (radiusInc * 2);
      const diaStyle = `${diameter}px`;
      const ring = document.createElement("div");
      ring.classList.add("circle");
      ring.style.height = diaStyle;
      ring.style.width = diaStyle;
      ring.style.border = `${radiusInc / 3}px solid white`;
      return ring;
    })
    .reduce((smaller, larger) => {
      larger.appendChild(smaller);
      return larger;
    });
  daddy.classList.add(className);
  return daddy;
}
body.appendChild(makeRings("left"));
body.appendChild(makeRings("right"));
