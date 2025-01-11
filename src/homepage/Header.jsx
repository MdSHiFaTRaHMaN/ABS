import Logo from "../assets/app.png";
import Bannar from "../assets/bannar.png";

const Header = () => {
  return (
    <section className="text-gray-600 body-font bg-primary-light dark:bg-primary-dark">
      <div className="container px-5  mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-3/6  md:pr-10 md:py-6">
            <span className="bg-green-400 text-white px-3 py-2 text-center rounded-full inline-block">
              ❇️ Welcome to a modern Financial Experience
            </span>

            <h1 className="mt-5 text-4xl font-bold lg:text-5xl text-white">
              Managing Your Personal Finances Made Easier
            </h1>
            <p className="mt-3 text-lg lg:text-xl text-white">
              Elevate your financial experience with Gittiom. We simplify how
              you pay, transfer money, and manage your finances, giving you full
              control over your money.
            </p>

            <div className="flex space-x-5 mt-10">
              <img src={Logo} alt="Get it on Google Play" />
            </div>
          </div>
          <img
            className="lg:w-2/6 object-cover object-center rounded-lg md:mt-0 mt-12 mx-auto"
            src={Bannar}
            alt="step"
            width={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
