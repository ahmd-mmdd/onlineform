"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";

const PHOTO_TYPES = [
  "Retouch",
  "Color Grading",
  "Background Remove",
  "Manipulation",
  "Thumbnail",
  "Lainnya",
];

const PACKAGES = [
  "Basic",
  "Standard",
  "Premium",
  "Custom",
];

export default function PhotoForm() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [photoType, setPhotoType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const [photoCount, setPhotoCount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [drive, setDrive] = useState("");
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");

  const nextStep = () => {
    if (step === 1) {
      if (!name || !photoType || !selectedPackage) {
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

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="card bg-base-200 border border-base-300 shadow-xl">

      <div className="card-body">

        <h2 className="text-3xl font-black">
           Edit Foto
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
                onChange={(e)=>setName(e.target.value)}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  WhatsApp
                </span>
              </label>

              <input
                className="input input-bordered w-full"
                placeholder="08xxxxxxxx"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text">
                  Jenis Edit
                </span>
              </label>

              <div className="grid md:grid-cols-2 gap-3">

                {PHOTO_TYPES.map((item)=>(

                  <button
                    key={item}
                    type="button"
                    onClick={()=>setPhotoType(item)}
                    className={`card border transition-all ${
                      photoType===item
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

                {PACKAGES.map((item)=>(

                  <button
                    key={item}
                    type="button"
                    onClick={()=>setSelectedPackage(item)}
                    className={`card border transition-all ${
                      selectedPackage===item
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
                  Jumlah Foto
                </span>
              </label>

              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="Contoh: 20"
                value={photoCount}
                onChange={(e) => setPhotoCount(e.target.value)}
              />

            </div>

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
                placeholder="https://..."
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
                placeholder="Jelaskan kebutuhan edit fotomu..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

            </div>

          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">

            <div className="card bg-base-100 border border-base-300">

              <div className="card-body">

                <h3 className="card-title">
                  Review Pesanan
                </h3>

                <div className="space-y-2">

                  <p><strong>Nama:</strong> {name}</p>

                  <p><strong>WhatsApp:</strong> {phone || "-"}</p>

                  <p><strong>Jenis Edit:</strong> {photoType}</p>

                  <p><strong>Paket:</strong> {selectedPackage}</p>

                  <p><strong>Jumlah Foto:</strong> {photoCount || "-"}</p>

                  <p><strong>Deadline:</strong> {deadline || "-"}</p>

                  <p><strong>Google Drive:</strong> {drive || "-"}</p>

                  <p><strong>Referensi:</strong> {reference || "-"}</p>

                  <div>

                    <strong>Deskripsi:</strong>

                    <p className="mt-2 whitespace-pre-wrap opacity-80">
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
            className="btn btn-outline"
            onClick={prevStep}
            disabled={step === 1}
          >
            <ChevronLeft size={18} />
            Kembali
          </button>

          {step < 3 ? (
            <button
              className="btn btn-primary"
              onClick={nextStep}
            >
              Lanjut
              <ChevronRight size={18} />
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => {

                const nomorWA = "628123456789"; // Ganti dengan nomor WA kamu

                const pesan = `Halo, saya ingin memesan jasa edit foto.

Nama: ${name}
WhatsApp: ${phone || "-"}

Jenis Edit: ${photoType}
Paket: ${selectedPackage}
Jumlah Foto: ${photoCount || "-"}

Deadline: ${deadline || "-"}

Google Drive:
${drive || "-"}

Referensi:
${reference || "-"}

Deskripsi:
${description}`;

                window.open(
                  `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`,
                  "_blank"
                );

              }}
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