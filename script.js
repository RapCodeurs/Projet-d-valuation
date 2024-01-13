// Récuperation des éléments

const button = document.getElementById("button");
const title = document.getElementById("titre");
const descriptionNew = document.getElementById("description");
const dateNew = document.getElementById("date");
const heureNew = document.getElementById("time");
const supprimer = document.getElementById("supprimer");

function ajouTaches() {
  // Récupération des valeurs des champs
  const titre = title.value;
  const description = descriptionNew.value;
  const date = dateNew.value;
  const heure = heureNew.value;

  // Création des éléments
  const element = document.createElement("li");
  // Ajout de l'élément HTML
  element.innerHTML = `<label>${titre} : ${description}</label><p>${date} : ${heure}</p>`;
  document.querySelector("ul").appendChild(element);

  // Suppression des éléments
  supprimer.addEventListener("click", function () {
    document.querySelector("ul").removeChild(element);
  });
}

button.addEventListener("click", ajouTaches);
