// Clave de acceso para modo docente
const claveActual = "docente.YELA.TEC.2025";

// Lista de aves nativas y migratorias (puedes expandir)
const aves = [
  { nombre: "Reinita amarilla", tipo: "Nativa", descripcion: "Ave pequeña y curiosa de plumaje amarillo intenso." },
  { nombre: "Colibrí garganta de rubí", tipo: "Nativa", descripcion: "Ave rápida, de canto agudo y plumaje brillante." },
  { nombre: "Playero aliblanco", tipo: "Migratoria", descripcion: "Llega a Panamá desde Norteamérica." },
  { nombre: "Tángara azul", tipo: "Nativa", descripcion: "Hermosa ave azul eléctrico que habita bosques tropicales." }
];

// Mostrar fichas de aves
function mostrarFichas() {
  const contenedor = document.getElementById("contenedorFichas");
  contenedor.innerHTML = "";
  aves.forEach(ave => {
    const ficha = document.createElement("div");
    ficha.style.padding = "10px";
    ficha.style.margin = "10px";
    ficha.style.borderRadius = "10px";
    ficha.style.backgroundColor = ave.tipo === "Nativa" ? "#e0ffe0" : "#fff0e0";
    ficha.innerHTML = `<h4>🐦 ${ave.nombre}</h4><p><strong>Tipo:</strong> ${ave.tipo}</p><p>${ave.descripcion}</p>`;
    contenedor.appendChild(ficha);
  });
  document.getElementById("fichasAves").classList.remove("oculto");
}

// Activar sección de acceso docente
function activarDocente() {
  document.getElementById("loginDocente").classList.remove("oculto");
}

// Verificar clave del docente
function verificarClave() {
  const clave = document.getElementById("claveDocente").value;
  if (clave === claveActual) {
    alert("✅ Acceso docente concedido");
    // Aquí puedes mostrar nuevas secciones o desbloquear opciones
  } else {
    alert("❌ Clave incorrecta");
  }
}

// Interacción básica con IA de Reinita Amarilla
function hablarConReinita() {
  const respuesta = "¡Hola! Soy Reinita Amarilla. ¿Sabías que muchas aves migran miles de kilómetros cada año?";
  document.getElementById("respuestaTexto").innerText = "🟨 Reinita: " + respuesta;
}

// Interacción básica con IA de Colibrí Garganta Rubí
function hablarConColibri() {
  const respuesta = "¡Hola! Soy el Colibrí Garganta de Rubí. ¡Puedo batir mis alas hasta 80 veces por segundo!";
  document.getElementById("respuestaTexto").innerText = "🔴 Colibrí: " + respuesta;
}

// Reconocimiento de voz offline (Web Speech API)
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if ('SpeechRecognition' in window) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.continuous = false;
  recognition.interimResults = false;

  // Reconocimiento por voz usando botones
  document.addEventListener("keydown", function (e) {
    if (e.key === "v") {
      recognition.start();
      document.getElementById("respuestaTexto").innerText = "🎤 Escuchando... habla ahora.";
    }
  });

  recognition.onresult = function (event) {
    const resultado = event.results[0][0].transcript.toLowerCase();
    if (resultado.includes("reinita")) {
      hablarConReinita();
    } else if (resultado.includes("colibrí")) {
      hablarConColibri();
    } else {
      document.getElementById("respuestaTexto").innerText = "🤖 No entendí. Intenta decir 'reinita' o 'colibrí'.";
    }
  };

  recognition.onerror = function () {
    document.getElementById("respuestaTexto").innerText = "⚠️ Error al reconocer voz. Verifica permisos.";
  };
} else {
  document.getElementById("respuestaTexto").innerText = "⚠️ Reconocimiento de voz no disponible en este navegador.";
}
