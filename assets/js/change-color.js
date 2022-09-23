
function changeBgColor(evt) {

var bg = document.querySelector(".section-gray");
var links = document.querySelectorAll(".element__link");
var elementHeader = document.querySelectorAll(".element__header");
var elementDesc = document.querySelectorAll(".element__description");
var elementLinks = document.querySelectorAll(".element__links");
var elementItem = document.querySelectorAll(".element");
var credits = document.querySelectorAll(".credits");
var creditsLink = document.querySelectorAll(".credits-link");
var targetColor = evt.currentTarget.title;
//  Gray
  if (targetColor === "Gray"){
    bg.style.backgroundColor = "#1a1a1a";
    bg.style.transition = "2.5s";
    for (var e = elementItem.length - 1; e >= 0; e--){
      elementItem[e].style.backgroundColor = "#333333";
      elementItem[e].style.color = "lightgray";
    }
    for (var h = elementHeader.length - 1; h >= 0; h--){
      elementHeader[h].style.backgroundColor = "#333333";
    }
    for (var d = elementDesc.length - 1; d >= 0; d--){
      elementDesc[d].style.backgroundColor = "#262626";
      elementDesc[d].style.color = "inherit";
    }
    for (var c = credits.length - 1; c >= 0; c--){
      credits[c].style.color = "white";
    }
    for (var cl = creditsLink.length - 1; cl >= 0; cl--) {
      creditsLink[cl].style.color = "gray";
      creditsLink[cl].addEventListener("mouseover", (event) => {
      event.target.style.color = "white";
      });
      creditsLink[cl].addEventListener("mouseout", (event) => {
      event.target.style.color = "gray";
      });
    }
    for (var l = elementLinks.length - 1; l >= 0; l--){
      elementLinks[l].style.backgroundColor = "#333333";
    }
    for (var x = links.length - 1; x >= 0; x--) {
      links[x].style.color = "white";
      links[x].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#404040";
      event.target.style.color = "white";
      });
      links[x].addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      event.target.style.color = "white";
      });
    }
  }
// Yellow
  else if (targetColor === "Yellow"){
    bg.style.backgroundColor = "#5e4e0e";
    bg.style.transition = "2.5s";
    for (var e = elementItem.length - 1; e >= 0; e--){
      elementItem[e].style.backgroundColor = "#806c00";
      elementItem[e].style.color = "lightgray";
    }
    for (var h = elementHeader.length - 1; h >= 0; h--){
      elementHeader[h].style.backgroundColor = "#806c00";
      elementHeader[h].style.color = "#ffffff";
    }
    for (var d = elementDesc.length - 1; d >= 0; d--){
      elementDesc[d].style.backgroundColor = "#4d3d00";
      elementDesc[d].style.color = "ffdfb3";
    }
    for (var c = credits.length - 1; c >= 0; c--){
      credits[c].style.color = "white";
    }
    for (var cl = creditsLink.length - 1; cl >= 0; cl--) {
      creditsLink[cl].style.color = "#ffb366";
      creditsLink[cl].addEventListener("mouseover", (event) => {
      event.target.style.color = "white";
      });
      creditsLink[cl].addEventListener("mouseout", (event) => {
      event.target.style.color = "#ffb366";
      });
    }
    for (var l = elementLinks.length - 1; l >= 0; l--){
      elementLinks[l].style.backgroundColor = "#806c00";
    }
    for (var x = links.length - 1; x >= 0; x--) {
      links[x].style.color = "lightgray";
      links[x].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#b39800";
      event.target.style.color = "black";
      });
      links[x].addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      event.target.style.color = "lightgray";
      });
    }
  }
// Pink
   else if (targetColor === "Pink"){
     bg.style.backgroundColor = "#330033";
      bg.style.transition = "2.5s";
      for (var e = elementItem.length - 1; e >= 0; e--){
        elementItem[e].style.backgroundColor = "#990099";
        elementItem[e].style.color = "white";
      }
      for (var h = elementHeader.length - 1; h >= 0; h--){
        elementHeader[h].style.backgroundColor = "#990099";
      }
      for (var d = elementDesc.length - 1; d >= 0; d--){
        elementDesc[d].style.backgroundColor = "#660066";
        elementDesc[d].style.color = "white";
      }
      for (var c = credits.length - 1; c >= 0; c--){
        credits[c].style.color = "white";
      }
      for (var cl = creditsLink.length - 1; cl >= 0; cl--) {
        creditsLink[cl].style.color = "#ffad99";
        creditsLink[cl].addEventListener("mouseover", (event) => {
        event.target.style.color = "gray";
        });
        creditsLink[cl].addEventListener("mouseout", (event) => {
        event.target.style.color = "#ffad99";
        });
      }
      for (var l = elementLinks.length - 1; l >= 0; l--){
        elementLinks[l].style.backgroundColor = "#990099";
      }
      for (var x = links.length - 1; x >= 0; x--) {
        links[x].style.color = "white";
        links[x].addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "#cc00cc";
        event.target.style.color = "white";
        });
        links[x].addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "";
        event.target.style.color = "white";
        });
      }
    }
  }
var buttons = document.querySelectorAll(".color");
for (var i = buttons.length - 1; i >= 0; i--) {  
    buttons[i].addEventListener("click", changeBgColor);
    
}