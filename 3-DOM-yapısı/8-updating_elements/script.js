function replaceItem1() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "updated Item";

  firstItem.replaceWith(li);
}

function replaceItem2() {
  const secondItem = document.querySelector("li:nth-child(2");
  // secondItem.innerHTML = "updated item 2";
  secondItem.outerHTML = "<li>updated item 2</li>";
}

function replaceAllItems() {
  const items = document.querySelectorAll("li");

  for (let i = 0; i < items.length; i++) {
    //  items[i].outerHTML = "<li>Replace All</li>";
    //  items[i].innerHTML = "Replace All";

    if (i == 1) {
      items[i].innerHTML = "two second";
    } else {
      items[i].innerHTML = "Replace All";
    }
  }
}

replaceItem1();
replaceItem2();
replaceAllItems();
