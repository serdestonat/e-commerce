import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { ShopProvider } from "@/context/ShopContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ShopProvider>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
      </ShopProvider>
    </>
  );
}
