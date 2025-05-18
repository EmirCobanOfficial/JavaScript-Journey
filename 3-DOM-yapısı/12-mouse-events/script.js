const div = document.querySelector("div");
const img = document.querySelector("img");

function onClick() {
  console.log("onclick");
}

function onDblClick() {
  console.log("dblonClick");
}

function onContextMenu() {
  console.log("onContextMenu");
}

function onMousedown() {
  console.log("onMouseDown");
}

function onMousedown() {
  console.log("onMouseDown");
}

function onMouseEnter() {
  console.log("onMouseEnter");
}

function onMouseMove() {
  console.log("onMouseMove");
}

function onDrag() {
  console.log("onDrag");
}

function onDragStart() {
  console.log("onDragStart");
}

function onDragEnd() {
  console.log("onDragEnd");
}

div.addEventListener("click", onClick);
div.addEventListener("dblclick", onDblClick);
div.addEventListener("contextmenu", onContextMenu);
div.addEventListener("mousedown", onMousedown);
div.addEventListener("mouseenter", onMouseEnter);
div.addEventListener("mousemove", onMouseMove);
img.addEventListener("drag", onDrag);
img.addEventListener("dragstart", onDragStart);
img.addEventListener("dragend", onDragEnd);
