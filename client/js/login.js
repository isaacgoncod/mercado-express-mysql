const loginMatricula = document.querySelector("#loginMatricula");
const loginSenha = document.querySelector("#loginSenha");
const registerNome = document.querySelector("#registerNome");
const registerMatricula = document.querySelector("#registerMatricula");
const registerSenha = document.querySelector("#registerSenha");
const registerConfirmSenha = document.querySelector("#registerConfirmSenha");

function autenticar() {
  let data = {
    matricula: loginMatricula.value,
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
  if (registerSenha.value !== registerConfirmSenha.value) {
    alert("As Senhas não conferem");
  } else {
    let data = {
      nome: registerNome.value,
      matricula: registerMatricula.value,
      senha: registerSenha.value,
    };

    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3000/vendedor/create", options)
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
}
