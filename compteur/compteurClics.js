
let cpt = 0;

let compteur = document.getElementById('compteurClics');


let btn = document.getElementById('clic');
btn.addEventListener('click', function (ev) {

    compteur.textContent = cpt+=1;
})

let btnReset = document.getElementById('desactiver');
btnReset.addEventListener('click', function (ev) {
    cpt=0;
    compteur.textContent =cpt;
})

