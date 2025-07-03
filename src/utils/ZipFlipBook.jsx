import React, { useEffect, useState } from "react";
import JSZip from "jszip";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";

const StaticZipFlipBook = ({ filePath }) => {
  const [pages, setPages] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const loadZip = async () => {
      try {
        const res = await fetch(filePath);
        const blob = await res.blob();
        const zip = await JSZip.loadAsync(blob);

        const files = Object.values(zip.files).filter((f) => /\.(jpg|jpeg|png)$/i.test(f.name));

        files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

        const urls = await Promise.all(
          files.map(async (f) => {
            const b = await f.async("blob");
            return URL.createObjectURL(b);
          })
        );

        setPages(urls);
        setStatus("success");
      } catch (err) {
        console.error("Gagal load zip:", err);
        setStatus("error");
      }
    };

    loadZip();
  }, [filePath]);

  return (
    <div className="p-2 w-full max-w-screen-md mx-auto shadow-lg rounded-lg overflow-hidden bg-gray-200">
      {status === "loading" && (
        <div className="flex flex-col items-center justify-center h-full py-12 bg-amber-200">
          <div>
            <div className="flex justify-center items-center ">
              <svg className="animate-spin h-28 w-28 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
            </div>
          </div>
          <p className="text-center text-2xl text-black">Memuat halaman buku...</p>
        </div>
      )}
      {status === "error" && (
        <div className="flex flex-col items-center justify-center h-full pt-18 pb-4 bg-amber-200">
          <p className="text-center text-2xl text-red-500">Buku gagal dimuat</p>
          <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            <Link to="/" className="flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </Link>
          </button>
        </div>
      )}
      {status === "success" && (
        <>
          <Link
            to="/"
            className="fixed bottom-6 left-5 md:left-18 z-50 bg-blue-800 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors"
            title="Kembali ke Beranda"
            style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}
          >
            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <HTMLFlipBook width={370} height={555} maxShadowOpacity={0.5} drawShadow showCover size="fixed">
            {pages.map((src, i) => (
              <div key={i} className="flex items-center justify-center h-full w-full bg-gray-100">
                <img src={src} alt={`Page ${i + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </HTMLFlipBook>
        </>
      )}
    </div>
  );
};

export default StaticZipFlipBook;
