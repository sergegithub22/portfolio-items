
function changeTheme(evt) {

var bg = document.querySelector(".section");
  
var menuBg = document.querySelector("main nav ul");
var menuButtons = document.querySelectorAll("main nav button");
  
var links = document.querySelectorAll(".element__link");
var elementHeader = document.querySelectorAll(".element__header");
var elementDesc = document.querySelectorAll(".element__description");
var elementLinks = document.querySelectorAll(".element__links");
var elementItem = document.querySelectorAll(".element");
var credits = document.querySelectorAll(".credits");
var creditsLink = document.querySelectorAll(".credits a");
var targetColor = evt.currentTarget.title;



//  Gray
  if (targetColor === "Gray"){
    bg.style.backgroundColor = "#1a1a1a";
    bg.style.transition = "2.5s";  
// Menu
    menuBg.style.backgroundColor = "#0d0d0d";
    for (var mb = menuButtons.length - 1; mb >= 0; mb--){
      menuButtons[mb].style.backgroundColor = "#0d0d0d";
    }
    for (var m = menuButtons.length - 1; m >= 0; m--) {
      menuButtons[m].style.color = "#b3b3b3";
      menuButtons[m].addEventListener("mouseenter", (event) => {
          event.target.style.backgroundColor = "#262626";
          event.target.style.color = "white";
      });
      menuButtons[m].addEventListener("mouseout", (event) => {
        if(event.target.title === "Gray"){
          event.target.style.backgroundColor = "#262626";
          event.target.style.color = "white";
        }
        else {
          event.target.style.backgroundColor = "#0d0d0d";
          event.target.style.color = "#b3b3b3";
        }
      });
    }
    evt.currentTarget.style.backgroundColor = "#262626";
    evt.currentTarget.style.color = "white";
// Menu end
    for (var e = elementItem.length - 1; e >= 0; e--){
      elementItem[e].style.backgroundColor = "#333333";
      elementItem[e].style.color = "lightgray";
    }
    for (var h = elementHeader.length - 1; h >= 0; h--){
      elementHeader[h].style.backgroundColor = "#333333";
      elementHeader[h].style.color = "lightgray";
    }
    for (var d = elementDesc.length - 1; d >= 0; d--){
      elementDesc[d].style.backgroundColor = "#262626";
      elementDesc[d].style.color = "inherit";
    }
    for (var cl = creditsLink.length - 1; cl >= 0; cl--) {
      creditsLink[cl].style.color = "#8c8c8c";
      creditsLink[cl].addEventListener("mouseover", (event) => {
      event.target.style.color = "#bfbfbf";
      });
      creditsLink[cl].addEventListener("mouseout", (event) => {
      event.target.style.color = "#8c8c8c";
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

  //  Deep Blue
  if (targetColor === "Blue"){
    bg.style.backgroundColor = "#002d33";
    bg.style.transition = "2.5s";

// Menu
    menuBg.style.backgroundColor = "#005a66";
    for (var mb = menuButtons.length - 1; mb >= 0; mb--){
      menuButtons[mb].style.backgroundColor = "#005a66";
    }
    for (var m = menuButtons.length - 1; m >= 0; m--) {
      menuButtons[m].style.color = "#b3b3b3";
      menuButtons[m].addEventListener("mouseenter", (event) => {
          event.target.style.backgroundColor = "#007180";
          event.target.style.color = "white";
      });
      menuButtons[m].addEventListener("mouseout", (event) => {
      if(event.target.title === "Blue"){
          event.target.style.backgroundColor = "#007180";
          event.target.style.color = "white";
        }
        else {
          event.target.style.backgroundColor = "#005a66";
          event.target.style.color = "#b3b3b3";
        }
      });
    }
    evt.currentTarget.style.backgroundColor = "#007180";
    evt.currentTarget.style.color = "white";
// Menu end
    for (var e = elementItem.length - 1; e >= 0; e--){
      elementItem[e].style.backgroundColor = "#008799";
      elementItem[e].style.color = "lightgray";
    }
    for (var h = elementHeader.length - 1; h >= 0; h--){
      elementHeader[h].style.backgroundColor = "#008799";
      elementHeader[h].style.color = "#ffffff";
    }
    for (var d = elementDesc.length - 1; d >= 0; d--){
      elementDesc[d].style.backgroundColor = "#002d33";
      elementDesc[d].style.color = "inherit";
    }
    for (var cl = creditsLink.length - 1; cl >= 0; cl--) {
      creditsLink[cl].style.color = "#6495ED";
      creditsLink[cl].addEventListener("mouseover", (event) => {
      event.target.style.color = "#8db0f2";
      });
      creditsLink[cl].addEventListener("mouseout", (event) => {
      event.target.style.color = "#6495ED";
      });
    }
    for (var l = elementLinks.length - 1; l >= 0; l--){
      elementLinks[l].style.backgroundColor = "#008799";
    }
    for (var x = links.length - 1; x >= 0; x--) {
      links[x].style.color = "white";
      links[x].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#009eb3";
      event.target.style.color = "white";
      });
      links[x].addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      event.target.style.color = "white";
      });
    }
  }
// Gold
  else if (targetColor === "Gold"){
    bg.style.backgroundColor = "#6e5411";
    bg.style.transition = "2.5s";
// Menu
    menuBg.style.backgroundColor = "#806600";
    for (var mb = menuButtons.length - 1; mb >= 0; mb--){
      menuButtons[mb].style.backgroundColor = "#806600";
    }
    for (var m = menuButtons.length - 1; m >= 0; m--) {
      menuButtons[m].style.color = "#b3b3b3";
      menuButtons[m].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#997a00";
      event.target.style.color = "white";
      });
      menuButtons[m].addEventListener("mouseout", (event) => {
      if(event.target.title === "Gold"){
          event.target.style.backgroundColor = "#997a00";
          event.target.style.color = "white";
        }
        else {
          event.target.style.backgroundColor = "#806600";
          event.target.style.color = "#b3b3b3";
        }
      });
    }
    evt.currentTarget.style.backgroundColor = "#997a00";
    evt.currentTarget.style.color = "white";
