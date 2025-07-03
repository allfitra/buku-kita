import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import "./pdf-worker"; // Atur worker untuk Vite

const FlipPDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const pdfPath = "/sample.pdf"; // 👈 Pastikan ini cocok

  return (
    <div className="max-w-full flex justify-center">
      <Document
        file={pdfPath}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading="Memuat PDF..."
        error="Gagal memuat file PDF"
      >
        <HTMLFlipBook width={600} height={800}>
          {Array.from({ length: numPages || 0 }, (_, i) => (
            <div key={i} className="bg-white">
              <Page pageNumber={i + 1} width={600} />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>
    </div>
  );
};

export default FlipPDFViewer;
