let menuIcon = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar ul");

menuIcon.onclick = function () {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
};

document.addEventListener("click", function (event) {
    if (!navBar.contains(event.target) && !menuIcon.contains(event.target)) {
        navBar.classList.remove("active");
        menuIcon.classList.remove("bx-x");
    };
});

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar ul');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-600px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false
);
    
// Owl Carousel //
$('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 2500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1300:{
            items:1
        },
        1400:{
            items:2
        },
    }
});

// Section Four Tabs //
let sectionFourTabs = document.querySelectorAll(".sectionFourTabs li");
let sectionFourTabsArray = Array.from(sectionFourTabs);

let sectionFourDivs = document.querySelectorAll(".section-four-content > div");
let sectionFourDivsArray = Array.from(sectionFourDivs);

const sectionFourButton = document.querySelector(".section-four-card.two h3 span");

sectionFourTabs.forEach((ele) => {
    ele.addEventListener("click" , function (e) {
        sectionFourTabs.forEach((ele) => {
            ele.classList.remove("sectionFourActive");
        });
        e.currentTarget.classList.add("sectionFourActive");
        sectionFourDivs.forEach((div) => {
            div.style.display = "none";
        });
        let price = (e.currentTarget.dataset.content === ".featuresOne") ? "5.00" : "50.00";
        sectionFourButton.innerText = price;
        document.querySelector(e.currentTarget.dataset.content).style.display = "block";
    });
});

// Scroll To Top Button //

let scrollToTopBtn = document.querySelector(".scrollToTop");

window.onscroll = function () {
    if (this.scrollY >= 250) {
        scrollToTopBtn.classList.add("showBtn");
    }
    else {
        scrollToTopBtn.classList.remove("showBtn");
    };
};

scrollToTopBtn.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth",
    });
};