const alerta = document.querySelector(".msg-alert");
const button = document.querySelector("#btn");

button.addEventListener("click", function (e) {
  e.preventDefault();

  const num1 = document.querySelector("#num-1");
  const num2 = document.querySelector("#num-2");

  if (num1 && num2) {
    if (num1.value < num2.value) {
      alerta.classList.remove("msg-alert-red");
      alerta.classList.add("msg-alert-green");
      alerta.innerHTML = "Tudo certo! O número 2 é maior!";
    } else {
      alerta.classList.remove("msg-alert-green");
      alerta.classList.add("msg-alert-red");
      alerta.innerHTML = "Tente novamente! O número 1 é maior!";
    }

    // Resetando os valores dos inputs
    num1.value = "";
    num2.value = "";
  } else {
    console.error("Um ou mais elementos não foram encontrados no DOM.");
  }
});
