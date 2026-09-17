document.addEventListener("DOMContentLoaded", function () {
    const btnWhatsapp = document.querySelector('.btn-whatsapp') || document.querySelector('button:nth-last-of-type(2)') || document.querySelector('button:has(span)');
    const btnEmail = document.querySelector('.btn-email') || document.querySelector('button:nth-last-of-type(1)');

    if (btnWhatsapp) {
        btnWhatsapp.addEventListener("click", function(e) {
            e.preventDefault();
            envoyerWhatsApp();
        });
    }
    if (btnEmail) {
        btnEmail.addEventListener("click", function(e) {
            e.preventDefault();
            envoyerEmail();
        });
    }
});

function envoyerWhatsApp() {
    // Récupération sécurisée par type ou par position
    const nomInput = document.querySelector('input[type="text"]');
    const telInput = document.querySelector('input[type="tel"]') || document.querySelectorAll('input')[1];
    const emailInput = document.querySelector('input[type="email"]');
    const selectEl = document.querySelector('select');
    const textareaEl = document.querySelector('textarea');

    const nom = nomInput ? nomInput.value : "Client";
    const telephone = telInput ? telInput.value : "";
    const email = emailInput ? emailInput.value : "";
    const service = selectEl ? selectEl.value : "Non spécifié";
    const message = textareaEl ? textareaEl.value : "";

    const numeroWhatsApp = "243838078501"; 
    const texte = `Bonjour, je m'appelle ${nom}.\nTéléphone : ${telephone}\nE-mail : ${email}\nService souhaité : ${service}\nMessage : ${message}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

    window.location.href = url; // Utiliser location.href fonctionne mieux sur iPhone/Safari
}

function envoyerEmail() {
    const nomInput = document.querySelector('input[type="text"]');
    const telInput = document.querySelector('input[type="tel"]') || document.querySelectorAll('input')[1];
    const emailInput = document.querySelector('input[type="email"]');
    const selectEl = document.querySelector('select');
    const textareaEl = document.querySelector('textarea');

    const nom = nomInput ? nomInput.value : "Client";
    const telephone = telInput ? telInput.value : "";
    const email = emailInput ? emailInput.value : "";
    const service = selectEl ? selectEl.value : "Non spécifié";
    const message = textareaEl ? textareaEl.value : "";

    const destinataire = "onlylean2.0@icloud.com";
    const sujet = encodeURIComponent(`Nouvelle demande de service : ${service}`);
    const corps = encodeURIComponent(`Nom : ${nom}\nTéléphone : ${telephone}\nE-mail : ${email}\nService : ${service}\n\nMessage :\n${message}`);

    const url = `mailto:${destinataire}?subject=${sujet}&body=${corps}`;
    window.location.href = url;
}
