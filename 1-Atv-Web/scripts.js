const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener('submit', (e) => {
    e.proventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (usernameValue === '' ) {
        setErrorfor(username, "O nome de usuário é obrigatório.");
    }
    else {
        setSuccessfor(username);
    }
    
    if (emailValue === '') {
        setErrorfor(email, "O email é obrigatório.");
    }
    else if (!checkEmail(emailValue)){
        setErrorfor(email, "Digite um email válido.");
    }
    else {
        setSuccessfor(email);
    }
    

    if (passwordValue === '') {
        setErrorfor (password, "Digita uma senha é obrigatório.");
    }
    else if (passwordValue.lenght < 7){
        setErrorfor(password, "A senha precisa ter no minímo 7 caracters.")
    }
    else {
        setSuccessfor(password);
    }

    if (passwordConfirmationValue === ''){
        setErrorfor (passwordConfirmation, "Digite a confirmação da senha.");
    }
    else if (passwordConfirmationValue !== passwordValue){
        setErrorfor(passwordConfirmation, "Senhas diferentes, corrija por favor.");
    }
    else {
        setSuccessfor (passwordConfirmation);
    }

    const formControls = form.querySelectorAll(".form-control");

    const formIsValid = [...formControls].every((formControl) => {
      return formControl.className === "form-control success";
    });
  
    if (formIsValid) {
      console.log("O formulário está 100% válido!");
    }
}

function setErrorfor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.classname = "form-control error";
}

function setSuccessfor(input) {
    const formControl = input.parentElement;

    formControl.classname = 'form-control success';

}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}