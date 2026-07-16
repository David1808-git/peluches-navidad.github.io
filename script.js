//========================================
// CONFIGURACIÓN
//========================================

const numeroWhatsApp = "573044192136";

//========================================
// BOTÓN COMPRAR
//========================================

const botonesComprar = document.querySelectorAll(".comprar");

botonesComprar.forEach((boton) => {

    boton.addEventListener("click", function (e) {

        e.preventDefault();

        const tarjeta = this.closest(".producto");

        const nombre = tarjeta.querySelector("h3").textContent.trim();
        const precio = tarjeta.querySelector(".precio").textContent.trim();
        const descripcion = tarjeta.querySelector(".descripcion").textContent.trim();
     

        const mensaje =

`🎄 *Hola.*

Estoy interesado en comprar este peluche.

🧸 *Producto:* ${nombre}

💰 *Precio:* ${precio}

📋 *Información del producto:*

${descripcion}

¿Se encuentra disponible?`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

        window.open(url, "_blank");

    });

});


//========================================
// EFECTO TARJETAS
//========================================

const tarjetas = document.querySelectorAll(".producto");

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.style.opacity="1";
            entrada.target.style.transform="translateY(0)";
        }

    });

},{
    threshold:0.15
});

tarjetas.forEach((tarjeta)=>{

    tarjeta.style.opacity="0";
    tarjeta.style.transform="translateY(60px)";
    tarjeta.style.transition="0.8s";

    observador.observe(tarjeta);

});


//========================================
// EFECTO IMAGEN
//========================================

tarjetas.forEach((tarjeta)=>{

    const imagen = tarjeta.querySelector("img");

    tarjeta.addEventListener("mouseenter",()=>{

        imagen.style.transform="scale(1.08)";
        imagen.style.transition=".5s";

    });

    tarjeta.addEventListener("mouseleave",()=>{

        imagen.style.transform="scale(1)";

    });

});


//========================================
// BOTÓN SUBIR
//========================================

const subir = document.createElement("button");

subir.id="subir";

subir.innerHTML="⬆";

subir.style.position="fixed";
subir.style.right="20px";
subir.style.bottom="20px";
subir.style.width="60px";
subir.style.height="60px";
subir.style.borderRadius="50%";
subir.style.border="none";
subir.style.background="#16a34a";
subir.style.color="white";
subir.style.fontSize="24px";
subir.style.cursor="pointer";
subir.style.display="none";
subir.style.boxShadow="0 10px 25px rgba(0,0,0,.4)";
subir.style.zIndex="999";

document.body.appendChild(subir);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        subir.style.display="block";

    }else{

        subir.style.display="none";

    }

});

subir.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


//========================================
// EFECTO BOTÓN CATÁLOGO
//========================================

const botonCatalogo = document.querySelector(".boton");

if(botonCatalogo){

    botonCatalogo.addEventListener("click",(e)=>{

        e.preventDefault();

        document.querySelector("#catalogo").scrollIntoView({

            behavior:"smooth"

        });

    });

}


//========================================
// ANIMACIÓN DEL LOGO
//========================================

const logo = document.querySelector(".logo");

if(logo){

    setInterval(()=>{

        logo.animate([

            {transform:"rotate(0deg) scale(1)"},
            {transform:"rotate(5deg) scale(1.05)"},
            {transform:"rotate(-5deg) scale(1.05)"},
            {transform:"rotate(0deg) scale(1)"}

        ],{

            duration:1200

        });

    },5000);

}