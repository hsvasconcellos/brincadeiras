var botao = document.querySelector(".conteudo");
var caixa = document.querySelector(".box");

function esconderBotao() {
  botao.classList.toggle("hide");
}

function adicionarImg() {
  caixa.style.backgroundImage = "url('photo_2023-04-13_20-39-40.jpg')";
  caixa.style.boxShadow = "1px 1px 1px black";
}

botao.addEventListener("click", () => {
  esconderBotao();

  adicionarImg();
});
