

// References
const $face = document.querySelector('.face')
const $coder = document.querySelector('.coder')
var designerPara= document.querySelector('.designerHeading')
var coderPara= document.querySelector('.coderHeading')
var $logo= document.querySelector('.logo')


// Find the position of the mouse's "x" relative to the container when the mouse moves
$face.addEventListener('mousemove', event => {

  // The mouse position within the container as it moves (higher means toward the right)
  const posOfMouseX = event.clientX - $face.offsetLeft  // x from the left, minus space to the left of the element

  
  // Get the width of the face
  const faceWidth = $face.offsetWidth

  // Get the percentage of the mouse's X within the face relative to the width
  const percentOfTotal = posOfMouseX / faceWidth;  // percentage

  // Change the width of the $coder
  $coder.style.width = `${percentOfTotal * 100}%`
  designerPara.style.opacity = `${percentOfTotal * 100}%`
})
















// *** NOTES ***
// * Here are some notes I made while recording the video so you could see what my thought process was during the development.
// * Also see the notes I made in the README.md before starting
// *************


// offsetX
// Problem here is that the offsetX value is being calculated only relative to the element that's immediately under the mouse. So when the mouse goes over the child element, it still triggers the event, but the offsetX value is relative to the element it's under. So it creates that jumping effect.

// clientX
// Here the problem is because clientX refers to the parent. That's fine when we're on the child element. But then the parent element has a problem because it's parent (the body) has a much greater width. So we could probably hack this by double wrapping the parent (or not! must account for the margin too :( I could probably triple wrap it, haha. Or... grid/flex maybe?)

// Could also just restrict the percentage to be only as high as 100%. But there's definitely a better way...

// One is probably to say the child doesn't register mouse events! Only problematic if it needed to be clickable.
  // It's not the child. This ruled that out. Its that clientX can exceed the width of the element. That makes sense I suppose (although why doesn't it give a negative if it's on the left, right?)
  // Console time!

// Now the problem is that it always wants to count starting left of the parent. Easy solution is to subtract the offsetLeft of the container. May be the only way.