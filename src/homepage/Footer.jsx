import { Link } from "react-router-dom";
import Logo from "../assets/webLogo.png";
const Footer = () => {
  return (
    <div className="bg-green-600 py-10 px-4 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="Gitty Logistics Logo" className="h-10" />
            <span className="text-xl font-semibold">Gittiom</span>
          </div>
          <p>
            gizion.com is a dynamic organization that powers a range of
            businesses, including the renowned gittiom.com, where you can
            conveniently buy and sell cryptocurrencies.
          </p>
          <div className="mt-4 text-sm ">
            <p>
              <strong>Address:</strong> No 27 Obazee Street Isiyor, Benin City,
              Edo State, Nigeria.
            </p>
            <p>
              <strong>Phone:</strong> +234 904 298 0643
            </p>
            <p>
              <strong>Email:</strong> support@giziom.com
            </p>
          </div>
        </div>

        {/* Community Section */}
        <div className="text-white">
          <h3 className="text-lg font-medium mb-3">Our Community</h3>
          <ul className=" space-y-2">
            <li>Community</li>
            <li>Blog</li>
            <li>Forums</li>
            <li>Meetups</li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="text-white">
          <h3 className="text-lg font-medium mb-3">Help</h3>
          <ul className=" space-y-2">
            <li>Help Center</li>
            <li>Authors</li>
          </ul>
        </div>

        {/* Giziom Market Section */}
        <div className="text-white">
          <h3 className="text-lg font-medium mb-3">Giziom Market</h3>
          <ul className=" space-y-2">
            <Link to="/term&condition">Terms</Link>
            <li>Licenses</li>
            <li>Market API</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
