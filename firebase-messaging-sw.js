importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyB0FpYJytVZuHjtHjL5-RDK1MlIEEi6K6c",
  authDomain: "private-chat-4f4b9.firebaseapp.com",
  projectId: "private-chat-4f4b9",
  messagingSenderId: "641108436601",
  appId: "1:641108436601:web:f67fdadc0d76bba11116a8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(() => {
  self.registration.showNotification("💗 H & K", {
    body: "",
    icon: "icon-192.png",
    badge: "icon-192.png",
    silent: false
  });
});
