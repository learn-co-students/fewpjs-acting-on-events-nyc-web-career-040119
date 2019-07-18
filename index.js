// Your code here

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    var leftNumbers = dodger.style.left.replace("px", "");
    var left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
  }
});

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
