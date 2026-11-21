// Récupération des sections
const accueil = document.getElementById("accueil");
const reservation = document.getElementById("reservation");
const services = document.getElementById("services");

// Récupération des boutons du menu
const btnAccueil = document.getElementById("btnAccueil");
const btnReservation = document.getElementById("btnReservation");
const btnServices = document.getElementById("btnServices");

// Bouton de réservation
const btnReserver = document.getElementById("btnReserver");

// Navigation Accueil
btnAccueil.addEventListener("click", function() {
    accueil.style.display = "block";
    reservation.style.display = "none";
    services.style.display = "none";
});

// Navigation Réservation
btnReservation.addEventListener("click", function() {
    accueil.style.display = "none";
    reservation.style.display = "block";
    services.style.display = "none";
});

// Navigation Services
btnServices.addEventListener("click", function() {
    accueil.style.display = "none";
    reservation.style.display = "none";
    services.style.display = "block";
});

// Fonction de réservation
btnReserver.addEventListener("click", reserver);

function reserver() {

    const depart = document.getElementById("depart").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const heure = document.getElementById("heure").value;

    const message = document.getElementById("message");

    if (depart == "" || destination == "" || date == "" || heure == "") {

        message.textContent = "Veuillez remplir tous les champs !";

    }

    else if (depart == destination) {

        message.textContent = "Le départ et la destination doivent être différents !";

    }

    else {

        document.getElementById("d1").textContent = depart;
        document.getElementById("d2").textContent = destination;
        document.getElementById("d3").textContent = date;
        document.getElementById("d4").textContent = heure;

        message.textContent = "Réservation effectuée avec succès !";
    }
}