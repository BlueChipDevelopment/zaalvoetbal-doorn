// Kopieer dit bestand naar environment.ts en vul de juiste waarden in.
// environment.ts staat in .gitignore zodat echte sleutels niet in git komen.
export const environment = {
  production: false,
  enableServiceWorker: false,
  skipAdminAuth: false,
  firebaseBaseUrl: 'https://your-region-your-project.cloudfunctions.net',
  spreadsheetId: 'YOUR_SPREADSHEET_ID',
  vapidPublicKey: 'YOUR_VAPID_PUBLIC_KEY',
  firebase: {
    apiKey: 'YOUR_FIREBASE_API_KEY',
    authDomain: 'your-project.firebaseapp.com',
    projectId: 'your-project',
    storageBucket: 'your-project.firebasestorage.app',
    messagingSenderId: 'YOUR_SENDER_ID',
    appId: 'YOUR_APP_ID',
    measurementId: 'YOUR_MEASUREMENT_ID',
  },
  adminEmails: [
    'admin@example.com',
  ],
};
