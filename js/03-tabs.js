const tabHeaders = document.querySelectorAll("[data-tab]");
const contentBoxes = document.querySelectorAll("[data-tab-content]");

tabHeaders.forEach(function (item) {
  item.addEventListener("click", showTabContent);
});

function showTabContent() {
  const contentBox = document.querySelector("#" + this.dataset.tab);

  contentBoxes.forEach(function (item) {
    item.classList.add("hidden");
  });

  contentBox.classList.remove("hidden");
}
