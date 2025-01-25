import { Layout, Typography, Divider } from "antd";
import { FaWallet } from "react-icons/fa";
import Navbar from "../homepage/Navbar";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const TermsAndConditions = () => {
  return (
    <Layout className="min-h-screen bg-gray-100">
      <Navbar />
      <Content className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center mb-4">
          <FaWallet className="text-blue-500 text-3xl mr-3" />
          <Title level={2} className="!m-0">
            Gittiom Terms and Conditions
          </Title>
        </div>
        <Divider />
        <Typography>
          <Paragraph>
            Welcome to Gittiom! These terms and conditions outline the rules
            and regulations for the use of Gittiom’s services. By accessing or
            using the app, you agree to abide by these terms. If you disagree
            with any part of the terms, please do not use our app.
          </Paragraph>
          <Title level={4}>1. Acceptance of Terms</Title>
          <Paragraph>
            By signing up or using Gittiom, you accept and agree to be bound by
            these terms and any updates we may make. It is your responsibility
            to check these terms periodically.
          </Paragraph>
          <Title level={4}>2. Use of Services</Title>
          <Paragraph>
            Gittiom is an e-wallet service that allows you to store money, make
            payments, and perform financial transactions. You are responsible
            for ensuring the security of your account and all activities under
            it.
          </Paragraph>
          <Title level={4}>3. User Responsibilities</Title>
          <Paragraph>
            - You must be 18 years or older to use our app. <br />
            - You are responsible for providing accurate and complete
            information during registration. <br />
            - You agree not to use Gittiom for illegal purposes.
          </Paragraph>
          <Title level={4}>4. Payment and Transactions</Title>
          <Paragraph>
            Gittiom processes payments electronically. While we take steps to
            ensure secure transactions, we are not responsible for any issues
            caused by third-party payment processors or network failures.
          </Paragraph>
          <Title level={4}>5. Termination</Title>
          <Paragraph>
            We reserve the right to terminate or suspend your account if you
            violate these terms. Any remaining balance may be subject to
            applicable laws and regulations.
          </Paragraph>
          <Title level={4}>6. Changes to Terms</Title>
          <Paragraph>
            Gittiom may update these terms from time to time. We will notify
            users of significant changes, and your continued use of the app
            constitutes acceptance of the updated terms.
          </Paragraph>
          <Title level={4}>7. Contact Us</Title>
          <Paragraph>
            If you have any questions or concerns regarding these terms, please
            contact us at <a href="mailto:support@gittiom.com">support@gittiom.com</a>.
          </Paragraph>
        </Typography>
      </Content>
    </Layout>
  );
};

export default TermsAndConditions;
