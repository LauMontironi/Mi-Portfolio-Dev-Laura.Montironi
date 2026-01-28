import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "🍔 My First Landing Page",
    description: "Web estática para una hamburguesería. Uso de HTML5 semántico y CSS básico para estructura y diseño.",
    imageUrl: "assets/projects/hamburgueseria_rovers.jpg",
    githubUrl: "https://github.com/LauMontironi/Hamburgueser-a-Rovers-Landing-Page-HTML-CSS-",
    liveUrl: "https://hamburgueseria-rovers-landing-page.netlify.app/"
  },
  {
    id: 2,
    title: "📱 Layout Responsive (Yamifood)",
    description: "Maquetación adaptable a móviles y escritorio. Uso de Media Queries y Flexbox para la distribución.",
    imageUrl: "assets/projects/yami_food.jpg",
    githubUrl: "https://github.com/LauMontironi/Restaurante_Yamifood_proyecto_de_maquetacion",
    liveUrl: "https://yamifood-restobar.netlify.app/"
  },
  {
    id: 3,
    title: "🥗 JS Filters + DOM",
    description: "Manipulación del DOM. Filtrado dinámico de recetas mediante JavaScript y gestión de eventos.",
    imageUrl: "assets/projects/Gourmet_hub.jpg",
    githubUrl: "https://github.com/LauMontironi/Landing_page_Recetas",
    liveUrl: "https://gourmet-hub-landing-page.netlify.app/",
    blogUrl: "https://dev.to/laumontironi/aprendiendo-javascript-paso-a-paso-389"
  },
  {
    id: 4,
    title: "🛒 E-commerce Logic (JS)",
    description: "Lógica de carrito de compras. Arrays, objetos, cálculo de totales y persistencia básica.",
    imageUrl: "assets/projects/E_commerce_js.jpg",
    githubUrl: "https://github.com/LauMontironi/Tienda_Virtual_JavaScript",
    liveUrl: "https://mystorewithjavascript.netlify.app/",
    blogUrl: "https://dev.to/laumontironi/-javascript-el-lenguaje-que-no-sabia-que-me-iba-a-encantar-3jjl"
  },
  {
    id: 5,
    title: "🐍 Python Scripts",
    description: "Fundamentos de backend. Tipado de datos, bucles, diccionarios y consumo de APIs básicas.",
    imageUrl: "assets/projects/python_scripts.jpg",
    githubUrl: "https://github.com/LauMontironi/-Ejercicios-de-Fundamentos-y-APIs-en-Python",
    blogUrl: "https://dev.to/laumontironi/querido-python-513c"
  },
  {
    id: 6,
    title: "🗄️ MySQL Database",
    description: "Gestión de conciertos. Diseño relacional, creación de tablas y consultas SQL complejas.",
    imageUrl: "assets/projects/gestion_conciertos_sql.jpg",
    githubUrl: "https://github.com/LauMontironi/SQL_gestion_conciertos_practica",
    blogUrl: "https://dev.to/laumontironi/la-batalla-de-las-bases-de-datos-sql-mongo-y-la-montana-rusa-del-bootcamp-4fe8"
  },
  {
    id: 7,
    title: "🎬 API de Películas (FastAPI)",
    description: "CRUD Backend completo. Arquitectura MVC, datos en memoria, validaciones Pydantic y control de errores HTTP.",
    imageUrl: "assets/projects/api_pelicula_sin_db.jpg",
    githubUrl: "https://github.com/LauMontironi/-API-de-Pel-culas-CRUD-con-FastAPI-sin-BBDD-",
    blogUrl: "https://dev.to/laumontironi/fastapi-de-un-solo-archivo-a-pasar-la-bola-mi-chuleta-de-supervivencia-1804"
  },
  {
    id: 8,
    title: "🏥 Hospital API · FastAPI",
    description: "API REST con FastAPI y MySQL. CRUD de pacientes, doctores y citas, JWT y roles.",
    imageUrl: "assets/projects/api_hospital.jpg",
    githubUrl: "https://github.com/LauMontironi/CRUD-Hospital-API-FastAPI-MySQL",
    blogUrl: "https://dev.to/laumontironi/fastapi-de-un-solo-archivo-a-pasar-la-bola-mi-chuleta-de-supervivencia-1804"
  },
  {
    id: 9,
    title: "🍃 API CRUD · FastAPI + MongoDB",
    description: "API REST con FastAPI y MongoDB. CRUD completo, validaciones con Pydantic y estructura modular.",
    imageUrl: "assets/projects/crud_mongodb.jpg",
    githubUrl: "https://github.com/LauMontironi/CRUD-API-con-FastAPI-MongoDB",
    blogUrl: "https://dev.to/laumontironi/la-batalla-de-las-bases-de-datos-sql-mongo-y-la-montana-rusa-del-bootcamp-4fe8"
  },
  {
    id: 10,
    title: "🅰️ Card Builder · Angular",
    description: "Aplicación en Angular con Signals, control flow moderno (@if), themes dinámicos y generación de tarjeta final con SweetAlert2.",
    imageUrl: "assets/projects/angular.jpg",
    githubUrl: "https://github.com/LauMontironi/Card-Builder-Angular-Project",
    blogUrl: "https://dev.to/laumontironi/angular-y-el-laberinto-tech-con-ia-todo-es-mejor-1foi",
    liveUrl: "https://angularcardbuilder.netlify.app/"
  }
];
