📂 project-root
│── 📂 src
│   │── 📂 config
│   │   ├── db.ts          # Database connection
│   │   ├── env.ts         # Environment variables
│   │── 📂 controllers
│   │   ├── authController.ts   # Authentication logic (signup/login)
│   │── 📂 middleware
│   │   ├── authMiddleware.ts   # JWT middleware for 
│   │── ├── logger.ts         # Logs requests
│   │── ├── errorHandler.ts   # Handles errors
protected routes
│   │── 📂 routes
│   │   ├── authRoutes.ts   # Authentication routes
│   │   ├── userRoutes.ts   # User-related routes
│   │   ├── routes.ts       # Main router (combining all routes)
│   │── 📂 utils
│   │   ├── httpResponse.ts # Helper for sending responses
│   │── server.ts           # Main server file
│── .env                    # Environment variables
│── package.json
│── tsconfig.json
│── README.md
