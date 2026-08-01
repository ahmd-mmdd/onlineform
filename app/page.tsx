"use client";

import { useState } from "react";
import {
  Video,
  Image,
  Palette,
  Share2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import OrderForm from "@/components/OrderForm";

const services = [
  {
    id: "video",
    title: "Edit Video",
    desc: "YouTube, TikTok, Reels, Company Profile",
    icon: Video,
  },
  {
    id: "photo",
    title: "Edit Foto",
    desc: "Retouch, Manipulation, Thumbnail",
    icon: Image,
  },
  {
    id: "design",
    title: "Desain Grafis",
    desc: "Poster, Banner, Feed Instagram",
    icon: Palette,
  },
  {
    id: "social",
    title: "Social Media",
    desc: "Konten Harian & Bulanan",
    icon: Share2,
  },
  {
    id: "other",
    title: "Lainnya",
    desc: "Request kebutuhan lainnya",
    icon: Sparkles,
  },
];

export default function Home() {
  const [started, setStarted] = useState(false);
  const [service, setService] = useState("");

  // Popup Term & Condition
  const [showTermsPopup, setShowTermsPopup] = useState(true);

  // ==========================================
  // HALAMAN FORM
  // ==========================================

  if (service) {
    return (
      <main className="min-h-screen bg-base-100 py-10 px-5">
        <div className="mx-auto max-w-4xl">

          <button
            className="btn btn-ghost mb-6"
            onClick={() => setService("")}
          >
            ← Kembali
          </button>

          <OrderForm service={service} />

        </div>
      </main>
    );
  }

  // ==========================================
  // LANDING PAGE
  // ==========================================

  return (
    <main className="min-h-screen bg-base-100">

      {/* ======================================
          POPUP TERM & CONDITION
      ====================================== */}

      {showTermsPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-5">

          <div className="card w-full max-w-md bg-base-100 border border-base-300 shadow-2xl">

            <div className="card-body text-center">

              {/* ICON */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-warning/15 text-3xl">
                ⚠️
              </div>

              {/* TITLE */}
              <h2 className="text-2xl font-black mt-2">
                PERINGATAN
              </h2>

              {/* DESCRIPTION */}
              <p className="text-base-content/70 leading-relaxed mt-2">
                Sebelum melakukan order, pastikan Anda telah
                membaca <strong>Term & Condition</strong> kami.
              </p>

              {/* BUTTON */}
              <div className="grid grid-cols-2 gap-3 mt-6">

                {/* SUDAH */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowTermsPopup(false)}
                >
                  Sudah
                </button>

                {/* BELUM */}
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    window.location.href =
                      "https://asa-info.vercel.app";
                  }}
                >
                  Belum
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* ======================================
          HERO
      ====================================== */}

      {!started ? (
        <section className="hero min-h-screen">

          <div className="hero-content text-center">

            <div className="max-w-2xl">

              <div className="badge badge-primary badge-lg mb-6">
                ORDER FORM
              </div>

              <h1 className="text-6xl md:text-7xl font-black">
                Asa Digital Space
              </h1>

              <p className="text-xl mt-6 opacity-80">
                Dream, Imagine, and Make it True! Kami menyediakan
                berbagai layanan kreasi digital seperti Videografi,
                Fotografi, Desain, dan lain lain.
              </p>

              <p className="opacity-60 mt-4">
                Cepat • Berkualitas • Terpercaya
              </p>

              <button
                className="btn btn-primary btn-lg mt-10"
                onClick={() => setStarted(true)}
              >
                Buat Pesanan
                <ArrowRight size={20} />
              </button>

            </div>

          </div>

        </section>
      ) : (

        // ======================================
        // PILIHAN LAYANAN
        // ======================================

        <section className="py-16">

          <div className="max-w-6xl mx-auto px-5">

            <div className="text-center mb-14">

              <h2 className="text-5xl font-black">
                Pilih Layanan
              </h2>

              <p className="opacity-70 mt-3">
                Pilih layanan yang ingin kamu pesan.
              </p>

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

              {services.map((item) => {

                const Icon = item.icon;

                return (

                  <button
                    key={item.id}
                    onClick={() => setService(item.id)}
                    className="
                      card
                      bg-base-200
                      border
                      border-base-300
                      hover:border-primary
                      hover:-translate-y-2
                      hover:shadow-2xl
                      transition-all
                      duration-300
                      text-left
                    "
                  >

                    <div className="card-body">

                      <div
                        className="
                          w-16
                          h-16
                          rounded-2xl
                          bg-primary
                          text-primary-content
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <Icon size={34} />
                      </div>

                      <h2 className="card-title text-2xl mt-4">
                        {item.title}
                      </h2>

                      <p className="opacity-70">
                        {item.desc}
                      </p>

                      <div className="card-actions mt-5">

                        <div className="btn btn-primary btn-sm">

                          Mulai

                          <ArrowRight size={18} />

                        </div>

                      </div>

                    </div>

                  </button>

                );

              })}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}