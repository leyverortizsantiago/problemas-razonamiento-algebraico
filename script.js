// Variables globales
let currentProblem = 1;
let patternAnimationRunning = false;
let balanceValues = {
    hammer: 6,  // 3 martillos = 18 tornillos, entonces 1 martillo = 6 tornillos
    wrench: 3   // llave + martillo = 9, entonces llave = 9 - 6 = 3 tornillos
};

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeProblems();
    setupEventListeners();
    showProblem(1);
});

// Configuración de navegación
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const problemNumber = parseInt(this.dataset.problem);
            showProblem(problemNumber);
            updateActiveNav(this);
        });
    });
}

// Mostrar problema específico
function showProblem(problemNumber) {
    // Ocultar todas las secciones
    document.querySelectorAll('.problem-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(`problema${problemNumber}`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentProblem = problemNumber;
    }
}

// Actualizar navegación activa
function updateActiveNav(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Configurar event listeners
function setupEventListeners() {
    // Event listeners para inputs con Enter
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const checkButton = this.parentElement.querySelector('.check-btn, .mini-check');
                if (checkButton) {
                    checkButton.click();
                }
            }
        });
    });
}

// Inicializar problemas específicos
function initializeProblems() {
    initializeHexagonInteraction();
    initializePatternTable();
    initializeBalanceAnimations();
}

// ==================== PROBLEMA 1: ÁNGULOS ====================

// Verificar respuestas de ángulos
function checkAnswer(problemId, correctAnswer) {
    const input = document.getElementById(`answer${problemId}`);
    const feedback = document.getElementById(`feedback${problemId}`);
    const userAnswer = parseInt(input.value);
    
    if (!input.value) {
        showFeedback(feedback, 'Por favor, ingresa una respuesta.', 'incorrect');
        return;
    }
    
    if (userAnswer === correctAnswer) {
        showFeedback(feedback, '¡Correcto! 🎉 Excelente razonamiento.', 'correct');
        animateSuccess(input);
    } else {
        let hint = '';
        if (problemId === '1a') {
            hint = ' Recuerda: la suma de ángulos internos de un triángulo es 180°.';
        } else if (problemId === '1c') {
            hint = ' Usa la fórmula: (n-2) × 180° ÷ n, donde n = 6 lados.';
        }
        showFeedback(feedback, `Incorrecto. La respuesta es ${correctAnswer}°.${hint}`, 'incorrect');
        animateError(input);
    }
}

// Verificar múltiples ángulos
function checkMultipleAngles() {
    const triangleAngle1 = parseInt(document.getElementById('triangle-angle1').value);
    const triangleAngle2 = parseInt(document.getElementById('triangle-angle2').value);
    const trapezoidAngle1 = parseInt(document.getElementById('trapezoid-angle1').value);
    const trapezoidAngle2 = parseInt(document.getElementById('trapezoid-angle2').value);
    
    const feedback = document.getElementById('feedback1b');
    let results = [];
    
    // Verificar triángulo isósceles (70°, 55°, 55°)
    if (triangleAngle1 === 55 && triangleAngle2 === 55) {
        results.push('✅ Triángulo correcto');
    } else {
        results.push('❌ Triángulo: los ángulos base de un triángulo isósceles son iguales (55° cada uno)');
    }
    
    // Verificar trapecio (120°, 60°, 60°, 120°)
    if ((trapezoidAngle1 === 60 && trapezoidAngle2 === 60) || 
        (trapezoidAngle1 === 60 && trapezoidAngle2 === 120)) {
        results.push('✅ Trapecio correcto');
    } else {
        results.push('❌ Trapecio: los ángulos consecutivos suman 180° (60° y 120°)');
    }
    
    const allCorrect = results.every(result => result.includes('✅'));
    showFeedback(feedback, results.join('<br>'), allCorrect ? 'correct' : 'incorrect');
}

// Interacción con hexágono
function initializeHexagonInteraction() {
    const hexagon = document.getElementById('center-hex');
    if (hexagon) {
        hexagon.addEventListener('click', function() {
            this.style.fill = this.style.fill === 'rgb(243, 156, 18)' ? '#27ae60' : '#f39c12';
            animateHexagon();
        });
    }
}

