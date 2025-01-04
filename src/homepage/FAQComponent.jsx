import { Collapse, theme } from "antd";
import "tailwindcss/tailwind.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const { Panel } = Collapse;

const FAQComponent = () => {
  const faqs = [
    {
      question: "What is CashEase?",
      answer:
        "CashEase is an e-wallet app that allows you to store money, make payments, and perform other financial transactions electronically through your mobile device.",
    },
    {
      question: "How do I download and install the CashEase app?",
      answer:
        "You can download and install the CashEase app from your device's app store (Google Play Store for Android and Apple App Store for iOS). Simply search for 'CashEase' and follow the installation instructions.",
    },
    {
      question: "Can I transfer money from CashEase to my bank account?",
      answer:
        "Yes, CashEase allows you to transfer money to your bank account. Navigate to the transfer section in the app and follow the on-screen instructions.",
    },
    {
      question: "Is CashEase compatible with all types of devices?",
      answer:
        "CashEase is compatible with most Android and iOS devices. Please check the app store listing for minimum system requirements.",
    },
    {
      question: "How can I contact CashEase customer support if I encounter issues?",
      answer:
        "You can contact CashEase customer support through the app's help center or by emailing support@cashease.com.",
    },
  ];

  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 16,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <div className="max-w-3xl mx-auto p-6 mb-5 lg:mb-28">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <Collapse
        bordered={false}
        expandIcon={({ isActive }) => (
          <MdOutlineKeyboardArrowRight 
            className={`transform transition-transform duration-300 font-bold text-4xl ${
              isActive ? "rotate-90" : ""
            }`}
          />
        )}
        style={{
          background: token.colorBgContainer,
        }}
      >
        {faqs.map((faq, index) => (
          <Panel
            header={
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
            }
            key={index}
            style={panelStyle}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQComponent;
