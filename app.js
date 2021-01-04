const bars = document.querySelector("#bars");
const menu = document.querySelector("#menu");

bars.addEventListener("click", () => {
  if (menu.classList.contains("hidden") && window.innerWidth < 768) {
    console.log("Opened");
    menu.classList.remove("hidden");
    console.log(menu.classList);
    menu.classList.add(
      "flex",
      "flex-col",
      "text-center",
      "bg-green-500",
      "w-full",
      "absolute",
      "top-16"
    );
  } else {
    console.log("Closed");
    menu.classList.add("hidden");
    console.log(menu.classList);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    menu.classList.add("hidden");
    menu.classList.remove(
      "flex",
      "flex-col",
      "text-center",
      "bg-green-500",
      "w-full",
      "absolute",
      "top-16"
    );
  }
});

// random comment
