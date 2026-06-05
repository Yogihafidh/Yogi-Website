"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

export type LightboxItem = {
  label: string;
  caption?: string;
  src: StaticImageData | string;
};

type ImageLightboxProps = {
  item: LightboxItem | null;
  subtitle?: string;
  onClose: () => void;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;

export const ImageLightbox = ({
  item,
  subtitle,
  onClose,
}: ImageLightboxProps) => {
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const [baseSize, setBaseSize] = useState({ width: 0, height: 0 });
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const sourceWidth = typeof item?.src === "string" ? 1600 : item?.src.width ?? 1600;
  const sourceHeight =
    typeof item?.src === "string" ? 1200 : item?.src.height ?? 1200;

  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "+") {
        setZoom((current) => Math.min(MAX_ZOOM, current + ZOOM_STEP));
      }
      if (event.key === "-") {
        setZoom((current) => Math.max(MIN_ZOOM, current - ZOOM_STEP));
      }
      if (event.key === "0") setZoom(MIN_ZOOM);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  useEffect(() => {
    setZoom(MIN_ZOOM);
  }, [item]);

  useEffect(() => {
    if (!item) return;

    const updateBaseSize = () => {
      if (!viewportRef.current) return;

      const viewportWidth = viewportRef.current.clientWidth - 32;
      const viewportHeight = viewportRef.current.clientHeight - 32;
      const widthRatio = viewportWidth / sourceWidth;
      const heightRatio = viewportHeight / sourceHeight;
      const fitRatio = Math.min(widthRatio, heightRatio, 1);

      setBaseSize({
        width: Math.max(240, Math.round(sourceWidth * fitRatio)),
        height: Math.max(240, Math.round(sourceHeight * fitRatio)),
      });
    };

    updateBaseSize();
    window.addEventListener("resize", updateBaseSize);

    return () => window.removeEventListener("resize", updateBaseSize);
  }, [item, sourceHeight, sourceWidth]);

  if (!item) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] bg-black/90">
      <div
        className="absolute inset-0 h-full w-full"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="pointer-events-auto absolute left-4 top-4 z-20 flex flex-wrap gap-2 md:left-6 md:top-6">
        <button
          onClick={() =>
            setZoom((current) => Math.max(MIN_ZOOM, current - ZOOM_STEP))
          }
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-semibold text-gray-900 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={zoom <= MIN_ZOOM}
          aria-label="Zoom out"
        >
          -
        </button>
        <button
          onClick={() => setZoom(MIN_ZOOM)}
          className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-900 transition hover:bg-gray-100"
          aria-label="Reset zoom"
        >
          Reset
        </button>
        <button
          onClick={() =>
            setZoom((current) => Math.min(MAX_ZOOM, current + ZOOM_STEP))
          }
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-semibold text-gray-900 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={zoom >= MAX_ZOOM}
          aria-label="Zoom in"
        >
          +
        </button>
        <div className="flex items-center rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gray-900">
          {Math.round(zoom * 100)}%
        </div>
      </div>

      <button
        onClick={onClose}
        className="pointer-events-auto absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 md:right-6 md:top-6"
        aria-label="Close image preview"
      >
        <IoMdClose className="size-6 text-gray-900" />
      </button>

      <div className="pointer-events-none relative z-10 flex h-full flex-col px-4 pb-28 pt-20 md:px-6 md:pb-32 md:pt-24">
        <div
          ref={viewportRef}
          className="pointer-events-auto flex-1 overflow-auto rounded-3xl bg-white/5"
        >
          <div className="flex min-h-full min-w-full items-center justify-center p-4 md:p-8">
            <div
              className="transition-[width,height] duration-200 ease-out"
              style={{
                width: `${Math.round(baseSize.width * zoom)}px`,
                height: `${Math.round(baseSize.height * zoom)}px`,
              }}
            >
              <Image
                src={item.src}
                alt={item.label}
                width={sourceWidth}
                height={sourceHeight}
                priority
                className="h-full w-full rounded-2xl object-contain shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent px-6 pb-6 pt-16 text-white">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg font-semibold">{item.label}</p>
            {subtitle && <p className="mt-1 text-sm text-gray-300">{subtitle}</p>}
            {item.caption && (
              <p className="mt-2 max-w-3xl text-sm text-gray-300">
                {item.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
