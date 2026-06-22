---
name: EIXO Fleet Management System
colors:
  surface: '#fcf8ff'
  surface-dim: '#dbd8e5'
  surface-bright: '#fcf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f2fe'
  surface-container: '#efecf9'
  surface-container-high: '#e9e6f3'
  surface-container-highest: '#e4e1ed'
  on-surface: '#1b1b23'
  on-surface-variant: '#464555'
  inverse-surface: '#303039'
  inverse-on-surface: '#f2effc'
  outline: '#767586'
  outline-variant: '#c6c5d7'
  surface-tint: '#474adb'
  primary: '#4143d5'
  on-primary: '#ffffff'
  primary-container: '#5b5fef'
  on-primary-container: '#f9f6ff'
  inverse-primary: '#c0c1ff'
  secondary: '#ae2f34'
  on-secondary: '#ffffff'
  secondary-container: '#ff6b6b'
  on-secondary-container: '#6d0010'
  tertiary: '#006733'
  on-tertiary: '#ffffff'
  tertiary-container: '#008343'
  on-tertiary-container: '#e2ffe4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#05006c'
  on-primary-fixed-variant: '#2c2cc3'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b0'
  on-secondary-fixed: '#410006'
  on-secondary-fixed-variant: '#8c1520'
  tertiary-fixed: '#6bfe9c'
  tertiary-fixed-dim: '#4ae183'
  on-tertiary-fixed: '#00210c'
  on-tertiary-fixed-variant: '#005228'
  background: '#fcf8ff'
  on-background: '#1b1b23'
  surface-variant: '#e4e1ed'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Manrope
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  container-margin: 24px
  gutter: 20px
---

## Brand & Style
The design system is built on a foundation of **Modern SaaS Minimalism** with a distinct **Fintech-inspired** clarity. It targets fleet managers and logistics operators who require high information density without cognitive overload. 

The aesthetic is clean, airy, and professional. It balances the utility of industrial logistics with the sophisticated approachability of a premium financial dashboard. The interface prioritizes whitespace to reduce "dashboard fatigue," using subtle depth and soft geometry to create a trustworthy, high-performance environment. The emotional response is one of control, precision, and modern efficiency.

## Colors
The palette is centered around a vibrant **Blue-Violet** primary accent, conveying innovation and movement. The background utilizes a very light blue-grey to reduce eye strain while making pure white surface elements (cards and sidebars) pop.

- **Primary (#5B5FEF):** Used for primary actions, active navigation states, and key data points.
- **Functional Colors:** Soft Coral (#FF6B6B) for alerts/errors, Emerald (#2ECC71) for success/online status, and Amber (#F5A623) for warnings.
- **Neutral Hierarchy:** Primary text uses a deep navy-charcoal for high legibility; secondary text uses a muted slate for metadata and labels.
- **Surface Strategy:** Use white for all containers and the sidebar to maintain a "lifted" feel against the #F4F6FB canvas.

## Typography
This design system employs a dual-font strategy. **Manrope** is used for headlines to provide a modern, geometric character that feels refined. **Inter** is used for body text and UI labels due to its exceptional legibility in data-heavy environments.

In Portuguese (Brazil), text strings can be 20-30% longer than in English. Ensure that containers have sufficient horizontal flexibility. Headings should be sentence-case. For data tables, use `body-md` for row content and `label-md` (uppercase/all-caps) for column headers to create clear visual distinction.

## Layout & Spacing
The layout follows a **fluid grid** model with a 12-column structure for desktop. 

- **Sidebar:** Fixed at 260px width. Pure white background with 1px border (#E2E8F0) or subtle shadow on the right.
- **Padding:** Main content area uses a 32px (xl) padding on desktop to maintain an "airy" feel. 
- **Rhythm:** An 8px linear scale governs all spacing. Components should predominantly use 16px (md) for internal padding to ensure a spacious, touch-friendly appearance.
- **Mobile:** On screens below 768px, margins reduce to 16px and the sidebar collapses into a bottom navigation bar or a hamburger drawer.

## Elevation & Depth
Depth is created through **Ambient Shadows** and tonal separation rather than heavy borders.

- **Level 1 (Cards):** Use `0px 4px 16px rgba(0, 0, 0, 0.04)`. These cards sit on the #F4F6FB background.
- **Level 2 (Dropdowns/Modals):** Use `0px 8px 24px rgba(0, 0, 0, 0.08)` to indicate higher priority and physical separation.
- **Interactive States:** On hover, buttons and cards may subtly increase shadow spread or lift by 1px to provide tactile feedback.
- **Flat Borders:** Use a very light #E2E8F0 border for input fields and table dividers to maintain structure without introducing visual noise.

## Shapes
The shape language is overtly **Rounded**, promoting a contemporary and "soft-tech" feel.

- **Primary Cards:** 20px corner radius.
- **Secondary Cards/Sections:** 16px corner radius.
- **Interactive Elements:** Buttons, input fields, and select menus use 12px (rounded-lg) for a modern, friendly grip.
- **Status Badges:** Fully pill-shaped (999px) to contrast against the rectangular nature of data tables and cards.

## Components
Consistent styling across components ensures a cohesive experience:

- **Buttons:** Primary buttons use the #5B5FEF background with white text. Height: 44px. Padding: 0 20px. 
- **Input Fields:** White background, 1px border (#E2E8F0), 12px rounded corners. Focused state uses a 2px #5B5FEF ring with 20% opacity.
- **Status Badges:** Use a "Pastel-on-Dark" approach. For example, a "Success" badge uses a #E8F8EF background with #2ECC71 text.
- **Sidebar Items:** Active items use a light #F0F0FF background and a 4px vertical "indicator" pill on the left or right in #5B5FEF.
- **Charts:** Area charts must use smooth cubic interpolation (curves). Fill gradients should transition from the accent color (e.g., #5B5FEF) at 20% opacity to 0% opacity at the baseline.
- **Lists & Tables:** Rows should have a minimum height of 56px to ensure "air." Use horizontal dividers only; avoid vertical lines to keep the design fintech-clean.