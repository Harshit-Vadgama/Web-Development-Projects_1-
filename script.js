document.addEventListener("DOMContentLoaded", function() {

    const forms = document.querySelectorAll("form");

    forms.forEach(function(form) {
        form.addEventListener("submit", function(e) {
            const nameInput = form.querySelector('input[type="text"]');
            
            if (!nameInput || nameInput.value.trim() === "") {
                alert("Thanks for coming in NovaTech University Website!");
                if (nameInput)
                nameInput.focus();
                return;
            }

            alert("Thank you! Your form has been submitted successfully.");
            form.submit();
        });
    });

});