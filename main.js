const slider = document.querySelector('.items');
let isDown = false; // flag variable
let startX; // initial click down
let scrollLeft;

function handleMouseDown(event) {
  isDown = true;
  slider.classList.add('active');
  startX = event.pageX - this.offsetLeft; // where I did click down
  scrollLeft = this.scrollLeft;
}

function handleMouseLeave() {
  isDown = false;
  slider.classList.remove('active');
}

function handleMouseUp() {
  isDown = false;
  slider.classList.remove('active');
}

function handleMouseMove(event) {
  if (!isDown) return; // stop the function from running
  event.preventDefault();
  // when I move the mouse left or right, I know how many pixels I scrolled.
  // I am going to anchor it down as soon as we click and then depending on how far
  // either way I scroll, that's how much I am going to scroll the div.
  const x = event.pageX - this.offsetLeft;
  console.log({ x, startX });
  const walk = (x - startX) * 3; // how far we deviated from the initial click
  slider.scrollLeft = scrollLeft - walk;
}

slider.addEventListener('mousedown', handleMouseDown);
slider.addEventListener('mouseleave', handleMouseLeave);
slider.addEventListener('mouseup', handleMouseUp);
slider.addEventListener('mousemove', handleMouseMove);