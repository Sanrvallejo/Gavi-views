document.addEventListener('DOMContentLoaded', () => {
  const menuItems = document.querySelectorAll('.menu-items');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });

  let close = document.querySelectorAll('.close')[0];
  let open = document.querySelectorAll('.cta-en-product')[0];
  let modal = document.querySelectorAll('.modal')[0];
  let modalContainer = document.querySelectorAll('.modal-container')[0];

  open.addEventListener('click', () => {
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle('modal-close');
  });

  close.addEventListener('click', () => {
    modal.classList.toggle('modal-close');
    setTimeout(() => {
      modalContainer.style.opacity = "0";
      modalContainer.style.visibility = "hidden";
    }, 750)
  });

  window.addEventListener('click', (e) => {
    if (e.target == modalContainer) {
      console.log(e.target);
      
      modal.classList.toggle('modal-close');
      setTimeout(() => {
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
      }, 750)
    }
  })

});