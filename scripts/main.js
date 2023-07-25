document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("backButton");
  
    // Check if the backButton element exists before adding the event listener
    if (backButton) {
      backButton.addEventListener("click", goBack);
    }
  
    function goBack() {
      window.history.back();
    }
  });