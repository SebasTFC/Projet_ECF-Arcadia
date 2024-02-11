import Route from "./Route.js";
import {allRoutes,websitename} from "./allRoute.js";

//Création d'une route pour la page 404(Page introuvable)
const route404 = new Route("404","Page introuvable","/pages/404.html");

// Fonction por récuper la route correspondant à une URL donnée
const getRouteByUrl = (url) => {
    let currentRoute = null;
    // Parcours de toutes les pour trouver la correspondance
    allRoutes.forEach((element) => {
        if(element.url == url) {
            currentRoute = element;
        }
    });
    // Si aucune correspondance est trouvée, on retourne la route 404
    if  (currentRoute!== null) {
        return currentRoute;
    } else {
        return route404;
    }
};

// Fonction pour charger le contenu de la page
const LoadContentPage = async() => {
    const path = window.location.pathname;
    //Récupération de l'URL actuelle
    const actualRoute = getRouteByUrl(path);
    //Récupération du contenu HTML de la route
    const html = await fetch(actualRoute.pathHtlm).then((data) => data.text())
    //Ajout du contenu HTML à l'element avec l'ID "main-page"
    document.getElementById("main-page").innerHTML = html;

    //Ajout du contenu Javascript
    if(actualRoute.pathJS != ""){
        //Création balise script
        var scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "text/javascript");
        scriptTag.setAttribute("src", actualRoute.pathJS);
    }
    //Changement du titre de la page
    document.title = actualRoute.title + " - " + websitename;
};

// Fonction pour gérer les événements de routage (clics sur les liens)
const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    //Mise à jour de l'URL dans l'historique du naviguateur
    window.history.pushState({}, "",event.target.href);
    //Chargement du contenu de la nouvelle page
    LoadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du naviguateur
window.onpopstate = LoadContentPage;
//Assignation de la fonction routeEvent à la proprièté route de la fenêtre
window.route = routeEvent;
//Chargement du contenu de la page au chargement initial
LoadContentPage();
