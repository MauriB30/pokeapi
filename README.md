# PokéDex

## 🚀 Tecnologías

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS + Material-UI + Emotion
- **Build Tool**: Vite
- **Data Fetching**: React Query + Axios
- **API**: PokéAPI
- **Icons**: Lucide React

## 📋 Requisitos previos

- Node.js 18+
- npm o yarn

## 🛠️ Instalación

1. **Clona el repositorio**

    ```bash
    git clone https://github.com/tu-usuario/pokeapi.git
    cd pokeapi
    ```

2. **Instala las dependencias**

    ```bash
    npm install
    # o
    yarn install
    ```

3. **Inicia el servidor de desarrollo**

    ```bash
    npm run dev
    # o
    yarn dev
    ```

4. **Abre tu navegador**

    Visita `http://localhost:5173`

## 📦 Scripts disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## 🎮 Uso

1. **Explorar Pokémon**: La página principal muestra una grilla con todos los Pokémon disponibles
2. **Búsqueda**: Utiliza la barra de búsqueda para encontrar un Pokémon específico por nombre o ID
3. **Ver detalles**: Haz click en cualquier Pokémon para ver información detallada en un modal
4. **Navegación**: Utiliza la paginación para explorar más Pokémon

## 🏗️ Estructura del proyecto

```
pokeapi/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── hooks/           # Custom hooks
│   ├── services/        # API calls y servicios
│   ├── types/           # Tipos de TypeScript
│   ├── utils/           # Funciones utilitarias
│   └── App.tsx          # Componente principal
├── public/              # Archivos estáticos
└── package.json
```
