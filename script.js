const downloadButton = document.querySelector(".download-button");

if (downloadButton) {
  downloadButton.addEventListener("click", (event) => {
    if (downloadButton.getAttribute("href") === "#") {
      event.preventDefault();
    }
  });
}
