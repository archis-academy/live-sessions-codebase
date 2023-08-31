const yolcuSayisiBasligi = document.getElementById("count-el");
const kaydetmeElemani =  document.getElementById("save-el");
const kaydetButonu = document.getElementById("save-btn");

let initialEntries = 0;

function arttir (){
    initialEntries += 1;
    yolcuSayisiBasligi.innerHTML = initialEntries;
}

function kaydet(){
    kaydetmeElemani.innerHTML = kaydetmeElemani.innerHTML + " - " + initialEntries;
    initialEntries = 0;
    yolcuSayisiBasligi.innerHTML = initialEntries;

    kaydetButonu.style.backgroundColor = "#f00"
}