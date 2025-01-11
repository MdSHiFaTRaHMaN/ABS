import {
  CheckCircleOutlined,
  CustomerServiceOutlined,
  PercentageOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const Benefits = () => {
  return (
    <section className="py-16 px-5 lg:px-24 bg-gray-50 dark:bg-primary-dark">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <span className="bg-orange-100 dark:bg-orange-800 text-orange-500 dark:text-orange-200 py-2 px-4 rounded-full text-sm font-medium flex justify-center items-center w-max mx-auto">
            <CheckCircleOutlined className="mr-2" /> Awesome Benefits From Us
          </span>
          <h2 className="mt-6 text-3xl font-bold text-gray-800 dark:text-gray-100 lg:text-4xl leading-tight">
            Simple, Swift, and Secure, <br /> Why You Should Choose Us
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* Card 1 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <CheckCircleOutlined className="text-green-500 dark:text-green-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Fast and Secure Transactions
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              Enjoy secure and instant payments anywhere, anytime. Gittiom
              gives you peace of mind.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <CustomerServiceOutlined className="text-blue-500 dark:text-blue-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              24/7 Customer Support
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              Our team is ready to assist you anytime. If you have questions or
              issues, don’t hesitate to contact us.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <PercentageOutlined className="text-purple-500 dark:text-purple-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Exclusive Promos and Discounts
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              Exclusive app promos, discounts, cashback: save, feel benefits in
              your wallet.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <div className="flex justify-center mb-4">
              <LineChartOutlined className="text-green-500 dark:text-green-400 text-4xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Easy Financial Management
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
              Effortlessly manage finances, track expenses, set budgets, and
              invest with our e-wallet app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
