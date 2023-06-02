document.querySelector("#user-name").addEventListener("blur", validateUser);
document.querySelector("#user-password").addEventListener("blur", validatePass);
document.querySelector("#signin-btn").addEventListener("click", redirectUser);

function validateUser() {
  const btn = document.querySelector("#signin-btn");
  const userName = document.getElementById("user-name");
  const password = document.getElementById("user-password");

  if (userName.value == "" || password.value == "") {
    userName.classList.add("is-invalid");
    btn.classList.add("disabled");
  } else {
    userName.classList.remove("is-invalid");
    btn.classList.remove("disabled");
  }
}
function validatePass() {
  const btn = document.querySelector("#signin-btn");
  const password = document.getElementById("user-password");
  const check = /^[a-zA-Z0-9]{10,20}$/;
  if (password.value == " ") {
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
  const password = document.getElementById("user-password");
  const userName = document.getElementById("user-name");

  if (userName.value == "") {
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
      icon: "danger",
      title: "Invalid Inputs",
    });

    let timeOut = setTimeout(function () {
      window.location = "index.html";
    }, 3000);
  } else if (password.value == " ") {
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
      icon: "danger",
      title: "Invalid Inputs",
    });

    let timeOut = setTimeout(function () {
      window.location = "index.html";
    }, 3000);
  } else {
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
}
