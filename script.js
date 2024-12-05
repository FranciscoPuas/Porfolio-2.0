// switch para cambiar el tema
const themeSwitch = document.getElementById("themeSwitch");

// confirmacion para salvar tema seleccionado cuando se refresque la pagina
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeSwitch.checked = true;
}

// controlador para cambiar el tema al hacer click
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark");
  }
});

// animacion del scroll
document.addEventListener("DOMContentLoaded", function () {
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".animate__animated");
    elements.forEach((element) => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight - 100) {
        if (!element.classList.contains("animate__fadeIn")) {
          element.classList.add("animate__fadeIn");
        }
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll();
});
