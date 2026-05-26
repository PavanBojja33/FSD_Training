# FSD Training Repository

## Project Overview

This repository contains practice projects and sample applications for Front-End Development training. It includes HTML, JavaScript, Node.js demos, and small web applications to help learners explore core web development concepts.

## Features

- Login and registration page examples
- Dashboard UI practice
- Basic Node.js server examples
- REST API demo with JSON data
- Modular JavaScript examples using exports
- Multiple page navigation demos

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Express (optional in Node demos)
- JSON

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/FSD_Training.git
   ```
2. Change into the project folder:
   ```bash
   cd FSD_Training
   ```
3. Install dependencies for Node.js demos (if needed):
   ```bash
   cd DEMO/TT_04-03
   npm install
   ```
4. Start the demo server:
   ```bash
   node firstServer.js
   ```

> Note: Some demos are static HTML files and do not require installation. Open them directly in the browser.

## Usage

- Open `DEMO/Practice/login.html` to practice login page layout.
- Open `DEMO/Practice/registration.html` to review registration form examples.
- Open `DEMO/Practice/dashboard.html` for a sample dashboard layout.
- Run Node.js demos in `DEMO/TT_04-03`:
  - `fileDemo.js` for file handling practice.
  - `firstServer.js` for a simple local server example.
  - `multiplePages.js` for page routing/navigation demonstrations.
- Review `DEMO/TT_05-03/Rest_Api/server.js` for a basic REST API serving `products.json`.
- Open `WEEK_1/TT_25-05-26/login.html` for additional login page practice.

## Folder Structure

```
FSD_Training/
├── DEMO/
│   ├── Practice/
│   │   ├── dashboard.html
│   │   ├── login.html
│   │   └── registration.html
│   ├── TT_04-03/
│   │   ├── fileDemo.js
│   │   ├── firstServer.js
│   │   ├── multiplePages.js
│   │   ├── package.json
│   │   └── readme.txt
│   └── TT_05-03/
│       ├── exportDemo.js
│       ├── moduleExportsDemo.js
│       ├── sample.js
│       └── Rest_Api/
│           ├── index.html
│           ├── package.json
│           ├── products.json
│           └── server.js
├── WEEK_1/
│   ├── sam.txt
│   └── TT_25-05-26/
│       └── login.html
└── README.md
```

## Screenshots

Include screenshots by adding image files to the repository and using markdown links. Example:

```markdown
![Login Page](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
```

> Add screenshot files to a `screenshots/` folder, then update the links above.

## Future Improvements

- Add CSS styling and responsive layouts for all HTML demos.
- Improve Node.js demos with Express routing and middleware.
- Add interactive form validation and client-side feedback.
- Create README examples for each demo folder.
- Add live deployment instructions and hosted demo links.
- Expand REST API demo with CRUD operations.
