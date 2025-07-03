import { Head } from "@/components/Head/Head";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";

export const MainLayout = ({ title, children }) => {
  const location = useLocation();

  // Cek apakah path sekarang adalah /baca/:id
  const isReadingPage = /^\/baca\/\d+$/.test(location.pathname);

  return (
    <>
      <Head title={title} />

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        {/* <Navbar /> */}

        <main className="flex-1 w-full px-2 sm:px-6 lg:px-8 max-w-6xl mx-auto">{children}</main>

        {!isReadingPage && <Footer />}
      </div>
    </>
  );
};
