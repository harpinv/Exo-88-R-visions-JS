let valeur = [];
let nombre = document.getElementById('valide');
let body = document.querySelector('body');
let result = document.createElement('div');
body.append(result);
let div = document.createElement('div');
body.append(div);

nombre.addEventListener('click', function () {
    valeur.push(document.getElementById('entree').value);

    if(valeur.length >= 10) {
        let alea = Math.floor(Math.random() * valeur.length);
        result.innerHTML = valeur[alea];
    }

    if(valeur.length >= 5) {
        div.innerHTML = valeur[4];
    }

    if(valeur.length < 10) {
        result.innerHTML = "entrez au moins 10 valeurs";
    }
})

let affiche = document.getElementById('affiche');
let totalAffiche = document.getElementById('totalAffiche');
let efface = document.getElementById('efface');
let totalefface = document.getElementById('totalEfface');
let tableau = document.createElement('div');
body.append(tableau);

affiche.addEventListener('click', function () {
    let alea = Math.floor(Math.random() * valeur.length);
    let para = document.createElement('p');
    para.innerHTML += valeur[alea];
    tableau.append(para);
})

totalAffiche.addEventListener('click', function () {
    for(let i = 0; i < valeur.length; i++) {
        let para = document.createElement('p');
        para.innerHTML += i + "-" + valeur[i];
        tableau.append(para);
    }
})

efface.addEventListener('click', function () {
    valeur.pop();
})

totalefface.addEventListener('click', function () {
    for(let i = 0; i <= valeur.length + i; i++) {
        valeur.pop();
    }
})