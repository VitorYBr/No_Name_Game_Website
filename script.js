const downloadButtons = document.querySelectorAll(".download-button");

downloadButtons.forEach((downloadButton) => {
  downloadButton.addEventListener("click", (event) => {
    if (downloadButton.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });
});
