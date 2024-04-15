// const dec = document.querySelector(".dec");
// const result = document.querySelector(".result");
// const inc = document.querySelector(".inc");
// const reset = document.querySelector(".reset");

// let count = localStorage.getItem("count") || 0;
// result.textContent = count;

// dec.addEventListener("click", function () {
//   count--;
//   result.textContent = count;
//   localStorage.setItem("count", count);
// });
// inc.addEventListener("click", function () {
//   count++;
//   result.textContent = count;
//   localStorage.setItem("count", count);
// });
// reset.addEventListener("click", function () {
//   count = 0;
//   result.textContent = count;
//   localStorage.setItem("count", count);
// });
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
