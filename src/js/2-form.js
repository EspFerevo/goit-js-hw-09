'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const feedbackData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};

  if (feedbackData.email) {
    form.elements.email.value = feedbackData.email;
  }
  if (feedbackData.message) {
    form.elements.message.value = feedbackData.message;
  }

  form.addEventListener('input', function (event) {
    feedbackData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (emailValue && messageValue) {
      console.log({
        email: emailValue,
        message: messageValue,
      });

      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('!!!!!');
    }
  });
});
