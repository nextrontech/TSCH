const Xbtn = document.querySelector(".sidebar i");
const Sbar = document.querySelector(".sidebar");
const Mbtn = document.querySelector(".menu i");

Xbtn.onclick = () => {
  Sbar.style.display = "none";
};

Mbtn.onclick = () => {
  Sbar.style.display = "flex";
};
