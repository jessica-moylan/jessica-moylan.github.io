// ============================================
// LEAFLET MAP INITIALIZATION
// ============================================
let map;
let markersLayer;
let routesLayer;

const peaks = [
    { name: 'Denali', state: 'AK', lat: 63.0695, lng: -151.0074, elevation: '20,310 ft', completed: false , date: ""},
    { name: 'Mount Whitney', state: 'CA', lat: 36.5786, lng: -118.2923, elevation: '14,494 ft', completed: false , date: ""},
    { name: 'Mount Elbert', state: 'CO', lat: 39.1178, lng: -106.4454, elevation: '14,433 ft', completed: false , date: ""},
    { name: 'Mount Rainier', state: 'WA', lat: 46.8523, lng: -121.7603, elevation: '14,410 ft', completed: false , date: ""},
    { name: 'Gannett Peak', state: 'WY', lat: 43.1840, lng: -109.6540, elevation: '13,804 ft', completed: false , date: ""},
    { name: 'Mauna Kea', state: 'HI', lat: 19.8207, lng: -155.4681, elevation: '13,796 ft', completed: false , date: ""},
    { name: 'Kings Peak', state: 'UT', lat: 40.7764, lng: -110.3729, elevation: '13,528 ft', completed: false , date: ""},
    { name: 'Wheeler Peak', state: 'NM', lat: 36.5569, lng: -105.4169, elevation: '13,161 ft', completed: false, date : "" },
    { name: 'Boundary Peak', state: 'NV', lat: 37.8392, lng: -118.3516, elevation: '13,140 ft', completed: false, date : "" },
    { name: 'Granite Peak', state: 'MT', lat: 45.1633, lng: -109.8080, elevation: '12,799 ft', completed: false, date : "" },
    { name: 'Borah Peak', state: 'ID', lat: 44.1376, lng: -113.7800, elevation: '12,662 ft', completed: false, date : "" },
    { name: 'Humphreys Peak', state: 'AZ', lat: 35.3464, lng: -111.6776, elevation: '12,633 ft', completed: false, date : "" },
    { name: 'Mount Hood', state: 'OR', lat: 45.3735, lng: -121.6959, elevation: '11,239 ft', completed: false, date : "" },
    { name: 'Guadalupe Peak', state: 'TX', lat: 31.8914, lng: -104.8611, elevation: '8,749 ft', completed: false, date : "" },
    { name: 'Black Elk Peak', state: 'SD', lat: 43.8668, lng: -103.5317, elevation: '7,242 ft', completed: false, date : "" },
    { name: 'Mount Mitchell', state: 'NC', lat: 35.7596, lng: -82.2650, elevation: '6,684 ft', completed: false, date : "" },
    { name: 'Kuwohi (Clingmans Dome)', state: 'TN', lat: 35.5629, lng: -83.4986, elevation: '6,643 ft', completed: false, date : "" },
    { name: 'Mount Washington', state: 'NH', lat: 44.2706, lng: -71.3033, elevation: '6,288 ft', completed: true, date : "07/05/2025" },
    { name: 'Mount Rogers', state: 'VA', lat: 36.6596, lng: -81.5448, elevation: '5,729 ft', completed: false, date : "" },
    { name: 'Panorama Point', state: 'NE', lat: 41.9995, lng: -104.0530, elevation: '5,424 ft', completed: false, date : "" },
    { name: 'Mount Marcy', state: 'NY', lat: 44.1127, lng: -73.9235, elevation: '5,344 ft', completed: false, date : "" },
    { name: 'Mount Katahdin', state: 'ME', lat: 45.9044, lng: -68.9213, elevation: '5,268 ft', completed: false, date : "" },
    { name: 'Black Mesa', state: 'OK', lat: 36.9317, lng: -102.9974, elevation: '4,973 ft', completed: false, date : "" },
    { name: 'Spruce Knob', state: 'WV', lat: 38.6990, lng: -79.5328, elevation: '4,863 ft', completed: false, date : "" },
    { name: 'Brasstown Bald', state: 'GA', lat: 34.8744, lng: -83.8100, elevation: '4,784 ft', completed: false, date : "" },
    { name: 'Mount Mansfield', state: 'VT', lat: 44.5438, lng: -72.8154, elevation: '4,393 ft', completed: false, date : "" },
    { name: 'Black Mountain', state: 'KY', lat: 36.8401, lng: -83.3218, elevation: '4,139 ft', completed: false, date : "" },
    { name: 'Mount Sunflower', state: 'KS', lat: 39.0039, lng: -101.8830, elevation: '4,039 ft', completed: false, date : "" },
    { name: 'Sassafras Mountain', state: 'SC', lat: 35.0649, lng: -82.7779, elevation: '3,553 ft', completed: false, date : "" },
    { name: 'White Butte', state: 'ND', lat: 46.1939, lng: -103.5292, elevation: '3,506 ft', completed: false, date : "" },
    { name: 'Mount Greylock', state: 'MA', lat: 42.6375, lng: -73.1662, elevation: '3,491 ft', completed: false, date : "" },
    { name: 'Backbone Mountain (Hoye-Crest)', state: 'MD', lat: 39.7004, lng: -79.4870, elevation: '3,360 ft', completed: false, date : "" },
    { name: 'Mount Davis', state: 'PA', lat: 39.7864, lng: -79.1792, elevation: '3,213 ft', completed: false, date : "" },
    { name: 'Magazine Mountain', state: 'AR', lat: 35.1670, lng: -93.6455, elevation: '2,753 ft', completed: false, date : "" },
    { name: 'Cheaha Mountain', state: 'AL', lat: 33.4882, lng: -85.8080, elevation: '2,405 ft', completed: false, date : "" },
    { name: 'Mount Frissell', state: 'CT', lat: 42.0495, lng: -73.4835, elevation: '2,372 ft', completed: false, date : "" },
    { name: 'Eagle Mountain', state: 'MN', lat: 47.9055, lng: -90.5610, elevation: '2,301 ft', completed: false, date : "" },
    { name: 'Mount Arvon', state: 'MI', lat: 46.7550, lng: -88.1558, elevation: '1,979 ft', completed: false, date : "" },
    { name: 'Timms Hill', state: 'WI', lat: 45.4516, lng: -90.1988, elevation: '1,951 ft', completed: false, date : "" },
    { name: 'High Point', state: 'NJ', lat: 41.3200, lng: -74.6610, elevation: '1,803 ft', completed: false, date : "" },
    { name: 'Taum Sauk Mountain', state: 'MO', lat: 37.5748, lng: -90.7207, elevation: '1,772 ft', completed: false, date : "" },
    { name: 'Hawkeye Point', state: 'IA', lat: 43.5006, lng: -96.5433, elevation: '1,670 ft', completed: false, date : "" },
    { name: 'Campbell Hill', state: 'OH', lat: 40.3134, lng: -83.6688, elevation: '1,549 ft', completed: false, date : "" },
    { name: 'Hoosier Hill', state: 'IN', lat: 40.0006, lng: -84.8510, elevation: '1,257 ft', completed: false, date : "" },
    { name: 'Charles Mound', state: 'IL', lat: 42.5050, lng: -90.2643, elevation: '1,235 ft', completed: false, date : "" },
    { name: 'Jerimoth Hill', state: 'RI', lat: 41.8498, lng: -71.7776, elevation: '812 ft', completed: false, date : "" },
    { name: 'Woodall Mountain', state: 'MS', lat: 34.0868, lng: -88.1860, elevation: '806 ft', completed: false, date : "" },
    { name: 'Driskill Mountain', state: 'LA', lat: 32.4085, lng: -92.9070, elevation: '535 ft', completed: false, date : "" },
    { name: 'Ebright Azimuth', state: 'DE', lat: 39.8365, lng: -75.5221, elevation: '442 ft', completed: false, date : "" },
    { name: 'Britton Hill', state: 'FL', lat: 30.9877, lng: -86.2822, elevation: '345 ft', completed: false, date : "" }
];

