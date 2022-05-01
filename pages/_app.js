import FloatingButton from "../components/mainComponents/floatingButton";
import Navbar from "../components/mainComponents/navbar";
import "../styles/globals.css";
import Context from "../context/accessacc";
import "@fortawesome/fontawesome-free/css/all.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Context>
        <Navbar />
        <FloatingButton enable={true} />
        <Component {...pageProps} />
      </Context>
    </>
  );
}

export default MyApp;
