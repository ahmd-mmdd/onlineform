"use client";

import { useState } from "react";
import { sendWhatsApp } from "@/lib/whatsapp";
import StepHeader from "../ui/StepHeader";
import InputField from "../ui/InputField";
import TextAreaField from "../ui/TextAreaField";
import OptionGrid from "../ui/OptionGrid";
import NavigationButtons from "../ui/NavigationButtons";

const SOCIAL_TYPES = [
  "Instagram",
  "TikTok",
  "Facebook",
  "YouTube",
  "LinkedIn",
  "Lainnya",
];

const PACKAGES = [
  "1 Minggu",
  "1 Bulan",
  "3 Bulan",
  "Custom",
];

export default function SocialForm() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [platform, setPlatform] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const [username, setUsername] = useState("");
  const [posting, setPosting] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");

  const nextStep = () => {
    if (step === 1) {
      if (!name || !platform || !selectedPackage) {
        alert("Lengkapi data terlebih dahulu.");
        return;
      }
    }

    if (step === 2 && !description) {
      alert("Deskripsi wajib diisi.");
      return;
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="card bg-base-200 border border-base-300 shadow-xl">

      <div className="card-body">

        <h2 className="text-3xl font-black">
          Social Media
        </h2>

        <p className="opacity-70">
          Isi informasi kebutuhan social media kamu.
        </p>

        <StepHeader step={step} />

        {step === 1 && (

          <div className="space-y-6">

            <InputField
              label="Nama"
              value={name}
              onChange={setName}
            />

            <InputField
              label="Nomor WhatsApp"
              value={phone}
              placeholder="08xxxxxxxx"
              onChange={setPhone}
            />

            <div>

              <label className="label">
                <span className="label-text font-semibold">
                  Platform
                </span>
              </label>

              <OptionGrid
                options={SOCIAL_TYPES}
                selected={platform}
                onSelect={setPlatform}
              />

            </div>

            <div>

              <label className="label">
                <span className="label-text font-semibold">
                  Paket
                </span>
              </label>

              <OptionGrid
                options={PACKAGES}
                selected={selectedPackage}
                onSelect={setSelectedPackage}
              />

            </div>

          </div>

        )}
                {step === 2 && (

          <div className="space-y-6">

            <InputField
              label="Username Akun"
              placeholder="@username"
              value={username}
              onChange={setUsername}
            />

            <InputField
              label="Jumlah Konten"
              placeholder="Contoh: 30 Postingan"
              value={posting}
              onChange={setPosting}
            />

            <InputField
              label="Deadline"
              type="date"
              value={deadline}
              onChange={setDeadline}
            />

            <TextAreaField
              label="Deskripsi"
              placeholder="Jelaskan kebutuhan social media..."
              value={description}
              onChange={setDescription}
            />

          </div>

        )}

        {step === 3 && (

          <div className="card bg-base-100 border border-base-300">

            <div className="card-body">

              <h2 className="card-title">
                Review Pesanan
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Nama</span>
                  <span className="font-semibold">{name}</span>
                </div>

                <div className="flex justify-between">
                  <span>WhatsApp</span>
                  <span className="font-semibold">{phone}</span>
                </div>

                <div className="flex justify-between">
                  <span>Platform</span>
                  <span className="font-semibold">{platform}</span>
                </div>

                <div className="flex justify-between">
                  <span>Paket</span>
                  <span className="font-semibold">{selectedPackage}</span>
                </div>

                <div className="flex justify-between">
                  <span>Username</span>
                  <span className="font-semibold">
                    {username || "-"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Jumlah Konten</span>
                  <span className="font-semibold">
                    {posting || "-"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Deadline</span>
                  <span className="font-semibold">
                    {deadline || "-"}
                  </span>
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

        )}

        <div className="divider" />

        <NavigationButtons
          step={step}
          onBack={prevStep}
          onNext={nextStep}
          onSubmit={() =>
            sendWhatsApp({
              service: "Social Media",
              data: {
                Nama: name,
                WhatsApp: phone,
                Platform: platform,
                Paket: selectedPackage,
                Username: username,
                "Jumlah Konten": posting,
                Deadline: deadline,
                Deskripsi: description,
              },
            })
          }
        />

      </div>

    </div>
  );
}