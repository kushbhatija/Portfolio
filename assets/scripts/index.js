
function toggle(){
  var menuOpen= document.querySelector(".small-menu");
  menuOpen.classList.toggle("smallMenuClosed");
}


document.querySelector(".hamBtn").addEventListener('click',toggle);