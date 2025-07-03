import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ReadingPage from "../pages/home/read";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/baca/:bookId" element={<ReadingPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};