document.addEventListener('DOMContentLoaded', function() {
    const mapElement = document.getElementById('hiking-map');
    if (mapElement) {
        initializeMap();
        setupGPXUpload();
        updateStatsUI();
    }
});

function initializeMap() {
    map = L.map('hiking-map').setView([39.8283, -98.5795], 4);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Create layer groups for markers and routes
    markersLayer = L.layerGroup().addTo(map);
    routesLayer = L.layerGroup().addTo(map);

    highestPeakMarkers();
    addRoutesLayer();
    addCustomMarkerStyles();
}

function highestPeakMarkers() {
    peaks.forEach(peak => {
        const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div class="marker-pin ${peak.completed ? 'completed' : 'planned'}">
                     <span>${peak.completed ? '✓' : '○'}</span>
                   </div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });

        const marker = L.marker([peak.lat, peak.lng], { icon: icon })
            .bindPopup(`
                <div class="marker-popup">
                    <h5>${peak.name}</h5>
                    <p><strong>${peak.state}</strong> • ${peak.elevation}</p>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <p class="status ${peak.completed ? 'completed' : 'planned'}">
                            ${peak.completed ? 'Completed ✓' : 'Planned'}
                        </p>
                        ${peak.completed ? `<b>${peak.date}</b>` : ''}
                    </div>
                </div>
            `);

        markersLayer.addLayer(marker);
    });
}

