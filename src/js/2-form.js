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
formArea.addEventListener("input", onFormField);

const subActive = event => {
    event.preventDefault()
    if (!formData.email.trim() || !formData.message.trim()) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData = {
        email: "",
        message: ""
    };
    formArea.reset()
}
formArea.addEventListener("submit", subActive)








