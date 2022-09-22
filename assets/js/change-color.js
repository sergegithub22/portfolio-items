
function changeBgColor(evt) {
  
var section = document.querySelector(".section-gray");
var targetColor = evt.currentTarget.title;

if (targetColor === "Yellow") {
    tabMostpop.classList.add("products_tab");  
    tabRecent.classList.remove("products_tab");
    buttons[0].classList.add("active_tab_btn");
    buttons[1].classList.remove("active_tab_btn");
}
    else if (targetButton === "recentbtn") {
    tabRecent.classList.add("products_tab");
    tabMostpop.classList.remove("products_tab");
    buttons[1].classList.add("active_tab_btn");
    buttons[0].classList.remove("active_tab_btn");
    }     
}

var var link = document.querySelector(".color");
for (var i = buttons.length - 1; i >= 0; i--) {  
    buttons[i].addEventListener("click", changeBgColor);
    
}







function showHideSiteLogo() {

  if(logo.classList.contains("visually-hidden")){
  logo.classList.remove("visually-hidden");
  link[0].textContent = "Hide Site Logo";
  window.alert("Now u will see the logo of this site template. For hide it - click, please, on 'Hide Site Logo' in 'My Account' menu");
    
}  
  else{
    logo.classList.add("visually-hidden");
    link[0].textContent = "Show site Logo";
  }
  console.log([link]); 
  
}
var link = document.querySelectorAll(".show_site_logo");
var logo = document.querySelector(".logo");


for (var i = link.length - 1; i >= 0; i--) {
	link[i].addEventListener("click", showHideSiteLogo);
}
console.log(logo.style);




