// Events array 
const events = [
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "https://picsum.photos/seed/ai/400/200"
    },
    {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "https://picsum.photos/seed/javascript/400/200"
    },
    {
        title: "introduction to quantum computing",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "https://picsum.photos/seed/quantum/400/200"
    },
     {
        title: "Networking Mixer & Welcome Reception",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "https://picsum.photos/seed/networking/400/200"
    },
     {
    title: "API Design Best Practices",
    type: "Talk",
    date: "2025-11-21T15:00:00",
    description:
      "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
    image: "https://picsum.photos/seed/api/400/200",
  },
   {
    title: "Closing Ceremony & Awards",
    type: "Social",
    date: "2025-11-22T17:30:00",
    description:
      "Join us as we celebrate the best of the conference and announce the hackathon winners.",
    image: "https://picsum.photos/seed/awards/400/200",
  },
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
    // Apply small animation
const newlyAdded = container.lastElementChild;
newlyAdded.classList.add("animate-card");

setTimeout(() => {
  newlyAdded.classList.add("show");
}, 50);
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

  
