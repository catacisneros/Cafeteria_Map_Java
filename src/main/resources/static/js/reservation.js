let reservations = [];

function makeReservation() {
    // Validate inputs
    const studentId = document.getElementById('studentId').value;
    const date = document.getElementById('reservationDate').value;
    const time = document.getElementById('reservationTime').value;
    const mealType = document.getElementById('mealType').value;
    const tableNumber = document.getElementById('tableNumber').value;

    if (!studentId || !date || !time || !mealType || !tableNumber) {
        alert('Please fill in all fields');
        return;
    }

    const reservation = {
        id: Date.now(),
        studentId: studentId,
        reservationTime: `${date}T${time}`,
        mealType: mealType,
        tableNumber: parseInt(tableNumber)
    };

    reservations.push(reservation);
    displayReservations();
    clearForm();
    showSuccessMessage();
}

function displayReservations() {
    const reservationsList = document.getElementById('reservationsList');
    reservationsList.innerHTML = '';

    if (reservations.length === 0) {
        reservationsList.innerHTML = '<p style="text-align: center; color: #666;">No reservations yet</p>';
        return;
    }

    reservations.forEach((reservation) => {
        const datetime = new Date(reservation.reservationTime);
        const formattedDate = datetime.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
        });
        const formattedTime = datetime.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });

        const mealTypeClass = reservation.mealType.toLowerCase();
        
        const reservationElement = document.createElement('div');
        reservationElement.className = 'reservation-item';
        reservationElement.innerHTML = `
            <span class="meal-type ${mealTypeClass}">${reservation.mealType}</span>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${formattedTime}</p>
            <p><strong>Student ID:</strong> ${reservation.studentId}</p>
            <p><strong>Table:</strong> #${reservation.tableNumber}</p>
            <button class="cancel-btn" onclick="cancelReservation(${reservation.id})">
                Cancel Reservation
            </button>
        `;
        reservationsList.appendChild(reservationElement);
    });
}

function cancelReservation(id) {
    if (confirm('Are you sure you want to cancel this reservation?')) {
        reservations = reservations.filter(r => r.id !== id);
        displayReservations();
    }
}

function clearForm() {
    document.getElementById('studentId').value = '';
    document.getElementById('reservationDate').value = '';
    document.getElementById('reservationTime').value = '';
    document.getElementById('mealType').value = 'BREAKFAST';
    document.getElementById('tableNumber').value = '';
}

function showSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        animation: slideIn 0.5s ease-out;
    `;
    message.textContent = 'Reservation successful!';
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => document.body.removeChild(message), 500);
    }, 3000);
}

// Add these styles to the head of the document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style); 