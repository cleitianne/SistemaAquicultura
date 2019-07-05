import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyDQs81Jh5ydzWGp6tID2XWh5K8CjiI8r2E",
    authDomain: "saga-6b320.firebaseapp.com",
    databaseURL: "https://saga-6b320.firebaseio.com",
    projectId: "saga-6b320",
    storageBucket: "saga-6b320.appspot.com",
    messagingSenderId: "15619950013"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()