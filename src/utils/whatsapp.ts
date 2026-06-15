import { WHATSAPP_NUMBER } from "./data";

/**
 * Generates a WhatsApp API link with encoded text.
 */
export function getWhatsAppLink(message: string): string {
  const cleanNumber = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns a pre-filled catalog request message.
 */
export function getCatalogRequestLink(): string {
  const message = "Hi, I am visiting your website. I want to see your latest wholesale shirt catalog with bulk prices. Please share the catalog PDF.";
  return getWhatsAppLink(message);
}

/**
 * Returns a pre-filled product inquiry message.
 */
export function getProductInquiryLink(productName: string, fabric: string, price: string): string {
  const message = `Hi! I want to check availability for the product: "${productName}" (Fabric: ${fabric}, wholesale rate: ${price}). Please send me colors and ordering details.`;
  return getWhatsAppLink(message);
}

/**
 * Returns a pre-filled contact form submission message.
 */
export function getContactFormWhatsAppLink(data: {
  name: string;
  mobile: string;
  shopName: string;
  city: string;
  message: string;
}): string {
  const formattedText = `Hi, I submitted a contact request on your wholesale website:
- *Name*: ${data.name}
- *Mobile*: ${data.mobile}
- *Shop Name*: ${data.shopName}
- *City*: ${data.city}
- *Message*: ${data.message}`;
  return getWhatsAppLink(formattedText);
}
