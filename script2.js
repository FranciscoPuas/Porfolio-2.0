const imageContainer = document.getElementById("imageContainer");
const randomImage = document.getElementById("randomImage");
const imageCaption = document.getElementById("imageCaption");
const imageBtn = document.getElementById("imageBtn");
const downloadBtn = document.getElementById("downloadBtn");

randomImage.classList.remove("active");
imageCaption.innerText = "Haz clic para obtener tu carta del día";

const cartasDelTarot = [
  {
    nombre: "El Mago",
    imagen: "img/mago.jpg",
    descripcion:
      "Hoy es un día para demostrar tus habilidades y poder. Te enfrentarás a desafíos con determinación y manifestarás tus objetivos con éxito.",
  },
  // Resto de las cartas del tarot...
];

imageBtn.addEventListener("click", mostrarCarta);

function mostrarCarta() {
  if (!randomImage.classList.contains("active")) {
    randomImage.classList.add("active");
    imageCaption.innerText = "";
  }

  const index = Math.floor(Math.random() * cartasDelTarot.length);
  const carta = cartasDelTarot[index];

  randomImage.style.opacity = 0;
  setTimeout(() => {
    randomImage.src = carta.imagen;
    imageCaption.innerText = carta.descripcion;
    randomImage.style.opacity = 1;
  }, 300);
  randomImage.style.display = "block";

  downloadBtn.disabled = false;
}

downloadBtn.addEventListener("click", () => {
  const doc = new jsPDF();
  const imgData = randomImage.src;

  doc.addImage(imgData, "JPEG", 20, 20, 170, 240);
  doc.save("carta-del-tarot.pdf");
});