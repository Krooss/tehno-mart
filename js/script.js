var popupFeedbackOpen = document.querySelector(".contacts .feedback-link");
var popupFeedback = document.querySelector(".contacts .popup-feedback");
var feedbackInput = popupFeedback.querySelector("label:first-child input");
var popupFeedbackClose = popupFeedback.querySelector(".button-close");

popupFeedbackOpen.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupFeedback.classList.add("show-popup");
	feedbackInput.focus();
});

popupFeedbackClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupFeedback.classList.remove("show-popup");
});