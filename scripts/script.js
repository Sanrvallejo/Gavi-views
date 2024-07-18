document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-items');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
});