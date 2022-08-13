let isModalVisible = false;

function showModal() {
    if (!isModalVisible) {
        let advertisement = document.getElementById('advertisement');
        advertisement.classList.remove('hide');
        isModalVisible = true;
    }
}

function hideModal() {
    if (isModalVisible) {
        let advertisement = document.getElementById('advertisement');
        advertisement.classList.add('hide');
        isModalVisible = false;
    }
}

let isPasswordVisible = false;
function togglePasswordVisible() {
    isPasswordVisible = !isPasswordVisible;
    let passwordInput = document.getElementById('password');
    let showPassword = document.getElementById('show-password');
    if (isPasswordVisible) {
        passwordInput.setAttribute('type', 'text');
        showPassword.innerHTML = '<i class="bi bi-eye-slash"></i>';
    } else {
        passwordInput.setAttribute('type', 'password');
        showPassword.innerHTML = '<i class="bi bi-eye"></i>';
    }
}

setTimeout(showModal, 3000);

let advertisementModal = document.getElementById('advertisement');
let dismissButton = advertisementModal.children[0].children[0].children[1];
dismissButton.addEventListener('click', hideModal);

let backdrop = advertisementModal.children[1];
backdrop.addEventListener('click', hideModal);

let signupBtn = document.getElementById('signup-btn');
signupBtn.addEventListener('click', showModal);

let showPasswordBtn = document.getElementById('show-password');
showPasswordBtn.addEventListener('click', togglePasswordVisible);
