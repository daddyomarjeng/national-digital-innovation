# Event Constants

This directory contains all the reusable constants and configuration for the National Digital Innovation Week website.

## Files

### `event.ts`

Contains all event-related constants that can be updated in one place and will reflect across the entire website.

## Key Constants

### Event Dates
Update these to change dates throughout the entire site:
- `EVENT_DATES.start` - Start date
- `EVENT_DATES.end` - End date  
- `EVENT_DATES.display` - Display format (e.g., "8–12 December 2025")
- `EVENT_DATES.registrationDeadline` - Registration deadline
- `EVENT_DATES.earlyBirdDeadline` - Early bird deadline
- `EVENT_DATES.exhibitorDeadline` - Exhibitor application deadline

### Venue Information
- `VENUE.name` - Full venue name
- `VENUE.address` - Complete venue address
- `VENUE.city` - City name
- `VENUE.country` - Country name

### Event Theme
- `EVENT_THEME.title` - Event title
- `EVENT_THEME.subtitle` - Event subtitle/theme
- `EVENT_THEME.tagline` - Event tagline

### Contact Information
- `CONTACT_INFO.general` - General contact details (email, phone)
- `CONTACT_INFO.departments` - Department-specific emails
- `CONTACT_INFO.address` - Ministry address
- `CONTACT_INFO.officeHours` - Office hours

### Other Constants
- `ORGANIZERS` - List of organizing partners
- `PARTNERS` - Partner organizations
- `FOCUS_AREAS` - Event focus areas
- `EXPECTATIONS` - What participants can expect
- `OBJECTIVES` - Event objectives
- `REGISTRATION_CATEGORIES` - Registration categories
- `ATTENDANCE_DAYS` - Available attendance days
- `SOCIAL_MEDIA` - Social media links
- `AIRPORT_INFO` - Airport information

## Usage

Import the constants you need:

```typescript
import { EVENT_DATES, VENUE, CONTACT_INFO } from '@/app/constants';

// Use in your component
<p>{EVENT_DATES.display}</p>
<p>{VENUE.name}</p>
<a href={`mailto:${CONTACT_INFO.general.email}`}>Contact Us</a>
```

## Benefits

1. **Single Source of Truth**: Update information once, reflected everywhere
2. **Consistency**: Ensures the same data is used across all pages
3. **Easy Maintenance**: Change dates, contact info, etc. without searching through multiple files
4. **Type Safety**: TypeScript provides autocomplete and type checking
