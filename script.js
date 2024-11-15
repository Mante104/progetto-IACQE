// Gestisce la selezione delle celle nel menu
document.addEventListener("DOMContentLoaded", function() {
    const cells = document.querySelectorAll('.index-menu td');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cells.forEach(c => c.classList.remove('selected'));
            cell.classList.add('selected');
        });
    });
});

// Gestisce il carosello di immagini e gli indicatori
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const indicators = document.querySelectorAll('.indicator');

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        indicators[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % images.length;

        images[currentIndex].classList.add('active');
        indicators[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 1500);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            if (index !== currentIndex) {
                images[currentIndex].classList.remove('active');
                indicators[currentIndex].classList.remove('active');

                currentIndex = index;

                images[currentIndex].classList.add('active');
                indicators[currentIndex].classList.add('active');
            }
        });
    });
    }, 1000);
});

// Funzione per mostrare il contenuto corrispondente al menu
function indexMenu(id) {
    const cells = document.querySelectorAll('[id$="-content"]');

    cells.forEach(cell => {
        cell.classList.remove('show');
    });

    const targetCell = document.querySelector(`#${id}-content`);
    if (targetCell) {
        targetCell.classList.add('show');
    }
}

// Esegue il clic iniziale sulla prima immagine al caricamento della pagina
window.onload = function() {
    document.getElementById("im1").click();
    setTimeout(function() {
        const header = document.getElementById('header');
        const imgBg = document.getElementById('image-bg');
        const img = document.getElementById('logo');

        header.style.height = '20vh';
        imgBg.style.height = '20vh';
        imgBg.style.padding = '10px';
        img.style.transform = 'scale(1)';
    }, 1000); //da cambiare in 1000, cioè 1s 

};


// Osserva la visibilità degli elementi per aggiungere l'effetto fade-in
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Scatta quando il 10% dell'elemento è visibile
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
