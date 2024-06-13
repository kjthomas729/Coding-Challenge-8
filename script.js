document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('eventDate').value;
    const preferences = Array.from(document.querySelectorAll('input[name="preference"]:checked'))
                             .map(checkbox => checkbox.value);

    // Validate form values
    if (!name || !email || !eventDate || preferences.length === 0) {
        alert('Please fill out all fields and select at least one preference.');
        return;
    }

    // Display registration details
    const registrationDetailsDiv = document.getElementById('registrationDetails');
    registrationDetailsDiv.innerHTML = `
        <h2>Registration Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <p><strong>Preferences:</strong> ${preferences.join(', ')}</p>
    `;
});
