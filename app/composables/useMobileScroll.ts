const MOBILE_BREAKPOINT = 768;
const MOBILE_USER_AGENTS = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const FIELD_PRIORITIES = ['name', 'phone', 'pickup', 'dropoff', 'stops', 'date', 'time', 'email', 'message'];

export const useMobileScroll = () => {
  const isMobile = () => {
    if (!process.client) return false;
    return window.innerWidth <= MOBILE_BREAKPOINT || MOBILE_USER_AGENTS.test(navigator.userAgent);
  };

  const scrollToElement = (element: HTMLElement | null, offset = 100) => {
    if (!element || !isMobile()) return;

    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const elementTop = rect.top + scrollTop;
    const viewportHeight = window.innerHeight;
    const elementHeight = rect.height;
    const targetPosition = elementTop - (viewportHeight / 2) + (elementHeight / 2) - offset;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: 'smooth'
    });
  };

  const scrollToFirstValidationError = (missingFields: string[], formRefs: Record<string, HTMLElement | null>) => {
    if (!isMobile() || !missingFields.length) return;

    const targetField = FIELD_PRIORITIES.find(field => 
      missingFields.includes(field) && formRefs[field]
    );

    if (targetField) {
      scrollToElement(formRefs[targetField]);
    }
  };

  return {
    isMobile,
    scrollToElement,
    scrollToFirstValidationError
  };
};
