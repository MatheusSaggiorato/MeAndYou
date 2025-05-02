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
        const startDate = new Date(2019, 3, 20, 22, 0, 0); // 20/04/2019 22h

        function updateCounter() {
        const now = new Date();

        let years = now.getFullYear() - startDate.getFullYear();
        let months = now.getMonth() - startDate.getMonth();
        let days = now.getDate() - startDate.getDate();
        let hours = now.getHours() - startDate.getHours();
        let minutes = now.getMinutes() - startDate.getMinutes();
        let seconds = now.getSeconds() - startDate.getSeconds();

        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }

        if (minutes < 0) {
            minutes += 60;
            hours--;
        }

        if (hours < 0) {
            hours += 24;
            days--;
        }

        if (days < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
            days += prevMonth;
            months--;
        }

        if (months < 0) {
            months += 12;
            years--;
        }

        const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

        counterElement.textContent = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }

    setInterval(updateCounter, 1000);
    updateCounter();
});

const music1 = new Audio("./musicas/sonho-de-amor.mp3");
const music2 = new Audio("./musicas/por-voce.mp3");
const music3 = new Audio("./musicas/heaven.mp3");

function playMusic(audio, startTime, duration, callback) {
    audio.currentTime = startTime;
    audio.play();
    setTimeout(() => {
        audio.pause();
        if (callback)
            callback();
    }, duration * 1000)
}

document.getElementById("play-button").addEventListener("click", () => {
    playMusic(music1, 73, 33, () => {
        playMusic(music2, 5, 115, () => {
            playMusic(music3, 15, 256)
        })
    })
})
