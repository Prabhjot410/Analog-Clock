 setInterval(setClock, 1000);

    const hrHand = document.querySelector('[data-hour-hand]');
    const secHand = document.querySelector('[data-sec-hand]');
    const minHand = document.querySelector('[data-min-hand]');

function setClock() {
    const crrDate = new Date();
    const SecRatio = crrDate.getSeconds()/60;
    const minRatio = (SecRatio + crrDate.getMinutes())/60;
    const hrsRatio = (minRatio + crrDate.getHours())/12;

    setRotation(secHand,SecRatio);
    setRotation(minHand,minRatio);
    setRotation(hrHand,hrsRatio);
}



function setRotation(elements, rotationRatio) {
    elements.style.setProperty('--rotation',rotationRatio * 360);
}

setClock();