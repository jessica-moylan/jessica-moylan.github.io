# The Coder's Almanac - Personal Website

A multi-page personal portfolio website showcasing software development work, hiking adventures, skiing trips, and running achievements with dark mode support.

## 🎯 Features

### Multi-Page Structure
- **Landing Page** (`index.html`) - About, projects, and interests overview
- **Hiking Page** (`hiking.html`) - Interactive map, trip reports, peak tracking
- **Skiing Page** (`skiing.html`) - Photo galleries and trip stories
- **Running Page** (`running.html`) - PRs, race calendar, training stats
- **Resume Page** (`resume.html`) - Professional experience and downloadable PDF

### Dark Mode
- Toggle button in sidebar (moon/sun icon)
- Persists across page visits using localStorage
- Smooth color transitions

### Sticky Sidebar
- Fixed position navigation that doesn't scroll
- Always accessible from any part of the page
- Responsive - moves to top on mobile

### Interactive Hiking Map
- Leaflet.js integration for peak visualization
- Upload and display GPX/KML routes
- Completed vs. planned peak markers
- Popup information for each peak

### Trip Report Templates
- Detailed hiking trip template with stats and photo galleries
- Skiing trip template with day-by-day breakdowns
- Easy to duplicate and customize

## 📁 File Structure

```
├── index.html                      # Landing page
├── hiking.html                     # Hiking adventures page
├── skiing.html                     # Skiing adventures page
├── running.html                    # Running stats page
├── resume.html                     # Resume page
├── trip-template-hiking.html       # Template for hiking trip reports
├── trip-template-skiing.html       # Template for skiing trip reports
├── style.css                       # All styles including dark mode
├── script.js                       # Dark mode & general functionality
├── hiking-map.js                   # Leaflet map functionality
├── resume.pdf                      # Your PDF resume (add this)
└── images/                         # Image directory (create this)
    ├── your-photo.jpg
    ├── hiking-cover.jpg            # Cover for hiking interest card
    ├── skiing-cover.jpg            # Cover for skiing interest card
    ├── running-cover.jpg           # Cover for running interest card
    ├── marcy.jpg                   # Trip report images
    ├── washington.jpg
    ├── katahdin.jpg
    ├── utah-main.jpg
    ├── tucks-main.jpg
    └── ... (add your trip photos)
```

## 🚀 Getting Started

### 1. Set Up Images Directory

Create an `images/` folder and add:

**Required Landing Page Images:**
- `your-photo.jpg` - Profile photo (400x400px recommended)
- `hiking-cover.jpg` - Hero image for hiking card
- `skiing-cover.jpg` - Hero image for skiing card
- `running-cover.jpg` - Hero image for running card

**Trip Photos:**
- Add photos for each trip report you create
- Follow naming convention: `[location]-main.jpg`, `[location]-1.jpg`, etc.

### 2. Update Personal Information

**All HTML files:**
- Update social links in footer (LinkedIn, GitHub, Strava)
- Replace placeholder URLs with your actual profiles

**`index.html`:**
- Lines 38-46: Update hero section and bio
- Lines 63-127: Update project information

**`hiking.html`:**
- Line 50: Update peak count
- Lines 66-107: Add your actual trip reports

**`skiing.html`:**
- Lines 46-54: Update season stats
- Lines 63-141: Update with your ski trips

**`running.html`:**
- Lines 43-69: Update training stats
- Lines 75-103: Update your PRs
- Lines 110-146: Update race calendar

**`resume.html`:**
- Update all sections with your information

### 3. Customize the Map

Edit `hiking-map.js` starting at line 40 to add your peaks:

```javascript
const peaks = [
    { 
        name: 'Mount Marcy', 
        state: 'NY', 
        lat: 44.1127, 
        lng: -73.9235, 
        elevation: '5,344 ft', 
        completed: true 
    },
    // Add more peaks...
];
```

**To add peaks:**
1. Get coordinates from Google Maps (right-click → coordinates)
2. Add entry to the peaks array
3. Set `completed: true` for summited peaks

### 4. Create Trip Reports

**For Hiking Trips:**
1. Copy `trip-template-hiking.html`
2. Rename to `trip-[mountain-name].html`
3. Update:
   - Mountain name and location
   - Trip date and stats
   - All content sections
   - Image paths
   - Navigation links at bottom

**For Skiing Trips:**
1. Copy `trip-template-skiing.html`
2. Rename to `ski-[location].html`
3. Update same as hiking template

**Quick customization checklist:**
- [ ] Page title (`<title>` tag)
- [ ] Trip header (name, date, location)
- [ ] Hero image and caption
- [ ] Trip statistics
- [ ] All content sections
- [ ] Photo gallery images
- [ ] Navigation links

### 5. Add Your Resume PDF

1. Export resume as PDF
2. Save as `resume.pdf` in root directory
3. The download button will automatically link to it

## 🎨 Customization

### Colors

Edit CSS variables in `style.css` (lines 5-18 for light mode, 21-31 for dark mode):

