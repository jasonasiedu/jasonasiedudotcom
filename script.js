// Expand / collapse project descriptions (+ / − toggle)
document.querySelectorAll(".toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const desc = btn.parentElement.querySelector(".description");
    const isHidden = desc.hasAttribute("hidden");
    if (isHidden) {
      desc.removeAttribute("hidden");
      btn.textContent = "−";
      btn.setAttribute("aria-expanded", "true");
    } else {
      desc.setAttribute("hidden", "");
      btn.textContent = "+";
      btn.setAttribute("aria-expanded", "false");
    }
  });
});

// Carousel: click left/right to cycle through each project's images.
// Give each .box an data-images="img1.jpg,img2.jpg,img3.jpg" attribute
// (comma separated, no spaces) — this swaps the <img>'s src so every
// photo displays at its own proportions instead of being cropped.
document.querySelectorAll(".carousel").forEach((carousel) => {
  const box = carousel.querySelector(".box");
  const img = box.querySelector("img");
  const list = (box.dataset.images || "").split(",").filter(Boolean);
  let index = 0;

  function render() {
    if (list.length && img) {
      img.src = list[index];
    }
  }

  carousel.querySelector(".prev")?.addEventListener("click", () => {
    if (!list.length) return;
    index = (index - 1 + list.length) % list.length;
    render();
  });

  carousel.querySelector(".next")?.addEventListener("click", () => {
    if (!list.length) return;
    index = (index + 1) % list.length;
    render();
  });

  render();
});
