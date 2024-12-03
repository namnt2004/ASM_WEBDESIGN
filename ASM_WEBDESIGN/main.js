
document.getElementById('logout').addEventListener('click', function(e) {
  e.preventDefault();

  // Xóa dữ liệu session hoặc token
  sessionStorage.clear();
 

  // Chuyển hướng về form login
  window.location.href = 'login.html';
});
