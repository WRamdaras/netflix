function account() {
  let name = document.querySelector(".name");
  let pw = document.querySelector(".pw");

  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.value.length > 8) {
    alert("Max of 8");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("pw", pw.value);
    alert("Your account has been created");
  }
}
