document.addEventListener("DOMContentLoaded", function () {
    // Sélection des boutons par leur texte ou leur classe/type
    const btnWhatsapp = document.querySelector('button:nth-last-of-type(2)'); // Le bouton vert
    const btnEmail = document.querySelector('button:nth-last-of-type(1)'); // Le bouton rouge

    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", envoyerWhatsApp);
    }

    if (btnEmail) {
        btnEmail.addEventListener("click", envoyerEmail);
    }
});

// Fonction pour envoyer sur WhatsApp
function envoyerWhatsApp() {
    // Récupération des champs du formulaire
    const inputs = document.querySelectorAll('input, select, textarea');
    const nom = inputs[0] ? inputs[0].value : "";
    const telephone = inputs[1] ? inputs[1].value : "";
    const email = inputs[2] ? inputs[2].value : "";
    const service = inputs[3] ? inputs[3].value : "";
    const message = inputs[4] ? inputs[4].value : "";

    // Ton numéro WhatsApp (indicatif 243 pour la RDC + ton numéro)
    const numeroWhatsApp = "243838078501"; 

    // Création du texte du message
    const texte = `Bonjour, je m'appelle ${nom}.\nTéléphone : ${telephone}\nE-mail : ${email}\nService souhaité : ${service}\nMessage : ${message}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

    // Ouvre WhatsApp
    window.open(url, '_blank');
}

// Fonction pour envoyer par E-mail
function envoyerEmail() {
    // Récupération des champs du formulaire
    const inputs = document.querySelectorAll('input, select, textarea');
    const nom = inputs[0] ? inputs[0].value : "";
    const telephone = inputs[1] ? inputs[1].value : "";
    const email = inputs[2] ? inputs[2].value : "";
    const service = inputs[3] ? inputs[3].value : "";
    const message = inputs[4] ? inputs[4].value : "";

    const destinataire = "onlylean2.0@icloud.com";
    const sujet = encodeURIComponent(`Nouvelle demande de service : ${service}`);
    const corps = encodeURIComponent(`Nom : ${nom}\nTéléphone : ${telephone}\nE-mail : ${email}\nService : ${service}\n\nMessage :\n${message}`);

    const url = `mailto:${destinataire}?subject=${sujet}&body=${corps}`;
    
    // Ouvre l'application mail
    window.location.href = url;
}
