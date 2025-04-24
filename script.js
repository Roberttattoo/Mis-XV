window.addEventListener("load", function () {
  window.addEventListener("scroll", function () {
    const seccion1 = document.querySelector(".seccion-1");
    const seccion2 = document.querySelector(".seccion-2");

    const seccion1Top = seccion1.getBoundingClientRect().top;
    const seccion2Top = seccion2.getBoundingClientRect().top;

    if (seccion2Top < window.innerHeight / 2) {
      document.body.style.backgroundColor = "black";
    } else if (seccion1Top < window.innerHeight / 2) {
      document.body.style.backgroundColor = "#f6e3ff";
    } else {
      document.body.style.backgroundColor = "#92ac8f";
    }
  });
});