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
  "Custom",
];

export default function VideoForm() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [videoType, setVideoType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const [deadline, setDeadline] = useState("");
  const [drive, setDrive] = useState("");
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");

  const nextStep = () => {
    if (step === 1) {
      if (!name || !videoType || !selectedPackage) {
        alert("Lengkapi data terlebih dahulu.");
        return;
      }
    }

    if (step === 2) {
      if (!description) {
        alert("Deskripsi project wajib diisi.");
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

        <h2 className="text-3xl font-black">
           Edit Video
        </h2>

        <p className="opacity-70">
          Isi informasi project kamu.
        </p>

        <ul className="steps steps-horizontal w-full my-6">
          <li className={`step ${step >= 1 ? "step-primary" : ""}`}>
            Informasi
          </li>

          <li className={`step ${step >= 2 ? "step-primary" : ""}`}>
            Detail
          </li>

          <li className={`step ${step >= 3 ? "step-primary" : ""}`}>
            Review
          </li>
        </ul>

        {step === 1 && (
          <div className="space-y-6">

            <div>

              <label className="label">
                <span className="label-text">
                  Nama
                </span>
              </label>

              <input
                className="input input-bordered w-full"
                placeholder="Nama lengkap"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  Nomor WhatsApp
                </span>
              </label>

              <input
                className="input input-bordered w-full"
                placeholder="08xxxxxxxx"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  Jenis Video
                </span>
              </label>

              <div className="grid md:grid-cols-2 gap-3">

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

                    <div className="card-body p-5">

                      <p className="text-center font-semibold">
                        {item}
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  Paket
                </span>
              </label>

              <div className="grid md:grid-cols-2 gap-3">

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

                    <div className="card-body p-5">

                      <p className="text-center font-semibold">
                        {item}
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            </div>

          </div>
        )}
                {step === 2 && (
          <div className="space-y-6">

            <div>

              <label className="label">
                <span className="label-text">
                  Deadline
                </span>
              </label>

              <input
                type="date"
                className="input input-bordered w-full"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  Link Google Drive
                </span>
              </label>

              <input
                className="input input-bordered w-full"
                placeholder="https://drive.google.com/..."
                value={drive}
                onChange={(e) => setDrive(e.target.value)}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  Link Referensi
                </span>
              </label>

              <input
                className="input input-bordered w-full"
                placeholder="https://youtube.com/..."
                value={reference}
                onChange={(e) => setReference(e.target.value)}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  Deskripsi Project
                </span>
              </label>

              <textarea
                rows={6}
                className="textarea textarea-bordered w-full"
                placeholder="Jelaskan kebutuhan edit video kamu..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>

          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">

            <div className="card bg-base-100 border border-base-300">

              <div className="card-body">

                <h3 className="card-title text-xl">
                  Review Pesanan
                </h3>

                <div className="divider my-1" />

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span className="opacity-70">Nama</span>
                    <span className="font-semibold">{name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="opacity-70">WhatsApp</span>
                    <span className="font-semibold">
                      {phone || "-"}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="opacity-70">Jenis Video</span>
                    <span className="font-semibold">
                      {videoType}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="opacity-70">Paket</span>
                    <span className="font-semibold">
                      {selectedPackage}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="opacity-70">Deadline</span>
                    <span className="font-semibold">
                      {deadline || "-"}
                    </span>
                  </div>

                  <div>

                    <p className="font-semibold mb-1">
                      Google Drive
                    </p>

                    <p className="opacity-70 break-all">
                      {drive || "-"}
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
                      Deskripsi
                    </p>

                    <p className="opacity-70 whitespace-pre-wrap">
                      {description}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        )}

        <div className="divider" />

        <div className="flex justify-between">

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
                    "Jenis Video": videoType,
                    Paket: selectedPackage,
                    Deadline: deadline,
                    "Google Drive": drive,
                    Referensi: reference,
                    Deskripsi: description,
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