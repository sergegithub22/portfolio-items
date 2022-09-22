
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

  if (targetColor === "Dark gray"){
    bg.style.backgroundColor = "#1a1a1a";
    for (var x = links.length - 1; x >= 0; x--) {
      links[x].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#404040";
      });
      links[x].addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      });
    }
  }
  else if (targetColor === "Yellow"){
    bg.style.backgroundColor = "#333300";
    for (var e = elementItem.length - 1; e >= 0; e--){
      elementItem[e].style.backgroundColor = "#cccc00";
      elementItem[e].style.color = "black";
    }
    for (var h = elementHeader.length - 1; h >= 0; h--){
      elementHeader[h].style.backgroundColor = "#cccc00";
    }
    for (var d = elementDesc.length - 1; d >= 0; d--){
      elementDesc[d].style.backgroundColor = "#999900";
      elementDesc[d].style.color = "black";
    }
    for (var c = credits.length - 1; c >= 0; c--){
      credits[c].style.color = "black";
    }
    for (var cl = creditsLink.length - 1; cl >= 0; cl--) {
      creditsLink[cl].style.color = "black";
      creditsLink[cl].addEventListener("mouseover", (event) => {
      event.target.style.color = "black";
      });
      creditsLink[cl].addEventListener("mouseout", (event) => {
      event.target.style.color = "inherit";
      });
    }
    for (var l = elementLinks.length - 1; l >= 0; l--){
      elementLinks[l].style.backgroundColor = "#cccc00";
    }
    for (var x = links.length - 1; x >= 0; x--) {
      links[x].style.color = "black";
      links[x].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "#b3b300";
      });
      links[x].addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      });
    }
  }
   else if (targetColor === "Pink"){
    bg.style.backgroundColor = "pink";
    for (var x = links.length - 1; x >= 0; x--) {
      links[x].addEventListener("mouseenter", (event) => {
      event.target.style.backgroundColor = "pink";
      });
      links[x].addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
      });
    }
   }
}



var buttons = document.querySelectorAll(".color");
for (var i = buttons.length - 1; i >= 0; i--) {  
    buttons[i].addEventListener("click", changeBgColor);
    
}



//console.log(links);




//function showHideSiteLogo() {
//
//  if(logo.classList.contains("visually-hidden")){
//  logo.classList.remove("visually-hidden");
//  link[0].textContent = "Hide Site Logo";
//  window.alert("Now u will see the logo of this site template. For hide it - click, please, on 'Hide Site Logo' in 'My Account' menu");
//    
//}  
//  else{
//    logo.classList.add("visually-hidden");
//    link[0].textContent = "Show site Logo";
//  }
//  console.log([link]); 
//  
//}
//var link = document.querySelectorAll(".show_site_logo");
//var logo = document.querySelector(".logo");
//
//
//for (var i = link.length - 1; i >= 0; i--) {
//	link[i].addEventListener("click", showHideSiteLogo);
//}
//console.log(logo.style);



