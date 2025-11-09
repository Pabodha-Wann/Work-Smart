# Work Smart
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/Pabodha-Wann/Work-Smart)

Work Smart is a responsive, all-in-one productivity dashboard designed to enhance your workflow. It combines essential tools into a single, clean interface, built purely with vanilla JavaScript, HTML, and CSS, without relying on any external frameworks.

![Work Smart Dashboard Preview](https://github.com/user-attachments/assets/c79f5566-92eb-4194-a4c7-cbc62da1920f)

## Features

This application integrates four key productivity modules:

*   **To-Do List**: A simple task manager to add, track, and delete your daily tasks. Your list is automatically saved to local storage, so your tasks persist between sessions.
*   **Focus Timer**: A stopwatch-style timer to help you track focused work intervals. Features include start, stop, and reset functionalities. When stopped, it displays the total time you've focused.
*   **Weather Forecast**: An integrated weather widget that fetches and displays current weather conditions for any city worldwide using the OpenWeatherMap API. View temperature, humidity, wind speed, and a dynamic weather icon.
*   **Lo-Fi Music Player**: A built-in music player with a selection of lo-fi tracks to create a relaxing work environment. It includes controls for play/pause, next/previous tracks, and a clickable progress bar.

## Tech Stack

*   **Frontend**: HTML5, CSS3 (Flexbox, Grid, Custom Gradients), Vanilla JavaScript
*   **APIs**: [OpenWeatherMap API](https://openweathermap.org/api)
*   **Icons**: [Font Awesome](https://fontawesome.com/)

## Getting Started

No complex setup is required. The application runs entirely in the browser.

### Prerequisites

*   A modern web browser (e.g., Chrome, Firefox, Safari, Edge)
*   An active internet connection for the Weather Forecast feature.

### Installation and Usage

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/pabodha-wann/work-smart.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd work-smart
    ```
3.  **Open the application:**
    Open the `index.html` file in your web browser to start using the dashboard.

### Configuration

The weather feature requires an API key from OpenWeatherMap. A key is included for demonstration purposes, but it is recommended you get your own free key for personal use.

1.  Sign up for a free API key at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
2.  Open the `weather.js` file.
3.  Replace the existing `apiKey` with your own key:
    ```javascript
    const apiKey = "YOUR_NEW_API_KEY";
    ```

## File Structure

The project has a flat structure for simplicity, with assets organized into their respective directories.

```
work-smart/
├── index.html          # Main HTML structure
├── todo.js             # Logic for the To-Do List
├── todo.css            # Styles for the To-Do List
├── focus.js            # Logic for the Focus Timer
├── focus.css           # Styles for the Focus Timer
├── weather.js          # Logic for the Weather Forecast
├── weather.css         # Styles for the Weather Forecast
├── musicplayer.js      # Logic for the Music Player
├── musicplayer.css     # Styles for the Music Player
├── images/             # Icons, backgrounds, and other image assets
└── music/              # Audio files and album art for the music player
```

## Author

*   **Pabodha Wanniarachchi**
