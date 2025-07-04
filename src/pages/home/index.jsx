import React from "react";
import { MainLayout } from "../../components/Layouts/MainLayout";
import { bookList } from "./data/database";
import { Link, useNavigate } from "react-router-dom";
import { AvatarReading } from "../../assets";

const HomePage = () => {
  return (
    <MainLayout title="Dashboard">
      <div className="flex flex-col items-center max-w-6xl mx-auto">
        <div className="w-full lg:w-[80%] h-[290px] rounded-b-2xl bg-gradient-to-r from-gray-800 via-sky-700 to-sky-800 shadow-xl text-white p-6 flex items-center justify-between">
          <div className="flex flex-col items-end w-full ">
            <img
              src={AvatarReading}
              alt=""
              width={150}
              className="-mr-7 -mb-5"
            />
          </div>
        </div>
        <div className="flex flex-col items-center -mt-[240px]">
          <h1 className="text-4xl font-bold text-white">
            Welcome to Buku Kita
          </h1>
          <p className="text-gray-300 text-lg mt-1">
            Discover and read your favorite books
          </p>
          <div className="mt-7 ">
            <CardList />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;

const CardList = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {bookList.map((book) => (
        <div
          key={book.id}
          onClick={() => navigate(`/baca/${book.id}`)}
          className="max-w-[180px] rounded-xl shadow-lg cursor-pointer bg-white hover:shadow-2xl transition-shadow duration-300 px-6 py-4"
        >
          <div className="flex justify-center items-center">
            <img className="w-28 h-40" src={book.cover} alt={book.title} />
          </div>
          <div className="mt-3">
            <p className="text-gray-400 text-[12px] truncate overflow-hidden whitespace-nowrap">
              {book.author}
            </p>
            <div className="text-gray-400 text-[12px]">{book.year}</div>
            <div className="font-semibold text-[14px] text-gray-800 line-clamp-2 leading-snug min-h-[40px]">
              {book.title}
            </div>
            <div className="flex flex-wrap mt-3">
              {book.genre.slice(0, 2).map((genre, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 mr-2 mb-2"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
