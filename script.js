const apiUrl = 'https://api.github.com/repos/balionelis/moviefinder';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const watchingElement = document.getElementById('watching');
    const forksElement = document.getElementById('forks');

    watchingElement.textContent = data.subscribers_count;
    forksElement.textContent = data.forks_count;
  })
  .catch(error => {
    console.error('Error:', error);
  });