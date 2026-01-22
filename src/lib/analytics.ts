// Analytics tracking utility
// Replace console.log with your actual analytics service (Google Analytics, Mixpanel, etc.)

type EventName =
  | "pay_cta_clicked"
  | "callback_requested"
  | "section_viewed"
  | "link_clicked";

interface EventProperties {
  [key: string]: string | number | boolean | undefined;
}

export function track(
  eventName: EventName,
  properties?: EventProperties,
): void {
  // Log to console for now - replace with actual analytics implementation
  console.log("📊 Analytics Event:", eventName, properties);

  // Example: Google Analytics 4
  // if (typeof window !== 'undefined' && (window as any).gtag) {
  //   (window as any).gtag('event', eventName, properties)
  // }

  // Example: Facebook Pixel
  // if (typeof window !== 'undefined' && (window as any).fbq) {
  //   (window as any).fbq('trackCustom', eventName, properties)
  // }

  // Example: Mixpanel
  // if (typeof window !== 'undefined' && (window as any).mixpanel) {
  //   (window as any).mixpanel.track(eventName, properties)
  // }
}

// Helper for tracking page sections viewed
export function trackSectionView(sectionName: string): void {
  track("section_viewed", { section: sectionName });
}

// Helper for tracking link clicks
export function trackLinkClick(linkName: string, destination: string): void {
  track("link_clicked", { link: linkName, destination });
}

export default track;
