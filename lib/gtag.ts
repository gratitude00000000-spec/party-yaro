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
