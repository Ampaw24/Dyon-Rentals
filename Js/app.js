const newsName = document.getElementById("newname");
const mail = document.getElementById("newmail");
const form = document
  .getElementById("formnew")
  .addEventListener("submit", sentAlert);

function sentAlert() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Message Sent",
  });
}

document.querySelector(".img-btn").addEventListener("click", function () {
  document.querySelector(".cont").classList.toggle("s-signup");
});
