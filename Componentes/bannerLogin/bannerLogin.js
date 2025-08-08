
export function Banner2() {
    let login = document.createElement("div");
    login.className = "div-banner2";

    let span = document.createElement("span");
    span.className = "span-banner2";
    span.textContent = "Geeta.";
    login.appendChild(span);

    let p = document.createElement("p");
    p.className = "p-banner2";
    p.textContent = "Create your fashion in your own way";
    login.appendChild(p);

    let p1 = document.createElement("p");
    p1.className = "p1-banner2";
    p1.textContent = "Each men and women has their own style, Geeta helps you to create your unique style.";
    login.appendChild(p1);

    let aBoton1 = document.createElement("a");
    aBoton1.href = "";
    aBoton1.className = "div-boton2";
    aBoton1.textContent = "LOG IN";
    login.appendChild(aBoton1);

    let span1 = document.createElement("span");
    span1.className = "span-boton2";
    span1.textContent = "----OR----";
    aBoton1.appendChild(span1);

    let aBoton2 = document.createElement("a");
    aBoton2.href = "";
    aBoton2.className = "div-boton22";
    aBoton2.textContent = "REGISTER";
    login.appendChild(aBoton2);

    return login;
}