// My Profile Dropdown //
function toggleDropdownTwo() {
    var dropdown = document.getElementById("dropdownTwo");
    dropdown.classList.toggle("dropdown-one-show-two");
}
// Close the dropdown if the clicked area is outside of it //
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
document.getElementById("dropdownTwo").addEventListener('click', function(event) {
    event.stopPropagation();
});

// Change Icon Color On Click //

document.addEventListener('DOMContentLoaded', (event) => {
    const iconClick = document.querySelector('#starIcon');
    
    iconClick.addEventListener('click', function() {
        this.classList.toggle('gold');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const iconClick2 = document.querySelector('#starIcon2');
    
    iconClick2.addEventListener('click', function() {
        this.classList.toggle('gold');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const iconClick2 = document.querySelector('#starIcon3');
    
    iconClick2.addEventListener('click', function() {
        this.classList.toggle('gold');
    });
});

// Overview Tabs //

let tabs = document.querySelectorAll(".overview-content a");
let tabsArray = Array.from(tabs);

let contentDivs = document.querySelectorAll(".overview-box-container > div");
let contentArray = Array.from(contentDivs);

tabsArray.forEach((element) => {
    element.addEventListener("click" , function (event) {
        tabsArray.forEach((element) => {
            element.classList.remove("active-meeting");
        });
        event.currentTarget.classList.add("active-meeting");
        contentDivs.forEach((divs) => {
            divs.style.display = "none"
        });
        document.querySelector(event.currentTarget.dataset.content).style.display = "flex";
    });
});

document.querySelectorAll(".overview-content a").forEach((element) => {
    element.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelectorAll(".overview-content a").forEach((el) => {
            el.classList.remove("active-meeting");
        });
        event.currentTarget.classList.add("active-meeting");
        if (event.currentTarget.textContent.trim() === "All") {
            document.querySelectorAll(".overview-box-container > div").forEach((div) => {
                div.style.display = "flex";
            });
        } else {
            document.querySelectorAll(".overview-box-container > div").forEach((div) => {
                div.style.display = "none";
            });
            document.querySelector(event.currentTarget.dataset.content).style.display = "flex";
        }
    });
});