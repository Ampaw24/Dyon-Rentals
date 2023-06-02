document.getElementById("rg-username").addEventListener("blur", validateUser);
document.getElementById("rg-passcde").addEventListener("blur", validatePass);
document.getElementById("rg-confirm").addEventListener("blur", validateconf);
document.getElementById("rg-mail").addEventListener("blur",   validateUsermail);
document.getElementById("modal-btn").addEventListener("click", redirectUser);

function validateUser() {
  const btn = document.getElementById("modal-btn");
  const userName = document.getElementById("rg-username");
  const check = /^[a-zA-Z]{2,30}$/;
  if (userName.value == "") {
    userName.classList.add("is-invalid");
    btn.disabled = true;
    // btn.classList.add("disabled");
  } else if (!check.test(userName.value)) {

    userName.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else {
    userName.classList.remove("is-invalid");
    btn.classList.remove("disabled");
  }
}
//Validate mail
function validateUsermail() {
  const btn = document.getElementById("modal-btn");
  const usermail = document.getElementById("rg-mail");
  const check = /^[a-zA-Z]{2,30}$/;
  if (usermail.value == "") {
    usermail.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else if (!check.test(userName.value)) {
    usermail.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else {
    usermail.classList.remove("is-invalid");
    btn.classList.remove("disabled");
  }
}



function validatePass() {
  const btn = document.getElementById("modal-btn");
  const password = document.getElementById("rg-passcde");
  const check = /^[a-zA-Z0-9]{10,20}$/;
  if (password.value == "") {
    password.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else if (!check.test(password.value)) {
    password.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else {
    password.classList.remove("is-invalid");
    btn.classList.remove("disabled");
  }
}


function validateconf() {
  const btn = document.getElementById("modal-btn");
  const password = document.getElementById("rg-passcde");
  const check = /^[a-zA-Z0-9]{10,20}$/;
  if (password.value == "") {
    password.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else if (!check.test(password.value)) {
    password.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else {
    password.classList.remove("is-invalid");
    btn.classList.remove("disabled");
  }
}




function redirectUser() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
 Toast.fire({
    icon: "success",
    title: "Signed in successfully",
  });

  let timeOut = setTimeout(function () {
    window.location = "userpage.html";
  }, 3000);
}
