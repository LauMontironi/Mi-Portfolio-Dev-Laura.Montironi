
  window.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector(".hero-minimal__img");
    if (!img) return;

    // si el usuario prefiere menos animación, no hacemos nada
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    // Rutas (ajustá si tus nombres difieren)
    const originalSrc = img.getAttribute("src"); // toma la que ya tenés en HTML
    const avatarSrc = "assets/perfil_avatar.png";

    // Aseguramos que empieza en original
    img.src = originalSrc;

    // Dispara animación (solo una vez por refresh)
    img.classList.add("is-flipping");

    // Cambiamos a avatar en el primer "medio giro" (20% de 3.2s = 640ms aprox)
    const t1 = setTimeout(() => { img.src = avatarSrc; }, 640);

    // Volvemos a original cerca del final (80% de 3.2s = 2560ms aprox)
    const t2 = setTimeout(() => { img.src = originalSrc; }, 2560);

    // Limpieza al terminar la animación
    img.addEventListener("animationend", () => {
      img.classList.remove("is-flipping");
      img.src = originalSrc;
      clearTimeout(t1);
      clearTimeout(t2);
    }, { once: true });
  });
