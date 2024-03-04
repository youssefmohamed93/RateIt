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
            };
        };
    };
};
document.addEventListener('DOMContentLoaded', function() {
    var dropdownIcon = document.querySelector('.overview-card-details-icon');
    var dropdownContent = document.querySelector('.dropdown-content');
    function toggleDropdown(event) {
        event.stopPropagation();
        if (dropdownContent.style.display === "none" || dropdownContent.style.display === '') {
            dropdownContent.style.display = "block";
        } else {
            dropdownContent.style.display = "none";
        };
    };
    dropdownIcon.addEventListener('click', toggleDropdown);
    document.addEventListener('click', function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        };
    });
    dropdownContent.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        var popup = document.getElementById('deletePopup');
        var clickInsidePopup = popup.contains(e.target);
        var clickOnIcon = e.target.classList.contains('bx') || e.target.classList.contains('bx-trash');

        if (!clickInsidePopup && !clickOnIcon && popup.style.display === 'block') {
            hidePopup();
        }
    });
});

function showPopup(element) {
    var popup = document.getElementById("deletePopup");
    popup.style.display = "block";
    event.stopPropagation();
    popup.elementToDelete = element.closest('.overview-card');
}

function hidePopup() {
    var popup = document.getElementById("deletePopup");
    popup.style.display = "none";
}

function confirmDelete() {
    var popup = document.getElementById("deletePopup");
    if (popup.elementToDelete) {
        popup.elementToDelete.remove();
    }
    hidePopup();
}
document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('click', function (e) {
        var popup = document.getElementById('deletePopup');
        var popupContent = document.querySelector('.popup-content');
        if (popup.style.display === 'block') {
            var clickInsidePopupContent = popupContent.contains(e.target);
            var clickOnIcon = e.target.classList.contains('bx') || e.target.classList.contains('bx-trash');

            if (!clickInsidePopupContent && !clickOnIcon) {
                hidePopup();
            }
        }
    });
});
// The rest of your JavaScript functions (showPopup, hidePopup, confirmDelete) can remain unchanged.

document.getElementById('searchInput').addEventListener('keyup', function() {
    let searchQuery = this.value.toLowerCase();
    let overviewCards = document.querySelectorAll('.overview-card');

    overviewCards.forEach(function(card) {
        let name = card.querySelector('.overview-card-name h2').textContent.toLowerCase();
        if (name.includes(searchQuery)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

document.addEventListener('click', function(event) {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput.contains(event.target)) {
        searchInput.value = ''; 
        let overviewCards = document.querySelectorAll('.overview-card');
        // Show all cards
        overviewCards.forEach(function(card) {
            card.style.display = '';
        });
    }
});

document.getElementById('closeIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    let overviewCards = document.querySelectorAll('.overview-card');
    // Show all cards
    overviewCards.forEach(function(card) {
        card.style.display = '';
    });
});

document.getElementById('searchInput').addEventListener('focus', function() {
    document.getElementById('closeIcon').style.display = 'block'; 
});

document.getElementById('searchInput').addEventListener('blur', function() {
    document.getElementById('closeIcon').style.display = 'none'; 
    this.value = ''; 
    document.querySelectorAll('.overview-card').forEach(function(card) {
        card.style.display = ''; 
    });
});


document.getElementById('closeIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = ''; 
    this.style.display = 'none'; 
    searchInput.blur();
    // Show all cards
    document.querySelectorAll('.overview-card').forEach(function(card) {
        card.style.display = '';
    });
});

document.getElementById('searchInput').addEventListener('input', function() {
    const closeIcon = document.getElementById('closeIcon');
    if (this.value.length > 0) {
        closeIcon.style.display = 'block';
    } else {
        closeIcon.style.display = 'none';
    }
});

document.getElementById('closeIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = '';
    this.style.display = 'none';
    searchInput.focus();
});

document.addEventListener('click', function(event) {
    const searchInput = document.querySelector('#searchInput');
    const overviewCard = document.querySelector('.overview-card');
    const isClickInsideSearchInput = searchInput.contains(event.target);
    const isClickInsideOverviewCard = overviewCard.contains(event.target);

    if (!isClickInsideSearchInput && !isClickInsideOverviewCard) {
        console.log('Closing search input because click was outside of search input and overview card.');
    } else {
        console.log('Click was inside search input or overview card. Do not close search input.');
    }
});