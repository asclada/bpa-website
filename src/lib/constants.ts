export const WHATSAPP_NUMBER = "5585991284024";

export const WHATSAPP_MESSAGE_DEFAULT =
  "Oi! Vim pelo site e quero saber mais sobre os sites da Bora Pro Ar.";

export function buildWhatsappLink(message: string = WHATSAPP_MESSAGE_DEFAULT) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const INSTAGRAM_HANDLE = "@boraproar";
export const INSTAGRAM_URL = "https://instagram.com/boraproar";

export const SITE_NAME = "Bora Pro Ar";
// Nome público completo: tem que ser idêntico em todos os canais (ver CLAUDE.md)
export const BUSINESS_NAME = "Bora Pro Ar - Criação de Sites e Sistemas";
export const SITE_URL = "https://boraproar.com";

export const PHONE_E164 = `+${WHATSAPP_NUMBER}`;
// Link oficial de compartilhamento do Perfil da Empresa no Google
export const GOOGLE_BUSINESS_URL = "https://share.google/yF7a1JWfXCegg6U4r";
export const LINKEDIN_URL = "https://www.linkedin.com/company/boraproar";
