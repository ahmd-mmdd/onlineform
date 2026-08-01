type WhatsAppData = {
  service: string;
  data: Record<string, string>;
};

const PHONE_NUMBER = "6285731053237";

export function sendWhatsApp({ service, data }: WhatsAppData) {
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

Setelah kamu mengisi form ini, maka kami akan mengirimkan perkiraan biaya jasa editing kami✨`;

  const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
}