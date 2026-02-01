document.querySelectorAll(".event-title").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    document.querySelectorAll(".event-content").forEach(c => {
      if (c !== content) c.style.display = "none";
    });

    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
