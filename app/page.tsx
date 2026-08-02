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
      <main className="min-h-screen overflow-hidden bg-[#062b63] text-white">

        {/* BACKGROUND */}

        <div className="fixed inset-0 -z-0 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-br from-[#062b63] via-[#073e87] to-[#00c9d8]" />

          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />

          <div className="absolute -right-40 top-[35%] h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[140px]" />

          <div className="absolute bottom-[-200px] left-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />

        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-5 py-10">

          <button
            className="
              mb-6
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/20
            "
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
    <main className="min-h-screen overflow-hidden bg-[#062b63] text-white">

      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div className="fixed inset-0 -z-0 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#062b63] via-[#073e87] to-[#00c9d8]" />

        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[120px]" />

        <div className="absolute -right-40 top-[35%] h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[140px]" />

        <div className="absolute bottom-[-200px] left-[20%] h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[130px]" />

      </div>

      <div className="relative z-10">

        {/* ======================================
            POPUP TERM & CONDITION
        ====================================== */}

        {showTermsPopup && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-5 backdrop-blur-md">

            <div
              className="
                w-full
                max-w-md
                rounded-[2rem]
                border-2
                border-white/30
                bg-white/[0.12]
                p-1
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
              "
            >

              <div className="rounded-[1.7rem] p-7 text-center md:p-9">

                {/* ICON */}

                <div
                  className="
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/20
                    bg-white/10
                    text-3xl
                  "
                >
                  ⚠️
                </div>

                {/* TITLE */}

                <h2 className="mt-5 text-2xl font-black uppercase tracking-wide">
                  Peringatan
                </h2>

                {/* DESCRIPTION */}

                <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                  Sebelum melakukan order, pastikan Anda telah
                  membaca{" "}
                  <strong className="text-white">
                    Term & Condition
                  </strong>{" "}
                  kami.
                </p>

                {/* BUTTON */}

                <div className="mt-7 grid grid-cols-2 gap-3">

                  {/* SUDAH */}

                  <button
                    type="button"
                    className="
                      rounded-xl
                      bg-white
                      px-5
                      py-3
                      font-bold
                      text-[#073e87]
                      transition
                      hover:-translate-y-0.5
                      hover:bg-white/90
                    "
                    onClick={() => setShowTermsPopup(false)}
                  >
                    Sudah
                  </button>

                  {/* BELUM */}

                  <button
                    type="button"
                    className="
                      rounded-xl
                      border
                      border-white/30
                      bg-white/10
                      px-5
                      py-3
                      font-bold
                      text-white
                      backdrop-blur-md
                      transition
                      hover:bg-white/20
                    "
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

          <section className="flex min-h-screen items-center justify-center px-5 py-20">

            <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

              {/* LABEL */}

              <div
                className="
                  mb-7
                  rounded-full
                  border
                  border-white/25
                  bg-white/10
                  px-5
                  py-2
                  text-xs
                  font-bold
                  tracking-[0.3em]
                  text-white/90
                  backdrop-blur-md
                "
              >
                ORDER FORM
              </div>

              {/* TITLE */}

              <h1
                className="
                  w-full
                  text-5xl
                  font-black
                  leading-tight
                  tracking-tight
                  sm:text-6xl
                  md:text-7xl
                "
              >
                Asa Digital Space
              </h1>

              {/* DESCRIPTION */}

              <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/80 md:text-xl">
                Dream, Imagine, and Make it True!
                Kami menyediakan berbagai layanan kreasi
                digital seperti Videografi, Fotografi, Desain,
                dan lain lain.
              </p>

              {/* TAGLINE */}

              <p className="mt-5 text-sm font-semibold tracking-wide text-white/60 md:text-base">
                Cepat • Berkualitas • Terpercaya
              </p>

              {/* BUTTON */}

              <button
                className="
                  mt-10
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-white
                  px-7
                  py-4
                  text-base
                  font-black
                  text-[#073e87]
                  shadow-[0_15px_40px_rgba(0,0,0,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                "
                onClick={() => setStarted(true)}
              >
                Buat Pesanan

                <ArrowRight size={20} />

              </button>

            </div>

          </section>

        ) : (

          // ======================================
          // PILIHAN LAYANAN
          // ======================================

          <section className="min-h-screen px-5 py-20">

            <div className="mx-auto max-w-6xl">

              {/* HEADER */}

              <div className="mb-14 text-center">

                <p className="mb-3 text-xs font-bold tracking-[0.3em] text-white/60">
                  ASA DIGITAL SPACE
                </p>

                <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                  Pilih Layanan
                </h2>

                <p className="mt-4 text-white/65">
                  Pilih layanan yang ingin kamu pesan.
                </p>

              </div>

              {/* SERVICE GRID */}

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                {services.map((item) => {

                  const Icon = item.icon;

                  return (

                    <button
                      key={item.id}
                      onClick={() => setService(item.id)}
                      className="
                        group
                        text-left
                        rounded-[2rem]
                        border-2
                        border-white/20
                        bg-white/[0.10]
                        p-1
                        text-white
                        backdrop-blur-xl
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:border-white/40
                        hover:bg-white/[0.15]
                        hover:shadow-[0_25px_70px_rgba(0,0,0,0.25)]
                      "
                    >

                      <div className="rounded-[1.7rem] p-6">

                        {/* ICON */}

                        <div
                          className="
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            border-white/20
                            bg-white/10
                            text-white
                            transition
                            duration-300
                            group-hover:scale-105
                            group-hover:bg-white/20
                          "
                        >
                          <Icon size={30} />
                        </div>

                        {/* TITLE */}

                        <h2 className="mt-6 text-2xl font-black">
                          {item.title}
                        </h2>

                        {/* DESCRIPTION */}

                        <p className="mt-2 min-h-[48px] text-sm leading-relaxed text-white/60">
                          {item.desc}
                        </p>

                        {/* BUTTON */}

                        <div className="mt-6 flex">

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              rounded-xl
                              border
                              border-white/20
                              bg-white/10
                              px-4
                              py-2.5
                              text-sm
                              font-bold
                              text-white
                              transition
                              group-hover:bg-white
                              group-hover:text-[#073e87]
                            "
                          >
                            Mulai

                            <ArrowRight size={17} />

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

        {/* ======================================
            FOOTER
        ====================================== */}

        <footer className="px-5 pb-8">

          <div className="mx-auto max-w-6xl text-center">

            <div className="mb-6 h-px bg-white/15" />

            <p className="text-sm font-bold tracking-widest">
              ASA DIGITAL SPACE
            </p>

            <p className="mt-2 text-xs text-white/45">
              Dream, Imagine, and Make it True!
            </p>

          </div>

        </footer>

      </div>

    </main>
  );
}