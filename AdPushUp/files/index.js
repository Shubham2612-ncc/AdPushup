document.addEventListener("DOMContentLoaded", () => {
  let demoButton = document.querySelector(".demoSetUp");
  let formButton = document.getElementById("formButton");
  let demoForm = document.querySelector(".demoForm");

  demoButton.addEventListener("click", () => {
    demoForm.scrollIntoView({ behavior: "smooth" });
  });
});
