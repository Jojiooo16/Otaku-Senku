// ================= MODO ESCURO =================
const botaoTema = document.getElementById("meu-switch");
const htmlElement = document.documentElement;
 
if (localStorage.getItem("tema") === "dark_mode") {
  htmlElement.classList.add("dark_mode");
  botaoTema.checked = true; // mantém o switch alinhado com o tema salvo
}
 
botaoTema.addEventListener("change", () => {
  htmlElement.classList.toggle("dark_mode", botaoTema.checked);
  localStorage.setItem("tema", botaoTema.checked ? "dark_mode" : "light");
});
 
// ================= MODAL =================
const modal = document.getElementById("cadastro");
const btnFechar = document.getElementById("fecharModal");
 
// abre pelos dois links (desktop e menu mobile)
document.querySelectorAll(".abrir-modal").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();                       // não deixa o "#" subir a página
    document.body.classList.add("modal-aberto"); // desfoca o resto do site
    modal.showModal();
  });
});
 
// botão X
btnFechar.addEventListener("click", () => modal.close());
 
// clicar fora do modal fecha
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  const dentro =
    rect.top <= event.clientY && event.clientY <= rect.bottom &&
    rect.left <= event.clientX && event.clientX <= rect.right;
  if (!dentro) modal.close();
});
 
// qualquer jeito de fechar (X, Esc, clique fora, Cadastrar) tira o desfoque
modal.addEventListener("close", () => {
  document.body.classList.remove("modal-aberto");
});
 
