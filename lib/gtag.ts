export const GA_MEASUREMENT_ID = 'G-HS3DK847C4';

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export function trackLineClick(location: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'line_click', {
      button_location: location,
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }
}

export function trackPhoneClick(location: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'phone_click', {
      button_location: location,
      page_path: window.location.pathname,
    });
  }
}

export function trackBookmarkClick(venueId: string, saved: boolean) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'bookmark_click', {
      venue_id: venueId,
      action: saved ? 'remove' : 'add',
      page_path: window.location.pathname,
    });
  }
}

export function trackSearchClick() {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'search_click', {
      page_path: window.location.pathname,
    });
  }
}
