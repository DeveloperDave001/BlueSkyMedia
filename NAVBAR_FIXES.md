# Navbar Path Fixes - BlueSky Group Website

## Issues Fixed

### 1. **Removed Non-Existent services.html Link**
The navbar was linking to `services.html` which doesn't exist. Changed to link to `Careers` instead.

### 2. **Standardized Navigation Structure**

#### From Root (index.html):
- Home → `index.html`
- About Us → `pages/About.html`
- Portfolio (Dropdown):
  - Media Promotions → `pages/BlueSkyMediapromotions.html`
  - Print House → `pages/PrintHouse.html`
  - Models & Ushers → `Models/index.html`
  - BlueSky TV → `pages/BlueSkyTv.html`
- Merchandise → `https://www.behance.net/gallery/221056545/BlueSky-Promotional-Items` (external)

#### From Pages Folder (pages/*.html):
- Home → `../index.html`
- About Us → `About.html`
- Portfolio (Dropdown):
  - Media Promotions → `BlueSkyMediapromotions.html`
  - Print House → `PrintHouse.html`
  - Models & Ushers → `../Models/index.html`
  - BlueSky TV → `BlueSkyTv.html`
- Careers → `../Careers/careers.html`

### 3. **Files Updated**

✅ **index.html** - Changed "Services" to "Merchandise" for Behance link
✅ **pages/About.html** - Fixed services.html → Careers link
✅ **pages/BlueSkyMediapromotions.html** - Fixed services.html → Careers link
✅ **pages/PrintHouse.html** - Fixed services.html → Careers link
✅ **pages/BlueSkyTv.html** - Already had correct Careers link
✅ **pages/contact.html** - Already had correct paths
✅ **pages/eCatalogue.html** - Fixed all asset paths (CSS, JS, images) to use ../assets/
✅ **pages/Models&Ushers.html** - Fixed navbar and internal links

### 4. **Consistent Navbar Labels**

All pages now use consistent terminology:
- **Portfolio** - For the dropdown menu containing all divisions
- **Careers** - Links to Careers section
- **Merchandise** - External link to Behance promotional items

### 5. **Asset Path Corrections**

Fixed eCatalogue.html to use proper relative paths:
- CSS: `../assets/css/`
- JS: `../assets/js/`
- Images: `../assets/images/`

## Testing Checklist

- [ ] Test all navbar links from index.html
- [ ] Test all navbar links from pages folder
- [ ] Test dropdown menu on all pages
- [ ] Test mobile navigation menu
- [ ] Verify all images load correctly
- [ ] Verify all CSS files load correctly
- [ ] Verify all JS files load correctly

## Notes

- The `services.html` file is empty and not being used
- All pages now have consistent navigation structure
- Mobile and desktop navbars are synchronized
- External links (Behance, Linktree) remain unchanged
