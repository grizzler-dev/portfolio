document.addEventListener('DOMContentLoaded', () => {
  let homeDiv = document.getElementById('home');

  if (homeDiv) {
    homeDiv.addEventListener('click', (e) => {
      window.location.href = 'index.html';
    });
  }
});
