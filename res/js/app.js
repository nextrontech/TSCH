const Xbtn = document.querySelector(".sidebar i");
const Sbar = document.querySelector(".sidebar");
const Mbtn = document.querySelector(".menu i");
const parawords = document.querySelector(".container-02 .para p");

const text = `By empowering disadvantaged youth through education, nutrition,
          protection, we support to breaking the cycle of poverty and build
          brighter futures for them`;

Xbtn.onclick = () => {
  Sbar.style.display = "none";
};

Mbtn.onclick = () => {
  Sbar.style.display = "flex";
};

for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    parawords.append(text[i]);
  }, 50 * i);
}
