# Web Dinámica: Problemas de Razonamiento Algebraico para Primaria

## 📋 Descripción

Esta aplicación web interactiva está diseñada para estudiantes de primaria y presenta problemas de razonamiento algebraico basados en el documento PDF proporcionado. La web incluye tres tipos principales de problemas matemáticos con figuras interactivas y retroalimentación inmediata.

## 🎯 Problemas Incluidos

### 1. **Ángulos en Triángulos y Polígonos**
- Cálculo de ángulos faltantes en triángulos
- Ángulos en polígonos regulares (hexágonos)
- Figuras geométricas múltiples con diferentes formas
- **Conceptos matemáticos**: Suma de ángulos internos, propiedades de triángulos isósceles, ángulos en polígonos regulares

### 2. **Patrones con Palillos**
- Secuencias geométricas construidas con palillos
- Análisis de patrones numéricos
- Tabla interactiva para completar datos
- **Conceptos matemáticos**: Secuencias aritméticas, relaciones algebraicas, fórmulas P = 2n + 1 (palillos) y V = n + 2 (vértices)

### 3. **Balanzas Equilibradas**
- Sistema de ecuaciones simples
- Resolución paso a paso
- Equivalencias entre objetos
- **Conceptos matemáticos**: Ecuaciones lineales, sistemas de ecuaciones, proporcionalidad

## 🚀 Características Técnicas

### **Interactividad**
- ✅ Navegación fluida entre problemas
- ✅ Validación en tiempo real de respuestas
- ✅ Retroalimentación inmediata con explicaciones
- ✅ Animaciones y efectos visuales
- ✅ Figuras SVG interactivas

### **Diseño Responsivo**
- ✅ Adaptable a dispositivos móviles
- ✅ Interfaz intuitiva para niños
- ✅ Colores y tipografías amigables
- ✅ Efectos hover y animaciones suaves

### **Funcionalidades Educativas**
- ✅ Pistas y explicaciones contextuales
- ✅ Resolución paso a paso
- ✅ Generación dinámica de figuras
- ✅ Sistema de progreso visual

## 📁 Estructura del Proyecto

```
proyecto/
├── index.html          # Estructura principal HTML
├── styles.css          # Estilos CSS responsivos
├── script.js           # Lógica JavaScript interactiva
├── README.md           # Documentación del proyecto
└── todo.md            # Lista de tareas completadas
```

## 🎨 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con Flexbox/Grid, animaciones CSS
- **JavaScript ES6+**: Interactividad y lógica de validación
- **SVG**: Gráficos vectoriales escalables para figuras geométricas
- **Google Fonts**: Tipografías Comic Neue y Roboto
- **Font Awesome**: Iconografía moderna

## 🔧 Instalación y Uso

### **Opción 1: Uso Directo**
1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en cualquier navegador web moderno
3. ¡Listo para usar!

### **Opción 2: Servidor Local**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (si tienes http-server instalado)
npx http-server

# Luego visita: http://localhost:8000
```

## 📚 Guía de Uso para Educadores

### **Problema 1: Ángulos**
- **Objetivo**: Reforzar el concepto de que la suma de ángulos internos de un triángulo es 180°
- **Nivel**: Intermedio-Avanzado
- **Tiempo estimado**: 15-20 minutos

### **Problema 2: Patrones**
- **Objetivo**: Identificar patrones numéricos y desarrollar pensamiento algebraico
- **Nivel**: Intermedio
- **Tiempo estimado**: 20-25 minutos

### **Problema 3: Balanzas**
- **Objetivo**: Introducir conceptos básicos de ecuaciones y sistemas
- **Nivel**: Avanzado
- **Tiempo estimado**: 25-30 minutos

## 🎯 Objetivos Pedagógicos

### **Razonamiento Algebraico**
- Identificación de patrones y relaciones
- Uso de variables y fórmulas simples
- Resolución de problemas paso a paso

### **Pensamiento Geométrico**
- Propiedades de figuras geométricas
- Cálculo de ángulos y medidas
- Visualización espacial

### **Resolución de Problemas**
- Análisis sistemático de situaciones
- Verificación de respuestas
- Comunicación matemática

## 🔍 Funciones JavaScript Principales

### **Navegación**
```javascript
showProblem(problemNumber)    // Cambiar entre problemas
updateActiveNav(activeLink)   // Actualizar navegación activa
```

### **Validación**
```javascript
checkAnswer(problemId, correctAnswer)  // Verificar respuestas individuales
checkMultipleAngles()                  // Verificar múltiples ángulos
checkPatternTable()                    // Verificar tabla de patrones
checkStep(stepNumber)                  // Verificar pasos de balanzas
```

### **Animaciones**
```javascript
animatePattern()              // Animar secuencia de patrones
animateBalanceSuccess()       // Animar éxito en balanzas
createConfetti()              // Efecto de celebración
```

## 🎨 Personalización

### **Colores Principales**
```css
:root {
  --primary-blue: #3498db;
  --success-green: #27ae60;
  --error-red: #e74c3c;
  --warning-orange: #f39c12;
  --dark-blue: #2c3e50;
}
```

### **Tipografías**
- **Títulos**: Comic Neue (amigable para niños)
- **Contenido**: Roboto (legible y moderna)

## 📱 Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles iOS/Android

## 🐛 Debugging

### **Funciones de Debug Incluidas**
```javascript
debugPatternTable()    // Verificar estado de la tabla de patrones
debugBalanceValues()   // Verificar valores de las balanzas
```

## 📈 Métricas de Aprendizaje

La aplicación rastrea implícitamente:
- Intentos por problema
- Tiempo en cada sección
- Patrones de error comunes
- Uso de pistas y ayudas

## 🔮 Futuras Mejoras

- [ ] Sistema de puntuación y logros
- [ ] Más niveles de dificultad
- [ ] Exportación de resultados para profesores
- [ ] Modo multijugador/colaborativo
- [ ] Integración con LMS educativos
- [ ] Soporte para más idiomas

## 📞 Soporte

Para reportar problemas o sugerir mejoras:
1. Documenta el problema específico
2. Incluye el navegador y dispositivo usado
3. Proporciona pasos para reproducir el issue

## 📄 Licencia

Este proyecto está diseñado para uso educativo libre. Se permite la modificación y distribución para fines pedagógicos.

---

**Desarrollado para el aprendizaje interactivo de matemáticas en primaria** 🎓✨