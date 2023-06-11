/////
// CONSTANTES / VARIABLES
/////


// Récupération du DOM
const form = document.querySelector(".displayLogin");
const errorMessage = document.querySelector(".errorMessage")

/////
// FONCTIONS
/////

/**
 * Récupére les données
 */





//ajoute un event "submit" du formulaire
form.addEventListener("submit", (event) => {
  event.preventDefault();// Empêche le comportement par défaut du formulaire qui est de recharger la page

  //récupére les valeurs id des champs de formulaire
  const formEmail = document.getElementById("email").value;
  const formPassword = document.getElementById("pass").value;

  //constante des données à envoyer dans la requête
  const data = {
    "email": formEmail,
    "password": formPassword
  };

  //effectue une requête POST à l'API
  fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"//définir le type de contenu de la requête
    },
    body: JSON.stringify(data),//convertir les données en chaîne JSON et l'envoyer dans le body de la requête
  })
    .then(response => response.json())//convertir la réponse en JSON
    .then(data => {
      // Récupére le token de la réponse de l'API
      const token = data.token; 
      // Stocke le token dans la sessionStorage
      sessionStorage.setItem("token", token);

      // condition pour validation ou non des identifiants de connexion
    if (!token) {
        //return console.log("identifants invalides");
        errorMessage.textContent = "Erreur dans l'identifiant ou le mot de passe"; // Afficher le message d'erreur
        errorMessage.classList.add("visible"); // Ajoute la classe pour afficher la bulle d'erreur
        errorMessage.classList.remove("hidden"); // Affiche le message d'erreur en supprimant la classe
    } else {
        //redirige vers la page d'accueil  
        return window.location.href = "index.html",
          console.log("ok");
      };
    });
});

//Ajoute un event "input" au formulaire pour masquer le message d'erreur lors de la saisie
form.addEventListener("input", () => {
    //supprime la classe "visible" pour masquer la bulle du message d'erreur
    errorMessage.classList.remove("visible");
    //ajoute la classe "hidden" pour masquer le message d'erreur
    errorMessage.classList.add("hidden");
});