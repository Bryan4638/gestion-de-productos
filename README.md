
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

## 📦 Comandos útiles

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start

# Linter
npm run lint

# Tests (si los tienes)
npm run test
```

## 📝 Licencia

MIT
