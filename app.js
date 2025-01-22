// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

//seleções
const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");
const modalContent = document.querySelector(".modal-container"); // Seleciona a div onde você quer colocar o conteúdo

//evento de click para colocar a classe overlay
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
  atualizarConteudoModal();
});
//evento para retirar class overlay do modal e fechar
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});

function atualizarConteudoModal() {
  if (modal.classList.contains("open-modal")) {
    modalContent.textContent = "Este é o novo conteúdo do modal!"; // Substitua por seu conteúdo desejado
  }
}
