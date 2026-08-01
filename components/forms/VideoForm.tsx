"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
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
    <div className="card bg-base-200 border border-base-300 shadow-xl">
      <div className="card-body">

        {/* HEADER */}
        <div>
          <h2 className="text-3xl font-black">
            🎬 Edit Video
          </h2>

          <p className="opacity-70 mt-2">
            Isi form reservasi jasa edit video kamu.
          </p>
        </div>

        {/* STEPPER */}
        <ul className="steps steps-horizontal w-full my-6">
          <li
            className={`step ${
              step >= 1 ? "step-primary" : ""
            }`}
          >
            Informasi
          </li>

          <li
            className={`step ${
              step >= 2 ? "step-primary" : ""
            }`}
          >
            Detail
          </li>

          <li
            className={`step ${
              step >= 3 ? "step-primary" : ""
            }`}
          >
            Review
          </li>
        </ul>

        {/* ========================================= */}
        {/* STEP 1 */}
        {/* ========================================= */}

        {step === 1 && (
          <div className="space-y-6">

            {/* NAMA */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Nama Panggilan
                </span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Contoh: Ahmad"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* NOMOR WHATSAPP */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Nomor WhatsApp
                </span>
              </label>

              <input
                type="tel"
                className="input input-bordered w-full"
                placeholder="Contoh: 08123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* PAKET */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Paket
                </span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PACKAGES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSelectedPackage(item)}
                    className={`card border transition-all ${
                      selectedPackage === item
                        ? "border-primary bg-primary text-primary-content"
                        : "border-base-300 bg-base-100 hover:border-primary"
                    }`}
                  >
                    <div className="card-body p-5 items-center">
                      <p className="font-semibold">
                        {item}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* JENIS VIDEO */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Jenis Video
                </span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {VIDEO_TYPES.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setVideoType(item)}
                    className={`card border transition-all ${
                      videoType === item
                        ? "border-primary bg-primary text-primary-content"
                        : "border-base-300 bg-base-100 hover:border-primary"
                    }`}
                  >
                    <div className="card-body p-4 items-center">
                      <p className="font-semibold text-center">
                        {item}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ========================================= */}
        {/* STEP 2 */}
        {/* ========================================= */}

        {step === 2 && (
          <div className="space-y-6">

            {/* DURASI */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Durasi Video
                </span>
              </label>

              <div className="join w-full">
                <input
                  type="number"
                  min="1"
                  className="input input-bordered join-item w-full"
                  placeholder="Contoh: 10"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />

                <div className="btn join-item no-animation">
                  Menit
                </div>
              </div>
            </div>

            {/* DEADLINE */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Deadline
                </span>
              </label>

              <input
                type="datetime-local"
                className="input input-bordered w-full"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />

              <p className="text-sm opacity-60 mt-2">
                Tentukan tanggal dan jam deadline pengerjaan.
              </p>
            </div>

            {/* KONSEP VIDEO */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Konsep Video
                </span>
              </label>

              <textarea
                rows={6}
                className="textarea textarea-bordered w-full"
                placeholder="Jelaskan konsep atau gambaran video yang kamu inginkan..."
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
              />
            </div>

            {/* REFERENSI */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Referensi
                </span>

                <span className="label-text-alt opacity-60">
                  Opsional
                </span>
              </label>

              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="https://youtube.com/... atau link lainnya"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />
            </div>

            {/* GOOGLE DRIVE */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Google Drive
                </span>

                <span className="label-text-alt opacity-60">
                  File bahan
                </span>
              </label>

              <input
                type="url"
                className="input input-bordered w-full"
                placeholder="https://drive.google.com/..."
                value={driveLink}
                onChange={(e) => setDriveLink(e.target.value)}
              />

              <p className="text-sm opacity-60 mt-2">
                Masukkan link Google Drive yang berisi bahan video.
              </p>
            </div>

            {/* REQUEST / CATATAN */}
            <div>
              <label className="label">
                <span className="label-text font-semibold">
                  Request / Catatan Tambahan
                </span>

                <span className="label-text-alt opacity-60">
                  Opsional
                </span>
              </label>

              <textarea
                rows={5}
                className="textarea textarea-bordered w-full"
                placeholder="Contoh: gunakan lagu tertentu, style editing tertentu, text tertentu, dll..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

          </div>
        )}

        {/* ========================================= */}
        {/* STEP 3 - REVIEW */}
        {/* ========================================= */}

        {step === 3 && (
          <div className="space-y-5">

            <div className="card bg-base-100 border border-base-300">
              <div className="card-body">

                <h3 className="card-title text-xl">
                  📋 Review Reservasi
                </h3>

                <div className="divider my-1" />

                <div className="space-y-4">

                  <div className="flex justify-between gap-4">
                    <span className="opacity-70">
                      Nama
                    </span>

                    <span className="font-semibold text-right">
                      {name}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="opacity-70">
                      Nomor WhatsApp
                    </span>

                    <span className="font-semibold text-right">
                      {phone}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="opacity-70">
                      Paket
                    </span>

                    <span className="badge badge-primary">
                      {selectedPackage}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="opacity-70">
                      Jenis Video
                    </span>

                    <span className="font-semibold text-right">
                      {videoType}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="opacity-70">
                      Durasi
                    </span>

                    <span className="font-semibold text-right">
                      {duration} menit
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="opacity-70">
                      Deadline
                    </span>

                    <span className="font-semibold text-right">
                      {deadline}
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      Konsep Video
                    </p>

                    <p className="opacity-70 whitespace-pre-wrap">
                      {concept}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      Referensi
                    </p>

                    <p className="opacity-70 break-all">
                      {reference || "-"}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      Google Drive
                    </p>

                    <p className="opacity-70 break-all">
                      {driveLink}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold mb-1">
                      Request / Catatan Tambahan
                    </p>

                    <p className="opacity-70 whitespace-pre-wrap">
                      {notes || "-"}
                    </p>
                  </div>

                </div>

              </div>
            </div>

            <div className="alert alert-info">
              <span>
                Setelah kamu mengisi form ini, maka kami akan
                mengirimkan perkiraan biaya jasa editing kami ✨
              </span>
            </div>

          </div>
        )}

        {/* ========================================= */}
        {/* NAVIGATION */}
        {/* ========================================= */}

        <div className="divider" />

        <div className="flex justify-between gap-3">

          <button
            type="button"
            className="btn btn-outline"
            disabled={step === 1}
            onClick={prevStep}
          >
            <ChevronLeft size={18} />
            Kembali
          </button>

          {step < 3 ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={nextStep}
            >
              Lanjut
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
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
                  },
                })
              }
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