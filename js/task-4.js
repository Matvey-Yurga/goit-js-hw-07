const form = document.querySelector(".login-form")
form.addEventListener("submit", handSumbit)
function handSumbit(event){
    event.preventDefault();
    const email = form.elements.email.value
    const password = form.elements.password.value
    const formEmail = email.split(" ").filter((nameFilter) => (nameFilter !== "")).join(" ")
    const formPassword = password.split(" ").filter((nameFilter) => (nameFilter !== "")).join(" ")
 if (formEmail === "" || formPassword === "") {
     alert("All form fields must be filled in")
     return;
 }
    const formData = {
        email: formEmail,
        password: formPassword
    }
    console.log(formData)

    form.reset()
 }
