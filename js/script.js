//INSERIMENTO IMMAGINI IN UN ARRAY
const images = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp','./img/05.webp'];

// DICHIARAZIONE VARIABILI
let imgElement = document.querySelector('.image');
let imgContent = "";

//CICLO FOR PER INSERIRE LE IMMAGINI ALL'INTERNO DEL CONTENITORE HTML
for (let i = 0; i < images.length; i++) {

    let currentImg = images[i];
    imgContent += `<div class="imgElement"><img src="${currentImg}" /></div>`;
}

//VISUALIZZO LE IMMAGINI IN HTML
imgElement.innerHTML = imgContent;

//INSERISCO ISTRUZIONI PER FAR SCORRERE LE IMMAGINI PREMENDO SUI PULSANTI

let allImg = document.getElementsByClassName('imgElement');
let active_element = 0;

//AGGIUNGO UN ELEMENTO PER OGNI INDICE DELL'ARRAY
allImg[active_element].classList.add('active');

//ASSEGNO UNA VARIABILE AI BOTTONI IN HTML
let backBtn = document.querySelector('.back');
let goBtn = document.querySelector('.go');

//ISTRUZIONI AL CLICK SUL BOTTONE
goBtn.addEventListener('click', function() {

    //RIMUOVO LA CLASSE ACTIVE ALL'IMG PRECEDENTE
    if (active_element < (images.length - 1)) {
        allImg[active_element].classList.remove('active');

        //INCREMENTO INDICE DELL'ARRAY PER PASSARE ALL'IMG SUCCESSIVA
        active_element++;

        //APPLICO LA CLASSE ACTIVE ALL'IMG
        allImg[active_element].classList.add('active');
    }
} )