//    Menu end
    for (var e = elementItem.length - 1; e >= 0; e--){
      elementItem[e].style.backgroundColor = "#b0861c";
      elementItem[e].style.color = "lightgray";
    }
    for (var h = elementHeader.length - 1; h >= 0; h--){
      elementHeader[h].style.backgroundColor = "#b0861c";
      elementHeader[h].style.color = "#ffffff";
    }
    for (var d = elementDesc.length - 1; d >= 0; d--){
      elementDesc[d].style.backgroundColor = "#6e5411";
      elementDesc[d].style.color = "#ffdfb3";
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
      elementLinks[l].style.backgroundColor = "#b0861c";
    }
    for (var x = links.length - 1; x >= 0; x--) {
      links[x].style.color = "lightgray";
      links[x].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#c7971f";
      event.target.style.color = "black";
      });
      links[x].addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      event.target.style.color = "lightgray";
      });
    }
  }
// Violet
   else if (targetColor === "Violet"){
     bg.style.backgroundColor = "#330033";
      bg.style.transition = "2.5s";
//    Menu
    menuBg.style.backgroundColor = "#4d004d";
    for (var mb = menuButtons.length - 1; mb >= 0; mb--){
      menuButtons[mb].style.backgroundColor = "#4d004d";
      
    }
    for (var m = menuButtons.length - 1; m >= 0; m--) {
      menuButtons[m].style.color = "#b3b3b3";
      menuButtons[m].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#b300b3";
      event.target.style.color = "white";
      });
      menuButtons[m].addEventListener("mouseout", (event) => {
        if(event.target.title === "Violet"){
          event.target.style.backgroundColor = "#b300b3";
          event.target.style.color = "white";
        }
        else {
          event.target.style.backgroundColor = "#4d004d";
          event.target.style.color = "#b3b3b3";
        }
      });
    }
     evt.currentTarget.style.backgroundColor = "#b300b3";
     evt.currentTarget.style.color = "white";
//    Menu end
      for (var e = elementItem.length - 1; e >= 0; e--){
        elementItem[e].style.backgroundColor = "#990099";
        elementItem[e].style.color = "white";
      }
      for (var h = elementHeader.length - 1; h >= 0; h--){
        elementHeader[h].style.backgroundColor = "#990099";
        elementHeader[h].style.color = "#ffffff";
      }
      for (var d = elementDesc.length - 1; d >= 0; d--){
        elementDesc[d].style.backgroundColor = "#660066";
        elementDesc[d].style.color = "white";
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
// Cream
   else if (targetColor === "Cream"){
     bg.style.backgroundColor = "#ffc180";
      bg.style.transition = "2.5s";
//  Menu
    menuBg.style.backgroundColor = "#00997a";
    for (var mb = menuButtons.length - 1; mb >= 0; mb--){
      menuButtons[mb].style.backgroundColor = "#00997a";
      
    }
    for (var m = menuButtons.length - 1; m >= 0; m--) {
      menuButtons[m].style.color = "white";
      menuButtons[m].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#00b38f";
      event.target.style.color = "#ff0000";
      });
      menuButtons[m].addEventListener("mouseout", (event) => {
         if(event.target.title === "Cream"){
          event.target.style.backgroundColor = "#00b38f";
          event.target.style.color = "#ff0000";
        }
        else {
          event.target.style.backgroundColor = "#00997a";
          event.target.style.color = "white";
        }
      });
    }
     evt.currentTarget.style.backgroundColor = "#00b38f";
     evt.currentTarget.style.color = "#ff0000";
//  Menu end
      for (var e = elementItem.length - 1; e >= 0; e--){
        elementItem[e].style.backgroundColor = "#ffce99";
      }
      for (var h = elementHeader.length - 1; h >= 0; h--){
        elementHeader[h].style.backgroundColor = "#ffce99";
        elementHeader[h].style.color = "#4d004d";
      }
      for (var d = elementDesc.length - 1; d >= 0; d--){
        elementDesc[d].style.backgroundColor = "#ffdab3";
        elementDesc[d].style.color = "black";
      }    
      for (var cl = creditsLink.length - 1; cl >= 0; cl--) {
        creditsLink[cl].style.color = "#e67700";
        creditsLink[cl].addEventListener("mouseover", (event) => {
        event.target.style.color = "#ff3300";
        });
        creditsLink[cl].addEventListener("mouseout", (event) => {
        event.target.style.color = "#e67700";
        });
      }
      for (var l = elementLinks.length - 1; l >= 0; l--){
        elementLinks[l].style.backgroundColor = "#ffce99";
      }
      for (var x = links.length - 1; x >= 0; x--) {
        links[x].style.color = "black";
        links[x].addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "#ffe6cc";
        event.target.style.color = "black";
        });
        links[x].addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "";
        event.target.style.color = "black";
        });
      }
    }
  }
var buttons = document.querySelectorAll(".color");
for (var i = buttons.length - 1; i >= 0; i--) {  
    buttons[i].addEventListener("click", changeTheme);
    
}