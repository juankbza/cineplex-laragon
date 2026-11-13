/* ==========================================
   CinePleX - INYECTOR DE LAYOUT (VISUAL COMPLETO, SIN LÓGICA DE CARRITO NI BÚSQUEDA)
   ========================================== */

function getLayoutConfig() {
  const normPath = window.location.pathname.replace(/\\/g, '/');
  const isInViews = normPath.includes('/views/');
  return {
    assetBase: isInViews ? '../assets/' : 'assets/',
    viewBase: isInViews ? '' : 'views/'
  };
}

function getNavbarHTML() {
  const { viewBase } = getLayoutConfig();
  return `
  <header class="navbar">
    <a href="${viewBase}home.html" class="nav-brand">
      <div class="nav-logo-container" style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 38px; height: 38px; background: #6d28d9; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 1.25rem; color: #ffffff; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4); border: 1px solid rgba(139, 92, 246, 0.3);">
          X
        </div>
        <span style="font-size: 1.45rem; font-weight: 800; letter-spacing: -0.02em; color: #ffffff;">Cine<span style="color: #8b5cf6;">PleX</span></span>
      </div>
    </a>

    <nav class="nav-menu">
      <a href="${viewBase}home.html#cartelera" class="nav-item">Cartelera</a>
      <a href="${viewBase}home.html#preventa" class="nav-item">Preventa</a>
      <a href="${viewBase}home.html#proximamente" class="nav-item">Próximamente</a>
      <a href="${viewBase}contacto.html" class="nav-item">Contacto</a>
      <a href="${viewBase}carameleria.html" class="nav-item">Caramelería</a>
    </nav>

    <!-- BUSCADOR CINEPLEX EN EL NAVBAR (SOLO VISUAL) -->
    <div class="nav-search-wrapper" id="navSearchWrapper">
      <div class="nav-search-box">
        <svg class="nav-search-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input type="text" id="navSearchInput" class="nav-search-input" placeholder="Buscar películas..." autocomplete="off">
      </div>
    </div>

    <div class="nav-actions">
      <!-- MODO OSCURO / CLARO -->
      <button class="btn-theme-toggle" id="themeToggle" title="Cambiar Tema">
        <svg id="themeIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>
        </svg>
      </button>

      <!-- BOTÓN DEL CARRITO EN LA BARRA SUPERIOR (SOLO VISUAL) -->
      <button type="button" class="nav-cart-btn" id="navCartBtn" title="Ver Carrito de Compras">
        <svg class="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span class="cart-badge" id="navCartBadge">0</span>
      </button>

      <!-- BOTÓN DE PERFIL / USUARIO -->
      <a href="${viewBase}login.php" class="btn-user-icon" title="Mi Perfil">
        <svg class="icon-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </a>
    </div>
  </header>
  `;
}

function getFooterHTML() {
  const { assetBase, viewBase } = getLayoutConfig();
  return `
  <footer class="site-footer">
    <div class="footer-glow-line"></div>
    <div class="footer-container">
      
      <div class="footer-brand-col">
        <a href="${viewBase}home.html" class="footer-logo-link">
          <img src="${assetBase}img/logo.png" alt="CinePleX Logo" class="footer-logo-img">
        </a>
        <p class="footer-desc">
          La experiencia cinematográfica definitiva. Disfruta de estrenos mundiales en salas VIP reclinables, sonido inmersivo Dolby Atmos y tecnología 4D de última generación.
        </p>
        <div class="footer-socials">
          <a href="#" class="social-circle" title="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" class="social-circle" title="X">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
            </svg>
          </a>
          <a href="#" class="social-circle" title="TikTok">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          <a href="#" class="social-circle" title="YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-links-col">
        <h4>Explorar</h4>
        <ul>
          <li><a href="${viewBase}home.html#cartelera">Cartelera Hoy</a></li>
          <li><a href="${viewBase}home.html#preventa">Preventa Exclusiva</a></li>
          <li><a href="${viewBase}home.html#proximamente">Próximos Estrenos</a></li>
          <li><a href="${viewBase}carameleria.html">Caramelería Online</a></li>
          <li><a href="${viewBase}home.html#promos">Promociones y Club</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Nuestras Salas</h4>
        <ul>
          <li><a href="#">Salas VIP Reclinables</a></li>
          <li><a href="#">Experiencia 4D E-Motion</a></li>
          <li><a href="#">Pantalla Gigante IMAX</a></li>
          <li><a href="#">Sonido Dolby Atmos</a></li>
          <li><a href="#">Eventos Corporativos</a></li>
        </ul>
      </div>

      <div class="footer-links-col">
        <h4>Soporte y Legal</h4>
        <ul>
          <li><a href="${viewBase}login.php">Mi Perfil / Mi Cuenta</a></li>
          <li><a href="#">Validación de Edad (+18)</a></li>
          <li><a href="#">Términos y Condiciones</a></li>
          <li><a href="#">Políticas de Privacidad</a></li>
          <li><a href="${viewBase}contacto.html">Contacto y Ayuda</a></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>© 2026 <span>CinePleX</span>. Todos los derechos reservados.</p>
        <div class="footer-payment-badges">
          <span class="pay-badge">Visa</span>
          <span class="pay-badge">Mastercard</span>
          <span class="pay-badge">Pago Móvil</span>
          <span class="pay-badge">USDT / Crypto</span>
        </div>
      </div>
    </div>
  </footer>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inyectar Navbar y Footer
  const navbarPlaceholder = document.getElementById('app-navbar');
  const footerPlaceholder = document.getElementById('app-footer');

  if (navbarPlaceholder) navbarPlaceholder.innerHTML = getNavbarHTML();
  if (footerPlaceholder) footerPlaceholder.innerHTML = getFooterHTML();

  // 2. Lógica de Tema Oscuro / Claro
  const themeToggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  const moonIcon = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"></path>`;
  const sunIcon = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeIcon) themeIcon.innerHTML = sunIcon;
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.innerHTML = moonIcon;
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.innerHTML = sunIcon;
      }
    });
  }
});