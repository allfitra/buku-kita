import React from "react";
import { bookList } from "../data/database";
import { Link, useParams } from "react-router-dom";
import { MainLayout } from "../../../components/Layouts/MainLayout";
import StaticZipFlipBook from "../../../utils/ZipFlipBook";
import { BackgroundImage } from "../../../assets";

const ReadingPage = () => {
  const { bookId } = useParams();
  const book = bookList.find((b) => b.id === parseInt(bookId));

  if (!book) {
    return (
      <MainLayout title="Tidak ada Buku">
        <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
          <h1 className="m-6 text-3xl text-red-600">
            Buku yang anda maksud tidak ditemukan.
          </h1>
          <button>
            <Link
              to="/"
              className="hover:underline text-2xl bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Kembali ke halaman utama
            </Link>
          </button>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout
      title={book.title}
      isReadingPage={true}
      backgroundImageUrl={book.BackgroundImage || ""}
    >
      <div className="flex justify-center items-center h-screen cursor-grab">
        <StaticZipFlipBook filePath={book.filePath} />
      </div>
    </MainLayout>
  );
};

export default ReadingPage;
