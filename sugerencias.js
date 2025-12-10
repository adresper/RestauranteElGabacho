document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("sugerenciasForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Campos
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const asunto = document.getElementById("asunto");
        const mensaje = document.getElementById("mensaje");

        // Errores
        let ok = true;

        if (nombre.value.trim() === "") {
            setError("error-nombre", "Escribe tu nombre");
            ok = false;
        } else clearError("error-nombre");

        if (email.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            setError("error-email", "Correo inválido (ejemplo: nombre@gmail.com)");
            ok = false;
        } else clearError("error-email");

        if (asunto.value.trim() === "") {
            setError("error-asunto", "Escribe un asunto");
            ok = false;
        } else clearError("error-asunto");

        if (mensaje.value.trim() === "") {
            setError("error-mensaje", "Escribe un mensaje");
            ok = false;
        } else clearError("error-mensaje");

        if (!ok) return;

        // Envía Formspree
        const formData = new FormData(form);

        const res = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (res.ok) {
            document.getElementById("form-success").textContent = "¡Mensaje enviado con éxito!";
            form.reset();
        } else {
            document.getElementById("form-success").textContent = "Hubo un error, intenta más tarde.";
        }

    });

    function setError(id, msg) {
        document.getElementById(id).textContent = msg;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }

});
