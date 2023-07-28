import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
      <ScrollToTopButton></ScrollToTopButton>
    </>
  );
}
