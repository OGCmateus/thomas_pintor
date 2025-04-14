function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  const overlay = mobileMenu.querySelector("div:first-child");
  const drawer = mobileMenu.querySelector("div:nth-child(2)");

  const isHidden = mobileMenu.classList.contains("hidden");

  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    setTimeout(() => {
      overlay.classList.remove("opacity-0", "pointer-events-none");
      overlay.classList.add("opacity-100");

      drawer.classList.remove("translate-x-full");
      drawer.classList.add("translate-x-0");
    }, 10);
  } else {
    overlay.classList.remove("opacity-100");
    overlay.classList.add("opacity-0", "pointer-events-none");

    drawer.classList.remove("translate-x-0");
    drawer.classList.add("translate-x-full");

    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const carrosseis = document.querySelectorAll(".servicoSwiper");
  carrosseis.forEach(carrossel => {
    new Swiper(carrossel, {
      loop: true,
      pagination: {
        el: carrossel.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  const form = document.getElementById("trabalheForm");
  const experiencia = document.getElementById("experiencia");
  const detalheExperiencia = document.getElementById("detalheExperiencia");

  experiencia.addEventListener("change", () => {
    if (experiencia.value === "Sim") {
      detalheExperiencia.classList.remove("hidden");
    } else {
      detalheExperiencia.classList.add("hidden");
      detalheExperiencia.value = "";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const cidade = document.getElementById("cidade").value;
    const exp = experiencia.value;
    const detalhes = detalheExperiencia.value;
    const funcao = document.getElementById("funcao").value;
    const transporte = document.getElementById("transporte").value;

    let mensagem = `Olá, gostaria de me candidatar a uma vaga.\n\n`;
    mensagem += `🧑 Nome: ${nome}\n🏙️ Cidade: ${cidade}\n📌 Função: ${funcao}\n🚗 Tem transporte: ${transporte}\n📚 Experiência: ${exp}`;
    if (exp === "Sim" && detalhes) {
      mensagem += `\n📝 Detalhes: ${detalhes}`;
    }

    const numero = "5515996602182";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  });

  // Rolagem suave para âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerHeight = document.querySelector("header").offsetHeight;
        window.scrollTo({
          top: target.offsetTop - headerHeight,
          behavior: "smooth"
        });
      }
    });
  });
});
