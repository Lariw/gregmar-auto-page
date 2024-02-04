document.querySelectorAll('.flipContainer').forEach(function(container) {
    container.addEventListener('click', function() {
      container.classList.toggle('active');
    });
  });