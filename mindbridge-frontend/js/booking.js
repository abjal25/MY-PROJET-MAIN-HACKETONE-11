document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const counselorSelect = document.getElementById('counselor-select');
    const confirmationScreen = document.getElementById('confirmation-screen');
    const bookedCounselor = document.getElementById('booked-counselor');
    const bookedDate = document.getElementById('booked-date');
    const bookedTime = document.getElementById('booked-time');
    const rescheduleBtn = document.getElementById('reschedule-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    const anonymousToggle = document.getElementById('anonymous-toggle');
    const datePicker = document.getElementById('date-picker');

    // Mock counselor data
    const counselors = [
        { name: "Dr. Anya Sharma", language: "English, Hindi", specialization: "Stress Management" },
        { name: "Ms. Priyanka Desai", language: "English, Gujarati", specialization: "Anxiety, Relationships" },
        { name: "Mr. Raj Singh", language: "English, Hindi", specialization: "Depression, Academics" }
    ];

    // Populate counselor dropdown
    counselors.forEach(counselor => {
        const option = document.createElement('option');
        option.value = counselor.name;
        option.textContent = `${counselor.name} - ${counselor.specialization} (${counselor.language})`;
        counselorSelect.appendChild(option);
    });
    
    // Set min date to today
    const today = new Date().toISOString().split('T')[0];
    datePicker.min = today;

    // Handle form submission
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const selectedCounselor = counselorSelect.value;
        const selectedDate = datePicker.value;
        const selectedTime = document.getElementById('time-picker').value;
        const isAnonymous = anonymousToggle.checked;

        if (isAnonymous) {
            bookedCounselor.textContent = 'Anonymous Counselor';
        } else {
            bookedCounselor.textContent = selectedCounselor;
        }

        bookedDate.textContent = new Date(selectedDate).toDateString();
        bookedTime.textContent = selectedTime;

        bookingForm.classList.add('hidden');
        confirmationScreen.classList.remove('hidden');
        alert("Booking confirmed! A mock email/SMS has been sent.");
    });

    // Handle reschedule and cancel buttons
    rescheduleBtn.addEventListener('click', () => {
        alert("Redirecting to reschedule interface.");
        // In a real app, this would show a new form or modal.
        confirmationScreen.classList.add('hidden');
        bookingForm.classList.remove('hidden');
    });

    cancelBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to cancel your booking?")) {
            alert("Booking canceled successfully.");
            confirmationScreen.classList.add('hidden');
            bookingForm.classList.remove('hidden');
            bookingForm.reset();
        }
    });
});