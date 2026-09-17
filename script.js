// ==================================================
// ZY_CREATEUR - GESTION DU FORMULAIRE (WHATSAPP OU EMAIL)
// ==================================================

const formulaire = document.getElementById("contactForm");
const boutonWhatsApp = document.getElementById("submitWhatsApp");
const boutonEmail = document.getElementById("submitEmail");
const messageResultat = document.getElementById("formMessage");

function afficherMessage(message, type) {
  messageResultat.textContent = message;
  messageResultat.className = type;
}

// Fonction utilitaire pour récupérer et valider les champs du formulaire
function kraRécupérerDonnées() {
  const nom = document.getElementById("nom").value.trim();
  const entreprise = document.getElementById("entreprise").value.trim();
  const email = document.getElementById("email").value.trim();
  const whatsappClient = document.getElementById("whatsapp").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (!nom || !email || !service || !message) {
    afficherMessage("❌ Veuillez remplir tous les champs obligatoires.", "error");
    return null;
  }

  return { nom, entreprise, email, whatsappClient, service, message };
}

// 1. Action pour l'envoi via WhatsApp
boutonWhatsApp.addEventListener("click", function (event) {
  event.preventDefault();
  const data = kraRécupérerDonnées();
  if (!data) return;

  const numeroWhatsApp = "243906840229";
  const texteMessage = 
    `*Nouveau projet - ZY_createur*\n\n` +
    `👤 *Nom :* ${data.nom}\n` +
    `🏢 *Entreprise/Projet :* ${data.entreprise || "Non spécifié"}\n` +
    `📧 *Email :* ${data.email}\n` +
    `📱 *WhatsApp client :* ${data.whatsappClient || "Non spécifié"}\n` +
    `🎯 *Service :* ${data.service}\n\n` +
    `💬 *Message :*\n${data.message}`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texteMessage)}`;

  afficherMessage("✅ Redirection vers WhatsApp...", "success");
  setTimeout(() => {
    window.open(urlWhatsApp, "_blank");
    formulaire.reset();
    messageResultat.style.display = "none";
  }, 1000);
});

// 2. Action pour l'envoi via E-mail
boutonEmail.addEventListener("click", function (event) {
  event.preventDefault();
  const data = kraRécupérerDonnées();
  if (!data) return;

  const destinataire = "Mbuyambasamzy@gmail.com";
  const sujet = encodeURIComponent(`Nouveau projet : ${data.service} - ${data.nom}`);
  const corpsMessage = encodeURIComponent(
    `Nom : ${data.nom}\n` +
    `Entreprise/Projet : ${data.entreprise || "Non spécifié"}\n` +
    `Email : ${data.email}\n` +
    `WhatsApp : ${data.whatsappClient || "Non spécifié"}\n` +
    `Service : ${data.service}\n\n` +
    `Message :\n${data.message}`
  );

  const urlEmail = `mailto:${destinataire}?subject=${sujet}&body=${corpsMessage}`;

  afficherMessage("✅ Ouverture de votre messagerie e-mail...", "success");
  setTimeout(() => {
    window.location.href = urlEmail;
    formulaire.reset();
    messageResultat.style.display = "none";
  }, 1000);
});