// Set Muhurtham date & time
const weddingDate = new Date("June 15, 2026 08:45:00").getTime();
const timer = document.getElementById("timer");

// Countdown
if (timer) {
  setInterval(() => {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) {
      timer.innerHTML = "The sacred Muhurtham is here 🙏";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML =
      `${days} days ${hours} hrs ${minutes} mins ${seconds} secs`;
  }, 1000);
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
