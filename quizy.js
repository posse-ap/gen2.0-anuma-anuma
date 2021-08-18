'use strict';

const button001 = document.getElementById("0-0-1");
const button002 = document.getElementById("0-0-2");
const button003 = document.getElementById("0-0-3");

button001.addEventListener('click', () => {
        button001.classList.add('succeeded');
        document.getElementById('0-d').style.display = 'block'
        document.getElementById('quiz-reslt-title-failed').style.display = 'none'

});

button002.addEventListener('click', () => {
    if (true) {
    button002.classList.add('failed')
    document.getElementById('0-d').style.display = 'block'
    document.getElementById('quiz-reslt-title-succeeded').style.display = 'none'
    }
});

button003.addEventListener('click', () => {
    if (true) {
    button003.classList.add('failed')
    document.getElementById('0-d').style.display = 'block'
    document.getElementById('quiz-reslt-title-succeeded').style.display = 'none'
    }
});





window.onload = function() {
    document.getElementById('0-d').style.display = 'none'
}

