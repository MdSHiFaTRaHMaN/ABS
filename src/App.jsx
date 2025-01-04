import Benefits from "./homepage/Benefits";
import DownloadComponent from "./homepage/DownloadComponent";
import FAQComponent from "./homepage/FAQComponent";
import Footer from "./homepage/Footer";
import Header from "./homepage/Header";
import Navbar from "./homepage/Navbar";
import Testimonial from "./homepage/Testimonial";
import Transactions from "./homepage/Transactions";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Benefits />
      <Transactions />
      <Testimonial />
      <FAQComponent />
      <DownloadComponent />
      <Footer />
    </>
  );
}

export default App;
