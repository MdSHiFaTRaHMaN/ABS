import {
  CheckCircleOutlined,
  CustomerServiceOutlined,
  PercentageOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const Benefits = () => {
  return (
    <section className="py-16 px-5 lg:px-24 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <span className="bg-orange-100 text-orange-500 py-2 px-4 rounded-full text-sm font-medium">
            <CheckCircleOutlined className="mr-2" /> Awesome Benefit From Us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-gray-800 lg:text-4xl">
            Simple, Swift, and Secure, <br /> Why You Should Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <CheckCircleOutlined className="text-green-500 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Fast and Secure Transactions
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Enjoy secure and instant payments anywhere, anytime. CashEase
              gives you peace of mind.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <CustomerServiceOutlined className="text-blue-500 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              24/7 Customer Support
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Our team is ready to assist you anytime. If you have questions or
              issues, don’t hesitate to contact us.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <PercentageOutlined className="text-purple-500 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Exclusive Promos and Discounts
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
              Exclusive app promos, discounts, cashback: save, feel benefits in
              your wallet.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <LineChartOutlined className="text-green-500 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              Easy Financial Management
            </h3>
            <p className="mt-3 text-gray-600 text-sm">
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
