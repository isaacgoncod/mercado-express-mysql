const loginEmail = document.querySelector("#loginName");
const loginSenha = document.querySelector("#loginPassword");
const registerNome = document.querySelector("#registerName");
const registerEmail = document.querySelector("#registerEmail");
const registerSenha = document.querySelector("#registerPassword");
const registerTel1 = document.querySelector("#registerTel1");
const registerTel2 = document.querySelector("#registerTel2");

function autenticar() {
  let data = {
    email: loginEmail.value,
    senha: loginSenha.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/login", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info.id != undefined) {
        localStorage.setItem("user", JSON.stringify(info));

        window.location.href = "../pages/home.html";
      } else {
        alert(info.msg);
      }
    });
}

function registrar() {
  let data = {
    nome: registerNome.value,
    email: registerEmail.value,
    senha: registerSenha.value,
    telefone1: registerTel1.value,
    telefone2: registerTel2.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch("http://localhost:3000/cliente/add", options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      if (info != undefined) {
        localStorage.setItem("user", JSON.stringify(info));

        window.location.href = "../pages/login.html";
      } else {
        alert(info.msg);
      }
    });
}