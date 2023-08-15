



const girisBasligi = document.getElementById("count-el");
const oncekiGirisler = document.getElementById("save-el");

let ilkSayi = 10;

function arttir(){
    ilkSayi = ilkSayi + 1;
    girisBasligi.innerHTML = ilkSayi;
}

function kaydet(){
    oncekiGirisler.innerHTML = oncekiGirisler.innerHTML + " - " + ilkSayi;
    ilkSayi = 0;
    girisBasligi.innerHTML = ilkSayi;
}

