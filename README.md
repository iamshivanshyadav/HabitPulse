# HabitTracker


## Overview

Habit Tracker is a Node.js web application that helps users track their habits and manage their daily routines effectively. This project provides a user-friendly interface to add, remove, and toggle the status of habits, as well as keep them as favorites.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Models](#models)
- [Controllers](#controllers)
- [Views](#views)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project follows the following directory structure:

```
Habit Tracker
|
|---> assets ----> |--> images
|                  |--> js
|                  |--> css
|
|                  |--> flashMiddleware.js
|---> config ----> |--> mongoose.js
|                  |--> passport-local-Strategy.js
|
|                  |--> habit_controller.js
|---> controllers -->|--> home_controller.js
|                  |--> user_controller.js
|
|                  |--> habit.js
|---> models ---->  |--> user.js
|
|
|                  |--> habit.js
|---> routes ---->  |--> index.js
|                  |--> user.js
|
|                  |--> _header.ejs
|                  |--> forget_password.ejs
|                  |--> home.ejs
|---> views ---->   |--> layout.ejs
|                  |--> sign_in.ejs
|                  |--> sign_up.ejs
|
|--> node_modules
|---> .gitignore
|--> index.js
|--> package-lock.json
|--> package.json
```

## Getting Started

To run the Habit Tracker application locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install the dependencies: `npm install`
3. Start the server: `node index.js`
4. Visit `http://localhost:3000` in your browser.

## Dependencies

The Habit Tracker project relies on the following dependencies:

- express: A web application framework for Node.js.
- mongoose: MongoDB object modeling for Node.js.
- passport: Authentication middleware for Node.js.
- ejs: Embedded JavaScript templates for rendering views.
- ... (add any other major dependencies)

## Installation

To install the dependencies, use the following command:

```
npm install
```

## Usage

Once the server is running, you can access the application by visiting `http://localhost:3000` in your web browser.

## Routes

The application exposes the following routes:

- `POST /createHabit`: Creates a new habit.
- `GET /toggleStatus`: Toggles the status of a habit.
- `GET /favorite`: Marks a habit as a favorite.
- `GET /remove`: Deletes a habit.

## Models

The application uses the following MongoDB models:

- `Habit`: Represents a habit with attributes like name, description, status, and favorite.
- `User`: Represents a user with attributes for authentication and personalization.

## Controllers

The application has the following controllers:

- `habit_controller.js`: Handles habit-related actions.
- `home_controller.js`: Manages the home page and its content.
- `user_controller.js`: Manages user-related actions.

## Views

The application uses EJS templates for rendering views. The `views` directory contains the following views:

- `_header.ejs`: Partial template for the header section.
- `forget_password.ejs`: View for handling password recovery.
- `home.ejs`: View for the home page and displaying habits.
- `layout.ejs`: Base template that includes header and footer.
- `sign_in.ejs`: View for user login.
- `sign_up.ejs`: View for user registration.

## Contributing

Contributions to the Habit Tracker project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

The Habit Tracker project is open-source and licensed under the [MIT License](LICENSE).

---

**Hosted Link**: [HabitTracker](https://habittracker-4njo.onrender.com)
