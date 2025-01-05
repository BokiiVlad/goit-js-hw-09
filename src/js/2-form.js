let formData = {
    email: "",
    message: ""
};
const formArea = document.querySelector(".feedback-form");

const saveLS = () => {
    try {
        if (localStorage.length === 0) {
            return;
        }
        const returnValue = JSON.parse(localStorage.getItem("feedback-form-state"));
        for (const key in returnValue) {
            formArea.elements[key].value = returnValue[key];
        }
        formData = returnValue;

    } catch (error) {
        console.log(error);
    }
}
saveLS();

const onFormField = event => {
    const inputValue = event.target.value;
    const nameValue = event.target.name;
    formData[nameValue] = inputValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};
formArea.addEventListener("change", onFormField);
const subActive = event => {
    event.preventDefault()
    localStorage.removeItem("feedback-form-state");
    formArea.reset()
}
formArea.addEventListener("submit", subActive)








