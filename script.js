const frases = [
    "Te Amo Mucho Ojitos Lindos",
    "Preciosa",
    "Hermosa",
    "Te Amo",
    "Eres Todo Lo Que Quiero",
    "Eres Maravillosa",
    "Me Encantas Mucho"
];

function mostrarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById("sorpresa").textContent = frases[indice];
}
