
# Gestion de Productos

Aplicación web en Next.js que funciona como una herramienta de gestión de aprobación de productos (To-Do)

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Bryan4638/gestion-de-productos.git
cd gestion-de-productos
```

2. Instala dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

## 🌐 API

**URL Base:** `https://67e1b72a58cc6bf78526ddf6.mockapi.io/api/v1`

### Endpoints

| Método | Endpoint       | Descripción                |
|--------|----------------|----------------------------|
| GET    | /product         | Obtener todos los productos    |
| POST   | /product         | Crear nuevo producto           |
| GET    | /product/{id}    | Obtener producto específico    |
| PUT    | /product/{id}    | Actualizar producto            |
| DELETE | /product/{id}    | Eliminar producto              |

## 💡 Notas Importantes

### Infinite Scroll con Indicador de Carga
- He implementado un **indicador de carga (spinner/delay)** durante la peticion al localStorage para cargar los nuevos productos al hacer scroll
- Esto permite:
  - Visualizar claramente el funcionamiento del infinite scroll
  - Mejorar la experiencia de usuario durante la carga
  - Evitar que los nuevos elementos aparezcan bruscamente

- El tiempo se puede cambiar en el archivo conf.ts (TIME_DELAY=2000) tiempo en milisegundos


## 📝 Licencia

MIT
