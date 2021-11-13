

// function that adds opcacity when you hover over a img
function addOpacity(event) {
  if (!this.classList.contains("dim")) {
    this.classList.add("dim");
  }
  getProductInfo(event.target.id);
}

// function that removes opacity after your done hovering over img
function removeOpacity(event) {
  if (this.classList.contains("dim")) {
    this.classList.remove("dim");
  }

  let element = document.getElementById("ppg");
  element.textContent = "";

  let color = document.getElementById("color");
  color.textContent = "";

  event.preventDefault();
}

function settingListeners() {
  let images = document.getElementsByTagName("img");

  for (let i = 0; i < images.length; i++) {
    document
      .getElementById(images[i].id)
      .addEventListener("mouseover", addOpacity, false);
    document
      .getElementById(images[i].id)
      .addEventListener("mouseout", removeOpacity, false);
  }
}

function changeImage(elementId) {
  let image = document.getElementById("imgDisplay");
  image.src = elementId.src;
}

//   using switch case to get specific color price and color name and setting it to the right color,
//   and then sending it to getUpdatePrice to set the price and color appropiately
function getProductInfo(colorInfo) {
  let price;
  let nameOfColor;

  switch (colorInfo) {
    case "pn1":
      price = "$14.99";
      nameOfColor = "Lime Green";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn2":
      price = "$11.14";
      nameOfColor = "Medium Brown";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn3":
      price = "$22.99";
      nameOfColor = "Royal Blue";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn4":
      price = "$13.42";
      nameOfColor = "Solid Red";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn5":
      price = "$21.98";
      nameOfColor = "Solid White";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn6":
      price = "$11.99";
      nameOfColor = "Solid Black";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn7":
      price = "$8.22";
      nameOfColor = "Solid Cyan";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn8":
      price = "$11.99";
      nameOfColor = "Solid Purple";
      getUpdatePrice(nameOfColor, price);
      break;
    case "pn9":
      price = "$14.99";
      nameOfColor = "Solid Yellow";
      getUpdatePrice(nameOfColor, price);
      break;
    default:
  }

  // function that updates and places price and name of color you are hovering over
  function getUpdatePrice(nameOfColor, price) {
    let pricePlacement = document.getElementById("ppg");
    pricePlacement.textContent = price;

    let color = document.getElementById("color");
    color.textContent = nameOfColor;
  }
}
