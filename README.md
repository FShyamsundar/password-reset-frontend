# Password Reset Frontend

A modern, responsive React application for user authentication and password reset functionality.

## 🚀 Features

- User registration and login
- Forgot password with email verification
- Password reset with secure tokens
- Modern gradient UI design
- Responsive layout for all devices
- Form validation and error handling
- Loading states and user feedback
- Client-side routing with React Router

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: CSS3 with gradients and animations

## 📁 Project Structure

```
frontend/
├── public/
│   └── _redirects             # Netlify redirects for SPA routing
├── src/
│   ├── pages/
│   │   ├── Signup.jsx         # User registration page
│   │   ├── Login.jsx          # User login page
│   │   ├── ForgotPassword.jsx # Request password reset
│   │   ├── ResetPassword.jsx  # Reset password with token
│   │   └── Dashboard.jsx      # Protected dashboard page
│   ├── services/
│   │   └── api.js             # API service layer
│   ├── styles/
│   │   └── App.css            # Global styles and animations
│   ├── App.jsx                # Main app with routing
│   └── main.jsx               # Application entry point
├── index.html                 # HTML template
├── vite.config.js             # Vite configuration
├── .gitignore                 # Git ignore rules
├── package.json               # Dependencies and scripts
└── README.md                  # Documentation
```

## 🔧 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/FShyamsundar/password-reset-frontend.git
cd password-reset-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:
```env
VITE_API_URL=http://localhost:5000/api/auth
```

For production:
```env
VITE_API_URL=https://your-backend-url.com/api/auth
```

4. **Start development server**
```bash
npm run dev
```

App will run on `http://localhost:3000`

5. **Build for production**
```bash
npm run build
```

## 💻 Pages Overview

### 1. Signup Page (`/signup`)
- User registration form
- Fields: Name, Email, Password
- Redirects to login after successful signup

### 2. Login Page (`/login`)
- User authentication
- Fields: Email, Password
- Links to forgot password and signup
- Stores token in localStorage

### 3. Forgot Password (`/forgot-password`)
- Request password reset email
- Field: Email
- Sends reset link to user's email

### 4. Reset Password (`/reset-password/:token`)
- Reset password with token from email
- Fields: New Password, Confirm Password
- Validates token expiry (10 minutes)

### 5. Dashboard (`/dashboard`)
- Protected route (requires login)
- Displays user information
- Logout functionality

## 🎨 UI Features

- **Gradient Background**: Purple to blue gradient
- **Card Design**: White cards with shadow and rounded corners
- **Animations**: Smooth slide-up entrance animations
- **Responsive**: Mobile-first design
- **Form States**: Loading, error, and success states
- **Hover Effects**: Interactive button animations

## 📡 API Integration

The app communicates with the backend through `src/services/api.js`:

```javascript
// Signup
signup({ name, email, password })

// Login
login({ email, password })

// Forgot Password
forgotPassword({ email })

// Reset Password
resetPassword(token, { password })
```

## 🚀 Deployment

### Deploy on Netlify

1. **Push code to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push
```

2. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com)
   - Click **New site from Git**
   - Select your repository

3. **Build Settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

4. **Environment Variables**
   - Go to Site settings → Environment variables
   - Add: `VITE_API_URL` = `https://your-backend-url.com/api/auth`

5. **Deploy**
   - Click **Deploy site**
   - Wait for build to complete

### Deploy on Vercel

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

3. Add environment variable in Vercel dashboard

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.21.1",
  "axios": "^1.6.5"
}
```

## 🐛 Troubleshooting

**CORS Error:**
- Ensure backend has CORS enabled
- Check API_URL is correct

**Page Not Found on Refresh:**
- Verify `_redirects` file exists in `public/` folder
- Content: `/*    /index.html   200`

**API Connection Failed:**
- Check backend is running
- Verify VITE_API_URL in environment variables
- Check network tab in browser DevTools

**Build Errors:**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf .vite`

## 🔒 Security Notes

- Tokens stored in localStorage (consider httpOnly cookies for production)
- No sensitive data in frontend code
- Environment variables for API URLs
- Input validation on forms

## 📝 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## 📄 License

MIT License

## 👤 Author

FShyamsundar

## 🔗 Links

- Backend Repository: [password-reset-backend](https://github.com/FShyamsundar/password-reset-backend)
- Live Demo: [Coming Soon]
