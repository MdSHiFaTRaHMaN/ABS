import { Collapse, theme } from "antd";
import "tailwindcss/tailwind.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const { Panel } = Collapse;

const FAQComponent = () => {
  const faqs = [
    {
      question: "What is Gittiom?",
      answer:
        "Gittiom is an e-wallet app that allows you to store money, make payments, and perform other financial transactions electronically through your mobile device.",
    },
    {
      question: "How do I download and install the Gittiom app?",
      answer:
        "You can download and install the Gittiom app from your device's app store (Google Play Store for Android and Apple App Store for iOS). Simply search for 'Gittiom' and follow the installation instructions.",
    },
    {
      question: "Can I transfer money from Gittiom to my bank account?",
      answer:
        "Yes, Gittiom allows you to transfer money to your bank account. Navigate to the transfer section in the app and follow the on-screen instructions.",
    },
    {
      question: "Is Gittiom compatible with all types of devices?",
      answer:
        "Gittiom is compatible with most Android and iOS devices. Please check the app store listing for minimum system requirements.",
    },
    {
      question:
        "How can I contact Gittiom customer support if I encounter issues?",
      answer:
        "You can contact Gittiom customer support through the app's help center or by emailing support@Gittiom.com.",
    },
  ];

  const { token } = theme.useToken();

  const panelStyle = {
    marginBottom: 16,
    background: "var(--faq-panel-bg)", // Updated to dynamically change based on theme
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <div className="bg-white dark:bg-primary-dark">
      <div className="max-w-3xl mx-auto p-6 lg:p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
          Frequently Asked Questions
        </h1>

        {/* Ant Design Collapse Component */}
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <MdOutlineKeyboardArrowRight
              className={`transform transition-transform duration-300 ${
                isActive ? "rotate-90 text-green-500" : "text-gray-500"
              }`}
            />
          )}
          style={{
            background: "transparent", // Keep the parent background transparent
          }}
        >
          {faqs.map((faq, index) => (
            <Panel
              header={
                <span className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {faq.question}
                </span>
              }
              key={index}
              style={panelStyle}
            >
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default FAQComponent;
