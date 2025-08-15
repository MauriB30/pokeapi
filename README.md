PokéDex

🚀 Tecnologías

Frontend: React 19 + TypeScript
Styling: Tailwind CSS + Material-UI 
Build Tool: Vite
Data Fetching: React Query + Axios
API: PokéAPI
Icons: Lucide React

📋 Requisitos previos

Node.js 18+
npm o yarn

🛠️ Instalación

Clona el repositorio
bashgit clone https://github.com/tu-usuario/pokeapi.git
cd pokeapi

Instala las dependencias
bashnpm install
# o
yarn install

Inicia el servidor de desarrollo
bashnpm run dev
# o
yarn dev

Abre tu navegador
Visita http://localhost:5173

📦 Scripts disponibles
bash# Desarrollo
npm run dev

# Build para producción
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
🎮 Uso

Explorar Pokémon: La página principal muestra una grilla con todos los Pokémon disponibles
Búsqueda: Utiliza la barra de búsqueda para encontrar un Pokémon específico por nombre o ID
Ver detalles: Haz click en cualquier Pokémon para ver información detallada en un modal
Navegación: Utiliza la paginación para explorar más Pokémon

🏗️ Estructura del proyecto
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
🌟 Características técnicas

