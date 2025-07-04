import { Head } from "@/components/Head/Head";
import Footer from "../Footer";

export const MainLayout = ({
  title,
  children,
  isReadingPage = false,
  backgroundImageUrl,
}) => {
  return (
    <>
      <Head title={title} />

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        {/* <Navbar /> */}

        <main
          className="flex-1 w-full px-2 sm:px-6 lg:px-8  mx-auto"
          style={
            isReadingPage && backgroundImageUrl
              ? {
                  backgroundImage: `url(${backgroundImageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }
              : {}
          }
        >
          {children}
        </main>

        {!isReadingPage && <Footer />}
      </div>
    </>
  );
};
