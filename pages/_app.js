import "../styles/globals.css";

//INTERNAL IMPORT
import { VotingProvider } from "../context/Voter";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const MyApp = ({ Component, pageProps }) => (
  <VotingProvider>
    <div>
      <NavBar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  </VotingProvider>
);

export default MyApp;
