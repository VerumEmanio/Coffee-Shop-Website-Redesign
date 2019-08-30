
document.querySelector('.home').addEventListener('click', function() { // Do these lines violate DRY?
    window.open('index.html');
});

document.querySelector('.menu').addEventListener('click', function() {
    window.open('menu.html');
});

document.querySelector('.events').addEventListener('click', function() {
    window.open('eventsIndex.html');
});

document.querySelector('.about').addEventListener('click', function() {
    window.open('about.html');
});