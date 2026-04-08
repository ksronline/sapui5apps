# HelloWorld SAP UI5 Application

A simple SAP UI5 HelloWorld application demonstrating the basics of UI5 development.

## Project Structure

```
helloworldui5/
├── package.json          # Node.js project configuration
├── ui5.yaml              # UI5 tooling configuration
├── README.md             # This file
└── webapp/
    ├── index.html        # Entry point (bootstrap)
    ├── manifest.json     # App descriptor
    ├── Component.js      # UI5 Component
    ├── controller/
    │   └── App.controller.js   # Main controller
    ├── view/
    │   └── App.view.xml        # Main XML view
    └── i18n/
        ├── i18n.properties     # Internationalization texts
        └── i18n_en.properties  # English locale fallback
```

## Prerequisites

- [Node.js](https://nodejs.org/) (version >= 18)
- npm (included with Node.js)

## Getting Started

1. Install dependencies:

   ```bash
   cd helloworldui5
   npm install
   ```

2. Start the development server:

   ```bash
   npm start
   ```

3. Open your browser and navigate to: [http://localhost:8080/index.html](http://localhost:8080/index.html)

## Features

- SAP UI5 XML View with MVC pattern
- i18n (internationalization) support
- JSON model data binding
- Interactive "Say Hello" button with MessageToast
- Responsive layout with SAP Horizon theme

## Build

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` folder.
