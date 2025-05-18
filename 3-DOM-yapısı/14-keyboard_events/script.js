const input = document.getElementById("text");

// function onKeyPress() {
//   console.log("keypress");
// }
// function onKeyUp() {
//   console.log("keyup");
// }

function onKeyDown(e) {
  // console.log(e);
  // console.log(e.key);
  // document.querySelector("h2").innerText += e.key;

  // if (e.key === "Enter") {
  //   alert("Enter tusuna tıklandı");
  // }

  // if (e.keyCode == "13") {
  //   alert("Enter tusuna tıklandı");
  // }

  if (e.repeat) {
    alert(`${e.key} tuşu tıklandı`);
  }
}

// input.addEventListener("keypress", onKeyPress);
// input.addEventListener("keyup", onKeyUp);
input.addEventListener("keydown", onKeyDown);
