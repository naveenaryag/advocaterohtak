// Google Ads Conversion Tracking Utility

declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

type ConversionType = 'phone_call' | 'whatsapp_click' | 'form_submit' | 'page_view';

interface ConversionParams {
  page?: string;
  source?: string;
  value?: number;
}

export function trackConversion(type: ConversionType, params: ConversionParams = {}) {
  if (typeof window === 'undefined' || !window.gtag) {
    return;
  }

  // Google Analytics 4 event
  window.gtag('event', type, {
    event_category: 'engagement',
    event_label: params.source || params.page || 'unknown',
    value: params.value || 1,
  });

  // Google Ads conversion events
  const adsConversionId = 'AW-18295519053';

  switch (type) {
    case 'phone_call':
      // Track phone call conversion
      window.gtag('event', 'conversion', {
        send_to: `${adsConversionId}/phone_call`,
        event_callback: () => {},
      });
      break;

    case 'whatsapp_click':
      // Track WhatsApp click conversion
      window.gtag('event', 'conversion', {
        send_to: `${adsConversionId}/whatsapp`,
        event_callback: () => {},
      });
      break;

    case 'form_submit':
      // Track form submission as lead
      window.gtag('event', 'conversion', {
        send_to: `${adsConversionId}/lead_form`,
        event_callback: () => {},
      });
      window.gtag('event', 'generate_lead', {
        event_category: 'form',
        event_label: params.source || 'contact_form',
      });
      break;

    case 'page_view':
      // Track landing page view
      window.gtag('event', 'page_view', {
        page_title: params.page || document.title,
        page_location: window.location.href,
      });
      break;
  }
}

// Track phone call clicks with delay for navigation
export function trackPhoneClick(source: string) {
  trackConversion('phone_call', { source });
}

// Track WhatsApp clicks
export function trackWhatsAppClick(source: string) {
  trackConversion('whatsapp_click', { source });
}

// Track form submissions
export function trackFormSubmit(source: string) {
  trackConversion('form_submit', { source });
}
