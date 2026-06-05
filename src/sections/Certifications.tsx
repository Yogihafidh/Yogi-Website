"use client";

import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

import certificateJavascript from "@/assets/images/Certificate_IT Javascript Specialish.jpg";
import paklaringBinar from "@/assets/images/Paklaring_Binar Academy.jpg";
import paklaringCazh from "@/assets/images/Paklaring_PT CAZH Teknologi Inovasi.png";
import paklaringTelkom from "@/assets/images/Paklaring_PT Telekomunikasi Indonesia.png";
import { ImageLightbox } from "@/components/ImageLightbox";
import { SectionHeader } from "@/components/SeactionHeader";

type CertificationItem = {
  title: string;
  issuer: string;
  category: string;
  src: StaticImageData;
};

const certifications: CertificationItem[] = [
  {
    title: "IT JavaScript Specialist",
    issuer: "Professional Certification",
    category: "Certification",
    src: certificateJavascript,
  },
  {
    title: "Paklaring PT Telekomunikasi Indonesia",
    issuer: "Telkom Indonesia",
    category: "Work Certificate",
    src: paklaringTelkom,
  },
  {
    title: "Paklaring PT CAZH Teknologi Inovasi",
    issuer: "PT CAZH Teknologi Inovasi",
    category: "Work Certificate",
    src: paklaringCazh,
  },
  {
    title: "Paklaring Binar Academy",
    issuer: "Binar Academy",
    category: "Learning Certificate",
    src: paklaringBinar,
  },
];

export const CertificationsSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificationItem | null>(null);

  const scrollSlider = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = sliderRef.current.clientWidth * 0.85;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="container text-center section-rhythm"
    >
      <SectionHeader
        title="Certifications"
        eyebrow="Continuous Learning"
        description="Professional certifications and learning achievements that strengthen my engineering foundation."
      />

      <div className="relative">
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Certifications slider"
        >
          {certifications.map((certificate) => (
            <button
              key={certificate.title}
              onClick={() => setSelectedCertificate(certificate)}
              className="group min-w-[82%] snap-center text-left md:min-w-[48%] lg:min-w-[36%]"
              aria-label={`View ${certificate.title}`}
            >
              <div className="h-full rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={certificate.src}
                    alt={certificate.title}
                    fill
                    className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 82vw, (max-width: 1024px) 48vw, 36vw"
                  />
                </div>

                <div className="mt-5">
                  <p className="mb-2 w-fit rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-3 py-1 text-xs font-semibold text-gray-950">
                    {certificate.category}
                  </p>
                  <h3 className="font-serif text-xl text-gray-950">
                    {certificate.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {certificate.issuer}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-3">
          <button
            onClick={() => scrollSlider("left")}
            className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
            aria-label="Previous certification"
          >
            PREV
          </button>
          <button
            onClick={() => scrollSlider("right")}
            className="rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-700 transition hover:border-gray-900 hover:text-gray-900"
            aria-label="Next certification"
          >
            NEXT
          </button>
        </div>
      </div>

      <ImageLightbox
        item={
          selectedCertificate
            ? {
                label: selectedCertificate.title,
                src: selectedCertificate.src,
              }
            : null
        }
        subtitle={selectedCertificate?.issuer}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};
