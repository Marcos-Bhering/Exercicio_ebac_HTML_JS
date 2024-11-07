const alerta = document.querySelector(".msg-alert");
const num1 = document.querySelector("#num-1");
const num2 = document.querySelector("#num-2");
const button = document.querySelector("#btn");

button.addEventListener("click", function (e) {
  e.preventDefault();

  if (num1.value < num2.value) {
    alerta.classList.remove("msg-alert-red");
    alerta.classList.add("msg-alert-green");
    alerta.innerHTML = "Tudo certo! O número 2 é maior!";
  } else {
    alerta.classList.add("msg-alert-red");

    alerta.innerHTML = "Tente novamente! O número 1 é maior!";
  }
});