# 🚀 Guía de Instalación y Despliegue

## 📋 Requisitos del Sistema

### **Requisitos Mínimos**
- ✅ Navegador web moderno (Chrome 80+, Firefox 75+, Safari 13+, Edge 80+)
- ✅ JavaScript habilitado
- ✅ Resolución mínima: 320px de ancho
- ✅ Conexión a internet (para fuentes y iconos)

### **Requisitos Recomendados**
- 🎯 Navegador actualizado a la última versión
- 🎯 Resolución: 1024x768 o superior
- 🎯 Conexión estable a internet
- 🎯 Audio habilitado (para efectos sonoros futuros)

---

## 📁 Estructura de Archivos

```
proyecto-razonamiento-algebraico/
├── 📄 index.html                 # Página principal
├── 🎨 styles.css                 # Estilos CSS
├── ⚙️ script.js                  # Lógica JavaScript
├── 🔧 config.js                  # Configuración
├── 🧪 test.html                  # Página de pruebas
├── 📚 README.md                  # Documentación principal
├── 📝 problemas-adicionales.md   # Problemas extra y análisis
├── 📋 INSTALACION.md             # Esta guía
└── ✅ todo.md                    # Lista de tareas completadas
```

---

## 🛠️ Métodos de Instalación

### **Método 1: Descarga Directa (Más Fácil)**

1. **Descargar archivos**
   ```bash
   # Crear carpeta del proyecto
   mkdir razonamiento-algebraico
   cd razonamiento-algebraico
   
   # Descargar todos los archivos en esta carpeta
   ```

2. **Abrir la aplicación**
   - Hacer doble clic en `index.html`
   - O arrastrar `index.html` al navegador
   - ¡Listo para usar!

### **Método 2: Servidor Local (Recomendado)**

#### **Con Python (si está instalado)**
```bash
# Navegar a la carpeta del proyecto
cd razonamiento-algebraico

# Python 3
python -m http.server 8000

# Python 2 (si es necesario)
python -m SimpleHTTPServer 8000

# Abrir en navegador: http://localhost:8000
```

#### **Con Node.js**
```bash
# Instalar servidor HTTP global
npm install -g http-server

# Navegar a la carpeta del proyecto
cd razonamiento-algebraico

# Iniciar servidor
http-server -p 8000

# Abrir en navegador: http://localhost:8000
```

#### **Con PHP (si está instalado)**
```bash
# Navegar a la carpeta del proyecto
cd razonamiento-algebraico

# Iniciar servidor PHP
php -S localhost:8000

# Abrir en navegador: http://localhost:8000
```

### **Método 3: Servidor Web (Para Producción)**

#### **Apache**
1. Copiar archivos a `/var/www/html/razonamiento-algebraico/`
2. Configurar virtual host si es necesario
3. Acceder via `http://tu-servidor/razonamiento-algebraico/`

#### **Nginx**
1. Copiar archivos al directorio web
2. Configurar bloque server
3. Reiniciar Nginx

#### **Hosting Web**
1. Subir archivos via FTP/SFTP
2. Mantener estructura de carpetas
3. Acceder via URL del hosting

---

## 🧪 Verificación de Instalación

### **Prueba Rápida**
1. Abrir `test.html` en el navegador
2. Hacer clic en "Verificar Archivos"
3. Todos los archivos deben mostrar ✅

### **Prueba Completa**
1. Abrir `index.html`
2. Verificar que se cargan los 3 problemas
3. Probar navegación entre secciones
4. Intentar resolver un problema simple

### **Checklist de Verificación**
- [ ] La página carga sin errores
- [ ] Se ven los iconos de Font Awesome
- [ ] Las fuentes Google se cargan correctamente
- [ ] La navegación funciona
- [ ] Los SVG se renderizan correctamente
- [ ] Los inputs aceptan números
- [ ] Los botones responden al clic
- [ ] Las animaciones funcionan suavemente

---

## 🔧 Configuración Avanzada

### **Personalizar Colores**
Editar `config.js`:
```javascript
CONFIG.ui.colors = {
    primary: "#tu-color-primario",
    success: "#tu-color-exito",
    error: "#tu-color-error"
};
```

### **Ajustar Dificultad**
```javascript
// Para estudiantes más jóvenes
ConfigManager.applyPreset('elementary');

// Para estudiantes avanzados  
ConfigManager.applyPreset('advanced');

// Para accesibilidad
ConfigManager.applyPreset('accessible');
```

