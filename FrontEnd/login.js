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
  event.preventDefault();//empêcher le comportement par défaut du formulaire qui est de recharger la page

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
        errorMessage.textContent = "Identifiants invalides"; // Afficher le message d'erreur
        errorMessage.classList.add("visible"); // Ajoute la classe pour afficher la bulle d'erreur
        errorMessage.classList.remove("hidden");
    } else {
        //redirige vers la page d'accueil  
        return window.location.href = "index.html",
          console.log("ok");
      };
    });
});

//Ajoute un event "input" au formulaire pour masquer le message d'erreur lors de la saisie
form.addEventListener("input", () => {
    //supprime la class "visible" pour masquer la bulle du message d'erreur
    errorMessage.classList.remove("visible");
    //ajoute la class "hidden" pour masquer le message d'erreur
    errorMessage.classList.add("hidden");
});



// const apiURL =  "http://localhost:5678/api/users/login"

// const response = await fetch(apiURL, {
//   method: 'POST',
//   headers: {
//       'Content-type': 'application/json',
//       'Authorization': `Bearer ${token}`, // notice the Bearer before your token
//   },
//   body: JSON.stringify(yourNewData)
// })