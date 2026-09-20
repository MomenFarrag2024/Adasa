import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function Layout({ data }) {
  return (
    <>
    <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar data={data} />
        <main className="grow pt-20">
          <Outlet />
        </main>
        <Footer data={data} />
      </div>
    </>
  );
}
