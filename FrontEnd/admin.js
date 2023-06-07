const token = sessionStorage.getItem("token");

// Récupération du DOM
const headerElement = document.querySelector("header");
if (token) {

    // Création de nouveaux éléments du DOM
const headerDiv = document.createElement("div");
headerDiv.className = "adminBar";

console.log(headerDiv)
headerElement.insertAdjacentElement("beforebegin", headerDiv);


const publishChanges = document.createElement("button");
publishChanges.innerHTML = "publier les changements";
publishChanges.classList.add("changes");

    // Ajout du bouton à la div
headerDiv.appendChild(publishChanges);


const modeEdition = document.createElement("a");
modeEdition.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
</svg> Mode Edition`;
modeEdition.classList.add("modeEdit");

    // Ajout de l'ancre à la div
headerDiv.appendChild(modeEdition);

// Récupération du DOM
const articleElement = document.querySelector("article");
    // Création de nouveaux éléments du DOM
const modifyPhoto = document.createElement("a");
modifyPhoto.className = "modifyPhoto";
console.log(articleElement)

articleElement.insertAdjacentElement("afterend", modifyPhoto);
modifyPhoto.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
</svg> modifier`;

// Récupération du DOM
const categoriesElement = document.querySelector(".categories");
     // Création élément du DOM
const modifyProjects = document.createElement("a");
modifyProjects.className = "modifyProjects";
console.log(categoriesElement)

categoriesElement.insertAdjacentElement("beforebegin", modifyProjects);
modifyProjects.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
    </svg> modifier`;



modifyProjects.addEventListener("click", () => {
    const modalWrap = document.createElement("div");
    modalWrap.className = "modal-wrap";

    const bodyElement = document.querySelector("body");
    bodyElement.classList.add("opacity");
   
    // Ajoute la modal à l'élément body du document
    document.body.appendChild(modalWrap);
    
    // Contenu HTML de la modal
    const modalContent = `<form class="modal-dialog">
     
        <div class="modal-top">
            <svg class="icon-cross closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
            <h2 id="modal-title">Galerie photo</h2>
        </div>
        <div class="modal-gallery"></div>
        <div class="modal-actions">
             <hr>
             <input type="button" value="Ajouter une photo" id="sendPhoto">
             <p class="delete-gallery">Supprimer la galerie</p>
        </div>
         
            </form>`;
    
function generateModal () {
    return new Promise ((resolve, reject) => {
        modalWrap.innerHTML = modalContent;
        resolve({success:'ok'})
    })
}
    // Appelle la fonction generateModal et effectue des opérations supplémentaires une fois que la promesse est résolue
    generateModal().then(() => {
        worksGallery = document.querySelector(".modal-gallery");
        //Appelle la fonction getWorks()
        getWorks();
    
        // Attend 100 millisecondes pour s'assurer que les images sont chargées
        setTimeout(() => {

        // Sélectionne toutes les balises img dans worksGallery
        const images = worksGallery.querySelectorAll("img");
        
            // Pour chaque image...
            images.forEach((element) => {
                const trash = document.createElement("div");
                const editLink = document.createElement("div");
                editLink.innerHTML = '<a href="#">éditer</a>';
                editLink.className = "edit-link"
                trash.innerHTML = `<a>
                    <svg class="icon-trash" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                    </svg>
                    </a>`;
                trash.href = ""

                element.insertAdjacentElement("afterend", editLink);
                element.insertAdjacentElement("beforebegin", trash);   
                
            });
        },
        100)
    });

function closeModalProjects() {
    //const modalWrap = document.querySelector(".modal-wrap");
    const closeModalBtn = modalWrap.querySelector(".closeModal");
    // Supprime la modal au clic du bouton de fermeture
    closeModalBtn.addEventListener("click", () => {
      modalWrap.remove();
      bodyElement.classList.remove("opacity");
    });
  
    const outsideClickModal = (event) => {
      // Vérifie si l'élément cliqué n'est pas à l'intérieur de la modal
      // et si l'élément cliqué n'est pas contenu dans "modifier"
      //const modifyProjects = document.querySelector(".modifyProjects");
      if (
        !modalWrap.contains(event.target) &&
        !modifyProjects.contains(event.target)
      ) {
        modalWrap.remove();
        // Supprime l'event "click" une fois la modal fermée
        document.removeEventListener("click", outsideClickModal);
  
        bodyElement.classList.remove("opacity");
      }
    };
  
    // Ajoute l'event à l'ensemble du document HTML
    document.addEventListener("click", outsideClickModal);
  }
// Appelle la fonction pour configurer les événements de fermeture de la modal
closeModalProjects();


    const sendPhotoInput = document.querySelector("#sendPhoto");
    const iconCrossElement = document.querySelector(".icon-cross");

    sendPhotoInput.addEventListener("click", (e) => {
        // Empêche la soumission automatique du formulaire
        e.preventDefault();

    // Récupération des éléments du DOM
    const modalTitle = document.querySelector("#modal-title");
    const deleteGallery = document.querySelector(".delete-gallery");

    // Modification des éléments
    modalTitle.textContent = "Ajout photo";

    worksGallery.className = "display";

    const divAddImage = document.createElement("div");
    console.log(divAddImage)
    divAddImage.className = "container-photo";
    divAddImage.innerHTML = `<svg class="picture" width="58" height="46" viewBox="0 0 58 46" xmlns="http://www.w3.org/2000/svg"><path d="M57 0H1C0.448 0 0 0.447 0 1V45C0 45.553 0.448 46 1 46H57C57.552 46 58 45.553 58 45V1C58 0.447 57.552 0 57 0ZM56 44H2V2H56V44Z" fill="#B9C5CC"/
        <path d="M16 22.138C19.071 22.138 21.569 19.64 21.569 16.57C21.569 13.498 19.071 11 16 11C12.929 11 10.431 13.498 10.431 16.569C10.431 19.64 12.929 22.138 16 22.138ZM16 13C17.968 13 19.569 14.602 19.569 16.569C19.569 18.536 17.968 20.138 16 20.138C14.032 20.138 12.431 18.537 12.431 16.57C12.431 14.603 14.032 13 16 13Z" fill="#B9C5CC"/>
        <path d="M7.00004 40C7.23404 40 7.47004 39.918 7.66004 39.751L23.973 25.389L34.275 35.69C34.666 36.081 35.298 36.081 35.689 35.69C36.08 35.299 36.08 34.667 35.689 34.276L30.882 29.469L40.063 19.415L51.324 29.738C51.731 30.111 52.364 30.083 52.737 29.676C53.11 29.269 53.083 28.636 52.675 28.263L40.675 17.263C40.479 17.084 40.218 16.995 39.955 17.001C39.69 17.013 39.44 17.13 39.261 17.326L29.467 28.053L24.724 23.31C24.35 22.937 23.752 22.918 23.356 23.266L6.33904 38.249C5.92404 38.614 5.88404 39.246 6.24904 39.661C6.44704 39.886 6.72304 40 7.00004 40Z" fill="#B9C5CC"/>
        </svg>
        <input class="chooseFile" type="file" id="choose-file">
        <img src="" alt="" id="">
        <button id="addPhoto" type="button">+ Ajouter photo</button>
        <p>jpg, png : 4mo max</p>`;

    const divTitleCategoryPhoto = document.createElement("div");
    console.log(divTitleCategoryPhoto)
    divTitleCategoryPhoto.className = "form-title-category";
    divTitleCategoryPhoto.innerHTML = `<form class="titleCategoryPhoto" action="#" method="post">
			<label class="titlePhoto" for="title">Titre</label>
			<input type="text" name="title" id="title" required>
            <label class="categoryphoto" for="cat">Catégorie</label>
			<select id="cat" required>
            <option value="catégorie 1">Catégorie 1</option>
            </select>
        </form>`;
    
    modalTitle.insertAdjacentElement("afterend", divAddImage);
    divAddImage.insertAdjacentElement("afterend", divTitleCategoryPhoto);
    
    sendPhotoInput.setAttribute("type", "submit");
    sendPhotoInput.setAttribute("value", "Valider");
    sendPhotoInput.setAttribute("id", "validPhoto");

    deleteGallery.remove();

    const backArrow = document.createElement("a");
    backArrow.href = "";
    iconCrossElement.insertAdjacentElement("afterend", backArrow);
    backArrow.innerHTML = `<svg class="icon-arrow" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.3459 6.91164H2.14392L7.58919 1.48731C7.84495 1.23155 7.84495 0.817527 7.58919 0.562423C7.33343 0.306666 6.9194 0.306666 6.6643 0.562423L0.188882 7.03724C-0.0629605 7.28908 -0.0629605 7.71028 0.188882 7.96213L6.66436 14.4376C6.92011 14.6934 7.33414 14.6934 7.58924 14.4376C7.845 14.1818 7.845 13.7678 7.58924 13.5127L2.14392 8.21979H20.3459C20.7069 8.21979 20.9999 7.92673 20.9999 7.56571C20.9999 7.2047 20.7069 6.91164 20.3459 6.91164Z"/>
    </svg>`;


});


setTimeout(() => {
    const deleteWorks = worksGallery.querySelectorAll(".icon-trash");
    const worksId = worksGallery.querySelectorAll("[data-work-id]");
    console.log(worksId);
    deleteWorks.forEach((deleteWork, index) => {
        deleteWork.addEventListener ("click", (e) => {
            e.preventDefault();
            
            const workId = worksId[index].getAttribute("data-work-id");
            console.log("id", workId);

            fetch(`http://localhost:5678/api/works/${workId}`, {
            method: "DELETE",
            headers: {
                "Accept": '*/*',
                "Authorization": `Bearer ${token}`
            }
        })
            .then(response => response)
            .then(data => {
                console.log("Image supprimée avec succès");
            })
            .catch(error => {
                console.log("Une erreur s'est produite lors de la suppression de l'image", error);
            });
    });
    });
    }, 1000)
}
)

}
