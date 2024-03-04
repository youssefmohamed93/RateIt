// My Profile Dropdown //
function toggleDropdownTwo() {
    var dropdown = document.getElementById("dropdownTwo");
    dropdown.classList.toggle("dropdown-one-show-two");
}

window.onclick = function(event) {
    if (!event.target.matches('.overview-myprofile, .overview-myprofile *')) { 
        var dropdowns = document.getElementsByClassName("dropdown-myprofile");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('dropdown-one-show-two')) {
                openDropdown.classList.remove('dropdown-one-show-two');
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    const chevron = document.querySelector('.bx-chevron-down');
    const aboutContent = document.querySelector('.about-content');

    chevron.addEventListener('click', function (event) {
        aboutContent.classList.toggle('active');
        chevron.classList.toggle('bx-chevron-up');
        chevron.classList.toggle('bx-chevron-down');
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        const isClickInside = aboutContent.contains(event.target);

        if (!isClickInside && aboutContent.classList.contains('active')) {
            aboutContent.classList.remove('active');
            chevron.classList.remove('bx-chevron-up');
            chevron.classList.add('bx-chevron-down');
        }
    });
});

let tabs = document.querySelectorAll(".profile-content ul li a");
let tabsArray = Array.from(tabs);

let contentDivs = document.querySelectorAll(".profile-ul-content > div");
let contentArray = Array.from(contentDivs);

contentArray.forEach((div) => {
    div.style.display = "none";
});

// Show the "About" section by default //
document.querySelector('.oneP').style.display = "block";

// Mark the "About" tab as active by default //
tabsArray.forEach((tab) => {
    if(tab.dataset.content === ".oneP") {
        tab.classList.add("active-btn");
    }
});

// Add click event listener to tabs
tabsArray.forEach((element) => {
    element.addEventListener("click", function (event) {
        // Remove "active-btn" class from all tabs
        tabsArray.forEach((element) => {
            element.classList.remove("active-btn");
        });
        // Add "active-btn" class to the current tab
        event.currentTarget.classList.add("active-btn");
        // Hide all content divs
        contentDivs.forEach((divs) => {
            divs.style.display = "none";
        });
        // Show the current div
        document.querySelector(event.currentTarget.dataset.content).style.display = "block";
    });
});