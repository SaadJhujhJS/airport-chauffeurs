export function sendContactEmail(data: any): Promise<any> {
  return $fetch('/api/send-contact-email', {
    method: 'POST',
    body: data,
  });
}

export function sendBookingEmail(data: any): Promise<any> {
  return $fetch('/api/send-booking-email', {
    method: 'POST',
    body: data,
  });
}

export function sendLogin(data: any): Promise<any> {
  return $fetch('/api/send-login-email', {
    method: 'POST',
    body: data,
  });
}
