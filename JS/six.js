document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('two-step');
    var modal = document.getElementById('modal');
    var closeButton = document.querySelector('.close-button');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            modal.style.display = "block";
        }
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
