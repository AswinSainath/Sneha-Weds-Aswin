document.querySelectorAll(".event-title").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;

    document.querySelectorAll(".event-content").forEach(c => {
      if (c !== content) {
        c.style.maxHeight = null;
      }
    });

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
