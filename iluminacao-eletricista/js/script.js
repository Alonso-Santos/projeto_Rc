// Número com DDI e DDD, só dígitos. Ex.: "5561999999999"
const WHATSAPP_NUMBER = "";

const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
const form = document.getElementById("form");
const msg = document.getElementById("form-msg");

const whatsappUrl = (texto) =>
  WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}` : null;

function setMenu(aberto) {
  menu.classList.toggle("open", aberto);
  toggle.setAttribute("aria-expanded", String(aberto));
  toggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
}
toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

document.getElementById("ano").textContent = new Date().getFullYear();

document.querySelectorAll("[data-whatsapp]").forEach((a) => {
  const url = whatsappUrl(a.dataset.whatsapp);
  if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
});

form.telefone.addEventListener("input", (e) => {
  const d = e.target.value.replace(/\D/g, "").slice(0, 11);
  e.target.value = d.length > 6
    ? `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`
    : d.length > 2 ? `(${d.slice(0, 2)}) ${d.slice(2)}` : d;
});

function mostrar(texto, tipo) { msg.textContent = texto; msg.className = tipo; }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const tel = form.telefone.value.replace(/\D/g, "");
  const texto = form.mensagem.value.trim();
  const erros = [
    [form.nome, nome.length < 2, "Informe seu nome."],
    [form.telefone, tel.length < 10, "Informe o telefone com DDD."],
    [form.mensagem, texto.length < 10, "Descreva o serviço em pelo menos 10 letras."],
  ];
  erros.forEach(([campo, invalido]) => campo.classList.toggle("invalido", invalido));
  const primeiro = erros.find(([, invalido]) => invalido);
  if (primeiro) { mostrar(primeiro[2], "erro"); primeiro[0].focus(); return; }

  const url = whatsappUrl(`Olá! Meu nome é ${nome} (${form.telefone.value}). ${texto}`);
  if (!url) { mostrar("O WhatsApp ainda não foi configurado neste site.", "erro"); return; }
  window.open(url, "_blank", "noopener");
  mostrar("Pedido pronto! Conclua o envio no WhatsApp.", "ok");
  form.reset();
});
