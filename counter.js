if (localStorage.getItem('visitorCount') === null) {
  localStorage.setItem('visitorCount', 0);
}

if (localStorage.getItem('visited') === null) {
  let count = parseInt(localStorage.getItem('visitorCount')) + 1;
  localStorage.setItem('visitorCount', count);
  localStorage.setItem('visited', 'true');
}

let count = parseInt(localStorage.getItem('visitorCount'));
document.getElementById('visitor-count').innerHTML = count;
