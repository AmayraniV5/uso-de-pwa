# CUARTOU - Encuentra tu Hogar Universitario 🏠

Progressive Web App (PWA) para ayudar a estudiantes universitarios a encontrar alojamiento cerca de su universidad.

## 🚀 Características

- ✅ **PWA Completa** - Funciona offline con Service Worker
- 📱 **Responsive Design** - Adaptado para móviles, tablets y desktop
- 💬 **Integración con WhatsApp** - Contacto directo vía WhatsApp
- 🔔 **Notificaciones Toast** - Notificaciones personalizadas en la página
- 🎨 **Diseño Verde** - Tema WhatsApp (#25D366)
- 📦 **Cache Inteligente** - Almacenamiento en caché para acceso rápido
- 🎬 **Carrusel de Imágenes** - Presentación visual de alojamientos
- 📹 **Videos Informativos** - Guías para estudiantes

## 📋 Tecnologías

- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript (ES6+)
- Service Worker API
- Font Awesome 6.4.0
- jQuery 3.7.1

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/TU_USUARIO/cuartou.git
```

2. Abre el proyecto en un servidor local (Laragon, XAMPP, Live Server, etc.)

3. Accede a `http://localhost/cuartou` en tu navegador

## 📱 Instalación como PWA

1. Abre la aplicación en Chrome/Edge
2. Click en el ícono de instalación en la barra de direcciones
3. Confirma la instalación
4. ¡Listo! Ahora puedes usar CUARTOU como una app nativa

## 🔧 Configuración

### Cambiar número de WhatsApp

Edita `index.html` línea ~420:
```javascript
const numeroWhatsApp = '527571173738'; // Tu número aquí
```

### Actualizar versión del caché

Edita `sw.js` línea 4:
```javascript
const CACHE_NAME = 'v0_CUARTOU_2025_07'; // Incrementa la versión
```

## 📂 Estructura del Proyecto

```
CUARTOU/
├── index.html          # Página principal
├── manifest.json       # Configuración PWA
├── sw.js              # Service Worker
├── css/
│   └── styles.css     # Estilos principales
├── js/
│   └── main.js        # JavaScript principal
└── img/
    ├── 2869209.png    # Logo
    └── ...            # Imágenes del carrusel
```

## 🎨 Personalización

### Colores principales

Edita `css/styles.css`:
```css
:root {
  --primary-green: #25D366;
  --dark-green: #128C7E;
  --light-green: #DCF8C6;
}
```

## 📞 Contacto

- WhatsApp: +52 757 117 3738
- Email: info@cuartou.com

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agregar nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

---

Desarrollado con 💚 para estudiantes universitarios
