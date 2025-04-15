class HabitTracker {
    constructor() {
      this.habits = JSON.parse(localStorage.getItem('habits')) || [];
      this.isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
      this.init();
    }
  
    init() {
      this.setupEventListeners();
      this.renderHabits();
      this.updateTheme();
    }
  
    setupEventListeners() {
      document.getElementById('theme-toggle').addEventListener('click', () => this.toggleTheme());
      document.getElementById('add-habit-btn').addEventListener('click', () => this.showForm());
      document.getElementById('close-form').addEventListener('click', () => this.hideForm());
      document.getElementById('habit-form').addEventListener('submit', (e) => this.addHabit(e));
    }
  
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('darkMode', this.isDarkMode);
      this.updateTheme();
    }
  
    updateTheme() {
      document.body.classList.toggle('dark', this.isDarkMode);
    }
  
    showForm() {
      const form = document.getElementById('habit-form');
      document.getElementById('add-habit-btn').classList.add('hidden');
      form.classList.remove('hidden');
      document.getElementById('habit-title').focus();
    }
  
    hideForm() {
      document.getElementById('habit-form').classList.add('hidden');
      document.getElementById('add-habit-btn').classList.remove('hidden');
    }
  
    addHabit(e) {
      e.preventDefault();
      const title = document.getElementById('habit-title').value.trim();
      const category = document.getElementById('habit-category').value.trim();
  
      if (!title) return;
  
      const habit = {
        id: Date.now().toString(),
        title,
        category: category || undefined,
        completions: {}
      };
  
      this.habits.push(habit);
      this.saveHabits();
      this.renderHabits();
      this.hideForm();
      e.target.reset();
    }
  
    deleteHabit(id) {
      const habitCard = document.querySelector(`[data-habit-id="${id}"]`);
      habitCard.style.animation = 'fadeOut 0.3s ease-out forwards';
      
      setTimeout(() => {
        this.habits = this.habits.filter(h => h.id !== id);
        this.saveHabits();
        this.renderHabits();
      }, 300);
    }
  
    toggleCompletion(habit) {
      const today = new Date().toISOString().split('T')[0];
      habit.completions[today] = !habit.completions[today];
      this.saveHabits();
      this.renderHabits();
    }
  
    getStreak(completions) {
      let streak = 0;
      const today = new Date();
      
      for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateStr = date.toISOString().split('T')[0];
        
        if (completions[dateStr]) {
          streak++;
        } else {
          break;
        }
      }
      return streak;
    }
  
    getTotalCompletions(completions) {
      return Object.values(completions).filter(Boolean).length;
    }
  
    getCategoryIcon(category) {
      const icons = {
        health: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
        fitness: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M6 8h-1a4 4 0 0 0 0 8h1"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h8"/></svg>',
        learning: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>',
        productivity: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
        default: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>'
      };
  
      const normalizedCategory = category ? category.toLowerCase() : 'default';
      return icons[normalizedCategory] || icons.default;
    }
  
    saveHabits() {
      localStorage.setItem('habits', JSON.stringify(this.habits));
    }
  
    renderHabits() {
      const grid = document.getElementById('habits-grid');
      grid.innerHTML = this.habits.map(habit => this.createHabitCard(habit)).join('');
  
      // Re-attach event listeners
      this.habits.forEach(habit => {
        document.querySelector(`[data-delete="${habit.id}"]`)
          .addEventListener('click', () => this.deleteHabit(habit.id));
        document.querySelector(`[data-toggle="${habit.id}"]`)
          .addEventListener('change', () => this.toggleCompletion(habit));
      });
    }
  
    createHabitCard(habit) {
      const today = new Date().toISOString().split('T')[0];
      const isCompleted = habit.completions[today] || false;
      const categoryIcon = this.getCategoryIcon(habit.category);
      
      return `
        <div class="habit-card" data-habit-id="${habit.id}">
          <div class="habit-header">
            <div>
              <h3 class="habit-title">
                ${categoryIcon}
                ${habit.title}
              </h3>
              ${habit.category ? `
                <span class="habit-category">
                  ${categoryIcon}
                  ${habit.category}
                </span>
              ` : ''}
            </div>
            <button class="delete-btn" data-delete="${habit.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
            </button>
          </div>
          
          <div class="habit-stats">
            <div class="stat">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>Streak: ${this.getStreak(habit.completions)}</span>
            </div>
            <div class="stat">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-6 4 3 7-7-4-7 4 3-7-6-4h7l3-7z"/></svg>
              <span>Total: ${this.getTotalCompletions(habit.completions)}</span>
            </div>
          </div>
  
          <div class="toggle-container">
            <span>Today</span>
            <label class="toggle">
              <input type="checkbox" data-toggle="${habit.id}" ${isCompleted ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
      `;
    }
  }
  
  // Initialize the app
  document.addEventListener('DOMContentLoaded', () => {
    new HabitTracker();
  });