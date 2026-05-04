// Configuración de la aplicación web
const CONFIG = {
    // Información de la aplicación
    app: {
        name: "Problemas de Razonamiento Algebraico",
        version: "1.0.0",
        description: "Web interactiva para estudiantes de primaria",
        author: "Sistema Educativo",
        created: "2024"
    },

    // Configuración de problemas
    problems: {
        // Problema 1: Ángulos
        angles: {
            triangle1: {
                angleA: 64,
                angleB: 37,
                correctAnswer: 79,
                hint: "Recuerda: la suma de ángulos internos de un triángulo es 180°"
            },
            isoscelesTriangle: {
                topAngle: 70,
                baseAngles: 55,
                hint: "En un triángulo isósceles, los ángulos base son iguales"
            },
            hexagon: {
                sides: 6,
                totalAngles: 720,
                eachAngle: 120,
                formula: "(n-2) × 180° ÷ n",
                hint: "Un hexágono regular tiene 6 lados iguales y 6 ángulos iguales"
            }
        },

        // Problema 2: Patrones
        patterns: {
            formula: {
                sticks: "P = 2n + 1",
                vertices: "V = n + 2"
            },
            sequences: [
                { triangles: 1, sticks: 3, vertices: 3 },
                { triangles: 2, sticks: 5, vertices: 4 },
                { triangles: 3, sticks: 7, vertices: 5 },
                { triangles: 4, sticks: 9, vertices: 6 },
                { triangles: 5, sticks: 11, vertices: 7 }
            ],
            maxFigures: 10
        },

        // Problema 3: Balanzas
        balances: {
            values: {
                hammer: 6,  // 3 martillos = 18 tornillos → 1 martillo = 6 tornillos
                wrench: 3   // llave + martillo = 9 → llave = 9 - 6 = 3 tornillos
            },
            equations: [
                "🔧 + 🔨 = 9 tornillos",
                "3 × 🔨 = 18 tornillos",
                "🔧 + 🔨 = ? tornillos"
            ],
            steps: [
                {
                    question: "De la Balanza 2, ¿cuánto vale 1 martillo?",
                    answer: 6,
                    explanation: "3 martillos = 18 tornillos, entonces 1 martillo = 6 tornillos"
                },
                {
                    question: "De la Balanza 1, ¿cuánto vale 1 llave?",
                    answer: 3,
                    explanation: "Llave + Martillo = 9 tornillos, entonces Llave = 9 - 6 = 3 tornillos"
                },
                {
                    question: "¿Cuántos tornillos se necesitan en la Balanza 3?",
                    answer: 9,
                    explanation: "Llave (3) + Martillo (6) = 9 tornillos"
                }
            ]
        }
    },

    // Configuración de UI
    ui: {
        colors: {
            primary: "#3498db",
            success: "#27ae60",
            error: "#e74c3c",
            warning: "#f39c12",
            dark: "#2c3e50",
            light: "#ecf0f1"
        },
        fonts: {
            heading: "'Comic Neue', cursive",
            body: "'Roboto', sans-serif"
        },
        animations: {
            duration: {
                fast: 200,
                normal: 500,
                slow: 1000
            },
            easing: "ease-in-out"
        }
    },

    // Configuración de feedback
    feedback: {
        messages: {
            correct: "¡Correcto! 🎉 Excelente razonamiento.",
            incorrect: "Incorrecto. Inténtalo de nuevo.",
            empty: "Por favor, ingresa una respuesta.",
            hint: "💡 Pista: "
        },
        showHints: true,
        showExplanations: true,
        celebrationEffects: true
    },

    // Configuración de accesibilidad
    accessibility: {
        highContrast: false,
        largeText: false,
        reducedMotion: false,
        screenReader: true
    },

    // Configuración de desarrollo
    development: {
        debug: false,
        logging: true,
        showConsoleInfo: true
    },

    // Configuración de analytics (para futuras implementaciones)
    analytics: {
        enabled: false,
        trackInteractions: true,
        trackTime: true,
        trackErrors: true
    }
};

// Funciones de configuración
const ConfigManager = {
    // Obtener configuración
    get: function(path) {
        const keys = path.split('.');
        let value = CONFIG;
        
        for (const key of keys) {
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                return undefined;
            }
        }
        
        return value;
    },

    // Establecer configuración
    set: function(path, newValue) {
        const keys = path.split('.');
        let current = CONFIG;
        
        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!(key in current) || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
        }
        
        current[keys[keys.length - 1]] = newValue;
    },

    // Aplicar tema de colores
    applyTheme: function() {
        const colors = this.get('ui.colors');
        const root = document.documentElement;
        
        Object.entries(colors).forEach(([name, value]) => {
            root.style.setProperty(`--color-${name}`, value);
        });
    },

    // Configurar accesibilidad
    applyAccessibility: function() {
        const accessibility = this.get('accessibility');
        const body = document.body;
        
        if (accessibility.highContrast) {
            body.classList.add('high-contrast');
        }
        
        if (accessibility.largeText) {
            body.classList.add('large-text');
        }
        
        if (accessibility.reducedMotion) {
            body.classList.add('reduced-motion');
        }
    },

    // Inicializar configuración
    init: function() {
        this.applyTheme();
        this.applyAccessibility();
        
        if (this.get('development.showConsoleInfo')) {
            console.log('🎓 Aplicación de Razonamiento Algebraico iniciada');
            console.log('📊 Configuración:', CONFIG);
        }
    },

    // Exportar configuración para debugging
    export: function() {
        return JSON.stringify(CONFIG, null, 2);
    },

    // Importar configuración
    import: function(configString) {
        try {
            const newConfig = JSON.parse(configString);
            Object.assign(CONFIG, newConfig);
            this.init();
            return true;
        } catch (error) {
            console.error('Error al importar configuración:', error);
            return false;
        }
    }
};

// Configuraciones predefinidas para diferentes niveles
const PRESETS = {
    // Configuración para estudiantes más jóvenes
    elementary: {
        'feedback.showHints': true,
        'feedback.showExplanations': true,
        'ui.animations.duration.normal': 800,
        'problems.patterns.maxFigures': 5
    },

    // Configuración para estudiantes avanzados
    advanced: {
        'feedback.showHints': false,
        'feedback.showExplanations': false,
        'ui.animations.duration.normal': 300,
        'problems.patterns.maxFigures': 10
    },

    // Configuración para accesibilidad
    accessible: {
        'accessibility.highContrast': true,
        'accessibility.largeText': true,
        'accessibility.reducedMotion': true,
        'ui.animations.duration.normal': 0
    }
};

// Aplicar preset
ConfigManager.applyPreset = function(presetName) {
    const preset = PRESETS[presetName];
    if (preset) {
        Object.entries(preset).forEach(([path, value]) => {
            this.set(path, value);
        });
        this.init();
        console.log(`✅ Preset "${presetName}" aplicado`);
    } else {
        console.error(`❌ Preset "${presetName}" no encontrado`);
    }
};

// Exportar para uso global
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.ConfigManager = ConfigManager;
    window.PRESETS = PRESETS;
}

// Para uso en Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, ConfigManager, PRESETS };
}