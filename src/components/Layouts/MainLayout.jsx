import { Head } from "@/components/Head/Head";
// import { Navbar } from "@/components/Navbar";
// import { Footer } from "@/components/Footer";

export const MainLayout = ({ title, children }) => {
  return (
    <>
      <Head title={title} />

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        {/* <Navbar /> */}

        <main className="flex-1 w-full px-2 py-24 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {children}
        </main>

        {/* <Footer /> */}
      </div>
    </>
  );
};
