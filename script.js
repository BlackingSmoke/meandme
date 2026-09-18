document.addEventListener("DOMContentLoaded", function () {

    const btnWhatsapp = document.getElementById("submitWhatsApp");
    const btnEmail = document.getElementById("submitEmail");

    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", envoyerWhatsApp);
    }

    if (btnEmail) {
        btnEmail.addEventListener("click", envoyerEmail);
    }

});


/* ==================================================
   ENVOYER LE FORMULAIRE SUR WHATSAPP
   DESTINATAIRE : ZY_createur
================================================== */

function envoyerWhatsApp() {

    const nom = document.getElementById("nom").value.trim();
    const entreprise = document.getElementById("entreprise").value.trim();
    const email = document.getElementById("email").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // Vérification des champs obligatoires
    if (!nom || !email || !service || !message) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    /*
       NUMÉRO DU CLIENT
       0906840229 devient +243 906 840 229

       IMPORTANT :
       WhatsApp utilise le format international
       sans le +, sans espace et sans le 0 initial.
    */

    const numeroWhatsApp = "243906840229";

    const texte =
`Bonjour, je m'appelle ${nom}.

Entreprise / Projet : ${entreprise || "Non renseigné"}
E-mail : ${email}
Mon WhatsApp : ${whatsapp || "Non renseigné"}

Service souhaité : ${service}

Message :
${message}`;

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

    window.location.href = url;
}


/* ==================================================
   ENVOYER LE FORMULAIRE PAR E-MAIL
================================================== */

function envoyerEmail() {

    const nom = document.getElementById("nom").value.trim();
    const entreprise = document.getElementById("entreprise").value.trim();
    const email = document.getElementById("email").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    // Vérification des champs obligatoires
    if (!nom || !email || !service || !message) {
        alert("Veuillez remplir tous les champs obligatoires.");
        return;
    }

    // E-mail du client
    const destinataire = "Mbuyambasamzy@gmail.com";

    const sujet = encodeURIComponent(
        `Nouvelle demande de service : ${service}`
    );

    const corps = encodeURIComponent(
`Nom : ${nom}
Entreprise / Projet : ${entreprise || "Non renseigné"}
E-mail : ${email}
WhatsApp : ${whatsapp || "Non renseigné"}
Service : ${service}

Message :
${message}`
    );

    const url =
        `mailto:${destinataire}?subject=${sujet}&body=${corps}`;

    window.location.href = url;
}
