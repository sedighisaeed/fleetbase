# Persian (Farsi) RTL Implementation for Fleetbase

This document describes the implementation of Persian language support with proper Right-to-Left (RTL) layout for the Fleetbase application.

## Implementation Summary

### 1. Persian Translation File
Created a comprehensive Persian translation file (`fa-ir.yaml`) with translations for all UI elements, including:
- Application labels and titles
- Navigation elements
- Form labels and placeholders
- Button texts
- Error messages
- Help text and instructions

### 2. RTL CSS Support
Implemented comprehensive RTL styling support:

#### Core RTL Styles (`console/app/styles/rtl.css`)
- General RTL rules for text direction and alignment
- Layout adjustments for flex containers
- Padding and margin adjustments for RTL
- Form elements styling
- Navigation and button adjustments
- Table text alignment
- Icon positioning
- Dropdown positioning
- Modal adjustments
- Pagination direction
- Card layouts
- Alerts positioning
- List items
- Form controls

#### Ember UI RTL Styles (`packages/ember-ui/addon/styles/layout/rtl.css`)
- Navigation components
- Overlay panels
- Sidebar adjustments
- Content panels
- Tables
- Forms
- Buttons
- Pagination
- Dropdowns
- Modals
- Cards
- Alerts
- List items
- Form controls
- Dark theme adjustments

### 3. RTL Detection and Management
Created services and helpers to automatically detect and apply RTL layout:

#### RTL Service (`console/app/services/rtl.js`)
- Automatic detection of RTL languages
- Dynamic application of RTL CSS classes
- Locale change handling

#### RTL Helper (`console/app/helpers/is-rtl.js`)
- Helper function to determine if a locale is RTL

### 4. Language Switcher Component
Implemented a user-friendly language switcher:

#### Component Template (`console/app/components/language-switcher/template.hbs`)
- Dropdown selector with all supported languages
- Visual styling with Tailwind CSS

#### Component Logic (`console/app/components/language-switcher/component.js`)
- Language change handling
- User preference saving
- RTL layout activation

### 5. Application Integration
Integrated RTL support into the main application:

#### Application Route (`console/app/routes/application.js`)
- RTL initialization on application start
- Locale change handling

#### Application Template (`console/app/templates/application.hbs`)
- Language switcher placement

#### Tailwind Configuration (`console/tailwind.config.js`)
- Added RTL plugin support
- Vazir font as default

### 6. Font Support
Leveraged existing Vazir font support:
- Vazir-Thin, Vazir-Light, Vazir-Regular, Vazir-Medium, Vazir-Bold
- All font formats (EOT, WOFF2, WOFF, TTF)

## Usage

### Switching to Persian
1. Users can select "فارسی (Persian)" from the language dropdown in the top-right corner
2. The application will automatically:
   - Apply RTL layout and styling
   - Load Persian translations
   - Update all UI elements to Persian text
   - Adjust layout for RTL reading direction

### Supported RTL Languages
The implementation supports all RTL languages:
- Persian (Farsi) - fa-ir
- Arabic - ar-ae
- Hebrew - he, he-il
- Urdu - ur, ur-pk

## Technical Details

### File Structure
```
console/
├── translations/
│   └── fa-ir.yaml          # Persian translations
├── app/
│   ├── styles/
│   │   ├── rtl.css         # RTL styling
│   │   └── app.css         # Updated with RTL import
│   ├── services/
│   │   └── rtl.js          # RTL management service
│   ├── helpers/
│   │   └── is-rtl.js       # RTL detection helper
│   ├── components/
│   │   └── language-switcher/
│   │       ├── template.hbs
│   │       └── component.js
│   ├── routes/
│   │