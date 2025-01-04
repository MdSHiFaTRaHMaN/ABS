import Apple from "../assets/playstore.png"
import "tailwindcss/tailwind.css";
import DubblePhone from "../assets/dubble.png"

const DownloadComponent = () => {
  return (
    <div className="bg-green-500 p-8 h-[400px] flex flex-col lg:flex-row items-center lg:justify-between max-w-6xl mx-auto">
      {/* Left Section: Text Content */}
      <div className="text-white flex-1 mb-6 lg:mb-0 lg:mr-8">
        <h2 className="text-3xl lg:text-3xl font-bold mb-4">
          Download & Install CashEase Now<br />
          Start Enjoying Digital Payment Convenience!
        </h2>
        <p className="text-lg">
          Register today and access a wide range of fantastic features, including easy
          transactions, quick payments.
        </p>
        {/* Download Buttons */}
        <div className="">
          <img src={Apple} alt="" />
        </div>
      </div>

      {/* Right Section: Image Preview */}
      <div className="flex justify-center lg:justify-end flex-1 mb-28">
        <div className="hidden lg:block">
          <img
            src={DubblePhone}
            alt="Phone Preview"
            className="w-[300px] h-auto lg:w-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadComponent;
