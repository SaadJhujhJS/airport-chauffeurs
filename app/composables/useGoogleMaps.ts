// composables/useGoogleMaps.ts
export const useGoogleMaps = () => {
  const scriptLoaded = ref(false);

  const loadGoogleMaps = () => {
    return new Promise<void>((resolve, reject) => {
      if (process.server) return; // Prevent SSR crash

      // Already loaded
      if ((window as any).google && (window as any).google.maps) {
        scriptLoaded.value = true;
        return resolve();
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${
        useRuntimeConfig().public.GOOGLE_MAPS_API_KEY
      }&libraries=places,geometry&loading=async&v=weekly`; // 👈 Added geometry and weekly version
      script.async = true;
      script.defer = true;

      script.onload = () => {
        // Suppress Google Maps deprecation warnings
        const originalWarn = console.warn;
        console.warn = (...args) => {
          if (
            args[0] &&
            typeof args[0] === 'string' &&
            args[0].includes('utc_offset is deprecated')
          ) {
            return; // Suppress this specific warning
          }
          originalWarn.apply(console, args);
        };

        // Wait for Google Maps to be fully initialized
        const checkGoogleMaps = () => {
          if (
            (window as any).google &&
            (window as any).google.maps &&
            (window as any).google.maps.Map
          ) {
            // Restore original console.warn after Google Maps loads
            console.warn = originalWarn;
            scriptLoaded.value = true;
            resolve();
          } else {
            // Retry after a short delay
            setTimeout(checkGoogleMaps, 100);
          }
        };
        checkGoogleMaps();
      };
      script.onerror = error => {
        console.error('Failed to load Google Maps script:', error);
        reject(error);
      };

      document.head.appendChild(script);
    });
  };

  return { scriptLoaded, loadGoogleMaps };
};
