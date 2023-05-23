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

//ISTRUZIONI AL CLICK SUL BOTTONE AVANTI

goBtn.addEventListener('click', function () {
    //RIMUOVO LA CLASSE ACTIVE DALL'IMG CORRENTE
    allImg[active_element].classList.remove('active');
  
    //INCREMENTO L'INDICE DELL'ARRAY PER PASSARE ALL'IMG SUCCESSIVA

    //mi assicuro che l'indice rimanga compreso tra 0 e la lunghezza dell'array delle immagini.
    //Se l'indice è negativo, assicuro che venga riportato all'intervallo corretto, tornando indietro nell'array delle immagini.
    active_element = (active_element + 1) % images.length;
  
    //APPLICO LA CLASSE ACTIVE ALL'IMG SUCCESSIVA
    allImg[active_element].classList.add('active');
});

  
  //ISTRUZIONI AL CLICK SUL BOTTONE INDIETRO

  backBtn.addEventListener('click', function () {
    //RIMUOVO LA CLASSE ACTIVE DALL'IMG CORRENTE
    allImg[active_element].classList.remove('active');
  
    //DECREMENTO L'INDICE DELL'ARRAY PER PASSARE ALL'IMG PRECEDENTE
    active_element = (active_element - 1 + images.length) % images.length;
  
    //APPLICO LA CLASSE ACTIVE ALL'IMG PRECEDENTE
    allImg[active_element].classList.add('active');
});