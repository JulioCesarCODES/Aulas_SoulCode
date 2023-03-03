const emaill = document.getElementById("email");
const cpf = document.getElementById("cpf");
const uf = document.getElementById("uf");
const local = document.getElementById("localidade");
const tel = document.getElementById("telefone");

const btn = document.getElementById("btn-add");

const tab = document.getElementById("conteudo-tabela");


// Event listener = fofoqueiro = ouvinte
btn.addEventListener("click", () => {
    // console.log("ainnn papai");
    let usuario = {
        email: emaill.value,
        cpf: cpf.value,
        uf: uf.value,
        local: local.value,
        telefone: tel.value,
    };
    //console.log(usuario);
    tab.innerHTML += `
    <tr>
    <td>${usuario.email}</td>
    <td>${usuario.cep}</td>
    <td>${usuario.uf}</td>
    <td>${usuario.local}</td>
    <td>${usuario.telefone}</td>
</tr>`;
});
