import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa3aKccdUFajT6zs9NSRIyRLYpDifsjgs",
  authDomain: "titan-50e74.firebaseapp.com",
  projectId: "titan-50e74",
  storageBucket: "titan-50e74.firebaseapp.com",
  messagingSenderId: "5930758953",
  appId: "1:5930758953:web:15943cf5801240d9c47d38",
  measurementId: "G-ZNJ8P95R71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword (auth, email, password)
    .then((userCredential) => {
      window.location.href = "splash.html";
    })
    .catch((error) => {
      alert(error.message); // Mostra a mensagem de erro real
    });
});
