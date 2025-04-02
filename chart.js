const ctx = document.getElementById('visitorChart').getContext('2d');
const visitorChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Online', 'Offline'],
        datasets: [{
            label: 'Visitor Status',
            data: [0, 100], // Initial dummy data
            backgroundColor: ['#4caf50', '#f44336'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw + ' visitors';
                    }
                }
            }
        }
    }
});

// Function to update the chart with live visitor data
async function updateVisitorStats() {
    const onlineVisitors = await fetchVisitorData();
    const offlineVisitors = 100 - onlineVisitors; // Example calculation

    visitorChart.data.datasets[0].data = [onlineVisitors, offlineVisitors];
    visitorChart.update();
}

// Update chart every 5 seconds
setInterval(updateVisitorStats, 5000);
