/**
 * BENGALURU TRAILS - Global Header System v2
 * Single source of truth for the header across all pages.
 * Injects HTML, CSS, nav logic, auth status, hamburger menu.
 */
(function () {
    const V = '15';

    // ─── 1. Inject Global CSS (with !important overrides) ───
    if (!document.getElementById('gh-css')) {
        const link = document.createElement('link');
        link.id = 'gh-css';
        link.rel = 'stylesheet';
        link.href = '/auth-navigation.css?v=' + V;
        document.head.appendChild(link);
    }

    // Inject Google Fonts (Cinzel for luxury catchy brand, Outfit & Plus Jakarta Sans, Inter)
    if (!document.querySelector('link[href*="family=Cinzel"]')) {
        const f = document.createElement('link');
        f.rel = 'stylesheet';
        f.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@700;800;900&family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600&display=swap';
        document.head.appendChild(f);
    }

    // Inject SEO injector globally if missing
    if (!document.getElementById('seo-injector-js')) {
        const seoScript = document.createElement('script');
        seoScript.id = 'seo-injector-js';
        seoScript.src = '/seo-injector.js';
        seoScript.defer = true;
        document.head.appendChild(seoScript);
    }

    // Inject inline overrides to kill any leftover local header CSS
    if (!document.getElementById('gh-overrides')) {
        const s = document.createElement('style');
        s.id = 'gh-overrides';
        s.textContent = `
            /* ══════════════════════════════════════════════════════════
               GLOBAL HEADER CAPSULE — LUXURY FOREST GREEN & GOLD
               ══════════════════════════════════════════════════════════ */
            .header {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                width: 100% !important;
                z-index: 7000 !important;
                padding: 1.25rem 2rem !important;
                background: transparent !important;
                border: none !important;
                border-bottom: none !important;
                box-sizing: border-box !important;
                pointer-events: none !important;
            }
            .header.scrolled {
                padding: 0.75rem 2rem !important;
            }
            .header-container {
                pointer-events: auto !important;
                max-width: 1400px !important;
                width: 100% !important;
                margin: 0 auto !important;
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                background: rgba(10, 18, 14, 0.88) !important;
                backdrop-filter: blur(20px) !important;
                -webkit-backdrop-filter: blur(20px) !important;
                border: 1px solid rgba(201, 168, 76, 0.18) !important;
                border-radius: 50px !important;
                padding: 0.65rem 1.6rem !important;
                box-shadow: 0 10px 36px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
                box-sizing: border-box !important;
                position: relative !important;
                overflow: visible !important;
            }
            .logo-link {
                display: flex !important;
                align-items: center !important;
                gap: 0.75rem !important;
                text-decoration: none !important;
                min-width: 0 !important;
            }
            #logo {
                width: 44px !important;
                height: 44px !important;
                max-width: 44px !important;
                max-height: 44px !important;
                min-width: 44px !important;
                min-height: 44px !important;
                object-fit: contain !important;
                border-radius: 50% !important;
                filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5)) !important;
                transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
                flex-shrink: 0 !important;
            }
            .logo-link:hover #logo {
                transform: scale(1.08) rotate(3deg) !important;
            }
            .logo-text-container {
                display: flex !important;
                flex-direction: column !important;
                gap: 2px !important;
                margin-left: 0 !important;
                min-width: 0 !important;
            }

            /* ── Catchy Premium Typography ── */
            #global-header .logo-text-container h1,
            .header .logo-text-container h1 {
                font-family: 'Cinzel', 'Outfit', serif !important;
                font-size: 1.25rem !important;
                font-weight: 800 !important;
                letter-spacing: 0.12rem !important;
                text-transform: uppercase !important;
                background: linear-gradient(135deg, #ffffff 0%, #fae69e 35%, #e5b94c 75%, #c99834 100%) !important;
                -webkit-background-clip: text !important;
                background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
                color: transparent !important;
                margin: 0 !important;
                white-space: nowrap !important;
                line-height: 1.08 !important;
                filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 16px rgba(229, 185, 76, 0.3)) !important;
            }
            #global-header .logo-text-container h1 span,
            .header .logo-text-container h1 span {
                font-family: 'Cinzel', 'Outfit', serif !important;
                background: linear-gradient(135deg, #ffe58f 0%, #f0c345 50%, #c48a12 100%) !important;
                -webkit-background-clip: text !important;
                background-clip: text !important;
                -webkit-text-fill-color: transparent !important;
                color: transparent !important;
                font-weight: 900 !important;
                letter-spacing: 0.14rem !important;
            }
            .logo-text-container .tagline {
                font-family: 'Outfit', 'Inter', sans-serif !important;
                font-size: 0.52rem !important;
                color: #d8b858 !important;
                -webkit-text-fill-color: #d8b858 !important;
                text-transform: uppercase !important;
                letter-spacing: 2.4px !important;
                background: none !important;
                display: block !important;
                line-height: 1.15 !important;
                margin-top: 1px !important;
                font-weight: 600 !important;
                opacity: 0.85 !important;
            }
            .auth-nav-items {
                display: flex !important;
                align-items: center !important;
                gap: 0.75rem !important;
                flex-shrink: 0 !important;
            }
            .auth-link {
                font-family: 'Outfit', sans-serif !important;
                font-size: 0.78rem !important;
                font-weight: 700 !important;
                text-transform: uppercase !important;
                letter-spacing: 0.06rem !important;
                padding: 0.45rem 1.1rem !important;
                border-radius: 50px !important;
                text-decoration: none !important;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
                white-space: nowrap !important;
            }
            .login-link {
                color: #e8c85a !important;
                border: 1px solid rgba(201, 168, 76, 0.35) !important;
                background: rgba(201, 168, 76, 0.08) !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25) !important;
            }
            .login-link:hover {
                background: rgba(201, 168, 76, 0.2) !important;
                border-color: rgba(201, 168, 76, 0.7) !important;
                transform: translateY(-1px) !important;
            }
            .profile-link {
                color: #e8c85a !important;
                border: 1px solid rgba(201, 168, 76, 0.35) !important;
                background: rgba(201, 168, 76, 0.08) !important;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25) !important;
            }
            .profile-link:hover {
                background: rgba(201, 168, 76, 0.2) !important;
                border-color: rgba(201, 168, 76, 0.7) !important;
                transform: translateY(-1px) !important;
            }

            /* Nav links */
            .nav-link {
                color: rgba(240, 237, 229, 0.85) !important;
                transition: color 0.3s ease !important;
            }
            .nav-link:hover {
                color: #e8c85a !important;
            }

            /* Hamburger — Hidden on Desktop */
            .hamburger {
                display: none !important;
            }

            /* ══════════════════════════════════════════════════════════
               MOBILE RESPONSIVE — PRECISE CAPSULE & VISIBLE HAMBURGER
               ══════════════════════════════════════════════════════════ */
            @media (max-width: 768px) {
                .header {
                    padding: 0.5rem 0.65rem !important;
                    width: 100% !important;
                    box-sizing: border-box !important;
                }
                .header.scrolled {
                    padding: 0.4rem 0.65rem !important;
                }
                .header-container {
                    width: 100% !important;
                    max-width: 100% !important;
                    margin: 0 auto !important;
                    padding: 0.38rem 0.75rem !important;
                    gap: 0.4rem !important;
                    border-radius: 40px !important;
                    box-sizing: border-box !important;
                    overflow: visible !important;
                    background: rgba(10, 18, 14, 0.92) !important;
                    border: 1px solid rgba(201, 168, 76, 0.25) !important;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.06) !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: space-between !important;
                }
                .logo-link {
                    gap: 0.45rem !important;
                    flex-shrink: 1 !important;
                    min-width: 0 !important;
                }
                #logo {
                    width: 33px !important;
                    height: 33px !important;
                    min-width: 33px !important;
                    min-height: 33px !important;
                    flex-shrink: 0 !important;
                }
                .logo-text-container {
                    min-width: 0 !important;
                }
                #global-header .logo-text-container h1,
                .header .logo-text-container h1 {
                    font-size: 0.82rem !important;
                    letter-spacing: 0.06rem !important;
                    line-height: 1.1 !important;
                    filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.5)) !important;
                }
                .logo-text-container .tagline {
                    font-size: 0.42rem !important;
                    letter-spacing: 1.6px !important;
                    line-height: 1.1 !important;
                }
                .auth-nav-items {
                    gap: 0.4rem !important;
                    flex-shrink: 0 !important;
                    display: flex !important;
                    align-items: center !important;
                }
                .auth-link {
                    padding: 0.32rem 0.62rem !important;
                    font-size: 0.66rem !important;
                    letter-spacing: 0.04rem !important;
                    flex-shrink: 0 !important;
                }
                .user-greeting {
                    display: none !important;
                }
                .nav-menu {
                    display: none !important;
                }

                /* ── Catchy Gold Glass Hamburger Button ── */
                .hamburger {
                    display: flex !important;
                    flex-direction: column !important;
                    justify-content: center !important;
                    align-items: center !important;
                    width: 36px !important;
                    height: 36px !important;
                    min-width: 36px !important;
                    min-height: 36px !important;
                    padding: 0 !important;
                    background: rgba(201, 168, 76, 0.12) !important;
                    border: 1px solid rgba(201, 168, 76, 0.35) !important;
                    border-radius: 50% !important;
                    cursor: pointer !important;
                    gap: 4px !important;
                    flex-shrink: 0 !important;
                    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
                    outline: none !important;
                    position: relative !important;
                    z-index: 7500 !important;
                    margin: 0 !important;
                }
                .hamburger:hover,
                .hamburger:active {
                    background: rgba(201, 168, 76, 0.25) !important;
                    border-color: rgba(201, 168, 76, 0.7) !important;
                    transform: scale(1.05) !important;
                }
                .hamburger span {
                    display: block !important;
                    width: 17px !important;
                    height: 2px !important;
                    background: #f0d86e !important;
                    border-radius: 2px !important;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
                    transform-origin: center !important;
                    box-shadow: 0 0 6px rgba(201, 168, 76, 0.4) !important;
                }
                .hamburger span:nth-child(2) {
                    width: 12px !important;
                }
                .hamburger.active {
                    background: rgba(201, 168, 76, 0.25) !important;
                    border-color: #f0d86e !important;
                }
                .hamburger.active span:nth-child(1) {
                    width: 17px !important;
                    transform: translateY(6px) rotate(45deg) !important;
                }
                .hamburger.active span:nth-child(2) {
                    opacity: 0 !important;
                    transform: scaleX(0) !important;
                }
                .hamburger.active span:nth-child(3) {
                    width: 17px !important;
                    transform: translateY(-6px) rotate(-45deg) !important;
                }
            }

            /* Small mobile screens (<= 360px) */
            @media (max-width: 360px) {
                .header {
                    padding: 0.4rem 0.4rem !important;
                }
                .header-container {
                    padding: 0.3rem 0.5rem !important;
                    gap: 0.3rem !important;
                }
                #logo {
                    width: 29px !important;
                    height: 29px !important;
                    min-width: 29px !important;
                    min-height: 29px !important;
                }
                #global-header .logo-text-container h1,
                .header .logo-text-container h1 {
                    font-size: 0.72rem !important;
                    letter-spacing: 0.04rem !important;
                }
                .logo-text-container .tagline {
                    font-size: 0.38rem !important;
                    letter-spacing: 1.2px !important;
                }
                .auth-link {
                    padding: 0.28rem 0.48rem !important;
                    font-size: 0.62rem !important;
                }
                .hamburger {
                    width: 32px !important;
                    height: 32px !important;
                    min-width: 32px !important;
                    min-height: 32px !important;
                    gap: 3px !important;
                }
                .hamburger span {
                    width: 15px !important;
                }
                .hamburger span:nth-child(2) {
                    width: 10px !important;
                }
            }

            /* Fix for content underlapping fixed header */
            body:not(.home-page) {
                padding-top: 100px !important;
            }
            @media (max-width: 768px) {
                body:not(.home-page) {
                    padding-top: 80px !important;
                }
            }

            /* ── Mobile Menu Overlay & Drawer Safety ── */
            .mobile-menu-overlay {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                background: rgba(0, 0, 0, 0.75) !important;
                backdrop-filter: blur(8px) !important;
                -webkit-backdrop-filter: blur(8px) !important;
                opacity: 0 !important;
                visibility: hidden !important;
                transition: all 0.35s ease !important;
                z-index: 7400 !important;
            }
            .mobile-menu-overlay.active {
                opacity: 1 !important;
                visibility: visible !important;
            }
            .nav-menu-mobile {
                position: fixed !important;
                top: 0 !important;
                right: 0 !important;
                height: 100vh !important;
                height: 100dvh !important;
                width: 290px !important;
                max-width: 85vw !important;
                background: linear-gradient(165deg, #0a120e 0%, #0f1d16 45%, #162a1f 100%) !important;
                border-left: 1px solid rgba(201, 168, 76, 0.2) !important;
                box-shadow: -10px 0 40px rgba(0, 0, 0, 0.85) !important;
                transform: translateX(100%) !important;
                transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) !important;
                z-index: 7600 !important;
                display: flex !important;
                flex-direction: column !important;
                overflow-y: auto !important;
                visibility: hidden !important;
                box-sizing: border-box !important;
            }
            .nav-menu-mobile.active {
                transform: translateX(0) !important;
                visibility: visible !important;
            }
        `;
        
        // Add home-page class to body if we are on the homepage
        if (window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
            document.body.classList.add('home-page');
        }
        document.head.appendChild(s);
    }

    // ─── 2. Header HTML Template ───
    const headerHTML = `
    <div class="header-container">
        <a href="/" class="logo-link" aria-label="BENGALURU TRAILS Home">
            <img id="logo" src="/img/lo.png" alt="BENGALURU TRAILS Logo" loading="eager">
            <div class="logo-text-container">
                <h1>BENGALURU <span>TRAILS</span></h1>
                <div class="tagline">Discover Your Adventure</div>
            </div>
        </a>
        <nav class="nav-menu" id="navMenu">
            <ul class="nav-list">
                <li><a href="/" class="nav-link">Home</a></li>
                <li class="dropdown">
                    <a href="/#treks" class="nav-link">Treks <span class="arrow">▾</span></a>
                    <div class="mega-menu">
                        <div class="mega-menu-container">
                            <div class="mega-menu-column">
                                <h3 class="mega-column-title">Categories</h3>
                                <ul class="category-list">
                                    <li class="category-item active" data-region="sunrise">Sunrise Treks <span>›</span></li>
                                    <li class="category-item" data-region="twodays">Two Days Treks <span>›</span></li>
                                    <li class="category-item" data-region="backpacking">Backpacking Trips <span>›</span></li>
                                </ul>
                            </div>
                            <div class="mega-menu-column">
                                <h3 class="mega-column-title" id="region-title">Sunrise Treks</h3>
                                <ul class="trek-list-grid" id="trek-items-list">
                                    <li class="trek-list-item"><a href="/Sunrise/Skandagiri-sunrise-trek-from-bangalore">Skandagiri Sunrise</a></li>
                                    <li class="trek-list-item"><a href="/Sunrise/Nandihills-sunrise-trek">Nandi Hills Sunrise</a></li>
                                    <li class="trek-list-item"><a href="/Sunrise/Uttaribetta-sunrise-trek">Uttari Betta Trek</a></li>
                                    <li class="trek-list-item"><a href="/Sunrise/Savandurga-sunrise-trek">Savandurga Night Trek</a></li>
                                    <li class="trek-list-item"><a href="/Sunrise/Anthargange-trek">Anthargange Exploration</a></li>
                                </ul>
                            </div>
                            <div class="mega-menu-column">
                                <h3 class="mega-column-title">Spotlight</h3>
                                <div class="featured-trek">
                                    <img src="/img/BP.webp" alt="Gokarna Beach Trek">
                                    <div class="featured-trek-content">
                                        <div class="featured-trek-title">Gokarna Beach Trek</div>
                                        <a href="/Backpacking/" class="featured-trek-btn">Explore Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li><a href="/Corporate/" class="nav-link">Corporate</a></li>
                <li><a href="/Blog/" class="nav-link">Blog</a></li>
                <li><a href="/About/" class="nav-link">About</a></li>
                <li><a href="/Contact/" class="nav-link">Contact</a></li>
            </ul>
        </nav>
        <div class="auth-nav-items" id="authNav"></div>
    </div>
    <div class="mobile-menu-overlay" id="menuOverlay"></div>
    `;

    // ─── 3. Inject Header ───
    function injectHeader() {
        // Robust safeguard: Find all header elements and ensure only one exists to prevent duplicate rendering
        const allHeaders = Array.from(document.querySelectorAll('header, .header'));
        let el = document.getElementById('global-header') || allHeaders.find(h => h.id === 'global-header') || allHeaders[0];
        
        if (!el) {
            el = document.createElement('header');
            el.id = 'global-header';
            document.body.prepend(el);
        } else {
            // Keep the main element, remove all other conflicting headers
            allHeaders.forEach(h => {
                if (h !== el) h.remove();
            });
        }
        
        el.className = 'header';
        el.innerHTML = headerHTML;
        initLogic();
    }

    // ─── 4. All interactivity ───
    function initLogic() {
        const header = document.querySelector('.header');
        const authNav = document.getElementById('authNav');
        const overlay = document.getElementById('menuOverlay');

        // Auth + Hamburger
        authNav.innerHTML = `
            <div id="authContent"></div>
            <button class="hamburger" id="hamburger"><span></span><span></span><span></span></button>
        `;

        const hamburger = document.getElementById('hamburger');
        const authContent = document.getElementById('authContent');

        // Auth status — hide on login/signup/profile pages
        const page = window.location.pathname;
        const isAuthPage = page.includes('login') || page.includes('signup') || page.includes('profile');
        
        const userEmail = localStorage.getItem('userEmail');
        const userName = localStorage.getItem('userName');

        if (!isAuthPage) {
            if (userEmail || userName) {
                authContent.innerHTML = '<a href="/profile.html" class="auth-link profile-link">ACCOUNT</a>';
            } else {
                authContent.innerHTML = '<a href="/login.html" class="auth-link login-link">LOGIN</a>';
            }
        }

        // Global Logout Function
        window.logout = function() {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userName');
            // Check if any other auth items are stored
            alert('Logged out successfully!');
            window.location.href = '/';
        };

        // Hamburger
        hamburger.addEventListener('click', () => {
            const active = hamburger.classList.toggle('active');
            document.body.classList.toggle('mobile-menu-open', active);
            let mob = document.querySelector('.nav-menu-mobile');
            
            if (!mob) {
                mob = document.createElement('div');
                mob.className = 'nav-menu-mobile';
                document.body.appendChild(mob);
            }

            // Always rebuild mobile menu for fresh auth state
            mob.innerHTML = '';

            // ── Brand header ──
            const brand = document.createElement('div');
            brand.className = 'mobile-menu-brand';
            const welcomeMsg = userName ? `Hi, ${userName.split(' ')[0]}` : 'Discover Your Adventure';
            brand.innerHTML = `<div class="mobile-menu-tagline">${welcomeMsg}</div>`;
            mob.appendChild(brand);

            // ── Nav links ──
            const navUl = document.createElement('ul');
            navUl.className = 'nav-list';

            const menuItems = [
                { icon: '⌂', label: 'Home', href: '/' },
                { icon: '▲', label: 'Treks', href: '/#treks' },
                { icon: '◆', label: 'Corporate', href: '/Corporate/' },
                { icon: '✎', label: 'Blog', href: '/Blog/' },
                { icon: '◎', label: 'About', href: '/About/' },
                { icon: '✉', label: 'Contact', href: '/Contact/' },
            ];

            menuItems.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<a href="${item.href}" class="nav-link"><span style="font-size:0.9rem;opacity:0.4;width:20px;text-align:center;">${item.icon}</span> ${item.label}</a>`;
                navUl.appendChild(li);
            });

            // Add Logout to main list if logged in
            if (userEmail || userName) {
                const logoutLi = document.createElement('li');
                logoutLi.innerHTML = '<a href="javascript:void(0)" onclick="logout()" class="nav-link" style="color: #ff6b6b;"><span style="font-size:0.9rem;opacity:0.7;width:20px;text-align:center;">⏻</span> Logout</a>';
                navUl.appendChild(logoutLi);
            }

            mob.appendChild(navUl);

            // ── Auth section at bottom ──
            const authSection = document.createElement('div');
            authSection.className = 'mobile-menu-auth';
            
            if (userEmail || userName) {
                authSection.innerHTML = `
                    <a href="/profile.html" class="mobile-auth-btn primary" style="width: 100%;">View Account</a>
                `;
            } else {
                authSection.innerHTML = `
                    <a href="/login.html" class="mobile-auth-btn secondary">Login</a>
                    <a href="/signup.html" class="mobile-auth-btn primary">Sign Up</a>
                `;
            }
            mob.appendChild(authSection);

            // Close menu on link click
            mob.querySelectorAll('a.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.click();
                });
            });
            
            mob.classList.toggle('active', active);
            overlay.classList.toggle('active', active);
        });

        // Scroll
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 30);
        }, { passive: true });

        // Overlay close
        overlay.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.click();
            }
        });

        // Mega menu
        initMegaMenu();
    }

    function initMegaMenu() {
        const items = document.querySelectorAll('.category-item');
        const list = document.getElementById('trek-items-list');
        const title = document.getElementById('region-title');
        if (!items.length || !list) return;

        const data = {
            sunrise: [
                { name: 'Skandagiri Sunrise', link: '/Sunrise/Skandagiri-sunrise-trek-from-bangalore/index.html' },
                { name: 'Nandi Hills Sunrise', link: '/Sunrise/Nandihills-sunrise-trek/index.html' },
                { name: 'Uttari Betta Trek', link: '/Sunrise/Uttaribetta-sunrise-trek/index.html' },
                { name: 'Savandurga Night Trek', link: '/Sunrise/Savandurga-sunrise-trek/index.html' },
                { name: 'Anthargange Exploration', link: '/Sunrise/Anthargange-trek/index.html' },
                { name: 'Makalidurga Adventure', link: '/Sunrise/Makalidurga-sunrise-trek/index.html' }
            ],
            twodays: [
                { name: 'Kudremukh Trek', link: '/Twodays/Kuduremukha/index.html' },
                { name: 'Netravathi Trek', link: '/Twodays/Netravathi/index.html' },
                { name: 'Kodachadri Adventure', link: '/Twodays/Kodachadri/index.html' },
                { name: 'Tadiandamol Expedition', link: '/Twodays/Tadiandamol/index.html' },
                { name: 'Kumaraparvatha Trek', link: '/Twodays/Kumaraparvatha/index.html' },
                { name: 'Gokarna Beach Trek', link: '/Twodays/Gokarna/index.html' }
            ],
            backpacking: [
                { name: 'Gokarna Beach Trek', link: '/Backpacking/index.html' },
                { name: 'Chikmagaluru Escape', link: '/Backpacking/Chikmagaluru/index.html' },
                { name: 'Coorg 3-Day Trip', link: '/Backpacking/Coorg3days/index.html' },
                { name: 'Hampi Heritage Trail', link: '/Backpacking/Hampi/index.html' },
                { name: 'Wayanad Expedition', link: '/Backpacking/Wayanad/index.html' },
                { name: 'Kodaikanal Retreat', link: '/Backpacking/Kodaikanal/index.html' },
                { name: 'Munnar & Kolukkumalai', link: '/Backpacking/Munnar/index.html' }
            ]
        };

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const region = item.getAttribute('data-region');
                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                title.textContent = item.childNodes[0].textContent.trim() + ' Treks';
                const treks = data[region] || [];
                list.innerHTML = treks.map(t => `<li class="trek-list-item"><a href="${t.link}">${t.name}</a></li>`).join('');
            });
        });
    }

    // ─── 5. Run ───
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectHeader);
    } else {
        injectHeader();
    }
})();
