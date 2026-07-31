"use client";

import { useState } from "react";
import { sendWhatsApp } from "@/lib/whatsapp";
import StepHeader from "../ui/StepHeader";
import InputField from "../ui/InputField";
import TextAreaField from "../ui/TextAreaField";
import OptionGrid from "../ui/OptionGrid";
import NavigationButtons from "../ui/NavigationButtons";

const DESIGN_TYPES = [
  "Poster",
  "Banner",
  "Feed Instagram",
  "Logo",
  "Flyer",
  "Business Card",
  "Lainnya",
];

const PACKAGES = [
  "Basic",
  "Standard",
  "Premium",
  "Custom",
];

export default function DesignForm() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [designType, setDesignType] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");

  const [size, setSize] = useState("");
  const [deadline, setDeadline] = useState("");
  const [reference, setReference] = useState("");
  const [description, setDescription] = useState("");

  const nextStep = () => {
    if (step === 1) {
      if (!name || !designType || !selectedPackage) {
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
           Desain Grafis
        </h2>

        <p className="opacity-70">
          Isi informasi project desainmu.
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
                  Jenis Desain
                </span>
              </label>

              <OptionGrid
                options={DESIGN_TYPES}
                selected={designType}
                onSelect={setDesignType}
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
              label="Ukuran Desain"
              placeholder="Contoh: 1080 x 1350 px"
              value={size}
              onChange={setSize}
            />

            <InputField
              label="Deadline"
              type="date"
              value={deadline}
              onChange={setDeadline}
            />

            <InputField
              label="Link Referensi"
              placeholder="https://..."
              value={reference}
              onChange={setReference}
            />

            <TextAreaField
              label="Deskripsi Project"
              placeholder="Jelaskan kebutuhan desainmu..."
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
                  <span className="font-semibold">
                    {name}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>WhatsApp</span>
                  <span className="font-semibold">
                    {phone}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Jenis Desain</span>
                  <span className="font-semibold">
                    {designType}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Paket</span>
                  <span className="font-semibold">
                    {selectedPackage}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Ukuran</span>
                  <span className="font-semibold">
                    {size || "-"}
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

        )}

        <div className="divider" />

        <NavigationButtons
          step={step}
          onBack={prevStep}
          onNext={nextStep}
          onSubmit={() =>
            sendWhatsApp({
              service: "Desain Grafis",
              data: {
                Nama: name,
                WhatsApp: phone,
                "Jenis Desain": designType,
                Paket: selectedPackage,
                Ukuran: size,
                Deadline: deadline,
                Referensi: reference,
                Deskripsi: description,
              },
            })
          }
        />

      </div>

    </div>
  );
}       
// export default function DesignForm() {
//   return (
//     <div className="card bg-base-200 border border-base-300 shadow-xl">
//       <div className="card-body">
//         <h2 className="card-title text-3xl">🎨 Desain Grafis</h2>
//       </div>
//     </div>
//   );
// } 