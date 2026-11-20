document.addEventListener("DOMContentLoaded", () => {
    // 1. Funcionalidad del botón interactivo de Curiosidades
    const btnCuriosidades = document.getElementById("btnCuriosidades");
    const contenedorCuriosidades = document.getElementById("contenedorCuriosidades");

    if (btnCuriosidades && contenedorCuriosidades) {
        btnCuriosidades.addEventListener("click", () => {
            const estaOculto = contenedorCuriosidades.classList.contains("hidden");

            if (estaOculto) {
                contenedorCuriosidades.classList.remove("hidden");
                btnCuriosidades.textContent = "Ocultar Curiosidades";
                btnCuriosidades.setAttribute("aria-expanded", "true");
            } else {
                contenedorCuriosidades.classList.add("hidden");
                btnCuriosidades.textContent = "Mostrar Curiosidades (4)";
                btnCuriosidades.setAttribute("aria-expanded", "false");
            }
        });
    }

    // 2. Funcionalidad del menú desplegable en dispositivos móviles
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });

        // Cerrar el menú móvil al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
            });
        });
    }
});
