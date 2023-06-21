// Récupération du token
const token = sessionStorage.getItem("token");

// Récupération du DOM
const headerElement = document.querySelector("header");
const articleElement = document.querySelector("article");
const categoriesElement = document.querySelector(".categories");
const bodyElement = document.querySelector("body");

// Création du DOM
    // Admin header
const headerDiv = document.createElement("div");
const publishChanges = document.createElement("button");
const modeEdition = document.createElement("a");
    // Admin features
const modifyPhoto = document.createElement("a");
const modifyProjects = document.createElement("a");
const modalContent = document.createElement("div");
let closeModalBtn = null;


if (token && token !== "undefined") {

//// Création du front admin ////

    // Ajout de la barre admin
    headerDiv.classList.add("adminBar");
    // Insertion de headerDiv juste avant l'élément headerElement
    headerElement.insertAdjacentElement("beforebegin", headerDiv);

    // Ajout du bouton de publication
    publishChanges.innerHTML = "publier les changements";
    publishChanges.classList.add("changes");
    headerDiv.appendChild(publishChanges);

    // Ajout du mode édition
    modeEdition.classList.add("modeEdit");
    modeEdition.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
    </svg> Mode édition`;
    headerDiv.appendChild(modeEdition);

    // Modification de la galerie
    modifyPhoto.classList.add("modifyPhoto");
    modifyPhoto.classList.remove("hidden");
    modifyPhoto.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
    </svg> modifier`;
    // Insertion de modifyPhoto juste après l'élément articleElement
    articleElement.insertAdjacentElement("afterend", modifyPhoto);

    // Modification de la gelerie
    modifyProjects.classList.add("modifyProjects");
    modifyProjects.classList.remove("hidden");
    modifyProjects.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/>
    </svg> modifier`;
    // Insertion de modifyProjects juste avant l'élément categoriesElement
    categoriesElement.insertAdjacentElement("beforebegin", modifyProjects);


/**
 * Désaffichage des catégories
 */ 
    function hideCategories() {
        categoriesDiv.remove();
    }
    hideCategories();  


/**
 * Loader 
 */ 
    function showLoader() {
        const loaderContainer = document.querySelector(".loader-container");
        loaderContainer.style.display = "block";
    }


/**
 * Création de la modale
 */ 
    function modalEdit() {
            bodyElement.classList.add("opacity");
            modalContent.innerHTML = `<div class="modal-dialog"> 
            <div class="loader-container">
                <div class="loader"></div>
                <div class="loading-text">Loading
                    <span id="loading-dots"></span>
                </div>
            </div>

            <div class="modal-top">
                <svg class="icon-cross closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
                <h2 id="modal-title">Galerie photo</h2>
            </div>
            <div class="modal-gallery"></div>
            <div class="modal-actions">
                <hr class="line-modal1">
                <input type="button" value="Ajouter une photo" id="sendPhoto">
                <p class="delete-gallery">Supprimer la galerie</p>
            </div>
            
                </div>`;
            document.body.appendChild(modalContent);
            
            const sendPhotoInput = document.querySelector("#sendPhoto");
            // const sendPhotoInput = document.getElementById("sendPhoto");
            closeModalBtn = modalContent.querySelector(".closeModal");

            modalGallery();
            closeModal(closeModalBtn);
            addNewPhoto(sendPhotoInput);
    }


/**
 * Ouverture de la galerie dans la modale
 */ 
    function openModal() {
        modifyProjects.addEventListener("click", () => {
            modalEdit();
        });
    }
    openModal();


/**
 * Affichage de la galerie dans la modale 
 */ 
    function modalGallery() {
        // Récupération de la galerie
        worksGallery = document.querySelector(".modal-gallery");

        getWorks().then(() => {
            const images = worksGallery.querySelectorAll("img");
            // Pour chaque image...
            images.forEach((element, index) => {

                // Ajout du lien d'édition
                const editLink = document.createElement("div");
                editLink.innerHTML = '<a href="#">éditer</a>';
                editLink.classList.add("edit-link");
                // Insertion de editLink juste après l'élément image
                element.insertAdjacentElement("afterend", editLink);

                // Ajout des boutons de suppression "poubelles"
                const deleteContainer = document.createElement("div");
                deleteContainer.classList.add("move-delete");
                deleteContainer.innerHTML = `<div class="move">
                    <button class="btn-move">
                    <svg class="icon-move" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4V224H109.3l9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4H224V402.7l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4V288H402.7l-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4H288V109.3l9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z"/>
                        </svg>
                    </button>
                    </div>
                    <div class="delete">
                    <button class="btn-trash">
                    <svg class="icon-trash" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                       <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/>
                        </svg>
                    </button>
                    </div>`;
                // Insertion de deleteContainer juste avant l'élément image
                element.insertAdjacentElement("beforebegin", deleteContainer);
    
                    // Cache le bouton de déplacement au départ
                    const moveButton = deleteContainer.querySelector(".move");
                    moveButton.style.opacity = 0;

                    // Gestion des événements de souris pour afficher/masquer le bouton de déplacement
                    function showMoveButton() {
                        moveButton.style.opacity = 1;
                    };

                    function hideMoveButton() {
                        moveButton.style.opacity = 0;
                    };

                    // Gestion des écouteurs d'événements de souris à l'image, au bouton et à la div de déplacement
                    element.addEventListener("mouseover", showMoveButton);
                    element.addEventListener("mouseout", hideMoveButton);
                    moveButton.addEventListener("mouseover", showMoveButton);
                    moveButton.addEventListener("mouseout", hideMoveButton);
                    
                deleteImage(deleteContainer, index);  

            });
        });
    }


/**
 * Suppression d'une image
 */ 
    function deleteImage(deleteContainer, index) {
        deleteContainer.querySelector(".btn-trash").addEventListener("click", async () => {
            const worksId = worksGallery.querySelectorAll("[data-work-id]");
            const workId = worksId[index].getAttribute("data-work-id");
            const removeModal = worksId[index];
            const removeGallery = document.querySelector(`div[data-work-id="${workId}"]`);

            return await fetch(`http://localhost:5678/api/works/${workId}`, {
                method: "DELETE",
                headers: {
                    "Accept": `*/*`,
                    "Authorization": `Bearer ${token}`
                }
            }),
            
            removeModal.remove(),
            removeGallery.remove();
        });
    }
      

