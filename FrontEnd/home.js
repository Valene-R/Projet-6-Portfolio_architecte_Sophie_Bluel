/////
// CONSTANTES / VARIABLES
/////

// Récupération du DOM
let worksGallery = document.querySelector(".gallery")


const h2Element = document.querySelector("#portfolio > h2")
     // Création de nouveaux éléments du DOM
const categoriesDiv = document.createElement("div")
categoriesDiv.className = "categories"

console.log(h2Element)

h2Element.insertAdjacentElement("afterend", categoriesDiv)

const projectsCategories = document.querySelector(".categories")


/////
// FONCTIONS
/////



/**
 *  Récupère les catégories
 */
async function getCategories() {
    return await fetch("http://localhost:5678/api/categories")
       .then(response => response.json())
       .then(dataCategories => {
            displayCategories(dataCategories);
            return dataCategories;
        });
}

/**
 * Affiche les catégories
 */
const displayCategories = (dataCategories) => {

    // Ajout du bouton "tous" dans projectsCategories
    const allCategories = document.createElement("button")
    allCategories.innerHTML = `Tous`
    //ajout de 2 class all-category et buttonCategory
    allCategories.classList.add("all-category", "buttonCategory")
    
    projectsCategories.appendChild(allCategories)

    // Event au clic sur le bouton Tous
    allCategories.addEventListener("click", () => {
        console.log("click tous");
        getWorks(null);
    });

    // Boucle sur categories
    dataCategories.forEach(element => {

        // Ajout de l'élément dans projectsCategories
        const btnCategory = document.createElement("button")
        // ajout de la class buttonCategory 
        btnCategory.classList.add("buttonCategory")
        btnCategory.innerHTML = `${element.name}`

        // Ajout au DOM
        projectsCategories.appendChild(btnCategory)

        // Event au clic sur le bouton
        btnCategory.addEventListener("click", () => {
            getWorks(element.id)
        });
    });
}


/**
 * Récupère la liste des projets
 */
async function getWorks(categoryID = null) { 
    return await fetch("http://localhost:5678/api/works")
        .then(response => response.json())
        .then(dataWorks => {
            displayWorks(dataWorks, categoryID);
        });
}

/**
 * Affiche la liste des projets
 */
const displayWorks = (dataWorks, categoryID) => {

    //Réinitialise la liste des projets
    worksGallery.innerHTML = '';

    //Affiche les nouveaux travaux
    dataWorks.forEach(element => {
        if(categoryID === null || element.categoryId === categoryID){
            const works = document.createElement("div");

            // Définit l'attribut 'data-work-id' de l'élément 'works' sur l'ID du travail en cours 
            works.setAttribute("data-work-id", element.id);

            works.innerHTML = `<figure>
                <img src = "${element.imageUrl}">
                <figcaption>${element.title}</figcaption>
                </figure>`;

            worksGallery.appendChild(works);

        }    
    });
}  
 
       

/////
// INITIALISATION
/////

getCategories()
getWorks()



// Récupération du DOM
const logoutLink = document.getElementById("logoutLink");
const loginConnect = document.querySelector(".loginConnect");

/**
 * Gére les catégories cachées une fois l'utilisateur connecté
 */
function hideCategories() {
    // const categoriesDiv déjà créée pour créer une div
    categoriesDiv.remove();
}

/**
 * Gére le statut de connexion
 */
function updateLoginStatus() {
    
const token = sessionStorage.getItem("token");
const modifyProjects = document.querySelector(".modifyProjects");
const modifyPhotos = document.querySelector(".modifyPhoto");



    console.log("Modify Projects element", modifyProjects);
    console.log("Modify Photos element", modifyPhotos);

// Si token existe (true) alors retourne "logout", si token est indéfini (false) alors retourne "login" (opérateur ternaire)
   loginConnect.textContent = token ? "logout" : "login";

   if (token) {
    // Utilisateur connecté
    hideCategories();
    modifyProjects.classList.remove("hidden");
    modifyPhotos.classList.remove("hidden");
    // Ajoute une class pour caractère gras noir 
    logoutLink.classList.add("bold-black");
}
}

// Ajoute un event"click" sur le lien de déconnexion
logoutLink.addEventListener("click", () => {
    // Supprime le token du sessionStorage
    sessionStorage.removeItem("token");
    // Mise à jour du statut de connexion
    updateLoginStatus();
});

// Appelle la fonction updateLoginStatus() lors du chargement de la page
document.addEventListener("DOMContentLoaded", updateLoginStatus);