### **Modificar Problemas**
Editar valores en `config.js` sección `CONFIG.problems`:
```javascript
CONFIG.problems.angles.triangle1.correctAnswer = 79;
CONFIG.problems.balances.values.hammer = 6;
```

---

## 🌐 Despliegue en la Nube

### **GitHub Pages (Gratis)**
1. Crear repositorio en GitHub
2. Subir archivos
3. Activar GitHub Pages en configuración
4. Acceder via `https://usuario.github.io/repositorio/`

### **Netlify (Gratis)**
1. Crear cuenta en Netlify
2. Arrastrar carpeta del proyecto
3. Obtener URL automática
4. Configurar dominio personalizado (opcional)

### **Vercel (Gratis)**
1. Crear cuenta en Vercel
2. Conectar repositorio GitHub
3. Despliegue automático
4. URL personalizada disponible

### **Firebase Hosting**
```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Inicializar proyecto
firebase init hosting

# Desplegar
firebase deploy
```

---

## 🔒 Consideraciones de Seguridad

### **Para Uso Escolar**
- ✅ No requiere registro de usuarios
- ✅ No recopila datos personales
- ✅ Funciona completamente offline (excepto fuentes/iconos)
- ✅ Código fuente abierto y auditable

### **Para Servidores Web**
- Configurar HTTPS si es posible
- Establecer headers de seguridad apropiados
- Considerar CSP (Content Security Policy)
- Mantener servidor actualizado

---

## 🐛 Solución de Problemas

### **Problema: Página en blanco**
**Solución:**
1. Verificar que todos los archivos estén en la misma carpeta
2. Abrir consola del navegador (F12) para ver errores
3. Verificar que JavaScript esté habilitado

### **Problema: Iconos no se cargan**
**Solución:**
1. Verificar conexión a internet
2. Comprobar que Font Awesome CDN esté accesible
3. Considerar descargar iconos localmente si es necesario

### **Problema: Fuentes no se cargan**
**Solución:**
1. Verificar conexión a Google Fonts
2. Usar fuentes de respaldo (Arial, sans-serif)
3. Descargar fuentes localmente si es necesario

### **Problema: Animaciones lentas**
**Solución:**
1. Aplicar preset de accesibilidad: `ConfigManager.applyPreset('accessible')`
2. Reducir efectos visuales en dispositivos antiguos
3. Verificar rendimiento del navegador

### **Problema: No funciona en móvil**
**Solución:**
1. Verificar meta viewport en HTML
2. Probar en diferentes navegadores móviles
3. Verificar que touch events funcionen

---

## 📊 Monitoreo y Analytics

### **Métricas Básicas**
- Tiempo de carga de página
- Errores de JavaScript
- Uso por dispositivo/navegador
- Problemas más/menos utilizados

### **Herramientas Recomendadas**
- Google Analytics (opcional)
- Google Search Console
- Lighthouse para auditorías
- Browser DevTools para debugging

---

## 🔄 Actualizaciones y Mantenimiento

### **Actualizaciones Regulares**
1. **Mensual**: Verificar enlaces externos (CDN)
2. **Trimestral**: Probar en nuevas versiones de navegadores
3. **Semestral**: Revisar accesibilidad y usabilidad
4. **Anual**: Actualizar contenido educativo

### **Backup y Versionado**
- Mantener copias de seguridad de archivos
- Usar control de versiones (Git)
- Documentar cambios importantes
- Probar antes de desplegar cambios

---

## 📞 Soporte Técnico

### **Autodiagnóstico**
1. Abrir `test.html` para verificar estado
2. Revisar consola del navegador (F12)
3. Probar en modo incógnito
4. Verificar en diferentes navegadores

### **Información para Reportes**
- Navegador y versión
- Sistema operativo
- Resolución de pantalla
- Pasos para reproducir el problema
- Capturas de pantalla si es posible

---

## 🎓 Recursos Adicionales

### **Documentación**
- `README.md` - Información general del proyecto
- `problemas-adicionales.md` - Análisis pedagógico detallado
- Comentarios en código fuente

### **Herramientas de Desarrollo**
- Visual Studio Code (editor recomendado)
- Browser DevTools para debugging
- Lighthouse para auditorías de rendimiento
- WAVE para auditorías de accesibilidad

---

**¡La aplicación está lista para usar! 🎉**

*Para cualquier duda o problema, consulta la documentación o utiliza la página de pruebas incluida.*