/**
 * Modal d'ajout d'une nouvelle photo
 */  
    function addNewPhoto(sendPhotoInput) {
        sendPhotoInput.addEventListener("click", (e) => {
            e.stopPropagation();
            modalContent.innerHTML = `<div class="modal-dialog"> 
        
            <div class="modal-top">
                <svg class="icon-arrow" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3459 6.91164H2.14392L7.58919 1.48731C7.84495 1.23155 7.84495 0.817527 7.58919 0.562423C7.33343 0.306666 6.9194 0.306666 6.6643 0.562423L0.188882 7.03724C-0.0629605 7.28908 -0.0629605 7.71028 0.188882 7.96213L6.66436 14.4376C6.92011 14.6934 7.33414 14.6934 7.58924 14.4376C7.845 14.1818 7.845 13.7678 7.58924 13.5127L2.14392 8.21979H20.3459C20.7069 8.21979 20.9999 7.92673 20.9999 7.56571C20.9999 7.2047 20.7069 6.91164 20.3459 6.91164Z"/>
                </svg>
                <svg class="icon-cross closeModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
                <h2 id="modal-title">Ajout Photo</h2>
            </div>
                <form class="titleCategoryPhoto" id="photoForm" action="" method="">
                    <div class="container-photo">
                        <svg class="picture" width="58" height="46" viewBox="0 0 58 46" xmlns="http://www.w3.org/2000/svg"><path d="M57 0H1C0.448 0 0 0.447 0 1V45C0 45.553 0.448 46 1 46H57C57.552 46 58 45.553 58 45V1C58 0.447 57.552 0 57 0ZM56 44H2V2H56V44Z" fill="#B9C5CC"/>
                            <path d="M16 22.138C19.071 22.138 21.569 19.64 21.569 16.57C21.569 13.498 19.071 11 16 11C12.929 11 10.431 13.498 10.431 16.569C10.431 19.64 12.929 22.138 16 22.138ZM16 13C17.968 13 19.569 14.602 19.569 16.569C19.569 18.536 17.968 20.138 16 20.138C14.032 20.138 12.431 18.537 12.431 16.57C12.431 14.603 14.032 13 16 13Z" fill="#B9C5CC"/>
                            <path d="M7.00004 40C7.23404 40 7.47004 39.918 7.66004 39.751L23.973 25.389L34.275 35.69C34.666 36.081 35.298 36.081 35.689 35.69C36.08 35.299 36.08 34.667 35.689 34.276L30.882 29.469L40.063 19.415L51.324 29.738C51.731 30.111 52.364 30.083 52.737 29.676C53.11 29.269 53.083 28.636 52.675 28.263L40.675 17.263C40.479 17.084 40.218 16.995 39.955 17.001C39.69 17.013 39.44 17.13 39.261 17.326L29.467 28.053L24.724 23.31C24.35 22.937 23.752 22.918 23.356 23.266L6.33904 38.249C5.92404 38.614 5.88404 39.246 6.24904 39.661C6.44704 39.886 6.72304 40 7.00004 40Z" fill="#B9C5CC"/>
                        </svg>
                        <label class="photoLabel" for="photoInput"></label>
                        <input class="chooseFile" type="file" id="photoInput" accept=".jpg, .png" onchange="previewFile(); checkInput();">
                        <img id="image">
                        <button id="addPhoto" type="button">+ Ajouter photo</button>
                        <p id="file-size-info">jpg, png : 4 Mo max</p>
                        <span id="imageOverSize" class="error"></span>
                    </div>
                    <span id="imageError" class="error"></span>
                    <label class="titlePhoto" for="title">Titre</label>
                    <input type="text" name="title" id="title" onkeyup="checkInput()" required>
                    <span id="titleError" class="error"></span>
                    <label class="categoryphoto" for="cat">Catégorie</label>
                    <select id="cat" onchange="checkInput()" required>
                        <option value="" class="default-option" disabled selected>Choisir ci-dessous...</option>
                    </select>
                    <span id="categoryError" class="error"></span>
                    <hr class="line-modal2">
                    <input type="button" value="Valider" id="validPhoto">

                </form>
                
            </div>`;

             // Ajout des catégories pour assigner une catégorie à la nouvelle image
             getCategories().then((elements) => {
                const categoriesDropdown = elements;
                categoriesDropdown.forEach((element) => {
                  document.getElementById("cat").innerHTML += `<option value="${element.id}">${element.name}</option>`;
                });
            });

            document.body.appendChild(modalContent);
            closeModalBtn = modalContent.querySelector(".closeModal");
            const modalBackArrow = modalContent.querySelector(".icon-arrow");
            const sendNewWork = modalContent.querySelector("#validPhoto");
            //const sendNewWork = modalContent.getElementById("validPhoto");

            closeModal(closeModalBtn);
            backModalEdit(modalBackArrow);
            addImage(sendNewWork);
        });
    }        

