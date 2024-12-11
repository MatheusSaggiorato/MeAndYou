document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");

  let currentIndex = 0;

  function updateCarousel() {
      const offset = -currentIndex * 100; // Move 100% da largura por vez
      carouselImages.style.transform = `translateX(${offset}%)`;
  }

  prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Voltar para o final se no início
      updateCarousel();
  });

  nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Voltar para o início se no final
      updateCarousel();
  });

  const counterElement = document.getElementById("counter");
  const startDate = new Date("2019-04-20T23:00:00");

  function updateCounter() {
      const now = new Date();
      const elapsedTime = now - startDate;

      const years = Math.floor(elapsedTime / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor((elapsedTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

      counterElement.textContent = `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
  }

  setInterval(updateCounter, 1000);
  updateCounter();
});