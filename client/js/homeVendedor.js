// MODAL INFO
const url = "http://localhost:3000/vendedor";
const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-corpo");
const modalTitle = document.querySelector(".modal-title");

fetch(url + "/listar", { method: "GET" })
  .then((resp) => resp.json())
  .then((resp) => {
    montarTabela(resp);
  })
  .catch((err) => console.error(err));

function montarTabela(vetor) {
  vetor.forEach((e) => {
    let linha = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");
    let buttonDel = document.createElement("button");
    let btnUpdate = document.createElement("button");

    colId = e.id;
    col1.innerHTML = e.nome;
    col2.innerHTML = e.matricula;
    buttonDel.innerHTML = "Excluir";
    btnUpdate.innerHTML = "Alterar";

    col3.className = "btn-modal-info";

    buttonDel.setAttribute("type", "button");
    buttonDel.setAttribute("onclick", `delVendedor('${e.id}')`);

    buttonDel.className = "btn btn-danger";

    btnUpdate.setAttribute("type", "button");
    btnUpdate.setAttribute("data-mdb-toggle", "modal");
    btnUpdate.setAttribute("data-mdb-target", "#myModalFormUpdate");

    btnUpdate.className = "btn btn-secondary";

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col3);
    col3.appendChild(btnUpdate);
    col3.appendChild(buttonDel);

    corpo.appendChild(linha);
  });
}

function delVendedor(id) {
  if (confirm("Você deseja EXCLUIR este Vendedor?"))
    fetch(url + "/" + id, { method: "DELETE" })
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 202) {
          window.location.reload();
        } else alert("Erro ao enviar dados");
      });
}

const updateMatricula = document.querySelector("#updateMatricula");
const updateNome = document.querySelector("#updateNome");
const updateSenha = document.querySelector("#updateSenha");
const updateConfirmSenha = document.querySelector("#updateConfirmSenha");

function updateVendedor() {
  if (updateSenha.value !== updateConfirmSenha.value) {
    alert("As Senhas não conferem, Tente novamente.");
  } else {
    let data = {
      matricula: updateMatricula.value,
      nome: updateNome.value,
      senha: updateSenha.value,
    };

    let options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(url + "/update", options)
      .then((resp) => {
        return resp.status;
      })
      .then((resp) => {
        if (resp == 202) {
          alert("Atualizado com Sucesso!");
          window.location.reload();
        } else {
          alert(info.msg);
        }
      });
  }
}
