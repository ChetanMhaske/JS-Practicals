let name = document.querySelector("input[name = 'name']")
name.value = JSON.parse(localStorage.getItem("name")) || "";
name.addEventListener("input", () => {
        localStorage.setItem("name",JSON.stringify(name.value))
})

let age = document.querySelector("input[name = 'age']")
age.value = JSON.parse(localStorage.getItem("age")) || "";
age.addEventListener("input", () => {
        localStorage.setItem("age",JSON.stringify(age.value))
})

let description = document.querySelector("input[name = 'description']")
description.value = JSON.parse(localStorage.getItem("description")) || "";
description.addEventListener("input", () => {
        localStorage.setItem("description",JSON.stringify(description.value))
})









let genders = document.querySelectorAll("input[name='gender']");

// Save selected gender
genders.forEach((gender) => {
    gender.addEventListener("change", () => {
        localStorage.setItem("gender", gender.value);
    });
});

// Restore selected gender
let savedGender = localStorage.getItem("gender");

if (savedGender) {
    let gender = document.querySelector(
        `input[name='gender'][value='${savedGender}']`
    );

    gender.checked = true;
}
