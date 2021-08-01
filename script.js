const progressBar = document.querySelector('#progress');
const toggler = document.querySelector('.navbar-toggler');
let togglerState = false;

toggler.addEventListener('click', () => {
    togglerState = !togglerState;
    if (togglerState) {
        toggler.style.marginBottom = '0.5rem';
    } else {
        toggler.style.marginBottom = '0';
    }
})

document.onscroll = () => {
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%';
}

document.body.onload = () => {
    const distanceTop = window.pageYOffset;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    progressBar.style.width = (distanceTop / pageHeight) * 100 + '%' ;
}