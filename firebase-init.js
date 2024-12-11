import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAQ6TVoiHDNE58bz-hmYabP6FD6_iqEdQ",
  authDomain: "controle-de-gastos-3703a.firebaseapp.com",
  projectId: "controle-de-gastos-3703a",
  storageBucket: "controle-de-gastos-3703a.appspot.com",
  messagingSenderId: "697815545565",
  appId: "1:697815545565:web:d38bc8df64b95b65234d34"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
