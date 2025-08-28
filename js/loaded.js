const loading = document.getElementById('loading');

window.onload = function() {
  setTimeout(() => {
    loading.classList.add('loaded');
  }, 2000); 
};