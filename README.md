# AI Trip Planner

## Overview

AI Trip Planner is a sophisticated web application that helps users plan their trips using artificial intelligence. The app leverages Google's OAuth 2.0 for secure authentication, providing a seamless and trustworthy user experience.

## Features

- **AI-Powered Trip Planning**: Utilizes advanced AI algorithms to create personalized travel itineraries.
- **Google Authentication**: Secure login using Google's OAuth 2.0 protocol.
- **User Profiles**: Personalized user accounts to save and manage trip plans.
- **Responsive Design**: Fully responsive web application that works on various devices and screen sizes.

## Tech Stack

- **Frontend**: React
- **Styling**: TailwindCSS
- **Backend**: Firebase
- **Authentication**: Google OAuth 2.0
- **Language**: JavaScript
- **AI Integration**: Gemini AI

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ai-trip-planner.git
cd ai-trip-planner
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env file in the root directory and add your Firebase and Google OAuth credentials:

```bash

REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_GEMINI_AI_API_KEY=your_gemini_ai_api_key
```

4. Run the development server:

```bash
npm start
```
