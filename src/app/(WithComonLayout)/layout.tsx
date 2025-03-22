import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
  <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
    <Footer/>
    </>
  );
};

export default CommonLayout;
