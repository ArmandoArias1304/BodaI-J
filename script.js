// Función para mostrar la segunda sección después de hacer clic en "Ver más"
function mostrarInformacion() {
    // Ocultar la primera sección (carrusel)
    document.getElementById("inicio").classList.add("oculto");

    // Mostrar la segunda sección con animación
    let info = document.getElementById("informacion");
    info.classList.remove("d-none");
    setTimeout(() => {
        info.classList.add("mostrar");
    }, 50);
}


//CUENTA REGRESIVA

// Fecha de la boda (puedes cambiarla a la fecha real)
const fechaBoda = new Date("Dec 12, 2025 00:00:00").getTime();

// Actualización de la cuenta regresiva cada segundo
const intervalo = setInterval(function() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaBoda - ahora;

    // Cálculos de días, horas, minutos y segundos
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Mostrar el resultado en el div
    document.getElementById("cuenta-regresiva-timer").innerHTML = 
        dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";

    // Si la cuenta regresiva llega a cero, mostrar un mensaje
    if (tiempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById("cuenta-regresiva-timer").innerHTML = "¡Es el gran día!";
    }
}, 1000);





//TRIVIA DE NOVIOS
const questions = [
    {
        question: "¿Dónde se conocieron Erika y Alejandro?",
        options: ["En una fiesta de amigos", "En la escuela", "En un parque"],
        correctAnswer: 1
    },
    {
        question: "¿Qué ciudad les gustaría visitar juntos?",
        options: ["París", "Roma", "Tokio"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es la película favorita de los novios?",
        options: ["Titanic", "El Señor de los Anillos", "Forrest Gump"],
        correctAnswer: 0
    },
    {
        question: "¿Cuál es el hobby que más disfrutan hacer juntos?",
        options: ["Cocinar", "Viajar", "Ver películas"],
        correctAnswer: 1
    },
    {
        question: "¿En qué fecha se comprometieron?",
        options: ["12 de diciembre de 2024", "14 de febrero de 2023", "1 de agosto de 2022"],
        correctAnswer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

// Mostrar la pregunta actual
function showQuestion(index) {
    selectedAnswer = null;  // Reiniciar selección

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h4>${questions[index].question}</h4>
        <div>
            ${questions[index].options.map((option, i) => `
                <button class="btn btn-outline-secondary mb-3" onclick="selectOption(${i}, this)">${option}</button>
            `).join('')}
        </div>
    `;
}

// Guardar la opción seleccionada y deshabilitar botones
function selectOption(optionIndex, button) {
    selectedAnswer = optionIndex;

    // Deshabilitar todos los botones
    const buttons = document.querySelectorAll("#question-container button");
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.classList.remove("btn-success", "btn-danger");
    });

    // Marcar la opción seleccionada como correcta o incorrecta
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        button.classList.add("btn-success");  // Respuesta correcta
        score++;
    } else {
        button.classList.add("btn-danger");  // Respuesta incorrecta
    }

    // Esperar un momento antes de cargar la siguiente pregunta automáticamente
    setTimeout(nextQuestion, 500);  // Espera 500ms (medio segundo) antes de pasar a la siguiente pregunta
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        showResults();
    }
}

// Mostrar los resultados al final
function showResults() {
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = '';

    // Ocultar el botón "Siguiente" después de mostrar los resultados
    document.getElementById("next-button").style.display = "none";

    const resultMessage = document.getElementById("score");
    resultMessage.textContent = `Has acertado ${score} de ${questions.length} preguntas.`;
    document.getElementById("resultado").style.display = "block";
}

// Iniciar la trivia mostrando la primera pregunta
showQuestion(currentQuestionIndex);





//MUSICA

function mostrarInformacion() {
    // Ocultar la primera sección (carrusel)
    document.getElementById("inicio").classList.add("oculto");

    // Mostrar la segunda sección con animación
    let info = document.getElementById("informacion");
    info.classList.remove("d-none");
    setTimeout(() => {
        info.classList.add("mostrar");
    }, 50);

    // Reproducir la canción
    const audioPlayer = document.getElementById("audio-player");
    audioPlayer.play();  // Reproduce la canción
}


//FORMULARIO
