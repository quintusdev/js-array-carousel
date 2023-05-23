// DICHIARAZIONE VARIABILI
let imgElement = document.querySelector('.image');
let imgContent = "";

//INSERIMENTO IMMAGINI IN UN ARRAY
const images = ['../img/01.webp', '../img/02.webp', '../img/03.webp', '../img/04.webp','../img/05.webp'];

//CICLO FOR PER INSERIRE LE IMMAGINI ALL'INTERNO DEL CONTENITORE HTML
for (let i = 0; i < images.length; i++) {
    let currentImg = images[i];

    imgContent += '<div class="image"><img src="${currentImg}"></div>';
}

//VISUALIZZO LE IMMAGINI IN HTML
imgElement.innerHTML = imgContent;

//INSERISCO ISTRUZIONI PER FAR SCORRERE LE IMMAGINI PREMENDO SUI PULSANTI

