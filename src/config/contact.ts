export const WHATSAPP_NUMBER = '917665960093';
export const PHONE_NUMBER = '+91-7665960093';
export const PHONE_DISPLAY = '+91 7665960093';
export const TEL_LINK = 'tel:+917665960093';

export function waLink(text?: string) {
  if (!text) return `https://wa.me/${WHATSAPP_NUMBER}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
