/////
// CONSTANTES / VARIABLES
/////

// Récupération du DOM
let worksGallery = document.querySelector(".gallery");
const h2Element = document.querySelector("#portfolio > h2");
const logoutLink = document.getElementById("logoutLink");
const loginConnect = document.querySelector(".loginConnect");

// Création de nouveaux éléments du DOM
const categoriesDiv = document.createElement("div");

//// Gestion des catégories ////

// Ajout des catégories
categoriesDiv.classList.add("categories");
h2Element.insertAdjacentElement("afterend", categoriesDiv);
const projectsCategories = document.querySelector(".categories");

/**
 * Affichage des catégories
 */ 
function displayCategories(dataCategories) {
    // Ajout du bouton "tous" dans projectsCategories
    const allCategories = document.createElement("button");
    allCategories.innerHTML = `Tous`;
    //ajout de 2 class all-category et buttonCategory
    allCategories.classList.add("all-category", "buttonCategory");
    
    projectsCategories.appendChild(allCategories);

        // Event au clic sur le bouton Tous
        allCategories.addEventListener("click", () => {
            console.log("click tous");
            // Suppression des classes "selected" et "text-white" de tous les boutons de catégorie
            const categoryButtons = document.querySelectorAll(".buttonCategory");
            categoryButtons.forEach(button => {
                button.classList.remove("selected");
                button.classList.remove("text-white");
            });

            // Ajout des classes "selected" et "text-white" au bouton "Tous"
            allCategories.classList.add("selected");
            allCategories.classList.add("text-white");

            getWorks(null);
        });

        dataCategories.forEach(element => {
            const btnCategory = document.createElement("button"); 
            btnCategory.classList.add("buttonCategory");
            btnCategory.innerHTML = `${element.name}`;

            // Ajout au DOM
            projectsCategories.appendChild(btnCategory);

            btnCategory.addEventListener("click", () => {
    
                const categoryButtons = document.querySelectorAll(".buttonCategory");
                categoryButtons.forEach(button => {
                    button.classList.remove("selected");
                    button.classList.remove("text-white");
                });

                btnCategory.classList.add("selected");
                btnCategory.classList.add("text-white");
      

                // Suppression de la classe "text-white" du bouton "Tous"
                allCategories.classList.remove("text-white");

                getWorks(element.id);
            });
        });
}


//// Gestion des projets ////

/**
 * Affichage de la liste des projets
 */ 
function displayWorks(dataWorks, categoryID) {

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

/**
 * Gestion du statut de connexion
 */ 
    function updateLoginStatus() {
        const token = sessionStorage.getItem("token");

        if (token && token !== "undefined") {
            loginConnect.textContent = "logout";
            logoutLink.classList.add("bold-black");
        }
        else {
            loginConnect.textContent = "login";
        }
    }
// Appelle la fonction updateLoginStatus() lors du chargement de la page
document.addEventListener("DOMContentLoaded", updateLoginStatus);


//// Appels API ////

/**
 * Récupération API des catégories
 */ 
async function getCategories() {
    return await fetch("http://localhost:5678/api/categories")
    .then(response => response.json())
    .then(dataCategories => {
        displayCategories(dataCategories);
        return dataCategories;
    });
}
getCategories()


/**
 * Récupération API des projets
 */
async function getWorks (categoryID = null)  { 
    return await fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(dataWorks => {
            displayWorks(dataWorks, categoryID);
            return dataWorks;
        });
};
getWorks()