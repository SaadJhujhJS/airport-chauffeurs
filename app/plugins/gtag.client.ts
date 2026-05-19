declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const analyticsId = config.public.GOOGLE_ANALYTICS_ID as string | undefined;
  // const adsId = config.public.GOOGLE_ADS_ID as string | undefined;

  // if (!analyticsId && !adsId) return;
  if (!analyticsId) return;

  nuxtApp.hook('app:mounted', () => {
    const start = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());

      // const primaryId = analyticsId || adsId!;
      const primaryId = analyticsId!;
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${primaryId}`;
      document.head.appendChild(script);

      if (analyticsId) {
        window.gtag('config', analyticsId, { anonymize_ip: true });
      }
      // if (adsId) {
      //   window.gtag('config', adsId);
      // }
    };

    if ('requestIdleCallback' in window) {
      (
        window as Window & { requestIdleCallback: (cb: () => void) => void }
      ).requestIdleCallback(start);
    } else {
      setTimeout(start, 1500);
    }
  });
});
