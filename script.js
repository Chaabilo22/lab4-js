document.getElementById("themeToggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("nameInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (name === "" || message === "") {
        alert("Please fill out all fields.");
    } else {
        document.getElementById("response").innerText = `Thanks, ${name}. We'll get back to you soon!`;
        e.target.reset();
    }
});

// Load Users with Fetch
document.getElementById("loadUsersBtn")?.addEventListener("click", async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        const userList = document.getElementById("userList");
        userList.innerHTML = ""; // Clear the list before appending new data

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.name;
            userList.appendChild(li);
        });
    } catch (err) {
        console.error("Failed to load users:", err);
    }
});


// FAQ Toggle
document.querySelectorAll(".question").forEach((q) => {
    q.addEventListener("click", () => {
        q.nextElementSibling.classList.toggle("visible");
    });
});

function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();
