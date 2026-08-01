type WhatsAppData = {
  service: string;
  data: Record<string, string>;
};

const PHONE_NUMBER = "6285731053237";

export function sendWhatsApp({ data }: WhatsAppData) {
  const message = `✨*Form reservasi jasa edit by AsaDigitals*📋

*Nama*: ${data.Nama || "-"}
*Nomor WhatsApp*: ${data.WhatsApp || "-"}
*Paket*: ${data.Paket || "-"}
*Jenis Video*: ${data["Jenis Video"] || "-"}
*Durasi*: ${data.Durasi || "-"}
*Deadline*: ${data.Deadline || "-"}
*Konsep Video*: ${data["Konsep Video"] || "-"}
*Referensi*: ${data.Referensi || "-"}
*Google Drive*: ${data["Google Drive"] || "-"}
*Request/Catatan Tambahan*:
${data["Request/Catatan Tambahan"] || "-"}
*Add On*: ${data["Add On"] || "-"}

Setelah kamu mengisi form ini, maka kami akan mengirimkan perkiraan biaya jasa editing kami✨`;

  const whatsappUrl =
    `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

  window.location.href = whatsappUrl;
}