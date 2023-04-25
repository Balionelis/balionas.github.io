document.addEventListener("mousemove", function(event) {
  var trail = document.createElement("div");
  trail.style.backgroundColor = "#00a6ff";
  trail.style.width = "10px";
  trail.style.height = "10px";
  trail.style.borderRadius = "50%";
  trail.style.position = "absolute";
  trail.style.left = event.clientX - 5 + "px";
  trail.style.top = event.clientY - 5 + "px";
  trail.style.opacity = "0";
  trail.style.pointerEvents = "none";
  document.getElementById("trailContainer").appendChild(trail);

  setTimeout(function() {
    trail.style.transition = "opacity 0.5s linear";
    trail.style.opacity = "1";
  }, 0);
  
  setTimeout(function() {
    trail.parentNode.removeChild(trail);
  }, 500);
});

window.onload = function() {
  console.log("If you see this, have a nice day :)");
};

window.addEventListener('load', function() {
  var body = document.querySelector('body');

  body.style.transition = 'opacity 3s';
  body.style.opacity = 1;
});
