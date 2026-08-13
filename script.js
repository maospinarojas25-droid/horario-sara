// ==========================================
// HORARIO UNIVERSITARIO
// SARA OSPINA
// ==========================================


document.addEventListener(
    "DOMContentLoaded",
    () => {


        console.log(
            "💜 Horario de Sara Ospina cargado correctamente ✨"
        );



        // ==================================
        // SELECCIONAR MATERIA
        // ==================================

        const materias =
            document.querySelectorAll(".materia");


        materias.forEach(
            (materia) => {


                materia.addEventListener(
                    "click",
                    () => {

                        materia.classList.toggle(
                            "seleccionada"
                        );

                    }
                );


            }
        );



        // ==================================
        // COMPROBAR IMÁGENES
        // ==================================

        const imagenes =
            document.querySelectorAll("img");


        imagenes.forEach(
            (imagen) => {


                imagen.addEventListener(
                    "error",
                    () => {

                        console.warn(
                            "No se pudo cargar:",
                            imagen.src
                        );

                    }
                );


            }
        );


    }
);