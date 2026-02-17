# Password Reset Frontend

React + Vite frontend for password reset application.

## Structure
```
frontend/
├── src/
│   ├── pages/
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── ResetPassword.jsx
│   │   └── Dashboard.jsx
│   ├── services/
│   │   └── api.js             # API calls
│   ├── styles/
│   │   └── App.css            # Global styles
│   ├── App.jsx                # Router config
│   └── main.jsx               # Entry point
├── index.html
├── vite.config.js
├── .gitignore
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start dev server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Features

- User signup and login
- Forgot password with email
- Password reset with token
- Responsive gradient UI
- Form validation
