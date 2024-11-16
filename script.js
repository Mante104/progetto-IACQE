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

        function showPrevImage() {
            images[currentIndex].classList.remove('active');
            indicators[currentIndex].classList.remove('active');

            currentIndex = (currentIndex - 1 + images.length) % images.length;

            images[currentIndex].classList.add('active');
            indicators[currentIndex].classList.add('active');
        }

        setInterval(showNextImage, 3500);

        // Funzione per frecce
        document.querySelector('.left-arrow').addEventListener('click', showPrevImage);
        document.querySelector('.right-arrow').addEventListener('click', showNextImage);
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
    document.body.classList.add('no-scroll');

    document.getElementById("im1").click();
    setTimeout(function() {
        const header = document.getElementById('header');
        const imgBg = document.getElementById('image-bg');
        const img = document.getElementById('logo');

        header.style.height = '20vh';
        imgBg.style.height = '20vh';
        imgBg.style.padding = '10px';
        img.style.transform = 'scale(1)';

        // Riabilita lo scrolling
        document.body.classList.remove('no-scroll');
    }, 1000); // 1s

    var map = L.map('map', {
        zoomControl: false
    }).setView([45.31036932338235, 9.512629269714429], 17);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a tabindex="-1" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var customIcon = L.icon({
        iconUrl: 'marker.png',
        iconSize: [32, 40], 
        iconAnchor: [16, 20], 
        popupAnchor: [0, -32] 
    });

    var marker = L.marker([45.31036932338235, 9.512629269714429], { icon: customIcon }).addTo(map);
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


let canCreateMessage = true;

  function createMessageBlock(id) {
      if (!canCreateMessage) return null;
      canCreateMessage = false;
  
      let div = document.createElement('div');
      div.className = 'mes';
      div.id = id;
      document.body.appendChild(div);
  
      setTimeout(() => {
          canCreateMessage = true;
      }, 500);
  
      return div;
  }
  
  function copyText(content) {
    var text = content;
    navigator.clipboard.writeText(text).then(function() {
        mes(text + "<br> copiato negli appunti", "mes");
    }, function(err) {
        alert("Errore nel copiare il testo: " + err);
    });
}

function mes(text, id){
    const div = createMessageBlock(id);

    div.innerHTML = text;
    div.style.display = 'block';
    div.style.opacity = 0;
    div.style.bottom = "0px";
    div.style.borderRadius = '10px';
    div.style.transition = "opacity 0.5s, bottom 0.5s";

    setTimeout(() => {
        div.style.opacity = 1;
        div.style.bottom = "40px";
    }, 100);

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.bottom = "60px";
    }, 900);

    setTimeout(() => {
        div.style.display = 'none';
        div.style.bottom = "0px";
    }, 1400);
}


document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            } else {
                entry.target.classList.remove('animated');
            }
        });
    });

    observer.observe(document.querySelector('.card'));
});


function biglietto(imgSrc) {
    // Crea il contenitore del biglietto
    const biglietto = document.createElement('div');
    biglietto.id = 'biglietto';
    biglietto.style.position = 'fixed';
    biglietto.style.top = '0';
    biglietto.style.left = '0';
    biglietto.style.width = '100%';
    biglietto.style.height = '100%';
    biglietto.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    biglietto.style.backdropFilter = 'blur(10px)';
    biglietto.style.display = 'flex';
    biglietto.style.justifyContent = 'center';
    biglietto.style.alignItems = 'center';
    biglietto.style.zIndex = '1000';
    biglietto.style.animation = 'slideUp 0.3s ease-out';

    // Crea l'immagine al centro
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';
    img.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    img.style.borderRadius = '10px';

    // Aggiunge l'immagine al contenitore del biglietto
    biglietto.appendChild(img);

    // Aggiunge il contenitore del biglietto al body
    document.body.appendChild(biglietto);

    // Aggiunge un listener per rimuovere il biglietto quando viene cliccato
    biglietto.addEventListener('click', function() {
        document.body.removeChild(biglietto);
    });
}

function rimuoviBiglietto() {
    const biglietto = document.getElementById('biglietto');
    if (biglietto) {
        document.body.removeChild(biglietto);
    }
}





