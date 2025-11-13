// Events array 
const events = [
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "images/keynote.jpg"
    },
    {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "images/workshop-js.jpg"
    },
    {
        title: "Cybersecurity in the Cloud Era",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
        image: "images/cybersecurity.jpg"
    },
    // Add the rest of your events...
];

// Select container
const container = document.getElementById('event-container');

// Function to display events
function displayEvents(eventList) {
    container.innerHTML = ''; // clear previous cards

    eventList.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');

        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="event-card-content">
                <h2>${event.title}</h2>
                <p><strong>Type:</strong> ${event.type}</p>
                <p>${event.description}</p>
                <p><strong>Date:</strong> ${new Date(event.date).toLocaleString()}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Initial display
displayEvents(events);

// --- Level 2: Filtering ---
const filterButtons = document.querySelectorAll('.filters button');
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const type = btn.getAttribute('data-type');
        if (type === 'All') {
            displayEvents(events);
        } else {
            const filtered = events.filter(e => e.type === type);
            displayEvents(filtered);
        }
    });
});

// --- Level 7: Search ---
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    const filtered = events.filter(e => 
        e.title.toLowerCase().includes(term) || 
        e.description.toLowerCase().includes(term)
    );
    displayEvents(filtered);
});