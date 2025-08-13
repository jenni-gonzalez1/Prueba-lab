export function loginPage() {

    let banner2Div = document.createElement("div");
    banner2Div.className = "div-banner2";

    let spanBanner2 = document.createElement("span");
    spanBanner2.className = "span-banner2";
    spanBanner2.textContent = "Geeta.";
    banner2Div.appendChild(spanBanner2);

    let pBanner2 = document.createElement("p");
    pBanner2.className = "p-banner2";
    pBanner2.textContent = "Create your fashion in your own way";
    banner2Div.appendChild(pBanner2);

    let p1Banner2 = document.createElement("p");
    p1Banner2.className = "p1-banner2";
    p1Banner2.textContent = "Each men and women has their own style, Geeta helps you to create your unique style.";
    banner2Div.appendChild(p1Banner2);

    let botonLogin = document.createElement("div");
    botonLogin.className = "div-boton2";
    botonLogin.textContent = "LOG IN";
    banner2Div.appendChild(botonLogin);

    let spanBoton2 = document.createElement("span");
    spanBoton2.className = "span-boton2";
    spanBoton2.textContent = "-OR-";
    banner2Div.appendChild(spanBoton2);

    let botonRegister = document.createElement("a");
    botonRegister.href = "Pages/Register/register.html";
    botonRegister.className = "div-boton22";
    botonRegister.textContent = "REGISTER";
    banner2Div.appendChild(botonRegister);




    // ---------- Banner de Formulario ----------
    let banner3Div = document.createElement("div");
    banner3Div.className = "div-banner3 hidden";

    let spanBanner3 = document.createElement("span");
    spanBanner3.className = "span-banner3";
    spanBanner3.textContent = "Welcome Back !";
    banner3Div.appendChild(spanBanner3);

    let pBanner3 = document.createElement("p");
    pBanner3.className = "p-banner3";
    pBanner3.textContent = "Yay! You're back! Thanks for shopping with us. We have exciting deals and promotions going on, grab your pick now!";
    banner3Div.appendChild(pBanner3);

    let p1Banner3 = document.createElement("p");
    p1Banner3.className = "p1-banner3";
    p1Banner3.textContent = "LOG IN";
    banner3Div.appendChild(p1Banner3);

    let p2Banner3 = document.createElement("p");
    p2Banner3.className = "p2-banner3";
    p2Banner3.textContent = "Email address";
    banner3Div.appendChild(p2Banner3);

    let div2Banner3 = document.createElement("div");
    div2Banner3.className = "div2-banner3";
    banner3Div.appendChild(div2Banner3);

    let p3Banner3 = document.createElement("p");
    p3Banner3.className = "p3-banner3";
    p3Banner3.textContent = "Password";
    banner3Div.appendChild(p3Banner3);

    // Agrego los banners
    document.body.appendChild(banner2Div);
    document.body.appendChild(banner3Div);

    
    botonLogin.addEventListener('click', () => {
        banner2Div.classList.add("hidden");
        banner3Div.classList.remove("hidden");
    });
}
loginPage();