function animateHexagon() {
    const hexagon = document.getElementById('center-hex');
    hexagon.style.transform = 'scale(1.1)';
    setTimeout(() => {
        hexagon.style.transform = 'scale(1)';
    }, 200);
}

// ==================== PROBLEMA 2: PATRONES ====================

// Inicializar tabla de patrones
function initializePatternTable() {
    const table = document.getElementById('patternTable');
    if (table) {
        // Agregar event listeners a los inputs de la tabla
        const inputs = table.querySelectorAll('.table-input');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateTableInput(this);
            });
        });
    }
}

// Validar input de tabla en tiempo real
function validateTableInput(input) {
    const correctAnswer = parseInt(input.dataset.answer);
    const userAnswer = parseInt(input.value);
    
    if (userAnswer === correctAnswer) {
        input.style.borderColor = '#27ae60';
        input.style.backgroundColor = '#d5f4e6';
    } else if (input.value !== '') {
        input.style.borderColor = '#e74c3c';
        input.style.backgroundColor = '#fdeaea';
    } else {
        input.style.borderColor = '#bdc3c7';
        input.style.backgroundColor = 'white';
    }
}

// Verificar tabla completa de patrones
function checkPatternTable() {
    const inputs = document.querySelectorAll('.table-input');
    const feedback = document.getElementById('feedback2');
    let correct = 0;
    let total = inputs.length;
    
    inputs.forEach(input => {
        const correctAnswer = parseInt(input.dataset.answer);
        const userAnswer = parseInt(input.value);
        
        if (userAnswer === correctAnswer) {
            correct++;
            input.style.borderColor = '#27ae60';
            input.style.backgroundColor = '#d5f4e6';
        } else {
            input.style.borderColor = '#e74c3c';
            input.style.backgroundColor = '#fdeaea';
        }
    });
    
    if (correct === total) {
        showFeedback(feedback, 
            `¡Excelente! 🎉 Has identificado correctamente el patrón:<br>
            • Palillos: P = 2n + 1<br>
            • Vértices: V = n + 2<br>
            Donde n es el número de triángulos.`, 'correct');
        animatePatternSuccess();
    } else {
        showFeedback(feedback, 
            `${correct}/${total} respuestas correctas. 
            Revisa las fórmulas: Palillos = 2n + 1, Vértices = n + 2`, 'incorrect');
    }
}

// Animar secuencia de patrones
function animatePattern() {
    if (patternAnimationRunning) return;
    
    patternAnimationRunning = true;
    const figures = document.querySelectorAll('.figure-step');
    const button = document.querySelector('.animate-btn');
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Animando...';
    button.disabled = true;
    
    figures.forEach((figure, index) => {
        setTimeout(() => {
            figure.classList.add('animate-figure');
            figure.style.transform = 'scale(1.1)';
            
            setTimeout(() => {
                figure.style.transform = 'scale(1)';
                figure.classList.remove('animate-figure');
                
                if (index === figures.length - 1) {
                    button.innerHTML = '<i class="fas fa-play"></i> Animar Secuencia';
                    button.disabled = false;
                    patternAnimationRunning = false;
                }
            }, 500);
        }, index * 800);
    });
}

// Generar siguiente figura en el patrón
function generateNextFigure() {
    const container = document.querySelector('.pattern-figures');
    const figureCount = container.children.length + 1;
    
    if (figureCount > 6) {
        alert('¡Has alcanzado el límite de figuras para esta demostración!');
        return;
    }
    
    const newFigure = createPatternFigure(figureCount);
    container.appendChild(newFigure);
    
    // Animar la entrada
    newFigure.classList.add('slide-in');
    
    // Actualizar tabla si es necesario
    updatePatternTable(figureCount);
}

// Crear nueva figura de patrón
function createPatternFigure(n) {
    const figureDiv = document.createElement('div');
    figureDiv.className = 'figure-step';
    figureDiv.dataset.step = n;
    
    const sticks = 2 * n + 1;
    const vertices = n + 2;
    
    figureDiv.innerHTML = `
        <h4>Figura ${n}</h4>
        <svg width="120" height="100" viewBox="0 0 120 100">
            ${generatePatternSVG(n)}
        </svg>
        <p>${n} triángulo${n > 1 ? 's' : ''}</p>
        <p>${sticks} palillos, ${vertices} vértices</p>
    `;
    
    return figureDiv;
}

