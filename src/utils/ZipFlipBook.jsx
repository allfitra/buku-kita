import React, { useEffect, useRef, useState } from "react";
import JSZip from "jszip";
import HTMLFlipBook from "react-pageflip";

const StaticZipFlipBook = () => {
  const [pages, setPages] = useState([]);
  const bookContainerRef = useRef(null);
  const [bookSize, setBookSize] = useState({ width: 500, height: 800 });

  // Load ZIP
  useEffect(() => {
    const loadZip = async () => {
      try {
        const res = await fetch("/files/Book1.zip");
        const blob = await res.blob();
        const zip = await JSZip.loadAsync(blob);

        const files = Object.values(zip.files).filter((f) =>
          /\.(jpg|jpeg|png)$/i.test(f.name)
        );

        files.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { numeric: true })
        );

        const urls = await Promise.all(
          files.map(async (f) => {
            const b = await f.async("blob");
            return URL.createObjectURL(b);
          })
        );

        setPages(urls);
      } catch (err) {
        console.error("Gagal load zip:", err);
      }
    };

    loadZip();
  }, []);

  return (
    <div
      ref={bookContainerRef}
      className="p-2 w-full max-w-screen-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden bg-black"
    >
      {pages.length > 0 ? (
        <HTMLFlipBook
          width={370}
          height={550}
          maxShadowOpacity={0.5}
          drawShadow={true}
          showCover={true}
          size="fixed"
        >
          {pages.map((src, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-full w-full bg-gray-100"
            >
              <img
                src={src}
                alt={`Page ${i + 1}`}
                className="max-h-full max-w-full object-contain object-cover"
              />
            </div>
          ))}
        </HTMLFlipBook>
      ) : (
        <p className="text-center text-xl text-gray-700">
          Memuat halaman buku...
        </p>
      )}
    </div>
  );
};

export default StaticZipFlipBook;
