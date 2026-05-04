// app.js - Mapbox scaffold (minimal)
mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // Add your token

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Mapbox (static mode for now)
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [77.5946, 12.9716], // Bangalore
        zoom: 12
    });

    // Event card interactions
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            const eventId = card.dataset.event;
            console.log('Open event:', eventId);
            // Future: Open modal or navigate
        });
    });

    // Category tab switching
    document.querySelectorAll('[class*="control"]').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('[class*="control"]').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    console.log('Putting Scene UI ready');
});