// Generar SVG para patrón (simplificado)
function generatePatternSVG(n) {
    let svg = '';
    const baseY = 70;
    const centerX = 60;
    
    // Generar triángulos en línea
    for (let i = 0; i < n; i++) {
        const x = centerX + (i - n/2 + 0.5) * 20;
        svg += `
            <polygon points="${x},30 ${x-15},${baseY} ${x+15},${baseY}" 
                     fill="none" stroke="#8e44ad" stroke-width="3"/>
            <circle cx="${x}" cy="30" r="2" fill="#e74c3c"/>
            <circle cx="${x-15}" cy="${baseY}" r="2" fill="#e74c3c"/>
            <circle cx="${x+15}" cy="${baseY}" r="2" fill="#e74c3c"/>
        `;
    }
    
    return svg;
}

// Actualizar tabla de patrones
function updatePatternTable(maxFigures) {
    const tbody = document.querySelector('#patternTable tbody');
    const existingRows = tbody.children.length;
    
    if (maxFigures > existingRows) {
        for (let i = existingRows + 1; i <= maxFigures; i++) {
            const row = document.createElement('tr');
            row.dataset.figure = i;
            row.innerHTML = `
                <td>${i}</td>
                <td><span class="auto-fill">${i}</span></td>
                <td><input type="number" class="table-input" data-answer="${2*i + 1}" placeholder="?"></td>
                <td><input type="number" class="table-input" data-answer="${i + 2}" placeholder="?"></td>
            `;
            tbody.appendChild(row);
        }
    }
}

// Animar éxito en patrones
function animatePatternSuccess() {
    const table = document.getElementById('patternTable');
    table.style.transform = 'scale(1.02)';
    table.style.boxShadow = '0 8px 30px rgba(39, 174, 96, 0.3)';
    
    setTimeout(() => {
        table.style.transform = 'scale(1)';
        table.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }, 500);
}

// ==================== PROBLEMA 3: BALANZAS ====================

// Inicializar animaciones de balanzas
function initializeBalanceAnimations() {
    // Agregar efectos hover a las balanzas
    const balances = document.querySelectorAll('.balance-visual svg');
    balances.forEach(balance => {
        balance.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        balance.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Verificar pasos de la balanza
function checkStep(stepNumber) {
    const feedback = document.getElementById(`step${stepNumber}-feedback`);
    let input, correctAnswer, explanation;
    
    switch(stepNumber) {
        case 1:
            input = document.getElementById('hammer-value');
            correctAnswer = 6;
            explanation = '3 martillos = 18 tornillos, entonces 1 martillo = 6 tornillos';
            break;
        case 2:
            input = document.getElementById('wrench-value');
            correctAnswer = 3;
            explanation = 'Llave + Martillo = 9 tornillos, entonces Llave = 9 - 6 = 3 tornillos';
            break;
        case 3:
            input = document.getElementById('final-answer');
            correctAnswer = 9;
            explanation = 'Llave (3) + Martillo (6) = 9 tornillos';
            break;
    }
    
    const userAnswer = parseInt(input.value);
    
    if (userAnswer === correctAnswer) {
        showFeedback(feedback, `¡Correcto! ${explanation}`, 'correct');
        animateSuccess(input);
        
        // Si es el último paso, mostrar animación especial
        if (stepNumber === 3) {
            animateBalanceSuccess();
        }
    } else {
        showFeedback(feedback, `Incorrecto. ${explanation}`, 'incorrect');
        animateError(input);
    }
}

// Animar éxito en balanzas
function animateBalanceSuccess() {
    const balanceContainer = document.querySelector('.balance-container');
    
    // Crear efecto de confeti
    createConfetti();
    
    // Animar la tercera balanza para mostrar equilibrio
    setTimeout(() => {
        animateBalanceEquilibrium();
    }, 1000);
}

// Animar equilibrio de la balanza
function animateBalanceEquilibrium() {
    const thirdBalance = document.querySelector('#problema3 .balance-item:last-child .balance-visual svg');
    const arm = thirdBalance.querySelector('line[x1="100"]');
    const leftPlate = thirdBalance.querySelector('ellipse[cx="120"]');
    const rightPlate = thirdBalance.querySelector('ellipse[cx="280"]');
    const indicator = thirdBalance.querySelector('circle[fill="#e74c3c"]');
    const status = thirdBalance.querySelector('.balance-status');
    
    // Animar el brazo para que se nivele
    if (arm) {
        arm.setAttribute('y1', '80');
        arm.setAttribute('y2', '80');
    }
    
    // Nivelar los platos
    if (leftPlate) leftPlate.setAttribute('cy', '80');
    if (rightPlate) rightPlate.setAttribute('cy', '80');
    
    // Cambiar indicador a verde
    if (indicator) {
        indicator.setAttribute('fill', '#27ae60');
    }
    
    // Actualizar texto de estado
    if (status) {
        status.textContent = '✓ Equilibrada';
        status.setAttribute('fill', '#27ae60');
    }
    
    // Agregar tornillos al lado derecho
    addScrewsToBalance();
}

// Agregar tornillos a la balanza
function addScrewsToBalance() {
    const thirdBalance = document.querySelector('#problema3 .balance-item:last-child .balance-visual svg');
    const screwsGroup = thirdBalance.querySelector('#screws3');
    
    if (screwsGroup) {
        // Limpiar contenido anterior
        screwsGroup.innerHTML = '';
        
        // Agregar 9 tornillos
        const screwPositions = [
            {x: 260, y: 85}, {x: 270, y: 85}, {x: 280, y: 85},
            {x: 290, y: 85}, {x: 300, y: 85}, {x: 265, y: 95},
            {x: 275, y: 95}, {x: 285, y: 95}, {x: 295, y: 95}
        ];
        
        screwPositions.forEach((pos, index) => {
            setTimeout(() => {
                const screw = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                screw.setAttribute('cx', pos.x);
                screw.setAttribute('cy', pos.y);
                screw.setAttribute('r', '3');
                screw.setAttribute('fill', '#7f8c8d');
                screw.style.opacity = '0';
                screwsGroup.appendChild(screw);
                
                // Animar aparición
                setTimeout(() => {
                    screw.style.opacity = '1';
                    screw.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        screw.style.transform = 'scale(1)';
                    }, 200);
                }, 50);
            }, index * 100);
        });
    }
}

// ==================== FUNCIONES AUXILIARES ====================

// Mostrar feedback
function showFeedback(element, message, type) {
    element.innerHTML = message;
    element.className = `feedback ${type}`;
    element.style.opacity = '0';
    element.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 100);
}

