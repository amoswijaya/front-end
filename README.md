# Front-End Project with Next.js & Firebase Authentication & Firestore Database

Welcome to the Front-End project built with Next.js and Firebase Authentication. This documentation will guide you through cloning, setting up, and running the app locally.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/amoswijaya/front-end.git
cd front-end

```

## Step 2: Install Dependencies

Install all required dependencies:

```bash
npm install
# or
yarn install
```

Step 3: Configure Firebase
Create a Firebase Project: Go to Firebase Console and create a new project.

Add a Web App: In your Firebase project, add a web application and copy the Firebase config.

Create .env.local: At the project root, create a .env.local file and add your Firebase config variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

Replace the placeholders with your actual Firebase config values.

## Step 4: Run the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and visit:

```
http://localhost:3000
```

### Project Structure

```
/app           - Next.js pages and routing
/components    - UI components (Header, Footer, etc.)
/firebase      - Firebase initialization and auth logic
/public       - Static files like images and favicon
/styles       - CSS and styling files
```

#### Features

- Firebase Authentication (Email/password login)

- Server-side Rendering (SSR) with Next.js

- Protected routes for authenticated users only

### Troubleshooting

- If you run into dependency issues, try deleting node_modules and package-lock.- json or yarn.lock and reinstall.

Make sure your Firebase project is properly configured and Authentication is enabled.
