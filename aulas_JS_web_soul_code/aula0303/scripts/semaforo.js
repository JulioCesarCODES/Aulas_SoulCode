const imgg = document.getElementById("img1");
const descp = document.getElementById("desc");

function trocarVermelho() {
    console.log("Mudar para vermelho");
    imgg.src = "https://i.postimg.cc/MKS3MpWx/vermelho.png";
    descp.innerHTML = 'PARE!';
}

function trocarAmarelo() {
    console.log("Mudar para amarelo");
    imgg.src = "https://i.postimg.cc/RCfbZHxX/amarelo.png";
    descp.innerHTML = 'FIQUE ATENTO!';
}

function trocarVerde() {
    console.log("mudar para verde");
    imgg.src = "https://i.postimg.cc/vHtqWwBn/verde.png";
    descp.innerHTML = 'SIGA EM FRENTE!';
}