alert("Created By Ankush Das")

function showThankYouMessage(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    document.querySelector('.form-section').style.display = 'none';
    document.querySelector('.thank-you-section').style.display = 'block';
}
