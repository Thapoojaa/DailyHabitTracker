# 🎯 Daily Habit Tracker



A **modern**, **visually stunning** web application designed to help you manage daily habits with a delightful user experience. Built with **HTML**, **CSS**, and **JavaScript**, this tracker features a vibrant UI, smooth animations, and persistent data storage using **localStorage**. Whether you're aiming to drink more water 💧 or read daily 📚, this app has you covered!

---

## 🚀 Objective

The Daily Habit Tracker empowers users to:

- **Add and remove habits** with ease.
- **Mark daily progress** using intuitive checkboxes.
- **View streaks and history** to stay motivated.
- **Persist data** locally for seamless use across sessions.

---

## ✨ Features

### Core Features

1. **📝 Add & Display Habits**

   - Create habits with a **title** (e.g., "Drink Water", "Read 10 pages") and optional **category** (Health, Productivity, Learning).
   - Habits are stored in an array and rendered dynamically using `map()`.
   - Each habit shows a title, category, streak, completions, and a **progress ring** 📊.

2. **✅ Track Daily Progress**

   - Checkboxes mark habits as completed for the current day.
   - Updates completion status in a `history` object (YYYY-MM-DD format).
   - Displays **current streak** (consecutive completed days) and **total completions**.
   - Progress rings visualize completion rate (% of tracked days completed).

3. **🛠️ Habit Management**

   - **Add**: Form with title and category inputs.
   - **Delete**: Remove habits and their history with a single click.
   - **View Details**: Modal popup with total completions, streak, and a scrollable history log.

4. **💾 Persist with localStorage**

   - Saves habits as JSON to localStorage on every update (add/delete/complete).
   - Loads and re-renders habits on page load.

### Additional Features

- **🌙 Dark Mode Toggle**: Switch between light and dark themes, saved in localStorage.
- **🎨 Mind-Blowing UI**: Vibrant gradients, glassmorphism, neon accents, and animations (slide-ins, ripples, modal transitions).
- **🖱️ Micro-Interactions**: Animated checkboxes, hover effects, and button scaling for engagement.
- **📱 Responsive Design**: Optimized for mobile and desktop with fluid layouts.

---

## 📸 Screenshots

*(Add animated GIFs or screenshots here for visual appeal)*

- 🖼️ **Light Mode**: Showcase the vibrant gradient background and glassmorphism cards.\
  *Placeholder: \[Add GIF of adding a habit with slide-in animation\]*
- 🌌 **Dark Mode**: Highlight neon accents and glowing buttons.\
  *Placeholder: \[Add GIF of toggling dark mode with smooth transition\]*
- ℹ️ **Modal View**: Display the sleek modal with history log.\
  *Placeholder: \[Add GIF of modal slide-up animation\]*

---

## 🛠️ Setup Instructions

1. **📂 Clone or Download**

   ```bash
   git clone <repository-url>
   ```

   Or download the project files.

2. **📋 Project Structure**Ensure these files are in the same directory:

   ```
   ├── index.html        # 🖥️ HTML structure
   ├── styles.css        # 🎨 Styling with animations
   ├── script.js         # ⚙️ JavaScript logic
   └── README.md         # 📖 Documentation
   ```

3. **🚀 Run the App**

   - Open `index.html` in a modern browser (Chrome, Firefox, Edge).
   - No server or dependencies required! 🕸️

---

## 📚 Usage Guide

1. **➕ Add a Habit**

   - Enter a habit title (e.g., "Meditate 10 min") in the form.
   - Choose a category (optional: Health, Productivity, Learning).
   - Click **Add Habit** to see it appear with a smooth animation.

2. **✔️ Track Progress**

   - Check the checkbox to mark a habit as done for today.
   - Watch the streak, completion count, and progress ring update instantly! 📈

3. **🗑️ Manage Habits**

   - **Delete**: Click the red "Delete" button to remove a habit.
   - **Details**: Click the blue "Details" button to view completions, streak, and history in a modal.
   - Close the modal with the **×** button.

4. **🌗 Toggle Themes**

   - Click the theme icon (🌙/☀️) to switch between light and dark modes.
   - Your preference is saved automatically! 💡

---

## 📁 File Structure

- `index.html` 🖼️
  - Defines the UI structure: header, form, habit list, and modal.
- `styles.css` 🎨
  - Vibrant gradients, glassmorphism, and animations.
  - Custom progress rings (SVG) and responsive design.
  - Dark mode with neon accents.
- `script.js` ⚙️
  - Handles habit CRUD, streak calculations, and localStorage.
  - Manages modal rendering and theme toggling.

---

## 💻 Technologies Used

- **HTML5** 📄: Semantic structure.
- **CSS3** 🎨: Animations, gradients, and responsive design.
  - **Google Fonts (Inter)** for modern typography.
  - **SVG** for progress rings.
- **JavaScript (ES6)** 🛠️: Dynamic rendering and event handling.
- **localStorage** 💾: Persistent data storage.

---

## 🔍 Notes

- **Performance** ⚡: Optimized for smooth rendering with many habits.
- **Accessibility** ♿: High-contrast colors and clear typography.
- **Compatibility** 🌐: Works on modern browsers (Chrome, Firefox, Edge, Safari).
- **Future Enhancements** 🚧:
  - 🔔 Add reminders or notifications.
  - 📥 Support habit export/import.
  - 📅 Integrate a calendar view for history.

---

## 🤝 Contributing

We love contributions! 🌈 Follow these steps:

1. Fork the repository 🍴.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request 📬.

---

## 📜 License

This project is licensed under the **MIT License**. See the LICENSE file for details.

---

## 🙌 Acknowledgments

- Inspired by modern UI trends like **glassmorphism** and **neumorphism**. 🖌️
- Built with ❤️ for productivity enthusiasts and habit builders!
- Special thanks to the open-source community 🌍.

---

*Created by Thapoojaa Daily Habit Tracker project, April 2025.*\
*Let's build better habits together! 🎉*
