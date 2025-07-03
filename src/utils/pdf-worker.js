// src/pdf-worker.js
import { pdfjs } from 'react-pdf';

// ⛳ Import worker sebagai module dari pdfjs-dist
import workerUrl from 'pdfjs-dist/build/pdf.worker?url';

// Set ke string URL
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;
