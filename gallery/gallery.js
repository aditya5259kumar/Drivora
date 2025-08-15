//<!------------------------ gallery page mixitup js ------------------------>

window.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".gallery-images");
  var mixer = mixitup(container, {
    selectors: {
      target: ".mix",
    },
    animation: {
      duration: 300,
    },
  });
});