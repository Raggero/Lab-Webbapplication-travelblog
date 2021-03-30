const elForm = document.querySelector('#formReg');
const elNamn = document.querySelector('#txtNamn');
const elKommentar = document.querySelector('#txtKommentar');
const elOutputNamn = document.querySelector('#outputNamn');
const elOutputKommentar = document.querySelector('#outputKommentar');
const elFeedbackKommentar = document.querySelector('#feedbackKommentar');

let index;

if(localStorage.getItem('index') >= 1){
    index= localStorage.getItem('index');
}else{
    index = 1;
}

function showNameAndComment(event){
    elFeedbackKommentar.innerHTML = '';

    if(checkNamnOchKommentar()){
        let namn = elNamn.value;
        localStorage.setItem('namn' + index, namn);
        let kommentar = elKommentar.value;
        localStorage.setItem('kommentar' + index, kommentar);

        elOutputNamn.textContent = namn
        elOutputKommentar.textContent =  kommentar

        index++;
        localStorage.setItem('index', index);
        location.reload();
    }

    event.preventDefault();
}

function checkNamnOchKommentar() {
    let namn =elNamn.value.length;
    let kommentar = elKommentar.value.length;

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

elForm.addEventListener('submit', showNameAndComment, false);

document.querySelector('#storageKommentar1').innerHTML = localStorage.getItem('kommentar1');
document.querySelector('#storageNamn1').innerHTML = localStorage.getItem('namn1');
document.querySelector('#storageKommentar2').innerHTML = localStorage.getItem('kommentar2');
document.querySelector('#storageNamn2').innerHTML = localStorage.getItem('namn2');
document.querySelector('#storageKommentar3').innerHTML = localStorage.getItem('kommentar3');
document.querySelector('#storageNamn3').innerHTML = localStorage.getItem('namn3');









