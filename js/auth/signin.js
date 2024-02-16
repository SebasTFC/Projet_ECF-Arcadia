const mailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    //ici il faudra appeler l'API
    if (mailInput.value == "test@mail.com" && passwordInput.value == "123") {
        // il faudra recuperer le vrai token
        const token = "shfjdhfjdfhdjhfdjhfdtttttttteeeeeetf";
        setToken(token);
        // placer ce token en cookie
        setCookie(roleCookieName, "admin", 7);
        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}