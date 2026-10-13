// Personalize os dados abaixo antes de publicar o site.
const CONFIG = {
  // Digite o WhatsApp com código do país e DDD, somente números.
  // Exemplo: "5511999999999" (substitua pelo número real da clínica).
  whatsapp: "",
  mensagem: "Olá! Gostaria de saber mais sobre os atendimentos da Florescer Fisioterapia."
};

const whatsappLink = document.getElementById("whatsapp-link");
if (whatsappLink) {
  if (CONFIG.whatsapp.trim()) {
    whatsappLink.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;
  } else {
    whatsappLink.href = "https://wa.me/";
    whatsappLink.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Configure o número de WhatsApp da clínica no arquivo script.js antes de publicar o site.");
    });
  }
}

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}
