document.getElementById('editButton').addEventListener('click', function() {
toggleEditState();
});

function toggleEditState() {
const editButton = document.getElementById('editButton');
const isEditing = editButton.textContent === 'Save';

['firstName', 'lastName', 'email', 'phone', 'bio'].forEach(fieldId => {
    const element = document.getElementById(fieldId);
    if (isEditing) {
    const input = element.querySelector('input');
    if (input) {
        element.textContent = input.value;
    }
    } else {
    const value = element.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = value;
    element.textContent = '';
    element.appendChild(input);
    }
});

editButton.textContent = isEditing ? 'Edit' : 'Save';

if (!isEditing) {
    document.addEventListener('click', clickOutsideListener);
} else {
    document.removeEventListener('click', clickOutsideListener);
}
}

function clickOutsideListener(event) {
const profile = document.getElementById('profile');
let targetElement = event.target; 
do {
    if (targetElement === profile) {
    return;
    }
    targetElement = targetElement.parentNode;
} while (targetElement);

toggleEditState();
}

document.getElementById('editButton').addEventListener('click', function(event) {
event.stopPropagation();
});

const input = document.createElement('input');
input.type = 'text';
input.value = value;
input.classList.add('input-edit');
element.textContent = '';
element.appendChild(input);

function editEmail() {
    var email = document.getElementById("email");
    email.disabled = !email.disabled;
    if (!email.disabled) {
        email.focus();
    }
}

function editPassword() {
    alert("Password Change To Unkown Password !");
}

function editEmail() {
    document.getElementById('emailPopup').style.display = 'block';
    document.body.insertAdjacentHTML('beforeend', '<div class="backdrop" onclick="closePopup()"></div>');
    document.querySelector('.backdrop').style.display = 'block';
}

function closePopup() {
    document.getElementById('emailPopup').style.display = 'none';
    let backdrop = document.querySelector('.backdrop');
    if (backdrop) {
        backdrop.style.display = 'none';
        backdrop.remove();
    }
}