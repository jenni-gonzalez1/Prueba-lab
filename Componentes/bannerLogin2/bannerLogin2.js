export function banner3() {
    let login = document.createElement("div");
    login.className = "div-banner3";

    let span = document.createElement("span");
    span.className = "span-banner3";
    span.textContent = "Welcome Back !";
    login.appendChild(span);

    let p = document.createElement("p");
    p.className = "p-banner3";
    p.textContent = "Yay! You're back! Thanks for shopping with us. We have exciting deals and promotions going on, grab your pick now!";
    login.appendChild(p);

    let p1 = document.createElement("p");
    p1.className = "p1-banner3";
    p1.textContent = "LOG IN  ";
    login.appendChild(p1);

    let p2 = document.createElement("p");
    p2.className = "p2-banner3";
    p2.textContent = "Email address";
    login.appendChild(p2);

    let div = document.createElement("div");
    div.className = "div2-banner3"; 
    login.appendChild(div);

    let p3 = document.createElement("p")
    p3.className = "p3-banner3"
    p3.textContent = "Password"
    login.appendChild(p3)

    return login; 
}