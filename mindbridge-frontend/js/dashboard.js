document.addEventListener('DOMContentLoaded', async () => {
    const screeningChartCtx = document.getElementById('screening-chart').getContext('2d');
    const bookingChartCtx = document.getElementById('booking-chart').getContext('2d');
    const forumChartCtx = document.getElementById('forum-chart').getContext('2d');
    const heatmapContainer = document.getElementById('heatmap-container');

    // Mock data for charts
    const screeningData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Average PHQ-9 Score',
            data: [8, 9, 12, 10, 15, 14],
            backgroundColor: 'rgba(76, 175, 80, 0.5)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 1,
            tension: 0.4,
            fill: true
        }]
    };

    const bookingData = {
        labels: ['Counsellor A', 'Counsellor B', 'Counsellor C'],
        datasets: [{
            label: 'Bookings per Counsellor',
            data: [25, 40, 30],
            backgroundColor: ['#2196F3', '#FFC107', '#4CAF50']
        }]
    };

    const forumData = {
        labels: ['Academics', 'Relationships', 'Identity', 'Loneliness', 'Stress'],
        datasets: [{
            label: 'Posts by Topic',
            data: [35, 20, 15, 10, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ]
        }]
    };

    // Initialize Chart.js charts
    new Chart(screeningChartCtx, {
        type: 'line',
        data: screeningData,
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });

    new Chart(bookingChartCtx, {
        type: 'bar',
        data: bookingData,
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });

    new Chart(forumChartCtx, {
        type: 'pie',
        data: forumData,
        options: {
            responsive: true
        }
    });

    // Generate mock heatmap data
    const generateHeatmap = () => {
        heatmapContainer.innerHTML = '';
        const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 3));
        data.forEach(riskLevel => {
            const cell = document.createElement('div');
            cell.classList.add('heatmap-cell');
            if (riskLevel === 0) {
                cell.classList.add('risk-low');
            } else if (riskLevel === 1) {
                cell.classList.add('risk-moderate');
            } else {
                cell.classList.add('risk-high');
            }
            heatmapContainer.appendChild(cell);
        });
    };

    generateHeatmap();

    // Export button functionality (mock)
    document.getElementById('export-btn').addEventListener('click', () => {
        alert("Exporting data as CSV (mock functionality).");
        console.log("Mock data export initiated.");
    });

    // Role-based view toggle (mock)
    document.getElementById('view-toggle').addEventListener('change', (e) => {
        const view = e.target.value;
        if (view === 'anonymized') {
            alert("Switched to anonymized view. No personal data will be shown.");
        } else {
            alert("Switched to aggregate view. Showing high-level trends.");
        }
        // In a real app, this would refresh the charts with different datasets.
    });
});