/**
 * Insertion d'une nouvelle photo
 */ 
    function previewFile() {
        const preview = document.getElementById("image");
        const file = document.getElementById("photoInput").files[0];
        const addBtn = document.getElementById("addPhoto");
        const fileSizeInfo = document.getElementById("file-size-info");
        const reader = new FileReader();

        reader.addEventListener("load", function() {
            // Convertit le fichier image en une chaîne de caractères base64
            preview.src = reader.result;
        }, false);

        if (file) {
            const fileSize = file.size;
            const maxFileSize = 4 * 1024 * 1024; // 4194304 = 4 Mo Conversion de la taille du fichier

            if (
                (file.type === "image/jpeg" || file.type === "image/png") &&
                fileSize <= maxFileSize) {    
                document.getElementById("imageOverSize").textContent = ""; // Efface le message d'erreur s'il existe
                addBtn.style.display = "none";
                fileSizeInfo.style.display = "none";
                document.getElementById("file-size-info").style.display = "none";
                reader.readAsDataURL(file);
            } else {
                document.getElementById("file-size-info").style.display = "none";
                // Le fichier n'est pas conforme, affichage d'un message d'erreur
                document.getElementById("imageOverSize").textContent =
                    "Le fichier doit être au format JPG ou PNG et ne doit pas dépasser 4 Mo.";
                document.getElementById("photoInput").value = "";
            }
        }

    const inputPhoto = document.getElementById("photoInput");
    
    // Ajout d'un écouteur d'événement "change" pour la séléction de fichier lorsque files change
    inputPhoto.addEventListener("change", previewFile);
}

