// Animación al hacer scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("mostrar");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section=>{
    section.classList.add("oculto");
    observer.observe(section);
});

// Abrir imágenes al hacer clic
const imagenes = document.querySelectorAll(".galeria img");

imagenes.forEach(img=>{
    img.addEventListener("click",()=>{

        const fondo=document.createElement("div");
        fondo.style.position="fixed";
        fondo.style.top="0";
        fondo.style.left="0";
        fondo.style.width="100%";
        fondo.style.height="100%";
        fondo.style.background="rgba(0,0,0,.9)";
        fondo.style.display="flex";
        fondo.style.justifyContent="center";
        fondo.style.alignItems="center";
        fondo.style.cursor="pointer";
        fondo.style.zIndex="9999";

        const imagen=document.createElement("img");
        imagen.src=img.src;
        imagen.style.maxWidth="90%";
        imagen.style.maxHeight="90%";
        imagen.style.borderRadius="15px";

        fondo.appendChild(imagen);

        fondo.onclick=()=>{
            fondo.remove();
        }

        document.body.appendChild(fondo);

    });
});
