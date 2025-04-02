const ctx = document.getElementById('visitorChart').getContext('2d');
const visitorChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Online', 'Offline'],
        datasets: [{
            label: 'Visitor Status',
            data: [0, 100], // Initial dummy data
            backgroundColor: ['#4CAF50', '#F44336'],
            borderColor: '#ffffff',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1500,
            easing: 'easeOutBounce', // Bouncing effect
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: 'white',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
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
