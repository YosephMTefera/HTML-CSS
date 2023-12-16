const navBar = document.getElementById("nav-toggler");
const r_navbar = document.querySelector(".r-navbar");

navBar.addEventListener("click", (e) => {
  console.log("s");

  const open = r_navbar.classList.contains("r-navbarState");
  if (open) {
    r_navbar.classList.remove("r-navbarState");
  } else {
    r_navbar.classList.add("r-navbarState");
  }
});
