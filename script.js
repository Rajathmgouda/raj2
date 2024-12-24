$(document).ready(function () {
    $("#registrationForm").on("submit", function (e) {
        let isValid = true;

        // Validate Name
        if ($("#name").val().trim() === "") {
            alert("Please enter your name.");
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test($("#email").val())) {
            alert("Please enter a valid email address.");
            isValid = false;
        }

        // Validate Phone
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test($("#phone").val())) {
            alert("Please enter a valid 10-digit phone number.");
            isValid = false;
        }

        if (!isValid) e.preventDefault(); // Prevent form submission if invalid
    });
});
