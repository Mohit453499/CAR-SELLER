
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        window.location.href = 'index.html'; 
    } 
});

function purchaseCar(carId) {
    alert(`You have purchased Car ${carId}`);
}


function seeMore(carId) {
    alert(`Details for Car ${carId}`);
}

const aboutModal = document.getElementById("aboutModal");
const contactModal = document.getElementById("contactModal");


const aboutUsBtn = document.getElementById("aboutUsBtn");
const contactUsBtn = document.getElementById("contactUsBtn");


const closeButtons = document.getElementsByClassName("close");


aboutUsBtn.onclick = function() {
    aboutModal.style.display = "block";
}


contactUsBtn.onclick = function() {
    contactModal.style.display = "block";
}


for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        aboutModal.style.display = "none";
        contactModal.style.display = "none";
    }
}


window.onclick = function(event) {
    if (event.target == aboutModal) {
        aboutModal.style.display = "none";
    }
    if (event.target == contactModal) {
        contactModal.style.display = "none";
    }
}