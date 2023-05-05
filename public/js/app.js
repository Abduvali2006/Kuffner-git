// const hamburger = document.querySelector("#hamburger");
// const menu = document.querySelector("#menu");

// hamburger.addEventListener("click", () => {
//   menu.className.toggle("hidden");
// });
document.querySelector('.menuBtn').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('-translate-x-full')
})
document.querySelector('.xBtn').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('-translate-x-full')
})