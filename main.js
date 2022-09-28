


function changeColor() {
	document.getElementById("my_line").style.stroke = 'green';
}

document.getElementById("my_circle").addEventListener("mouseover", mouseOver);
document.getElementById("my_circle").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("my_circle").style.fill = "orange";
}

function mouseOut() {
  document.getElementById("my_circle").style.fill = "blue";
}