var botao = document.querySelector(".conteudo");
var caixa = document.querySelector(".box");
var fundo = document.querySelector(".container");

function esconderBotao() {
  botao.classList.toggle("hide");
}

function adicionarImg() {
  caixa.style.backgroundImage = "url('ananda.jpg')";
  caixa.style.border = "1px solid #0000003d;";
}

function adicionarFundo() {
  fundo.style.backgroundImage = "url('fundorosa2.jpg')";
}

botao.addEventListener("click", () => {
  esconderBotao();

  adicionarImg();

  adicionarFundo();
});
