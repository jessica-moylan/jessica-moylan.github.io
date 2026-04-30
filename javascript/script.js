// DARK MODE TOGGLE -----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'light' ? 'dark' : 'light';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    function updateThemeIcon(theme) {
        if (themeIcon) {
            themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }

    // ============================================
    // SMOOTH SCROLLING FOR SAME-PAGE LINKS
    // ============================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle same-page links
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // SKI GALLERY INTERACTIONS
    // ============================================
    setupSkiGallery();

    // ============================================
    // RUNNING GALLERY LIGHTBOX
    // ============================================
    setupRunningPhotoGallery();

    // ============================================
    // DYNAMIC SKI GALLERY
    // ============================================
    setupSkiFullGallery();
});

function getSitePathPrefix() {
    const currentPath = window.location.pathname.replace(/\\/g, '/');

    return currentPath.includes('/hiking-reports/') ? '../' : '';
}

function getHomeSectionHref(sectionId) {
    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const prefix = getSitePathPrefix();

    return currentPage === 'index.html' ? `#${sectionId}` : `${prefix}index.html#${sectionId}`;
}

// CONSTANT ELEMENTS ON ALL PAGES ---------------------------------------------------------
class mySidebar extends HTMLElement {
    connectedCallback(){
        const prefix = getSitePathPrefix();

        this.innerHTML = `
        <div class="sidebar-content">
                <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
                    <span class="theme-icon">🌙</span>
                </button>
                
                <h1 class="main-title">Jess<br>Moylan</h1>
                
                <nav class="side-nav">
                    <ul>
                        <li><a href="${prefix}index.html" class="nav-link active">Home</a></li>
                        <li><a href="${getHomeSectionHref('about')}" class="nav-link">About</a></li>
                        <li><a href="${getHomeSectionHref('projects')}" class="nav-link">Projects</a></li>
                        <li><a href="${getHomeSectionHref('interests')}" class="nav-link">Interests</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

class myFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <footer class="site-footer">
            <div class="footer-content">
                <div class="footer-left">
                    <h4>Things I Find Interesting</h4>
                    <ul class="interest-links">
                        <li><a href="https://utahavalanchecenter.org/" target="_blank">Utah Avalanche Center</a></li>
                        <li><a href="https://mountwashington.org/weather/current-summit-conditions/" target="_blank">Mount Washington Weather</a></li>
                        <li><a href="https://caltopo.com/" target="_blank">CalTopo</a></li>
                    </ul>
                </div>
                
                <div class="footer-right">
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/jessica-moylan-/" target="_blank" class="social-link">LinkedIn</a>
                        <a href="https://github.com/jessica-moylan" target="_blank" class="social-link">GitHub</a>
                        <a href="https://www.strava.com/athletes/106372375" target="_blank" class="social-link">Strava</a>
                    </div>
                    <p class="copyright">© 2026 Jessica Moylan</p>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('my-sidebar', mySidebar);
customElements.define('my-footer', myFooter);

// ============================================
// SKI GALLERY IMAGE SWAPPING
// ============================================
function setupSkiGallery() {
    const galleries = document.querySelectorAll('.ski-trip-feature');
    
    galleries.forEach(gallery => {
        const mainImg = gallery.querySelector('.ski-main-img');
        const thumbs = gallery.querySelectorAll('.ski-gallery-thumbs img');
        
        if (mainImg && thumbs.length > 0) {
            thumbs.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const tempSrc = mainImg.src;
                    mainImg.src = this.src;
                    this.src = tempSrc;
                    
                    // Add active state
                    thumbs.forEach(t => t.style.opacity = '0.8');
                    this.style.opacity = '1';
                });
            });
        }
    });
    
}

// ============================================
// RUNNING GALLERY LIGHTBOX
// ============================================
function setupRunningPhotoGallery() {
    const galleryImages = document.querySelectorAll('.running-photo-card img');

    if (galleryImages.length === 0) {
        return;
    }

    const lightbox = document.createElement('div');
    lightbox.className = 'running-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');

    lightbox.innerHTML = `
        <figure class="running-lightbox-content">
            <img src="" alt="Expanded running photo">
            <figcaption></figcaption>
        </figure>
    `;

    const lightboxFigure = lightbox.querySelector('.running-lightbox-content');
    const lightboxImage = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('figcaption');

    function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const figure = image.closest('.running-photo-card');
            const caption = figure ? figure.querySelector('figcaption') : null;

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt || 'Expanded running photo';
            lightboxCaption.textContent = caption ? caption.textContent : '';

            lightbox.classList.add('is-open');
            lightbox.setAttribute('aria-hidden', 'false');
        });
    });

    lightbox.addEventListener('click', event => {
        if (!lightboxFigure.contains(event.target)) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && lightbox.classList.contains('is-open')) {
            closeLightbox();
        }
    });

    document.body.appendChild(lightbox);
}

// ============================================
// GPX TRIP MAPS
// ============================================
function initializeGpxTripMap(options) {
    if (typeof L === 'undefined') {
        console.error('Leaflet is required to initialize a GPX trip map.');
        return null;
    }

    const config = {
        mapId: 'map',
        gpxPath: '',
        center: [39.8283, -98.5795],
        zoom: 4,
        routeColor: '#e74c3c',
        routeWeight: 4,
        routeOpacity: 0.8,
        showElevation: false,
        elevationOptions: {},
        routeColor: '#FF0000',
        showElevation: true,
        ...options
    };

    const mapElement = document.getElementById(config.mapId);
    if (!mapElement) {
        console.error(`Map container with id "${config.mapId}" was not found.`);
        return null;
    }

    const map = L.map(config.mapId).setView(config.center, config.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const gpxLayer = new L.GPX(config.gpxPath, {
        async: true,
        marker_options: {
            startIconUrl: null,
            endIconUrl: null,
            shadowUrl: null
        },
        polyline_options: {
            color: config.routeColor,
            weight: config.routeWeight,
            opacity: config.routeOpacity
        }
    }).on('loaded', function(e) {
        map.fitBounds(e.target.getBounds());
    }).addTo(map);

    let elevationControl = null;
    if (config.showElevation && L.control && typeof L.control.elevation === 'function') {
        elevationControl = L.control.elevation({
            position: 'topright',
            theme: 'steelblue-theme',
            edgeScale: false,
            width: 600,
            height: 125,
            margins: {
                top: 10,
                right: 20,
                bottom: 30,
                left: 50
            },
            interpolation: 'linear',
            hoverNumber: {
                decimalsX: 0,
                decimalsY: 0,
                formatter: undefined
            },
            imperial: true,
            ...config.elevationOptions
        });

        elevationControl.addTo(map);
        elevationControl.load(config.gpxPath);
    }

    return { map, gpxLayer, elevationControl };
};

window.initializeGpxTripMap = initializeGpxTripMap;
