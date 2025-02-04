function nextPage() {
  window.location.href = 'yes.html';
}

function moveButton() {
  const button = document.getElementById('noButton');
  if (!button) return;
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.position = 'absolute';
  button.style.top = `${randomX}px`;
  button.style.right = `${randomY}px`;
}
