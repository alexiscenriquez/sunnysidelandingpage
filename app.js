let nav = document.querySelector("#links");
let icon;
let links2 = document.querySelector("#links2");
let clicked=false
function windowResize() {
  let w = window.innerWidth;
  if (w < 700) {
    nav.innerHTML = '<i class="fas fa-bars" id="icon"></i>';
    icon = document.querySelector("#icon");
  } else {
    nav.innerHTML = `<a href="">About</a><a href="">Services</a><a href="">Projects</a
  ><a href="">Contact</a>`;
  }
}
window.addEventListener("load", windowResize);
window.addEventListener("resize", windowResize);
 
nav.addEventListener("click", () => {
  if(clicked ===false){
  links2.style.visibility = "visible";
clicked=true}
else{
  links2.style.visibility = "hidden";
  clicked=false
}
});
