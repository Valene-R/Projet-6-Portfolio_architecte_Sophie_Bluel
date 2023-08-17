/////
// CONSTANTES / VARIABLES
/////

// Récupération du DOM
const form = document.querySelector(".displayLogin");
const errorMessage = document.querySelector(".errorMessage");


/////
// FONCTIONS
/////

/**
 * Envoi des données de formulaire à l'API
 */
function sendData() {
    // Récupération des valeurs id des champs du formulaire
    const formEmail = document.getElementById("email").value;
    const formPassword = document.getElementById("pass").value; 

    // Constante des données à envoyer dans la requête
    const data = {
        "email": formEmail,
        "password": formPassword
    };

    // Effectue une requête POST à l'API
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"//définir le type de contenu de la requête
        },
        body: JSON.stringify(data), //convertir les données en chaîne JSON et l'envoyer dans le body de la requête
        })
        .then(response => response.json())//convertir la réponse en JSON
        .then(data => {
            // Récupération du token de la réponse de l'API
            const token = data.token; 
            // Stockage du token dans la sessionStorage
            sessionStorage.setItem("token", token);

        // Condition pour validation ou non des identifiants de connexion
        if (!token) {
            errorMessage.textContent = "Erreur dans l'identifiant ou le mot de passe"; // Afficher le message d'erreur
            errorMessage.classList.add("visible"); // Ajoute la classe pour afficher le message d'erreur
            errorMessage.classList.remove("hidden"); // Supprime la classe pour afficher le message d'erreur
        } else {
            // Redirection vers la page d'accueil  
            return window.location.href = "index.html"
        };
    });
};

// EventListener pour soumettre le formulaire
form.addEventListener("submit", (e) => {
    e.preventDefault();// Empêche le comportement par défaut du formulaire qui est de recharger la page
    sendData();
});

// EventListener pour masquer le message d'erreur lors de la saisie
form.addEventListener("input", () => {
    // Suppression la classe "visible" pour masquer le message d'erreur
    errorMessage.classList.remove("visible");
    // Ajout de la classe "hidden" pour masquer le message d'erreur
    errorMessage.classList.add("hidden");
});
