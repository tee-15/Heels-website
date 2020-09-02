function chargebattery() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
      }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
      }, 4000);
}
chargebattery();
setInterval(chargebattery, 5000);



let menu = document.querySelector(".menu");
let headerList = document.querySelector(".header__list");
let close = document.querySelector(".close");

menu.addEventListener( "click", function(e)  {
    console.log("Hello-world");
    console.log(e.target.className)
    if (e.target.className === "menu"){
        headerList.style.display = "block";
        menu.replaceWith(close)
   } 
});
close.addEventListener("click", function(e) {
    if (e.target.className === "close") {
        headerList.style.display = "none";
        close.replaceWith(menu)
   } 
});




function myFunction(){
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");


  if (dots.style.display === "none"){
    dots.style.display = "contents" ;
    btnText.innerHTML = "View more";
    moreText.style.display = "none";

  } else{
    dots.style.display = "none";
    btnText.innerHTML = "View Less";
    moreText.style.display = "contents";
  }

}