import { DownloadOutlined } from "@ant-design/icons";
import PhoneImage from "../assets/PH-Image.jpg";
import { PiRankingLight } from "react-icons/pi";
import { MdPriceChange } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";

const Transactions = () => {
  return (
    <section className="py-16 px-5 lg:px-24 bg-white">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <div className="mb-4">
            <span className="bg-orange-100 text-orange-500 text-center py-2 px-4 rounded-full text-sm font-medium">
              <DownloadOutlined className="mr-2" /> Anywhere, Anytime with
              CashEase
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl leading-tight">
            All Transactions Easily on Your Mobile
          </h2>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            Paying for anything is as easy as a tap. With CashEase, you can
            effortlessly handle a wide range of transactions, from bill payments
            and barcode scans to e-commerce.
          </p>

          <button className="mt-8 px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow-lg hover:bg-green-600 transition-all flex items-center">
            <DownloadOutlined className="mr-2" /> Download Apps
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="bg-green-600 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px]  mx-auto text-center absolute z-0 rounded-full mt-20 lg:mt-28">

          </div>
          <img
            src={PhoneImage}
            alt="Phone showcasing transactions"
            className="w-[440px] z-10"
          />

          <div className="absolute top-3 left-40 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center z-20">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-green-500 text-2xl"><BiTransferAlt /></span>
              {/* Replace with Transfer icon */}
            </div>
            <p className="text-sm font-semibold text-gray-800">Transfer</p>
          </div>

          <div className="absolute top-40 right-48 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center z-20">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-blue-500 text-2xl"><MdPriceChange /></span>
              {/* Replace with Top Up icon */}
            </div>
            <p className="text-sm font-semibold text-gray-800">Top Up</p>
          </div>

          <div className="absolute bottom-20 left-48 bg-white rounded-xl shadow-lg p-4 flex flex-col items-center z-20">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-purple-500 text-2xl"><PiRankingLight /></span>
              {/* Replace with Invest icon */}
            </div>
            <p className="text-sm font-semibold text-gray-800">Invest</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transactions;
