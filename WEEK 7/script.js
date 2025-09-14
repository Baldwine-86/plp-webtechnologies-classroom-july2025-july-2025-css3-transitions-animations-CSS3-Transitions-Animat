// Global and Local sscope
let globalCounter = 0;

function incrementGlobal() {
  globalCounter++;
  return globalCounter;
}

function useLocalScope() {
  let localCounter = 5; // Local varibale: only exists inside this fuction
  localCounter++;
  return localCounter;
}

console.log(incrementGlobal());
console.log(globalCounter);
console.log(useLocalScope();

// Parameters and return values
function calculatePerimeter(Width, height){
  return (width + height)*2;
}

fucntion greetUser(names, greetings = "Hello") {
  return '${greeting}, ${name}';
}

console.log(calculatePerimeter(5, 10));
console.log(greetUser("Baldwine"));

//Animation control
let animationId;

function startAnimation(elementId, speed) {
  const element = document.getElementById(elementId);
  let position = 0;

  function frame() {
    if (position >= 300) {
      cancelAnimationFrame(animationId);
    } else {
      position += speed;
      element.style.left = position + "px";
      animationId = requestAnimationFrame(frame);
    }
  }

  animationId = requestAnimationFrame(frame);
}

function stopAnimation() {
  cancelAnimationFrame(animationId);
}

function changeText(elementId, newText) {
  const element = document.getElementById(elementId);
  element.textContent = newText;
}

function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  const isHidden = element.style.display === "none";
  element.style.display = isHidden ? "block" : "none";
}
