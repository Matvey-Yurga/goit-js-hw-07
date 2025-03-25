const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")
 
input.addEventListener("input", () => {
    const name = input.value.split(" ").filter((nameFilter) => (nameFilter !== "")).join(" ")

    if (name === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = name;
    }
});