// Fallback list in case routes manifest is missing.
const fallbackRouteFiles = [
    'routes/Mt_Washington_1_48_.gpx'
];

// Optional color palette so each route is easy to distinguish.
const routeColors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#16a085'];

async function getRouteFiles() {
    // Use a manifest file to represent everything in /routes.
    // Example routes/routes.json:
    // { "files": ["routes/Mt_Washington_1_48_.gpx", "routes/Mt_Marcy.gpx"] }
    try {
        const response = await fetch('routes/routes.json');
        if (!response.ok) {
            throw new Error('routes.json not found');
        }

        const manifest = await response.json();
        if (!manifest.files || !Array.isArray(manifest.files)) {
            throw new Error('Invalid routes.json format');
        }

        return manifest.files.filter(file => typeof file === 'string' && file.toLowerCase().endsWith('.gpx'));
    } catch (error) {
        console.warn('Using fallbackRouteFiles. Reason:', error.message);
        return fallbackRouteFiles;
    }
}

async function addRoutesLayer() {
    const gpxOptions = {
        async: true,
        marker_options: {
            startIconUrl: null,
            endIconUrl: null,
            shadowUrl: null
        }
    };

    const routeFiles = await getRouteFiles();
    const loadedBounds = [];

    routeFiles.forEach((routeFile, index) => {
        fetch(routeFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${routeFile}`);
                }
                return response.text();
            })
            .then(gpxContent => {
                const options = {
                    ...gpxOptions,
                    polyline_options: {
                        color: routeColors[index % routeColors.length],
                        weight: 4,
                        opacity: 0.8
                    }
                };

                const gpx = new L.GPX(gpxContent, options);

                gpx.on('loaded', function(e) {
                    routesLayer.addLayer(gpx);
                    loadedBounds.push(e.target.getBounds());

                    // Fit once all known routes have loaded.
                    if (loadedBounds.length === routeFiles.length) {
                        const allBounds = L.latLngBounds([]);
                        loadedBounds.forEach(bounds => allBounds.extend(bounds));
                        map.fitBounds(allBounds);
                    }
                });
            })
            .catch(error => {
                console.error(`Error loading route ${routeFile}:`, error);
            });
    });
}

function getPeakStats() {
    const completedPeaks = peaks.filter(peak => peak.completed);
    const completedCount = completedPeaks.length;
    const peaksLeftCount = peaks.length - completedCount;
    const totalElevation = completedPeaks.reduce((sum, peak) => {
        const elevationValue = parseInt(peak.elevation.replace(/,/g, '').replace(' ft', ''), 10);
        return sum + elevationValue;
    }, 0);

    return { completedCount, peaksLeftCount, totalElevation };
}

function updateStatsUI() {
    const stats = getPeakStats();

    const completedCountElement = document.getElementById('completed-count');
    const toGoCountElement = document.getElementById('to-go-count');
    const totalElevationElement = document.getElementById('total-elevation');

    if (completedCountElement) {completedCountElement.textContent = stats.completedCount;}

    if (toGoCountElement) {toGoCountElement.textContent = stats.peaksLeftCount;}

    if (totalElevationElement) {totalElevationElement.textContent = stats.totalElevation.toLocaleString();}
}

// Marker Styles
function addCustomMarkerStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .custom-marker {
            background: transparent;
        }
        
        .marker-pin {
            width: 30px;
            height: 30px;
            border-radius: 50% 50% 50% 0;
            background: #27ae60;
            border: 3px solid white;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 3px 8px rgba(0,0,0,0.3);
        }
        
        .marker-pin.planned {
            background: #3498db;
        }
        
        .marker-pin span {
            transform: rotate(45deg);
            color: white;
            font-weight: bold;
            font-size: 14px;
        }
        
        .marker-popup h5 {
            margin: 0 0 8px 0;
            font-family: 'Archivo Black', sans-serif;
            font-size: 1.1rem;
            color: #2c3e50;
        }
        
        .marker-popup p {
            margin: 4px 0;
            font-size: 0.9rem;
        }
        
        .marker-popup .status {
            font-weight: bold;
            margin-top: 8px;
        }
        
        .marker-popup .status.completed {
            color: #27ae60;
        }
        
        .marker-popup .status.planned {
            color: #3498db;
        }
        
        .leaflet-popup-content-wrapper {
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// GPX/KML FILE UPLOAD
// ============================================
function setupGPXUpload() {
    const fileInput = document.getElementById('gpx-upload');
    
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            
            if (file) {
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const gpxContent = e.target.result;
                    
                    // Clear routes
                    routesLayer.clearLayers();
                    
                    // Parse and display GPX
                    try {
                        const gpx = new L.GPX(gpxContent, {
                            async: true,
                            marker_options: {
                                startIconUrl: null,
                                endIconUrl: null,
                                shadowUrl: null
                            },
                            polyline_options: {
                                color: '#e74c3c',
                                weight: 4,
                                opacity: 0.8
                            }
                        });
                        
                        gpx.on('loaded', function(e) {
                            map.fitBounds(e.target.getBounds());
                        });
                        
                        routesLayer.addLayer(gpx);
                        
                        // Show success message
                        if (window.showNotification) {
                            window.showNotification('Route loaded successfully!', 'success');
                        }
                        
                    } catch (error) {
                        console.error('Error parsing GPX:', error);
                        if (window.showNotification) {
                            window.showNotification('Error loading route. Please check your file.', 'error');
                        }
                    }
                };
                
                reader.readAsText(file);
            }
        });
    }
}

// UTILITY FUNCTIONS ============================================

// Add a custom peak to the map
function addCustomPeak(name, state, lat, lng, elevation, completed = false) {
    const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-pin ${completed ? 'completed' : 'planned'}">
                 <span>${completed ? '✓' : '○'}</span>
               </div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 30]
    });

    const marker = L.marker([lat, lng], { icon: icon })
        .bindPopup(`
            <div class="marker-popup">
                <h5>${name}</h5>
                <p><strong>${state}</strong> • ${elevation}</p>
                <p class="status ${completed ? 'completed' : 'planned'}">
                    ${completed ? 'Completed ✓' : 'Planned'}
                </p>
            </div>
        `);

    markersLayer.addLayer(marker);
    
    return marker;
}

// Load GPX from URL
function loadGPXFromURL(url) {
    fetch(url)
        .then(response => response.text())
        .then(gpxContent => {
            routesLayer.clearLayers();
            
            const gpx = new L.GPX(gpxContent, {
                async: true,
                marker_options: {
                    startIconUrl: null,
                    endIconUrl: null,
                    shadowUrl: null
                },
                polyline_options: {
                    color: '#e74c3c',
                    weight: 4,
                    opacity: 0.8
                }
            });
            
            gpx.on('loaded', function(e) {
                map.fitBounds(e.target.getBounds());
            });
            
            routesLayer.addLayer(gpx);
        })
        .catch(error => {
            console.error('Error loading GPX from URL:', error);
            if (window.showNotification) {
                window.showNotification('Error loading route from URL', 'error');
            }
        });
}

// Export functions for external use
window.hikingMap = {
    addPeak: addCustomPeak,
    loadGPX: loadGPXFromURL,
    getStats: getPeakStats,
    clearRoutes: () => routesLayer ? routesLayer.clearLayers() : null,
    clearMarkers: () => markersLayer ? markersLayer.clearLayers() : null
};
