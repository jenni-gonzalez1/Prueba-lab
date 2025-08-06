export function login() {
    
    let login = document.createElement("span");
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
    p1.textContent = "Each men and women has their own style, create your fashion in your own way";
    login.appendChild(p1);

    let button = document.createElement("a");
    aBoton1.href = "Cmponentes/login/logi2.html";
    aBoton1.className = "div-boton2";
    aBoton1.textContent = "LOGIN ON";
    login.appendChild(aBoton1);

    return login;
}

document.body.appendChild(login());