function toggleRidesDropdown() {
  const dropdown = document.getElementById("ridesMenu");
  dropdown.classList.toggle("show");
}

function setActive(el) {
  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => item.classList.remove("active"));
  el.classList.add("active");
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebarToggleBtn');

  sidebar.classList.toggle('mini');

  toggleBtn.style.left = sidebar.classList.contains('mini') ? '70px' : '160px';
}

function setActive(el) {
  // Prevent setting active on dropdown parent
  if (el.classList.contains('dropdown')) return;

  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => item.classList.remove("active"));
  el.classList.add("active");
}

