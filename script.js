document.addEventListener("DOMContentLoaded", function () {

    alert("Thanks for coming to NovaTech University Website!");

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
           

            alert("Thank you! Your form has been submitted successfully.");

            HTMLFormElement.prototype.submit.call(registerForm);
        });
    }
});
