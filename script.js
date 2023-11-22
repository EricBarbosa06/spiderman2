document.addEventListener("DOMContentLoaded", function () {
 
    var storedUserData = localStorage.getItem("userData");

    if (storedUserData) {
        var userData = JSON.parse(storedUserData);
        updateHeader(userData);
    }
});

function updateHeader(userData) {
    var cadastroLink = document.getElementById("cadastroLink");

    if (cadastroLink) {
        cadastroLink.parentNode.removeChild(cadastroLink);

        var userInfoParagraph = document.createElement("p");
        userInfoParagraph.textContent = "Olá, " + userData.username + "!";
        cadastroLink.parentNode.appendChild(userInfoParagraph);
    }
}
var registrationForm = document.getElementById("registrationForm");
registrationForm.onsubmit = function (event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userData = {
        username: username,
        email: email,
        password: password
    };

   
    var userDataString = JSON.stringify(userData);

   
    localStorage.setItem('userData', userDataString);

    updateHeader(userData);

    closeModal();
};

$(document).ready(function(){
    $('.story-carousel').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    $('.milesmorales-carousel').slick({
        autoplay: false, 
        dots: true,
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>'
    });
});

var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");




function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}


function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}


document.getElementById("openModalBtn").onclick = openModal;


document.getElementById("closeModalBtn").onclick = closeModal;

window.onclick = function (event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const myobserver = new IntersectionObserver( (entries) => {
    entries.forEach ((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach ((element) => myobserver.observe (element))


