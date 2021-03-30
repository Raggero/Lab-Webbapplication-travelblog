const elFormPeru = document.querySelector('#formRegPeru');
const elNamnPeru = document.querySelector('#txtNamnPeru');
const elKommentarPeru = document.querySelector('#txtKommentarPeru');
const elOutputNamn = document.querySelector('#outputNamn');
const elOutputKommentar = document.querySelector('#outputKommentar');
const elFeedbackKommentar = document.querySelector('#feedbackKommentar');

let indexPeru;

if(localStorage.getItem('indexPeru') >= 1){
    indexPeru= localStorage.getItem('indexPeru');
}else{
    indexPeru = 1;
}

function showNameAndCommentPeru(event){
    elFeedbackKommentar.innerHTML = '';

    if(checkNamnOchKommentar()){
        let namn = elNamnPeru.value;
        localStorage.setItem('namnPeru' + indexPeru, namn);
        let kommentar = elKommentarPeru.value;
        localStorage.setItem('kommentarPeru' + indexPeru, kommentar);

        elOutputNamn.textContent = namn
        elOutputKommentar.textContent =  kommentar

        indexPeru++;
        localStorage.setItem('indexPeru', indexPeru);
        location.reload();
    }
    event.preventDefault();
}

function checkNamnOchKommentar() {

    let namn =elNamnPeru.value.length;
    let kommentar = elKommentarPeru.value.length;

    if (namn < 1 && kommentar <1 ) {
        elFeedbackKommentar.innerHTML = 'Du måste skriva både namn och kommentar för att kommentera!';
        return false;
    }else if(namn < 1){
        elFeedbackKommentar.innerHTML = 'Du måste skriva ett namn för att kommentera!';
        return false;
    }else if(kommentar < 1){
        elFeedbackKommentar.innerHTML = 'Du kan inte lägga in en tom kommentar!';
        return false;
    }
    return true;
}

elFormPeru.addEventListener('submit', showNameAndCommentPeru, false);

document.querySelector('#storageKommentarPeru1').innerHTML = localStorage.getItem('kommentarPeru1');
document.querySelector('#storageNamnPeru1').innerHTML = localStorage.getItem('namnPeru1');
document.querySelector('#storageKommentarPeru2').innerHTML = localStorage.getItem('kommentarPeru2');
document.querySelector('#storageNamnPeru2').innerHTML = localStorage.getItem('namnPeru2');
document.querySelector('#storageKommentarPeru3').innerHTML = localStorage.getItem('kommentarPeru3');
document.querySelector('#storageNamnPeru3').innerHTML = localStorage.getItem('namnPeru3');
