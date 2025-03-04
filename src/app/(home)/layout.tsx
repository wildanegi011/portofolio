import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-black md:px-28 text-white min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      <main className="h-full">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
