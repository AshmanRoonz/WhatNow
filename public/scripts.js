let token = localStorage.getItem('token');
let userId = localStorage.getItem('userId');

document.addEventListener('DOMContentLoaded', () => {
    updateUI();
    fetchContributions();
    fetchCenters();
});

function updateUI() {
    const loggedIn = !!token;
    document.getElementById('showLogin').style.display = loggedIn ? 'none' : 'inline-block';
    document.getElementById('showSignup').style.display = loggedIn ? 'none' : 'inline-block';
    document.getElementById('logout').style.display = loggedIn ? 'inline-block' : 'none';
    document.getElementById('input').style.display = loggedIn ? 'block' : 'none';
    document.getElementById('proposeCenterBtn').style.display = loggedIn ? 'block' : 'none';
}

document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('authForms').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
});

document.getElementById('showSignup').addEventListener('click', () => {
    document.getElementById('authForms').style.display = 'block';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
});

document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    token = null;
    userId = null;
    updateUI();
    document.getElementById('authForms').style.display = 'none';
});

async function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    try {
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        token = data.token;
        userId = data.userId;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        updateUI();
        document.getElementById('authForms').style.display = 'none';
    } catch (err) {
        alert(err.message);
    }
}

async function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    try {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        token = data.token;
        userId = data.userId;
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        updateUI();
        document.getElementById('authForms').style.display = 'none';
    } catch (err) {
        alert(err.message);
    }
}

async function submitContribution() {
    const text = document.getElementById('userInput').value;
    if (!text) return alert('Please enter your thoughts.');
    try {
        const res = await fetch('/api/contributions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ text })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        // Mock AI refinement
        document.getElementById('aiOutput').innerHTML = `<strong>Your AI Advocate says:</strong> Refined: "${data.text}" – Prioritized for clarity and impact.`;
        fetchContributions();
    } catch (err) {
        alert(err.message);
    }
}

async function fetchContributions() {
    try {
        const res = await fetch('/api/contributions');
        const contributions = await res.json();
        const synthesis = contributions.map(c => `<p><strong>${c.userId.username}</strong>: ${c.text}</p>`).join('');
        document.getElementById('synthesisOutput').innerHTML = synthesis || 'No contributions yet.';
    } catch (err) {
        console.error(err);
    }
}

function showProposeCenter() {
    document.getElementById('proposeCenterForm').style.display = 'block';
}

async function proposeCenter() {
    const title = document.getElementById('centerTitle').value;
    const description = document.getElementById('centerDescription').value;
    if (!title || !description) return alert('Please fill out all fields.');
    try {
        const res = await fetch('/api/centers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, description })
        });
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        fetchCenters();
        document.getElementById('proposeCenterForm').style.display = 'none';
    } catch (err) {
        alert(err.message);
    }
}

async function fetchCenters() {
    try {
        const res = await fetch('/api/centers');
        const centers = await res.json();
        const centersHTML = centers.map(c => `
            <div class="center-card">
                <h3>${c.title}</h3>
                <p>${c.description} (Created by ${c.creatorId.username})</p>
                <button onclick="joinCenter('${c._id}')">Join</button>
            </div>
        `).join('');
        document.getElementById('centersList').innerHTML = centersHTML || 'No centers yet.';
    } catch (err) {
        console.error(err);
    }
}

async function joinCenter(centerId) {
    alert('Joining center (mock). In future, this will link contributions to the center.');
}

function startVoiceInput() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.onresult = function(event) {
            document.getElementById('userInput').value = event.results[0][0].transcript;
        };
        recognition.start();
    } else {
        alert('Voice input not supported in this browser.');
    }
}
