let no = document.getElementById("no");
let yes = document.getElementById("yes");
let loveImage = document.getElementById("loveImage");
let content = document.getElementById("content");

no.addEventListener("mousemove", function () {
  let randomNumber1 = Math.floor(Math.random() * 301);
  let randomNumber2 = Math.floor(Math.random() * 301);
  no.style = `position:absolute;top:${randomNumber1}px ;left:${randomNumber2}px`;
});

yes.addEventListener("click", () => {
  content.classList.add("hidden");
  loveImage.style.display = "block";
});