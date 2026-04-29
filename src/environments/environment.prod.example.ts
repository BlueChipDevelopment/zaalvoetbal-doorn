// Kopieer dit bestand naar environment.prod.ts en vul de juiste waarden in.
export const environment = {
  production: true,
  enableServiceWorker: true,
  skipAdminAuth: false,
  firebaseBaseUrl: 'https://your-region-your-project.cloudfunctions.net',
  supabaseUrl: 'https://YOUR_PROJECT_REF.supabase.co',
  supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY',
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
