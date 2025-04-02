// Fetch live data from Google Analytics API
async function fetchVisitorData() {
    const API_KEY = "YOUR_API_KEY"; // Replace with your API Key
    const VIEW_ID = "YOUR_VIEW_ID"; // Replace with your Google Analytics View ID

    try {
        const response = await fetch(`https://www.googleapis.com/analytics/v3/data/realtime?ids=ga:${VIEW_ID}&metrics=rt:activeUsers&key=${API_KEY}`);
        const data = await response.json();
        return data.totalsForAllResults["rt:activeUsers"] || 0;
    } catch (error) {
        console.error("Error fetching visitor data:", error);
        return 0;
    }
}
