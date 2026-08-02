"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Send,
  Check,
} from "lucide-react";
import { sendWhatsApp } from "@/lib/whatsapp";

const VIDEO_TYPES = [
  "Edukasi",
  "Vlog",
  "Dokumenter",
  "Short Content",
  "Podcast",
  "Cinematic",
  "Promosi/Iklan",
  "Dokumentasi Acara",
  "After Movie",
  "Konten Produk",
  "Film Pendek",
  "Lainnya",
];

const PACKAGES = [
  "Basic",
  "Pro",
  "Ultimate",
];

const ADD_ONS = [
  "Subtitle",
  "Fast Track",
  "Voice Over",
];

export default function VideoForm() {
  const [step, setStep] = useState(1);

  // Informasi customer
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Informasi pesanan
  const [selectedPackage, setSelectedPackage] = useState("");
  const [videoType, setVideoType] = useState("");
  const [duration, setDuration] = useState("");

  // Detail project
  const [deadline, setDeadline] = useState("");
  const [concept, setConcept] = useState("");
  const [reference, setReference] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [notes, setNotes] = useState("");

  // Add On
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const toggleAddOn = (addon: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(addon)
        ? prev.filter((item) => item !== addon)
        : [...prev, addon]
    );
  };

  const nextStep = () => {
    if (step === 1) {
      if (!name || !phone || !selectedPackage || !videoType) {
        alert("Lengkapi data terlebih dahulu.");
        return;
      }
    }

    if (step === 2) {
      if (!duration || !deadline || !concept || !driveLink) {
        alert("Lengkapi detail project terlebih dahulu.");
        return;
      }
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const inputClass = `
    w-full
    rounded-xl
    border
    border-white/15
    bg-white/[0.06]
    px-4
    py-3.5
    text-white
    outline-none
    placeholder:text-white/30
    backdrop-blur-md
    transition
    focus:border-blue-400/60
    focus:bg-white/[0.09]
    focus:ring-2
    focus:ring-blue-500/20
  `;

  const textareaClass = `
    w-full
    rounded-xl
    border
    border-white/15
    bg-white/[0.06]
    px-4
    py-3.5
    text-white
    outline-none
    placeholder:text-white/30
    backdrop-blur-md
    transition
    focus:border-blue-400/60
    focus:bg-white/[0.09]
    focus:ring-2
    focus:ring-blue-500/20
    resize-none
  `;

  return (
    <div className="relative">

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute left-[-200px] top-[10%] h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute right-[-200px] top-[35%] h-[500px] w-[500px] rounded-full bg-cyan-400/15 blur-[150px]" />

        <div className="absolute bottom-[-200px] left-[25%] h-[450px] w-[450px] rounded-full bg-purple-600/15 blur-[150px]" />

      </div>

      {/* HEADER */}

      <div className="mb-8">

        <div className="mb-4 inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold tracking-[0.2em] text-white/60 backdrop-blur-md">
          ASA DIGITAL SPACE
        </div>

        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          Edit Video
        </h1>

        <p className="mt-3 max-w-2xl text-white/55">
          Isi form reservasi jasa edit video dengan lengkap.
          Setelah form dikirim, kami akan mengirimkan perkiraan
          biaya jasa editing.
        </p>

      </div>

      {/* FORM CARD */}

      <div
        className="
          rounded-[2rem]
          border
          border-white/15
          bg-white/[0.06]
          p-1
          shadow-[0_25px_80px_rgba(0,0,0,0.25)]
          backdrop-blur-2xl
        "
      >

        <div className="rounded-[1.7rem] p-5 md:p-8">

          {/* STEPPER */}

          <div className="mb-10">

            <div className="flex items-center justify-center">

              {[1, 2, 3].map((number, index) => (

                <div
                  key={number}
                  className="flex items-center"
                >

                  {/* STEP CIRCLE */}

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-sm
                      font-black
                      transition-all
                      duration-300
                      ${
                        step >= number
                          ? "border-blue-400 bg-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.35)]"
                          : "border-white/15 bg-white/[0.05] text-white/35"
                      }
                    `}
                  >
                    {step > number ? (
                      <Check size={17} />
                    ) : (
                      number
                    )}
                  </div>

                  {/* LINE */}

                  {index < 2 && (
                    <div
                      className={`
                        mx-2
                        h-px
                        w-10
                        sm:w-20
                        transition
                        ${
                          step > number
                            ? "bg-blue-500"
                            : "bg-white/10"
                        }
                      `}
                    />
                  )}

                </div>

              ))}

            </div>

            <div className="mt-3 flex justify-center gap-8 text-xs font-semibold text-white/40 sm:gap-16">

              <span
                className={step >= 1 ? "text-white/80" : ""}
              >
                Informasi
              </span>

              <span
                className={step >= 2 ? "text-white/80" : ""}
              >
                Detail
              </span>

              <span
                className={step >= 3 ? "text-white/80" : ""}
              >
                Review
              </span>

            </div>

          </div>

          {/* ================================================= */}
          {/* STEP 1 */}
          {/* ================================================= */}

          {step === 1 && (

            <div className="space-y-7">

              <div>
                <h2 className="text-2xl font-black">
                  Informasi Pesanan
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Masukkan informasi dasar untuk reservasi kamu.
                </p>
              </div>

              {/* NAMA */}

              <div>

                <label className="mb-2 block text-sm font-bold text-white/80">
                  Nama Panggilan
                </label>

                <input
                  type="text"
                  className={inputClass}
                  placeholder="Contoh: Ahmad"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

              </div>

              {/* NOMOR WA */}

              <div>

                <label className="mb-2 block text-sm font-bold text-white/80">
                  Nomor WhatsApp
                </label>

                <input
                  type="tel"
                  className={inputClass}
                  placeholder="Contoh: 08123456789"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

              </div>

              {/* PAKET */}

              <div>

                <label className="mb-3 block text-sm font-bold text-white/80">
                  Paket
                </label>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                  {PACKAGES.map((item) => {

                    const selected = selectedPackage === item;

                    return (

                      <button
                        key={item}
                        type="button"
                        onClick={() => setSelectedPackage(item)}
                        className={`
                          rounded-2xl
                          border
                          px-5
                          py-5
                          text-center
                          font-bold
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "border-blue-400 bg-blue-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.25)]"
                              : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/25 hover:bg-white/[0.08]"
                          }
                        `}
                      >
                        {item}
                      </button>

                    );

                  })}

                </div>

              </div>

              {/* JENIS VIDEO */}

              <div>

                <label className="mb-3 block text-sm font-bold text-white/80">
                  Jenis Video
                </label>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

                  {VIDEO_TYPES.map((item) => {

                    const selected = videoType === item;

                    return (

                      <button
                        key={item}
                        type="button"
                        onClick={() => setVideoType(item)}
                        className={`
                          rounded-xl
                          border
                          px-4
                          py-3.5
                          text-left
                          text-sm
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "border-blue-400 bg-blue-500 text-white"
                              : "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/25 hover:bg-white/[0.08]"
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">

                          {item}

                          {selected && (
                            <Check size={17} />
                          )}

                        </div>
                      </button>

                    );

                  })}

                </div>

              </div>

            </div>

          )}

          {/* ================================================= */}
          {/* STEP 2 */}
          {/* ================================================= */}

          {step === 2 && (

            <div className="space-y-7">

              <div>

                <h2 className="text-2xl font-black">
                  Detail Project
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Berikan detail proyek agar kami bisa memahami
                  kebutuhan editing kamu.
                </p>

              </div>

              {/* DURASI */}

              <div>

                <label className="mb-2 block text-sm font-bold text-white/80">
                  Durasi Video
                </label>

                <div className="flex">

                  <input
                    type="number"
                    min="1"
                    className={`${inputClass} rounded-r-none`}
                    placeholder="Contoh: 10"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />

                  <div className="flex items-center rounded-r-xl border border-l-0 border-white/15 bg-white/[0.08] px-5 text-sm font-bold text-white/60">
                    Menit
                  </div>

                </div>

              </div>

              {/* DEADLINE */}

              <div>

                <label className="mb-2 block text-sm font-bold text-white/80">
                  Deadline
                </label>

                <input
                  type="datetime-local"
                  className={inputClass}
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />

                <p className="mt-2 text-xs text-white/35">
                  Tentukan tanggal dan jam deadline pengerjaan.
                </p>

              </div>

              {/* KONSEP */}

              <div>

                <label className="mb-2 block text-sm font-bold text-white/80">
                  Konsep Video
                </label>

                <textarea
                  rows={6}
                  className={textareaClass}
                  placeholder="Jelaskan konsep atau gambaran video yang kamu inginkan..."
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                />

              </div>

              {/* REFERENSI */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-sm font-bold text-white/80">
                    Referensi
                  </label>

                  <span className="text-xs text-white/35">
                    Opsional
                  </span>

                </div>

                <input
                  type="url"
                  className={inputClass}
                  placeholder="https://youtube.com/... atau link lainnya"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />

              </div>

              {/* DRIVE */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-sm font-bold text-white/80">
                    Google Drive
                  </label>

                  <span className="text-xs text-white/35">
                    File bahan
                  </span>

                </div>

                <input
                  type="url"
                  className={inputClass}
                  placeholder="https://drive.google.com/..."
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                />

                <p className="mt-2 text-xs text-white/35">
                  Masukkan link Google Drive yang berisi bahan
                  video.
                </p>

              </div>

              {/* NOTES */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label className="text-sm font-bold text-white/80">
                    Request / Catatan Tambahan
                  </label>

                  <span className="text-xs text-white/35">
                    Opsional
                  </span>

                </div>

                <textarea
                  rows={5}
                  className={textareaClass}
                  placeholder="Contoh: gunakan lagu tertentu, style editing tertentu, text tertentu, dll..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                />

              </div>

              {/* ADD ON */}

              <div>

                <div className="mb-3 flex items-center justify-between">

                  <label className="text-sm font-bold text-white/80">
                    Add On
                  </label>

                  <span className="text-xs text-white/35">
                    Bisa pilih lebih dari satu
                  </span>

                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">

                  {ADD_ONS.map((addon) => {

                    const selected =
                      selectedAddOns.includes(addon);

                    return (

                      <button
                        key={addon}
                        type="button"
                        onClick={() => toggleAddOn(addon)}
                        className={`
                          rounded-2xl
                          border
                          px-4
                          py-4
                          font-semibold
                          transition-all
                          duration-300
                          ${
                            selected
                              ? "border-blue-400 bg-blue-500 text-white shadow-[0_10px_30px_rgba(59,130,246,0.2)]"
                              : "border-white/10 bg-white/[0.04] text-white/65 hover:border-white/25 hover:bg-white/[0.08]"
                          }
                        `}
                      >

                        <div className="flex items-center justify-center gap-2">

                          {selected && (
                            <Check size={16} />
                          )}

                          {addon}

                        </div>

                      </button>

                    );

                  })}

                </div>

              </div>

            </div>

          )}

          {/* ================================================= */}
          {/* STEP 3 */}
          {/* ================================================= */}

          {step === 3 && (

            <div className="space-y-6">

              <div>

                <h2 className="text-2xl font-black">
                  Review Reservasi
                </h2>

                <p className="mt-1 text-sm text-white/45">
                  Pastikan seluruh data sudah benar sebelum
                  dikirim ke WhatsApp.
                </p>

              </div>

              <div className="space-y-3">

                <ReviewItem
                  label="Nama"
                  value={name}
                />

                <ReviewItem
                  label="Nomor WhatsApp"
                  value={phone}
                />

                <ReviewItem
                  label="Paket"
                  value={selectedPackage}
                  highlight
                />

                <ReviewItem
                  label="Jenis Video"
                  value={videoType}
                />

                <ReviewItem
                  label="Durasi"
                  value={`${duration} menit`}
                />

                <ReviewItem
                  label="Deadline"
                  value={deadline}
                />

                <ReviewBlock
                  label="Konsep Video"
                  value={concept}
                />

                <ReviewBlock
                  label="Referensi"
                  value={reference || "-"}
                />

                <ReviewBlock
                  label="Google Drive"
                  value={driveLink}
                />

                <ReviewBlock
                  label="Request / Catatan Tambahan"
                  value={notes || "-"}
                />

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                  "
                >

                  <p className="mb-3 text-sm font-bold text-white/60">
                    Add On
                  </p>

                  {selectedAddOns.length > 0 ? (

                    <div className="flex flex-wrap gap-2">

                      {selectedAddOns.map((addon) => (

                        <span
                          key={addon}
                          className="
                            rounded-full
                            border
                            border-blue-400/30
                            bg-blue-500/15
                            px-3
                            py-1.5
                            text-xs
                            font-bold
                            text-blue-300
                          "
                        >
                          {addon}
                        </span>

                      ))}

                    </div>

                  ) : (

                    <p className="text-sm text-white/40">
                      Tidak ada
                    </p>

                  )}

                </div>

              </div>

              {/* INFO */}

              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">

                <p className="text-sm leading-relaxed text-white/70">
                  Setelah kamu mengirim form ini, kami akan
                  melakukan review dan mengirimkan perkiraan
                  biaya jasa editing melalui WhatsApp. ✨
                </p>

              </div>

            </div>

          )}

          {/* ================================================= */}
          {/* NAVIGATION */}
          {/* ================================================= */}

          <div className="mt-10 flex items-center justify-between gap-3 border-t border-white/10 pt-6">

            {/* BACK */}

            <button
              type="button"
              disabled={step === 1}
              onClick={prevStep}
              className={`
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/15
                bg-white/[0.05]
                px-5
                py-3
                text-sm
                font-bold
                text-white
                transition
                hover:bg-white/10
                disabled:cursor-not-allowed
                disabled:opacity-30
              `}
            >
              <ChevronLeft size={18} />
              Kembali
            </button>

            {/* NEXT / SEND */}

            {step < 3 ? (

              <button
                type="button"
                onClick={nextStep}
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-500
                  px-6
                  py-3
                  text-sm
                  font-black
                  text-white
                  shadow-[0_10px_30px_rgba(59,130,246,0.25)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-blue-400
                  hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)]
                "
              >
                Lanjut
                <ChevronRight size={18} />
              </button>

            ) : (

              <button
                type="button"
                onClick={() =>
                  sendWhatsApp({
                    service: "Edit Video",
                    data: {
                      Nama: name,
                      WhatsApp: phone,
                      Paket: selectedPackage,
                      "Jenis Video": videoType,
                      Durasi: `${duration} menit`,
                      Deadline: deadline,
                      "Konsep Video": concept,
                      Referensi: reference,
                      "Google Drive": driveLink,
                      "Request/Catatan Tambahan": notes,
                      "Add On":
                        selectedAddOns.length > 0
                          ? selectedAddOns.join(", ")
                          : "-",
                    },
                  })
                }
                className="
                  flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-blue-500
                  px-6
                  py-3
                  text-sm
                  font-black
                  text-white
                  shadow-[0_10px_30px_rgba(59,130,246,0.25)]
                  transition-all
                  hover:-translate-y-0.5
                  hover:bg-blue-400
                  hover:shadow-[0_15px_40px_rgba(59,130,246,0.35)]
                "
              >
                <Send size={17} />
                Kirim ke WhatsApp
              </button>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

/* ================================================= */
/* REVIEW COMPONENTS */
/* ================================================= */

function ReviewItem({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

      <span className="shrink-0 text-sm text-white/45">
        {label}
      </span>

      {highlight ? (

        <span className="rounded-full bg-blue-500/15 px-3 py-1.5 text-xs font-bold text-blue-300">
          {value}
        </span>

      ) : (

        <span className="text-right text-sm font-semibold text-white/85">
          {value}
        </span>

      )}

    </div>
  );
}

function ReviewBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">

      <p className="mb-2 text-sm font-bold text-white/60">
        {label}
      </p>

      <p className="whitespace-pre-wrap break-all text-sm leading-relaxed text-white/80">
        {value}
      </p>

    </div>
  );
}