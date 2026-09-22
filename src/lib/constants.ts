export const WHATSAPP_NUMBER = "5585991284024";

export const WHATSAPP_MESSAGE_DEFAULT =
  "Oi! Vim pelo site e quero saber mais sobre os sites da Bora Pro Ar.";

export function buildWhatsappLink(message: string = WHATSAPP_MESSAGE_DEFAULT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_HANDLE = "@boraproar";
export const INSTAGRAM_URL = "https://instagram.com/boraproar";

export const SITE_NAME = "Bora Pro Ar";
export const SITE_URL = "https://boraproar.com.br";
