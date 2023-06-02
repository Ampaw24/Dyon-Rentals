var modalclick = document.querySelector("#s-btn");
var modalbg = document.querySelector(".popup-overlay");
var popup = document.querySelector(".pop-up");
var closeForm = document.querySelector(".popup-close");

document.querySelector(".img-btn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s-signup");
});

modalclick.addEventListener("click", showDiag);

function showDiag() {
  modalbg.classList.add("bg-active");
  popup.style.visibility = "visible";
}
closeForm.addEventListener("click",closeModal);

// closeForm.addEventListener("click", function () {
  
// });
function closeModal() {
  modalbg.classList.remove("bg-active");
  popup.style.visibility = "hidden";
  
}


function showDiagrent() {
  modalbg.classList.add("bg-active");
  popup.style.visibility = "visible";
}

document.querySelector("#morebtn").addEventListener("click", showDiag);



