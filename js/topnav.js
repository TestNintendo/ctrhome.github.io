    document.addEventListener("DOMContentLoaded", function () {
  // Create wrapper div
  const nav = document.createElement("div");
    nav.className = "topnav";
    nav.id = "myTopnav";

    // Helper to create links
    function createLink(href, text, isImg = false, imgSrc = "") {
    const a = document.createElement("a");
    a.href = href;
    if (isImg) {
      const img = document.createElement("img");
    img.src = imgSrc;
    img.className = "navlogo";
    a.appendChild(img);
    } else {
        a.textContent = text;
    }
    return a;
  }

    // Add all links
    nav.appendChild(createLink("/", "", true, "https://ctrhome.github.io/img/logo_small.png"));
    nav.appendChild(createLink("/games", "Games"));
    nav.appendChild(createLink("/about", "About"));
    nav.appendChild(createLink("/fan-projects", "Fan Projects"));
    nav.appendChild(createLink("/play", "Play Online"));
    // nav.appendChild(createLink("/modding", "Modding"));
    nav.appendChild(createLink("/extras", "Extras"));

    //holiday stuff
    const snowScript = document.createElement('script');
    const snowDiv = document.createElement('div');
    snowDiv.classList.add('rain');
    snowScript.src = "/js/rain.js";
    document.body.appendChild(snowDiv);
    document.body.appendChild(snowScript);
    

    // Add the hamburger icon
    const iconLink = document.createElement("a");
    iconLink.href = "javascript:void(0);";
    iconLink.className = "icon";
    iconLink.onclick = myFunction;

    const icon = document.createElement("i");
    icon.className = "fa fa-bars";
    iconLink.appendChild(icon);

    nav.appendChild(iconLink);

    // Append nav to body (or another container)
    document.body.prepend(nav);

    // Function for responsive toggle
    function myFunction() {
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
  }
});
