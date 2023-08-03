document.addEventListener("keyup", (e) => {
  if (e.target.matches("#search")) {
    if (e.key === "Escape") e.target.value = "";

    document.querySelectorAll(".card").forEach((fruta) => {
      fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? fruta.classList.remove("filter")
        : fruta.classList.add("filter");
    });
  }
});

// filtro
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const cards = document.querySelectorAll(".card");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      this.classList.add("active");

      cards.forEach((card) => {
        card.style.display = "none";
        if (category === "all" || card.classList.contains(category)) {
          card.style.display = "block";
        }
      });
    });
  });
});
