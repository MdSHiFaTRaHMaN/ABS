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
      <div id="home">
        <Header />
      </div>
      <div id="features">
        <Benefits />
      </div>
      <Transactions />
      <div id="testimonial">
        <Testimonial />
      </div>
      <FAQComponent />
      <div id="download">
        <DownloadComponent />
      </div>
      <Footer />
    </>
  );
}

export default App;
