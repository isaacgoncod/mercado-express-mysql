const url = "http://localhost:3000/vendas";
//MODAL FORM
const registerDataVenda = document.querySelector("#registerDataVenda");
const registerQuantidade = document.querySelector("#registerQuantidade");
const registerProdutoId = document.querySelector("#registerProdutoId");
const registerVendedorId = document.querySelector("#registerVendedorId");

function registerVenda() {
  let data = {
    dataVenda: registerDataVenda.value,
    quantidade: registerQuantidade.value,
    produtoId: registerProdutoId.value,
    vendedorId: registerVendedorId.value,
  };

  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(url + "/create", options)
    .then((resp) => {
      return resp.status;
    })
    .then((resp) => {
      if (resp == 201) {
        alert("Cadastrado com Sucesso!");
      } else {
        alert(info.msg);
      }
    });
}

// MODAL INFO
const corpo = document.querySelector("#corpo");
const modal = document.querySelector(".modal-corpo");
const modalTitle = document.querySelector(".modal-title");

fetch(url + "/listar/venda", { method: "GET" })
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
    let col4 = document.createElement("td");
    let col5 = document.createElement("td");
    let col6 = document.createElement("td");
    let col7 = document.createElement("td");

    let buttonDel = document.createElement("button");
    let btnUpdate = document.createElement("button");

    col1.innerHTML = formatarData(e.data_venda);
    col2.innerHTML = e.quantidade;
    col4.innerHTML = e.produto_id;
    col5.innerHTML = e.nome_produto;
    col6.innerHTML = e.vendedor_id;
    col7.innerHTML = e.nome_vendedor;

    buttonDel.innerHTML = "Excluir";
    btnUpdate.innerHTML = "Alterar";

    col3.className = "btn-modal-info";

    buttonDel.setAttribute("type", "button");
    buttonDel.setAttribute("onclick", `delVenda('${e.id}')`);

    buttonDel.className = "btn btn-danger";

    btnUpdate.setAttribute("type", "button");
    btnUpdate.setAttribute("data-mdb-toggle", "modal");
    btnUpdate.setAttribute("data-mdb-target", "#myModalFormUpdate");

    btnUpdate.className = "btn btn-secondary";

    linha.appendChild(col1);
    linha.appendChild(col2);
    linha.appendChild(col5);
    linha.appendChild(col4);
    linha.appendChild(col7);
    linha.appendChild(col6);
    linha.appendChild(col3);
    col3.appendChild(btnUpdate);
    col3.appendChild(buttonDel);

    corpo.appendChild(linha);
  });
}

function delVenda(id) {
  if (confirm("Você deseja EXCLUIR esta Venda?"))
    fetch(url + "/" + id, { method: "DELETE" })
      .then((resp) => resp.status)
      .then((resp) => {
        if (resp == 202) {
          window.location.reload();
        } else alert("Erro ao enviar dados");
      });
}

const updateId = document.querySelector("#updateId");
const updateDataVenda = document.querySelector("#updateDataVenda");
const updateQuantidade = document.querySelector("#updateQuantidade");
const updateProdutoId = document.querySelector("#updateProdutoId");
const updateVendedorId = document.querySelector("#updateVendedorId");

function updateVenda() {
  let data = {
    id: updateId.value,
    dataVenda: updateDataVenda.value,
    quantidade: updateQuantidade.value,
    produtoId: updateProdutoId.value,
    vendedorId: updateVendedorId.value,
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
        alert("Atualiado com Sucesso!");
      } else {
        alert(info.msg);
      }
    });
}

function formatarData(data) {
  return new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}
