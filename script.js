document.addEventListener("DOMContentLoaded", function() {
    // Per il menu index-menu
    const indexCells = document.querySelectorAll('.index-menu td');
    indexCells.forEach(cell => {
        cell.addEventListener('click', () => {
            // Rimuove la classe "selected" da tutte le celle
            indexCells.forEach(c => c.classList.remove('selected'));

            // Aggiunge la classe "selected" alla cella cliccata
            cell.classList.add('selected');

            // Trova e aggiorna la controparte "-bg"
            const bgId = `${cell.id}-bg`;
            const bgCell = document.getElementById(bgId);
            if (bgCell) {
                // Rimuove la classe "active" da tutte le celle "bg"
                document.querySelectorAll('.burger-table td').forEach(c => c.classList.remove('active'));

                // Aggiunge la classe "active" alla cella "-bg" corrispondente
                bgCell.classList.add('active');
            }
        });
    });

    // Per il burger-table
    const burgerCells = document.querySelectorAll('.burger-table td');
    burgerCells.forEach(cell => {
        cell.addEventListener('click', () => {
            // Rimuove la classe "active" da tutte le celle
            burgerCells.forEach(c => c.classList.remove('active'));

            // Aggiunge la classe "active" alla cella cliccata
            cell.classList.add('active');

            // Trova e aggiorna la controparte senza "-bg"
            const normalId = cell.id.replace('-bg', '');
            const normalCell = document.getElementById(normalId);
            if (normalCell) {
                // Rimuove la classe "selected" da tutte le celle "normali"
                indexCells.forEach(c => c.classList.remove('selected'));

                // Aggiunge la classe "selected" alla cella senza "-bg" corrispondente
                normalCell.classList.add('selected');
            }
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

    const indexMenuElement = document.querySelector('#index-menu');
    if (indexMenuElement) {
        const rect = indexMenuElement.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        
        if (!isInView) {
            scrollTo(0, 0);
        }
    }
}


function indexMenuBg(id) {
    const cells = document.querySelectorAll('[id$="-content"]');

    cells.forEach(cell => {
        cell.classList.remove('show');
    });

    const targetCell = document.querySelector(`#${id.replace('-bg', '')}-content`);
    if (targetCell) {
        targetCell.classList.add('show');
    }

    const burgerMenuElement = document.querySelector('#burger-menu');
    if (burgerMenuElement) {
        const rect = burgerMenuElement.getBoundingClientRect();
        const isInView = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
        
        if (!isInView) {
            scrollTo(0, 0);
        }
    }
}


// Esegue il clic iniziale sulla prima immagine al caricamento della pagina
window.onload = function() {
    document.body.classList.add('no-scroll');

    document.getElementById("im1").click();
    function adjustHeight() {
        const header = document.getElementById('header');
        const imgBg = document.getElementById('image-bg');
        const img = document.getElementById('logo');
        const burger = document.querySelector('.burger');
    
        let heightValue = window.innerWidth < 800 ? '10vh' : '20vh';
    
        header.style.height = heightValue;
        imgBg.style.height = heightValue;
        imgBg.style.padding = '10px';
        img.style.transform = 'scale(1)';
    
        if (burger) {
            setTimeout(() => {
                burger.style.transform = 'translateX(0)'; // Anima verso la posizione iniziale
                burger.style.opacity = '1';
            }, 600);
        }
    }    
    
    // Initial adjustment
    setTimeout(adjustHeight, 1000); // 1s
    
    // Event listener for window resize
    window.addEventListener('resize', adjustHeight);
    
    // Riabilita lo scrolling
    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, 1000);

    var map = L.map('map', {
        dragging: false,
        zoomControl: false,
        scrollWheelZoom: false,
        touchZoom: false,
        doubleClickZoom: false
    }).setView([45.31036932338235, 9.512629269714429], 16);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a tabindex="-1" href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Reload map on window resize
    window.addEventListener('resize', function() {
        map.invalidateSize();
    });
    

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
    div.style.top = "0px";
    div.style.borderRadius = '10px';
    div.style.transition = "opacity 0.5s, top 0.5s";

    setTimeout(() => {
        div.style.opacity = 1;
        div.style.top = "40px";
    }, 100);

    setTimeout(() => {
        div.style.opacity = 0;
        div.style.top = "60px";
    }, 900);

    setTimeout(() => {
        div.style.display = 'none';
        div.style.top = "0px";
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


function closeMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const burgerInput = document.getElementById("burger");
    burgerMenu.style.width = "0";
    burgerMenu.style.display = "none";
    burgerMenu.style.opacity = "0";
    document.body.style.overflow = "auto";

    if(burgerInput.checked){
        burgerInput.click();
    }
}


function openMenu() {
    const burgerMenu = document.getElementById("burger-menu");
    const burgerInput = document.getElementById("burger");

    if (burgerInput.checked) {
        burgerMenu.style.width = "100%";
        burgerMenu.style.display = "block";
        burgerMenu.style.opacity = "1";
        document.body.style.overflow = "hidden";
    } else {
        closeMenu();
    }
}



