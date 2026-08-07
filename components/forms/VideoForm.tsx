"use client";

import { useEffect, useRef, useState } from "react";
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
  "Custom",
];

const ADD_ONS = [
  "Subtitle Basic",
  "Subtitle Pro",
  "Subtitle Advance",
  "Fast Track",
  "Voice Over",
];

export default function VideoForm() {
  const [step, setStep] = useState(1);

  // Untuk auto scroll ke bagian atas form
  const formTopRef = useRef<HTMLDivElement>(null);

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

  // =========================================
  // AUTO SCROLL SAAT PINDAH STEP
  // =========================================

  useEffect(() => {
    if (step > 1) {
      formTopRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [step]);

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

  return (
    <div
      ref={formTopRef}
      className="relative overflow-hidden rounded-[2rem] border-2 border-white/20 bg-white/[0.10] shadow-[0_25px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
    >
      {/* =========================================
          DECORATIVE GLOW
      ========================================= */}

      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-400/10 blur-[100px]" />

      <div className="relative z-10 p-6 md:p-10">
        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mb-8">
          <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-white/70 backdrop-blur-md">
            VIDEO EDITING
          </div>

          <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Edit Video
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-base">
            Isi form reservasi jasa edit video kamu.
          </p>
        </div>

        {/* =========================================
            STEPPER
        ========================================= */}

        <div className="mb-10">
          <div className="grid grid-cols-3 gap-2">
            {/* STEP 1 */}

            <div
              className={`rounded-xl border p-3 text-center transition-all ${
                step >= 1
                  ? "border-white/30 bg-white/15"
                  : "border-white/10 bg-white/[0.05]"
              }`}
            >
              <div
                className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                  step >= 1
                    ? "bg-white text-[#073e87]"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {step > 1 ? <Check size={15} /> : "1"}
              </div>

              <p
                className={`text-xs font-bold md:text-sm ${
                  step >= 1 ? "text-white" : "text-white/40"
                }`}
              >
                Informasi
              </p>
            </div>

            {/* STEP 2 */}

            <div
              className={`rounded-xl border p-3 text-center transition-all ${
                step >= 2
                  ? "border-white/30 bg-white/15"
                  : "border-white/10 bg-white/[0.05]"
              }`}
            >
              <div
                className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                  step >= 2
                    ? "bg-white text-[#073e87]"
                    : "bg-white/10 text-white/50"
                }`}
              >
                {step > 2 ? <Check size={15} /> : "2"}
              </div>

              <p
                className={`text-xs font-bold md:text-sm ${
                  step >= 2 ? "text-white" : "text-white/40"
                }`}
              >
                Detail
              </p>
            </div>

            {/* STEP 3 */}

            <div
              className={`rounded-xl border p-3 text-center transition-all ${
                step >= 3
                  ? "border-white/30 bg-white/15"
                  : "border-white/10 bg-white/[0.05]"
              }`}
            >
              <div
                className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                  step >= 3
                    ? "bg-white text-[#073e87]"
                    : "bg-white/10 text-white/50"
                }`}
              >
                3
              </div>

              <p
                className={`text-xs font-bold md:text-sm ${
                  step >= 3 ? "text-white" : "text-white/40"
                }`}
              >
                Review
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            STEP 1
        ========================================= */}

        {step === 1 && (
          <div className="space-y-7">
            {/* NAMA */}

            <div>
              <label className="mb-2 block text-sm font-bold text-white/90">
                Nama Panggilan
              </label>

              <input
                type="text"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-white/30
                  transition
                  focus:border-white/50
                  focus:bg-white/[0.12]
                "
                placeholder="Contoh: Ahmad"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* NOMOR WHATSAPP */}

            <div>
              <label className="mb-2 block text-sm font-bold text-white/90">
                Nomor WhatsApp
              </label>

              <input
                type="tel"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-white/30
                  transition
                  focus:border-white/50
                  focus:bg-white/[0.12]
                "
                placeholder="Contoh: 08123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* PAKET */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-bold text-white/90">
                  Paket
                </label>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {PACKAGES.map((item) => {
                  const isSelected = selectedPackage === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedPackage(item)}
                      className={`
                        rounded-2xl
                        border-2
                        p-5
                        text-center
                        font-bold
                        transition-all
                        duration-300
                        ${
                          isSelected
                            ? "border-white bg-white text-[#073e87] shadow-lg"
                            : "border-white/15 bg-white/[0.06] text-white hover:border-white/35 hover:bg-white/10"
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
              <label className="mb-3 block text-sm font-bold text-white/90">
                Jenis Video
              </label>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {VIDEO_TYPES.map((item) => {
                  const isSelected = videoType === item;

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
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        ${
                          isSelected
                            ? "border-white bg-white text-[#073e87]"
                            : "border-white/15 bg-white/[0.06] text-white/80 hover:border-white/35 hover:bg-white/10"
                        }
                      `}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* =========================================
            STEP 2
        ========================================= */}

        {step === 2 && (
          <div className="space-y-7">
            {/* DURASI */}

            <div>
              <label className="mb-2 block text-sm font-bold text-white/90">
                Durasi Video
              </label>

              <div className="flex">
                <input
                  type="number"
                  min="1"
                  className="
                    min-w-0
                    flex-1
                    rounded-l-xl
                    border
                    border-r-0
                    border-white/20
                    bg-white/[0.08]
                    px-4
                    py-3
                    text-white
                    outline-none
                    placeholder:text-white/30
                    focus:border-white/50
                  "
                  placeholder="Contoh: 10"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />

                <div className="flex items-center rounded-r-xl border border-white/20 bg-white/10 px-5 text-sm font-bold text-white/70">
                  Menit
                </div>
              </div>
            </div>

            {/* DEADLINE */}

            <div>
              <label className="mb-2 block text-sm font-bold text-white/90">
                Deadline
              </label>

              <input
                type="datetime-local"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-4
                  py-3
                  text-white
                  outline-none
                  transition
                  focus:border-white/50
                "
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />

              <p className="mt-2 text-xs text-white/45">
                Tentukan tanggal dan jam deadline pengerjaan.
              </p>
            </div>

            {/* KONSEP */}

            <div>
              <label className="mb-2 block text-sm font-bold text-white/90">
                Konsep Video
              </label>

              <textarea
                rows={6}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-white/30
                  transition
                  focus:border-white/50
                  focus:bg-white/[0.12]
                "
                placeholder="Jelaskan konsep atau gambaran video yang kamu inginkan..."
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
              />
            </div>

            {/* REFERENSI */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-bold text-white/90">
                  Referensi
                </label>

                <span className="text-xs text-white/40">
                  Opsional
                </span>
              </div>

              <input
                type="url"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-white/30
                  transition
                  focus:border-white/50
                "
                placeholder="https://youtube.com/... atau link lainnya"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
            </div>

            {/* GOOGLE DRIVE */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-bold text-white/90">
                  Google Drive
                </label>

                <span className="text-xs text-white/40">
                  File bahan
                </span>
              </div>

              <input
                type="url"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-white/30
                  transition
                  focus:border-white/50
                "
                placeholder="https://drive.google.com/..."
                value={driveLink}
                onChange={(e) => setDriveLink(e.target.value)}
              />

              <p className="mt-2 text-xs text-white/45">
                Masukkan link Google Drive yang berisi bahan video.
              </p>
            </div>

            {/* REQUEST */}

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-bold text-white/90">
                  Request / Catatan Tambahan
                </label>

                <span className="text-xs text-white/40">
                  Opsional
                </span>
              </div>

              <textarea
                rows={5}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-white/20
                  bg-white/[0.08]
                  px-4
                  py-3
                  text-white
                  outline-none
                  placeholder:text-white/30
                  transition
                  focus:border-white/50
                  focus:bg-white/[0.12]
                "
                placeholder="Contoh: gunakan lagu tertentu, style editing tertentu, text tertentu, dll..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* ADD ON */}

            <div>
              <div className="mb-3 flex items-center justify-between">
                <label className="text-sm font-bold text-white/90">
                  Add On
                </label>

                <span className="text-xs text-white/40">
                  Bisa pilih lebih dari satu
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {ADD_ONS.map((addon) => {
                  const isSelected = selectedAddOns.includes(addon);

                  return (
                    <button
                      key={addon}
                      type="button"
                      onClick={() => toggleAddOn(addon)}
                      className={`
                        relative
                        rounded-2xl
                        border-2
                        p-5
                        text-center
                        font-bold
                        transition-all
                        duration-300
                        ${
                          isSelected
                            ? "border-white bg-white text-[#073e87]"
                            : "border-white/15 bg-white/[0.06] text-white hover:border-white/35 hover:bg-white/10"
                        }
                      `}
                    >
                      {isSelected && (
                        <span className="absolute right-3 top-3">
                          <Check size={16} />
                        </span>
                      )}

                      {addon}
                    </button>
                  );
                })}
              </div>

              <p className="mt-2 text-xs text-white/45">
                Pilih add on yang kamu butuhkan.
              </p>
            </div>
          </div>
        )}

        {/* =========================================
            STEP 3
        ========================================= */}

        {step === 3 && (
          <div className="space-y-5">
            <div className="mb-6">
              <div className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-widest text-white/60">
                FINAL REVIEW
              </div>

              <h3 className="text-2xl font-black md:text-3xl">
                Review Reservasi
              </h3>

              <p className="mt-2 text-sm text-white/55">
                Pastikan semua data sudah benar sebelum dikirim.
              </p>
            </div>

            <div className="space-y-1 rounded-2xl border border-white/15 bg-black/10 p-5 md:p-7">
              {/* NAMA */}

              <div className="flex justify-between gap-5 border-b border-white/10 py-4">
                <span className="text-sm text-white/50">
                  Nama
                </span>

                <span className="text-right text-sm font-bold">
                  {name}
                </span>
              </div>

              {/* WHATSAPP */}

              <div className="flex justify-between gap-5 border-b border-white/10 py-4">
                <span className="text-sm text-white/50">
                  Nomor WhatsApp
                </span>

                <span className="text-right text-sm font-bold">
                  {phone}
                </span>
              </div>

              {/* PAKET */}

              <div className="flex justify-between gap-5 border-b border-white/10 py-4">
                <span className="text-sm text-white/50">
                  Paket
                </span>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#073e87]">
                  {selectedPackage}
                </span>
              </div>

              {/* JENIS VIDEO */}

              <div className="flex justify-between gap-5 border-b border-white/10 py-4">
                <span className="text-sm text-white/50">
                  Jenis Video
                </span>

                <span className="text-right text-sm font-bold">
                  {videoType}
                </span>
              </div>

              {/* DURASI */}

              <div className="flex justify-between gap-5 border-b border-white/10 py-4">
                <span className="text-sm text-white/50">
                  Durasi
                </span>

                <span className="text-right text-sm font-bold">
                  {duration} menit
                </span>
              </div>

              {/* DEADLINE */}

              <div className="flex justify-between gap-5 border-b border-white/10 py-4">
                <span className="text-sm text-white/50">
                  Deadline
                </span>

                <span className="text-right text-sm font-bold">
                  {deadline}
                </span>
              </div>

              {/* KONSEP */}

              <div className="border-b border-white/10 py-4">
                <p className="mb-2 text-sm text-white/50">
                  Konsep Video
                </p>

                <p className="whitespace-pre-wrap text-sm leading-relaxed text-white/85">
                  {concept}
                </p>
              </div>

              {/* REFERENSI */}

              <div className="border-b border-white/10 py-4">
                <p className="mb-2 text-sm text-white/50">
                  Referensi
                </p>

                <p className="break-all text-sm text-white/85">
                  {reference || "-"}
                </p>
              </div>

              {/* DRIVE */}

              <div className="border-b border-white/10 py-4">
                <p className="mb-2 text-sm text-white/50">
                  Google Drive
                </p>

                <p className="break-all text-sm text-white/85">
                  {driveLink}
                </p>
              </div>

              {/* CATATAN */}

              <div className="border-b border-white/10 py-4">
                <p className="mb-2 text-sm text-white/50">
                  Request / Catatan Tambahan
                </p>

                <p className="whitespace-pre-wrap text-sm leading-relaxed text-white/85">
                  {notes || "-"}
                </p>
              </div>

              {/* ADD ON */}

              <div className="py-4">
                <p className="mb-3 text-sm text-white/50">
                  Add On
                </p>

                {selectedAddOns.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {selectedAddOns.map((addon) => (
                      <span
                        key={addon}
                        className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#073e87]"
                      >
                        {addon}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-white/60">
                    Tidak ada
                  </p>
                )}
              </div>
            </div>

            {/* INFO */}

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4 text-sm leading-relaxed text-white/80">
              Setelah kamu mengisi form ini, maka kami akan
              mengirimkan perkiraan biaya jasa editing kami ✨
            </div>
          </div>
        )}

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <div className="mt-10 flex items-center justify-between gap-3 border-t border-white/10 pt-6">
          {/* BACK */}

          <button
            type="button"
            disabled={step === 1}
            onClick={prevStep}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-4
              py-3
              text-sm
              font-bold
              text-white
              transition
              hover:bg-white/20
              disabled:cursor-not-allowed
              disabled:opacity-30
            "
          >
            <ChevronLeft size={18} />
            Kembali
          </button>

          {/* NEXT */}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-5
                py-3
                text-sm
                font-black
                text-[#073e87]
                transition
                hover:-translate-y-0.5
                hover:bg-white/90
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
                bg-white
                px-5
                py-3
                text-sm
                font-black
                text-[#073e87]
                transition
                hover:-translate-y-0.5
                hover:bg-white/90
              "
            >
              <Send size={18} />
              Kirim ke WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}