```css
:root {
    --sidebar-bg: #2c3e50;
    --accent-primary: #e74c3c;
    --accent-secondary: #3498db;
    /* ... more colors */
}

[data-theme="dark"] {
    --sidebar-bg: #1a1a1a;
    --accent-primary: #ff6b6b;
    /* ... dark mode colors */
}
```

### Fonts

Current fonts:
- **Display**: Archivo Black
- **Body**: Crimson Pro

To change:
1. Update Google Fonts link in HTML `<head>`
2. Update `font-family` in CSS

### Dark Mode Default

To default to dark mode, change line 9 in `script.js`:

```javascript
const currentTheme = localStorage.getItem('theme') || 'dark'; // Changed from 'light'
```

## 🗺️ Map Features

### Upload GPX/KML Files

**Via UI:**
- Click "Choose GPX/KML File" button on hiking page
- Select your route file
- Route displays automatically on map

**Via JavaScript Console:**
```javascript
window.hikingMap.loadGPX('path/to/your-route.gpx');
```

### Add Custom Peaks Programmatically

```javascript
window.hikingMap.addPeak(
    'Peak Name',
    'State',
    latitude,
    longitude,
    'elevation',
    true  // completed (true/false)
);
```

### Clear Map Data

```javascript
// Clear all routes
window.hikingMap.clearRoutes();

// Clear all markers
window.hikingMap.clearMarkers();
```

## 📱 Responsive Breakpoints

- **1200px**: Skiing layout switches to single column
- **900px**: Sidebar moves to top, full mobile layout
- **600px**: Further mobile optimizations, larger touch targets

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub
2. Settings → Pages
3. Source: main branch
4. Site live at `https://username.github.io/repo-name`

### Netlify
1. Drag/drop folder to Netlify
2. Instant deployment
3. Free custom domain

### Traditional Hosting
Upload all files via FTP to `public_html`

## 🛠️ Technologies

- HTML5 - Semantic structure
- CSS3 - Grid, Flexbox, Custom Properties
- Vanilla JavaScript - No frameworks
- Leaflet.js - Interactive maps
- Leaflet GPX Plugin - Route parsing
- Google Fonts - Typography

## 📝 Content Guidelines

### Trip Report Writing Tips

**Structure:**
1. Overview paragraph
2. Day-by-day breakdown
3. Gear notes
4. Safety considerations
5. Lessons learned
6. Route details

**Stats to Include:**
- Distance
- Elevation gain
- Moving time
- Difficulty rating

**Photos:**
- 1 hero image (1200x600px)
- 3-6 gallery images (800x600px)
- Add descriptive captions

### SEO Best Practices

1. Use descriptive page titles
2. Add alt text to all images
3. Include location keywords in content
4. Link between related trip reports

## 🎯 Checklist

**Initial Setup:**
- [ ] Create images directory
- [ ] Add profile photo
- [ ] Add cover images for interest cards
- [ ] Update all social links
- [ ] Update personal information in all HTML files
- [ ] Add resume PDF

**Hiking Page:**
- [ ] Update peak count
- [ ] Add completed peaks to map
- [ ] Create trip report for each completed peak
- [ ] Add trip photos
- [ ] Test GPX upload functionality

**Skiing Page:**
- [ ] Update season stats
- [ ] Add ski trip photos
- [ ] Write trip descriptions
- [ ] Create detailed trip reports

**Running Page:**
- [ ] Update all PRs
- [ ] Add training stats
- [ ] Update race calendar
- [ ] Link Strava profile

**Resume:**
- [ ] Update experience section
- [ ] Update education
- [ ] Update skills
- [ ] Add projects
- [ ] Upload PDF version

**Testing:**
- [ ] Test dark mode on all pages
- [ ] Test responsive design on mobile
- [ ] Test all navigation links
- [ ] Test map functionality
- [ ] Test GPX upload
- [ ] Verify all images load
- [ ] Check all external links

## 🐛 Troubleshooting

**Dark mode not persisting:**
- Check browser localStorage is enabled
- Clear cache and reload

**Map not loading:**
- Check Leaflet CDN links in HTML
- Verify hiking-map.js is loaded
- Check browser console for errors

**GPX upload not working:**
- Ensure file is valid GPX/KML format
- Check file size (keep under 5MB)
- Try different route file

**Sidebar not sticking:**
- This is intentional on mobile (<900px width)
- On desktop, verify `position: fixed` in CSS

## 💡 Tips

1. **Image Optimization**: Compress images before uploading (TinyPNG, ImageOptim)
2. **GPX Cleaning**: Remove unnecessary waypoints for better performance
3. **Mobile First**: Always test on actual mobile devices
4. **Accessibility**: Ensure sufficient color contrast in custom themes
5. **Performance**: Keep total page size under 3MB

## 🆘 Need Help?

Common issues and solutions in the HTML comments at the top of each file.

---

**Built with ☕ and 🏔️**
