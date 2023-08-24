
let menu = document.getElementById('menu');
let menuVisible = false; // Keep track of menu visibility state

function toggleMenu() {
    if (menuVisible) {
        closeMenu();
    } else {
        showMenu();
    }
    menuVisible = !menuVisible; // Toggle the menuVisible state
}

function showMenu() {
    menu.style.display = "flex";
}

function closeMenu() {
    menu.style.display = "none";
}

let shortDesc = document.getElementById('short-description');
let longDesc = document.getElementById('long-description');
let readMoreBtn = document.getElementById('more-about');
let isLongDescVisible = false; // Keep track of long description visibility state

function toggleDescription() {
    if (isLongDescVisible) {
        showShortDescription();
    } else {
        showLongDescription();
    }
    isLongDescVisible = !isLongDescVisible; // Toggle the isLongDescVisible state
}

function showShortDescription() {
    readMoreBtn.textContent = 'Show More';
    shortDesc.style.display = 'block';
    longDesc.style.display = "none";
}

function showLongDescription() {
    readMoreBtn.textContent = 'Show Less';
    shortDesc.style.display = 'none';
    longDesc.style.display = "block";
}

readMoreBtn.addEventListener('click', toggleDescription);
