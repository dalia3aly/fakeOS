## FakeOS Project - Windows Vista

## Overview
FakeOS is a web-based simulation of an operating system interface, designed to showcase front-end development skills in HTML, SCSS, and JavaScript. This project is an immersive learning experience aimed at creating a visually appealing and interactive desktop environment. Featuring icons for launching applications, a taskbar with system time display, and a Start menu. Key highlights include a To-Do application, a calculator and a weather widget, each implemented as individual applications within this fake operating system.

## Features
- Desktop Environment: A visually appealing desktop with Windows Vista wallpaper and icons. It is best viewed on a desktop viewport.
- Interactive Icons: Clickable icons for launching applications such as a To-Do app, a Calculator plus a Weather widget.
- Taskbar: A partially functional taskbar positioned at the bottom of the screen, featuring a Start menuand a clock displaying the current date and time.
- Calculator App: A simple yet powerful calculator for performing basic arithmetic operations.
- Weather Widget: A dynamic weather application that displays current weather conditions - External API documentation: https://rapidapi.com/community/api/open-weather13.

## Technologies Used
- HTML: For structuring the web-based operating system interface.
- CSS/SCSS: For styling, making the interface visually appealing and realistic.
- Vanilla JavaScript: To add interactivity to the desktop environment, managing application windows, and dynamic content updates.

## Project Structure
```
FakeOS/
|-- index.html
|-- css/
|   |-- style.scss
|   |-- style.css
|    _partials/
|     |-- _variables.scss
|     |-- _components.scss
|     |-- _todo.scss
|     |-- _calculator.scss
|     |-- weather.scss
|   |
|-- js/
|   |-- app.js
|   |-- dom.js
|   |-- toDo.js
|   |-- calculator.js
|   |-- weatherWidget.js
|-- assets/
    |-- img/
        |-- win-icon/

```

## How to Run
Clone this repository to your local machine.
Open index.html in a modern web browser to launch FakeOS.

## Future Enhancements
- Additional Applications: Plans to add more applications like a photo gallery for enhanced user engagement.
- API Integration: Integrate real-time APIs in more applications like the weather widget for live data feeds.
- Deployment: When successfully developed and merged with the main branch.