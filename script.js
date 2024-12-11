// script.js

import { auth, db } from './firebase-init.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { collection, query, where, getDocs, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

// Alternando entre login e registro
$(".veen .rgstr-btn button").click(function () {
  $(".veen .wrapper").addClass("move");
  $(".body").css("background", "#e874ae");
  $(".veen .login-btn button").removeClass("active");
  $(this).addClass("active");
});

$(".veen .login-btn button").click(function () {
  $(".veen .wrapper").removeClass("move");
  $(".body").css("background", "#e874ae");
  $(".veen .rgstr-btn button").removeClass("active");
  $(this).addClass("active");
});

// Função de login
$('#login').submit(function(e) {
  e.preventDefault();

  const input = $('#login-email-username').val(); // Pode ser email ou username
  const password = $('#login-password').val();

  // Verificar se o input é um email ou nome de usuário
  let emailToLogin = input;

  if (!input.includes('@')) {
    // Se não for um email (não contém '@'), é um username
    const q = query(collection(db, "users"), where("username", "==", input));

    getDocs(q)
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0].data();
          emailToLogin = userDoc.email; // Pega o email associado ao username
          loginWithEmail(emailToLogin, password); // Chama a função de login
        } else {
          alert('Nome de usuário não encontrado');
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
        alert('Erro ao buscar usuário');
      });
  } else {
    // Caso já tenha um email, faz o login diretamente
    loginWithEmail(emailToLogin, password);
  }
});

// Função para fazer o login com email e senha
function loginWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('Usuário logado:', user);
      window.location.href = 'home/home.html'; // Redireciona após login
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erro de login:', errorCode, errorMessage);
      alert('Erro de login: ' + errorMessage); // Exibe o erro
    });
}

// Função de registro
$('#register').submit(function(e) {
  e.preventDefault();

  const name = $('#register-name').val();
  const email = $('#register-email').val();
  const username = $('#register-username').val();
  const password = $('#register-password').val();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Salvar dados adicionais no Firestore
      setDoc(doc(db, "users", user.uid), {
        name: name,
        username: username,
        email: email
      })
      .then(() => {
        console.log("Usuário registrado e dados salvos no Firestore.");
        window.location.href = 'home/home.html';
      })
      .catch((error) => {
        console.error("Erro ao salvar dados no Firestore:", error);
        alert("Erro ao salvar dados no Firestore.");
      });
    })
    .catch((error) => {
      console.error("Erro de registro:", error);
      alert("Erro de registro: " + error.message);
    });
});