const toggleBtn = document.querySelector(".BarsIcon");
const toggleBtnIcon = document.querySelector(".icon");
const responsiveMenuWork = document.querySelector(".responsiveMenu");

toggleBtn.onclick = function () {
  responsiveMenuWork.classList.toggle("open");
  const isOpen = responsiveMenuWork.classList.contains("open");

  toggleBtnIcon.classList = isOpen
    ? "fa-solid fa-xmark fa-2x icon"
    : "fa-solid fa-bars fa-2x icon";
};
