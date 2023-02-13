const modalButtons = document.querySelectorAll("[data-modal-button]");
const modalCloseButtons = document.querySelectorAll("[data-modal-close]");
const allModals = document.querySelectorAll("[data-modal]");

modalButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modal = document.querySelector("#" + this.dataset.modalButton);
    modal.classList.remove("hidden");

    modal
      .querySelector(".modal-window")
      .addEventListener("click", function (event) {
        event.stopPropagation();
      });
  });
});

modalCloseButtons.forEach(function (item) {
  item.addEventListener("click", function () {
    const modal = this.closest("[data-modal]");
    modal.classList.add("hidden");
  });
});

allModals.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.add("hidden");
  });
});
