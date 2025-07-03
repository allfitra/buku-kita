import React from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../../components/Layouts/MainLayout";
import StaticZipFlipBook from "../../../utils/ZipFlipBook";
import TestBook from "../../../utils/TestBook";

const ReadingPage = () => {
  const { bookId } = useParams();

  // Gunakan format uc?export=download
  const pdfPath = "./Buku1.pdf";

  return (
    <>
      <MainLayout title="Baca Buku">
        <div className="flex justify-center bg-gray-50">
          <StaticZipFlipBook />
          {/* <TestBook /> */}
        </div>
      </MainLayout>
    </>
  );
};

export default ReadingPage;