// Animar éxito
function animateSuccess(element) {
    element.style.borderColor = '#27ae60';
    element.style.backgroundColor = '#d5f4e6';
    element.style.transform = 'scale(1.05)';
    
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

// Animar error
function animateError(element) {
    element.style.borderColor = '#e74c3c';
    element.style.backgroundColor = '#fdeaea';
    element.style.animation = 'shake 0.5s ease-in-out';
    
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// Crear efecto confetti
function createConfetti() {
    const colors = ['#3498db', '#e74c3c', '#f39c12', '#27ae60', '#9b59b6'];
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'fixed';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    confettiContainer.style.pointerEvents = 'none';
    confettiContainer.style.zIndex = '9999';
    
    document.body.appendChild(confettiContainer);
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        
        confettiContainer.appendChild(confetti);
    }
    
    // Limpiar después de la animación
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 5000);
}

// Agregar animación de caída para confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);

// Funciones de utilidad para debugging
function debugPatternTable() {
    console.log('Estado actual de la tabla de patrones:');
    const inputs = document.querySelectorAll('.table-input');
    inputs.forEach((input, index) => {
        console.log(`Input ${index}: valor=${input.value}, respuesta correcta=${input.dataset.answer}`);
    });
}

function debugBalanceValues() {
    console.log('Valores de la balanza:', balanceValues);
    console.log('Martillo:', balanceValues.hammer, 'tornillos');
    console.log('Llave:', balanceValues.wrench, 'tornillos');
    console.log('Total necesario:', balanceValues.hammer + balanceValues.wrench, 'tornillos');
}

// Exportar funciones para uso global
window.checkAnswer = checkAnswer;
window.checkMultipleAngles = checkMultipleAngles;
window.checkPatternTable = checkPatternTable;
window.animatePattern = animatePattern;
window.generateNextFigure = generateNextFigure;
window.checkStep = checkStep;
window.debugPatternTable = debugPatternTable;
window.debugBalanceValues = debugBalanceValues;