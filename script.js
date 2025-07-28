// Inicializar mapa con Leaflet
const mapa = L.map('mapaPanama').setView([8.537981, -80.782127], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'OpenStreetMap contributors'
}).addTo(mapa);

// Fichas de aves nativas y migratorias
const aves = [
  {
    nombre: "Reinita amarilla",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Setophaga_petechia_%28male%29.jpg/320px-Setophaga_petechia_%28male%29.jpg",
    info: "Ave nativa, muy activa, vista cerca de manglares y costas."
  },
  {
    nombre: "Colibrí garganta de rubí",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ruby-throated_Hummingbird_male_2.jpg/320px-Ruby-throated_Hummingbird_male_2.jpg",
    info: "Ave migratoria, llega desde América del Norte durante el invierno."
  }
];

// Mostrar fichas
const contenedor = document.getElementById('avesContainer');
aves.forEach(ave => {
  const div = document.createElement('div');
  div.className = 'ficha';
  div.innerHTML = `<h3>${ave.nombre}</h3><img src="${ave.imagen}" alt="${ave.nombre}"><p>${ave.info}</p>`;
  contenedor.appendChild(div);
});

// Guías con voz IA
function hablar(texto) {
  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = 'es-ES';
  voz.pitch = 1.2;
  voz.rate = 0.95;
  speechSynthesis.speak(voz);
}

function hablarReinita() {
  hablar("¡Hola! Soy la Reinita Amarilla. Te enseñaré todo sobre nuestras aves panameñas. ¿Listo para explorar?");
}

function hablarColibri() {
  hablar("¡Hola! Soy el Colibrí de garganta rubí. Viajo mucho, pero siempre regreso a Panamá. Vamos a volar juntos por el conocimiento.");
}