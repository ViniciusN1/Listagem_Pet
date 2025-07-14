let ClientsPET = {
  NomeTuto: "",
  emailTutor: "",
  telefonelTutor: ""
};

function proximaInfo() {
  let tutorz = document.getElementById("Info_quem").value;
  ClientsPET.NomeTuto = tutorz;

  document.getElementById("vaiMudar").innerHTML = `
    <label for="emailTutor">Email: </label>
    <input type="text" id="emailTutor">
    <button onclick="proximaInfo2()">Confirmar</button>
  `;
  alert("Nome salvo: " + tutorz);
}

function proximaInfo2() {
  let email = document.getElementById("emailTutor").value;
  ClientsPET.emailTutor = email;

  document.getElementById("vaiMudar").innerHTML = `
    <label for="telefonelTutor">Telefone: </label>
    <input type="text" id="telefonelTutor">
    <button onclick="proximaInfo3()">Confirmar</button>
  `;
  alert("Email salvo: " + email);
}

function proximaInfo3() {
  let telefone = document.getElementById("telefonelTutor").value;
  ClientsPET.telefonelTutor = telefone;

  // Salva no localStorage
  localStorage.setItem("clientePET", JSON.stringify(ClientsPET));

  // Exibe a div que estava oculta
  document.querySelector(".listagem").style.display = "block";

  // Atualiza o conteúdo da lista com os dados do cliente
  document.getElementById("ListaAtualizada").innerHTML = `
    <strong>Cliente Cadastrado:</strong><br>
    Nome: ${ClientsPET.NomeTuto}<br>
    Email: ${ClientsPET.emailTutor}<br>
    Telefone: ${ClientsPET.telefonelTutor}
  `;

  alert("Telefone salvo: " + telefone);
  alert("Resumo do Cadastro:\nNome: " + ClientsPET.NomeTuto + "\nEmail: " + ClientsPET.emailTutor + "\nTelefone: " + ClientsPET.telefonelTutor);
}

