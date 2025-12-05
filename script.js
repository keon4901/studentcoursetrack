// ===== SIMPLE LOGIN / LOGOUT =====
function login() {
  const email = document.getElementById('email')?.value;
  const pass = document.getElementById('password')?.value;
  if (email && pass) {
    alert('Login successful! Redirecting...');
    window.location.href = 'dashboard.html';
  } else {
    alert('Please enter both email and password.');
  }
}

function logout() {
  alert('You have been logged out.');
  window.location.href = 'index.html';
}

// ===== CALENDAR DATA & LOGIC =====

// Example events – later you can load these from your database
const calendarEvents = {
  // format: 'YYYY-MM-DD': { title: '...', type: 'important|quiz|presentation' }
  '2025-11-05': { title: 'Cache Hierarchy Due', type: 'important' },
  '2025-11-08': { title: 'MindBeacon UML Diagram', type: 'quiz' },
  '2025-11-12': { title: 'Final Presentation', type: 'presentation' }
};

let currentMonth = new Date().getMonth();  // 0-11
let currentYear = new Date().getFullYear();

function renderCalendar(month, year) {
  const grid = document.getElementById('calendar-grid');
  const label = document.getElementById('calendar-month-year');
  if (!grid || !label) return; // not on calendar page

  const monthNames = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];

  label.textContent = `${monthNames[month]} ${year}`;
  grid.innerHTML = '';

  const firstDay = new Date(year, month, 1);
  const startingDay = firstDay.getDay(); // 0-6, Sun-Sat
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Empty cells before day 1
  for (let i = 0; i < startingDay; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = 'day empty';
    grid.appendChild(emptyCell);
  }

  // Real days
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement('div');
    cell.className = 'day';

    const numSpan = document.createElement('span');
    numSpan.className = 'day-number';
    numSpan.textContent = day;
    cell.appendChild(numSpan);

    const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const event = calendarEvents[dateKey];

    if (event) {
      const eventP = document.createElement('p');
      eventP.className = 'event-title';
      eventP.textContent = event.title;
      cell.appendChild(eventP);

      if (event.type === 'important') {
        cell.classList.add('event-important');
      } else if (event.type === 'quiz') {
        cell.classList.add('event-quiz');
      } else if (event.type === 'presentation') {
        cell.classList.add('event-presentation');
      }
    }

    grid.appendChild(cell);
  }
}

function initCalendar() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return; // not on calendar page

  renderCalendar(currentMonth, currentYear);

  const prevBtn = document.getElementById('prev-month');
  const nextBtn = document.getElementById('next-month');

  prevBtn?.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  });

  nextBtn?.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
  });
}

// ===== GRADES TABS LOGIC =====
function initGradesTabs() {
  const tabButtons = document.querySelectorAll('.grades-tab');
  const panels = document.querySelectorAll('.grades-panel');
  if (!tabButtons.length || !panels.length) return; // not on dashboard

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-grades-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      panels.forEach(panel => {
        const panelKey = panel.getAttribute('data-grades-panel');
        panel.style.display = panelKey === target ? 'block' : 'none';
      });
    });
  });
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  initCalendar();
  initGradesTabs();
});
