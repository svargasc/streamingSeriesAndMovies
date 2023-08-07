const openModal = document.querySelector(".hero__cta");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const hideModal = document.querySelector(".movies");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
  hideModal.style.display = 'none';
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
  hideModal.style.display = 'block'
});

