## ---------------------------------------------- PROJECT SETUP (PART 1) ---------------------------------------------------------------------

// npm init -y
--Output: ek ready-made package.json file aa jata hai project root me.

## 👉 Apne Node.js project me dependencies (libraries) ko manage karne ke liye package.json banana

For example:
Tum npm init -y chalate ho → package.json ban jata hai.
Ab jab tum npm install express karte ho → woh dependency automatically package.json me save ho jati hai.
Isse fayda:
Dusra developer sirf npm install chala ke tumhara pura project setup kar sakta hai.

## npm i -D <package name > // this command use to install dev depencies

## npm i <package name > // this command use to install dependecies

## git init // to intilize git :

          git init
          git add .
          git commit -m "first commit"
          git branch -M main
          git remote add origin https://github.com/singhakash123/chai_backend.git
          git push -u origin main

// note : git track only file not folder , to track empty folder use .gitkeep

## How to setup a professional backend project

project-root/
├── .gitignore # Ignore node_modules, logs, etc.
├──\_\_ REDME.md
├── .env # Environment variables
├── .env.sample # Sample env for developers
├── .prettierrc # Code formatter config
├── .prettierignore # Ignore files for prettier
│
├── public/ # Public assets or uploads
├── temp/ # Temporary files (keep with .gitkeep)
│
└── src/
├── server.js # Entry point (start server, connect DB)
├── app.js # Main express app (routes, middleware load)
├── constant.js

├── db /
| └── index.js # Database connection logic

├── config/ # 💡 All configs here
│ └── cloudinary.js # Cloudinary config
│ └── logger.js # Winston or custom logger
│ └── rateLimiter.js # Security middlewares (rate limit etc)

    ├── models/                 # Mongoose schema definitions
    │   └── user.model.js
    │   └── todo.model.js

    ├── controllers/           # Request handlers / business logic
    │   └── auth.controller.js
    │   └── user.controller.js

    ├── routes/                # All routes
    │   └── auth.routes.js
    │   └── user.routes.js
    │   └── index.js           # Route aggregator

    ├── middlewares/          # Custom middlewares
    │   └── auth.middleware.js
    │   └── error.middleware.js
    │   └── upload.middleware.js
    │   └── authorizeRoles.js

    ├── services/             # 💡 Business-level services (optional)
    │   └── user.service.js    # Logic abstracted from controllers

    ├── utils/                # Utility functions
    │   └── ApiError.js
    │   └── ApiResponse.js
    │   └── asyncHandler.js
    │   └── sendEmail.js

    ├── constants/            # Centralized enums / roles / messages
    │   └── roles.js
    │   └── messages.js

    ├── validators/           # 🛡 Joi or express-validator schemas
    │   └── user.validator.js
    │
    ├── docs/                 # Swagger/OpenAPI docs if any
    │   └── swagger.yaml
    │
    └── tests/                # Jest or supertest-based tests
        └── auth.test.js

## ✅ Why this structure is better?

Layer Purpose
config/ All external service configs in one place
services/ Separation of concerns: logic outside controllers
validators/ Input validation separated from business logic
constants/ Easy update and readability for enums, role names, status messages etc.
docs/ Swagger or Postman specs, centralised docs
temp/ Placeholder for temporary data (keep clean with .gitkeep)

## Use .gitkeep to preserve empty directories in Git.

## Configure Scripts & Imports

-- Use nodemon for auto-restarting during development ("dev": "nodemon src/index.js").
-- Implement ES modules "module" across the project.

## Initial Git Workflow

-- After setup, commit and push remote origin.

## Verify files on GitHub to ensure clean version control practices.

##