/**
 * Contrôle des champs du formulaire
 */
    function checkInput() {
        const checkTitle = document.getElementById("title").value;
        const checkCategory = document.getElementById("cat").value;
        const checkImageFile = document.getElementById("photoInput").files[0];
        const validPhotoButton = document.getElementById("validPhoto");

        if(checkTitle.length > 0 && checkCategory && checkImageFile) {
            validPhotoButton.classList.add("valid-button-green");  
        } 
    }

/**
 * Ajout d'une image
 */
    async function addImage(sendNewWork) {
        await sendNewWork.addEventListener("click", async (e) => {

            //Récupérer les valeurs des champs du formulaire
            const imageFile = document.getElementById("photoInput").files[0];
            const title = document.getElementById("title").value;
            const category = document.getElementById("cat").value;

            document.getElementById("imageError").textContent = "";
            document.getElementById("titleError").textContent = "";
            document.getElementById("categoryError").textContent = "";

            // Vérification des champs du formulaire
            if (!imageFile || title === "" || category === "") {
                if (!imageFile) {
                    document.getElementById("imageError").textContent = "Veuillez ajouter une photo.";
                } 
                if (title === "") {
                    document.getElementById("titleError").textContent = "Veuillez saisir un titre.";
                }
                if (category === "") {
                    document.getElementById("categoryError").textContent = "Veuillez sélectionner une catégorie.";
                } 
            }

            else {
                const formData = new FormData();
                formData.append('image', imageFile);
                formData.append('title', title);
                formData.append('category', category);

                return await fetch(`http://localhost:5678/api/works`, {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                    body: formData
                })
                .then(response => response.json())
                .then(data => {

                    // Ajout de la photo dans la galerie
                    const newImage = document.createElement("div");
                    newImage.setAttribute("data-work-id", data.id);

                    newImage.innerHTML = `<figure>
                        <img src = "${data.imageUrl}">
                        <figcaption>${data.title}</figcaption>
                    </figure>`;

                    const refreshGallery = document.querySelector(".gallery");
                    refreshGallery.appendChild(newImage);

                    // Message de succès
                    const success = document.createElement("div");
                    console.log("succès:", success)

                    success.innerHTML = `<div id="toaster">
                        <span id="toasterMessage">Votre image a bien été ajoutée !</span>
                        </div>`;
                    document.body.appendChild(success);

                    setTimeout(function() {
                        success.remove();
                    }, 3000);

                })
                .catch(error => console.log(error)),
                document.getElementById("photoForm").reset(),
                document.getElementById("image").src = "",
                document.getElementById("addPhoto").style ="",
                document.getElementById("file-size-info").style = "",
                document.getElementById("validPhoto").style.backgroundColor = "grey";
            }
        });
    };


/**
 * Retour à modalEdit 
 */ 
    function backModalEdit(modalBackArrow) {
        modalBackArrow.addEventListener("click", (e) => {
        e.stopPropagation();
        modalEdit();
        });
    }


/**
 * Fermeture de la modale
 */ 
    function closeModal(closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
            modalContent.remove();
            bodyElement.classList.remove("opacity");
        });

        const outsideClickModal = (event) => {
            if (
                !modalContent.contains(event.target) &&
                !modifyProjects.contains(event.target)
            ) {
                modalContent.remove();
                // Supprime l'event "click" une fois la modale fermée
                document.removeEventListener("click", outsideClickModal);
                bodyElement.classList.remove("opacity");
            }
        };
        document.addEventListener("click", outsideClickModal);
    }


/**
 *  Déconnexion et suppression du token
 */
    function logout() {
        logoutLink.addEventListener("click", () => {
            // Supprime le token du sessionStorage
            sessionStorage.removeItem("token");
            // Mise à jour du statut de connexion
            updateLoginStatus();
        });
    };
    logout();

} // Fermeture du if(!token)
