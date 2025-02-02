document.addEventListener("DOMContentLoaded", () => {
  const ratingStateContainer = document.getElementById(
    "rating-state-container"
  );
  const thankYouStateContainer = document.getElementById(
    "thank-you-state-container"
  );
  const form = document.getElementById("form");
  const ratingOptions = document.getElementsByName("rating");
  const submitButton = document.getElementById("submit-btn");
  const ratingValue = document.getElementById("rating-value");

  function getRadioValue() {
    for (i = 0; i < ratingOptions.length; i++) {
      if (ratingOptions[i].checked) {
        return ratingOptions[i].value;
      }
    }
  }

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    ratingValue.innerText = `${getRadioValue()}`;
    ratingStateContainer.style.display = "none";
    thankYouStateContainer.style.display = "grid";
    form.reset();
  });
});
