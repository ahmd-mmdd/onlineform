type WhatsAppData = {
  service: string;
  data: Record<string, string>;
};

const PHONE_NUMBER = "6285731053237"; // Ganti dengan nomor WA bisnismu

export function sendWhatsApp({ service, data }: WhatsAppData) {
  let message = `Halo, saya ingin memesan *${service}*.\n\n`;

  Object.entries(data).forEach(([key, value]) => {
    message += `*${key}:* ${value || "-"}\n`;
  });

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}