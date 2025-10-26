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
    nav.appendChild(createLink("https://ctrhome.github.io/", "", true, "https://ctrhome.github.io/img/logo_small.png"));
    nav.appendChild(createLink("https://ctrhome.github.io/games", "Games"));
    nav.appendChild(createLink("https://ctrhome.github.io/about", "About"));
    nav.appendChild(createLink("https://ctrhome.github.io/fan-projects", "Fan Projects"));
    nav.appendChild(createLink("https://ctrhome.github.io/play", "Play Online"));
    // nav.appendChild(createLink("https://ctrhome.github.io/modding", "Modding"));
    nav.appendChild(createLink("https://ctrhome.github.io/extras", "Extras"));

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
