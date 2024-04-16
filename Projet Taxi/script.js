// Récupération des éléments du DOM
const contactForm = document.querySelector('#contact-form');
const confirmationMessage = document.querySelector('#confirmation-message');
const gallery = document.querySelector('#gallery');

// Écouteur d'événement pour le formulaire de contact
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Simulation de l'envoi du message
    setTimeout(function() {
        contactForm.reset(); // Réinitialise le formulaire
        confirmationMessage.style.display = 'block'; // Affiche le message de confirmation
        setTimeout(function() {
            confirmationMessage.style.display = 'none'; // Cache le message de confirmation après 3 secondes
        }, 3000);
    }, 1000);
});

// Génération de la galerie de photos de la flotte de taxis
const images = ['taxi arras 1.jpg', 'taxi arras 2.jpg', 'taxi arras 3.jpg']; // Remplacez avec les noms de vos images
images.forEach(image => {
    const img = document.createElement('img');
    img.src = 'images/' + image; // Assurez-vous que le chemin d'accès est correct
    img.alt = 'Taxi';
    gallery.appendChild(img);
});


// script.js

// Fonction pour calculer la distance entre deux points géographiques en utilisant la formule de la distance euclidienne
function distance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Rayon de la Terre en km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance en km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}