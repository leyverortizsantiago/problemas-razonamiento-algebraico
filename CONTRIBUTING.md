# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al proyecto de Problemas de Razonamiento Algebraico! Esta guía te ayudará a participar de manera efectiva.

## 📋 Cómo Contribuir

### **Tipos de Contribuciones Bienvenidas**

1. **🐛 Reportes de Bugs**
   - Errores en la funcionalidad
   - Problemas de compatibilidad
   - Issues de rendimiento

2. **✨ Nuevas Características**
   - Nuevos problemas matemáticos
   - Mejoras en la interfaz
   - Funcionalidades educativas adicionales

3. **📚 Mejoras en Documentación**
   - Correcciones en README
   - Nuevos ejemplos
   - Traducciones

4. **🎨 Mejoras de Diseño**
   - Optimizaciones de UI/UX
   - Mejoras de accesibilidad
   - Responsive design

## 🚀 Proceso de Contribución

### **1. Fork y Clone**
```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/TU-USUARIO/problemas-razonamiento-algebraico.git
cd problemas-razonamiento-algebraico
```

### **2. Crear Rama de Trabajo**
```bash
# Crear nueva rama para tu contribución
git checkout -b feature/nueva-funcionalidad
# o
git checkout -b bugfix/correccion-error
# o
git checkout -b docs/mejora-documentacion
```

### **3. Realizar Cambios**
- Mantén el código limpio y comentado
- Sigue las convenciones de estilo existentes
- Prueba tus cambios en múltiples navegadores
- Verifica que `test.html` pase todas las pruebas

### **4. Commit y Push**
```bash
# Añadir cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: añadir nuevo problema de fracciones"
# o
git commit -m "fix: corregir validación en problema de ángulos"
# o
git commit -m "docs: actualizar guía de instalación"

# Push a tu fork
git push origin feature/nueva-funcionalidad
```

### **5. Pull Request**
- Abre un Pull Request desde tu fork
- Describe claramente los cambios realizados
- Incluye capturas de pantalla si es relevante
- Menciona issues relacionados

## 📝 Estándares de Código

### **HTML**
- Usar HTML5 semántico
- Incluir atributos `alt` en imágenes
- Mantener estructura accesible
- Validar con W3C Validator

### **CSS**
- Usar metodología BEM para clases
- Mantener responsive design
- Optimizar para rendimiento
- Comentar secciones complejas

### **JavaScript**
- Usar ES6+ cuando sea posible
- Documentar funciones complejas
- Manejar errores apropiadamente
- Mantener compatibilidad con navegadores objetivo

### **Configuración**
- Actualizar `config.js` para nuevas opciones
- Mantener retrocompatibilidad
- Documentar nuevos parámetros

## 🧪 Testing

### **Antes de Enviar PR**
1. Abrir `test.html` y verificar que todas las pruebas pasen
2. Probar en al menos 2 navegadores diferentes
3. Verificar responsive design en móvil
4. Comprobar accesibilidad básica

### **Nuevas Funcionalidades**
- Añadir pruebas para nuevos problemas
- Actualizar `test.html` si es necesario
- Verificar que la configuración funcione

## 📚 Añadir Nuevos Problemas

### **Estructura Requerida**
```javascript
// En config.js
CONFIG.problems.nuevoProblema = {
    // Configuración del problema
};

// En script.js
function checkNuevoProblema() {
    // Lógica de validación
}

// En index.html
<section id="nuevoProblema" class="problem-section">
    <!-- HTML del problema -->
</section>
```

### **Elementos Necesarios**
- Descripción clara del problema
- Figuras interactivas (SVG recomendado)
- Sistema de validación
- Retroalimentación educativa
- Responsive design

## 🎨 Guías de Diseño

### **Colores**
- Primario: `#3498db` (azul)
- Éxito: `#27ae60` (verde)
- Error: `#e74c3c` (rojo)
- Advertencia: `#f39c12` (naranja)

### **Tipografía**
- Títulos: `'Comic Neue', cursive`
- Contenido: `'Roboto', sans-serif`

### **Espaciado**
- Usar múltiplos de 8px para consistencia
- Mantener jerarquía visual clara

## 🌍 Internacionalización

### **Añadir Nuevo Idioma**
1. Crear archivo de traducciones
2. Actualizar sistema de detección de idioma
3. Probar todas las funcionalidades
4. Actualizar documentación

### **Idiomas Prioritarios**
- Español (actual)
- Inglés
- Francés
- Portugués

## 🐛 Reportar Bugs

### **Información Requerida**
- Navegador y versión
- Sistema operativo
- Pasos para reproducir
- Comportamiento esperado vs actual
- Capturas de pantalla si es relevante

### **Template de Issue**
```markdown
**Descripción del Bug**
Descripción clara del problema.

**Pasos para Reproducir**
1. Ir a '...'
2. Hacer clic en '...'
3. Ver error

**Comportamiento Esperado**
Lo que debería pasar.

**Capturas de Pantalla**
Si aplica, añadir capturas.

**Información del Sistema**
- Navegador: [ej. Chrome 91]
- OS: [ej. Windows 10]
- Versión: [ej. 1.0.0]
```

## ✨ Sugerir Mejoras

### **Nuevas Características**
- Describir el problema que resuelve
- Explicar la solución propuesta
- Considerar alternativas
- Evaluar impacto en usuarios existentes

### **Mejoras Educativas**
- Basarse en principios pedagógicos
- Considerar diferentes niveles de habilidad
- Incluir referencias educativas si es posible

## 📞 Comunicación

### **Canales**
- GitHub Issues para bugs y features
- GitHub Discussions para preguntas generales
- Pull Requests para contribuciones de código

### **Código de Conducta**
- Ser respetuoso y constructivo
- Enfocarse en el contenido, no en la persona
- Aceptar feedback constructivo
- Ayudar a otros contribuidores

## 🏆 Reconocimiento

### **Contribuidores**
- Todos los contribuidores serán listados en README
- Contribuciones significativas serán destacadas
- Créditos en documentación cuando sea apropiado

### **Tipos de Contribución**
- 💻 Código
- 📖 Documentación
- 🎨 Diseño
- 🐛 Bug reports
- 💡 Ideas
- 🌍 Traducción

## 📈 Roadmap

### **Próximas Versiones**
- v1.1: Más problemas de geometría
- v1.2: Sistema de puntuación
- v1.3: Modo multijugador
- v2.0: Integración con LMS

### **Contribuciones Prioritarias**
1. Nuevos problemas matemáticos
2. Mejoras de accesibilidad
3. Optimizaciones de rendimiento
4. Traducciones

---

**¡Gracias por contribuir a la educación matemática! 🎓✨**

*Cada contribución, por pequeña que sea, hace una diferencia en el aprendizaje de los estudiantes.*