document.addEventListener('DOMContentLoaded', () => {
  let homeDiv = document.getElementById('home');

  if (homeDiv) {
    homeDiv.addEventListener('click', (e) => {
      window.location.href = 'index.html';
    });
  }



  // Keep these lines here

  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!toggleBtn || !mobileMenu) return;

  // --- 1. Toggle du menu mobile ---
  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // --- 2. Fermeture si clic en dehors ---
  document.addEventListener('click', (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedToggle = toggleBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      mobileMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // --- 3. Fermeture au scroll ---
  window.addEventListener('scroll', () => {
    mobileMenu.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });

  // --- 4. Fermeture si on repasse en desktop ---
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
      mobileMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
