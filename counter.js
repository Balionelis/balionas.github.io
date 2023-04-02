if (localStorage.getItem('visitorCount') === null) {
    localStorage.setItem('visitorCount', 0);
  }
  
  if (sessionStorage.getItem('counted') === null) {
    let count = parseInt(localStorage.getItem('visitorCount')) + 1;
    localStorage.setItem('visitorCount', count);
    sessionStorage.setItem('counted', 'true');
  }
  
  let count = parseInt(localStorage.getItem('visitorCount'));
  document.getElementById('visitor-count').innerHTML = count;
  