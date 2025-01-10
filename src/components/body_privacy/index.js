import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className='bg-white text-black lg:px-80 lg:mt-12 sm:mt-16'>
      <div style={styles.container}>
        <h1 style={styles.heading_main} className='py-16 text-center'>Privacy Policy</h1>
        <p style={styles.lastUpdated}>Last Updated: October 2024</p>

        <p style={styles.paragraph}>
          Happy People AI LLP <strong>("we", "us", or "our")</strong> is committed to protecting your personal data and respecting your privacy. 
          This Privacy Policy <strong>("Policy")</strong> explains how we collect, use, disclose, and safeguard your information when you visit our website 
          or use our services. By using our platform, you agree to the terms outlined in this policy.
        </p>

        <p style={styles.paragraph}>
          If you have any questions or concerns, please contact us at <a href="mailto:contact@happypeopleai.com" style={styles.link}>contact@happypeopleai.com</a>.
        </p>

        <h2 style={styles.subHeading}>Table of Contents</h2>
        <ol style={styles.list_content}>
          <li>What Personal Data We Collect and For What Purposes
            <ul style={styles.subList}>
              <li>Personal Data You Disclose to Us</li>
              <li>Data Automatically Collected by Us</li>
              <li>Data Collected from Other Sources</li>
              <li>Other Purposes for Which We May Use Personal Data</li>
            </ul>
          </li>
          <li>Do We Collect Data from Minors?</li>
          <li>How We Handle Your Social Logins</li>
          <li>Use of Cookies and Other Tracking Technologies</li>
          <li>How Your Personal Data is Shared</li>
          <li>Processors and International Data Transfers</li>
          <li>How Long We Keep Your Information</li>
          <li>How We Keep Your Information Safe</li>
          <li>De-Identified (Anonymized) and Aggregate Data</li>
          <li>Your Privacy Rights and Choices
            <ul style={styles.subList}>
              <li>How to Submit a Request to Exercise Your Rights</li>
              <li>Your Account and Communication Choices</li>
            </ul>
          </li>
          <li>Compliance with Global Data Protection Laws</li>
          <li>Updates to This Policy</li>
          <li>How Can You Contact Us About This Policy?</li>
        </ol>

        <h2 style={styles.subHeading}>1. What Personal Data We Collect and For What Purposes</h2>
        <p style={styles.paragraph}>
          We collect personal data that you provide directly, data collected automatically when you interact with our platform, and data from third-party sources.
        </p>

        <h3 style={styles.subSubHeading}>A. Personal Data You Disclose to Us</h3>
        <p style={styles.paragraph}>
          We collect the following personal data when you:
        </p>
        <ul style={styles.list}>
          <li>Register for an account</li>
          <li>Create or edit an interactive resume or personal profile</li>
          <li>Engage with customer support</li>
          <li>Provide feedback or participate in surveys</li>
        </ul>

        <h3 style={styles.subSubHeading}>B. Data Automatically Collected by Us</h3>
        <p style={styles.paragraph}>
          When you visit or use our website, we collect certain information automatically including:
        </p>
        <ul style={styles.list}>
          <li>IP address and geolocation data to determine pricing and currency.</li>
          <li>Browser type, operating system, and device details for user experience optimization.</li>
          <li>Usage information such as page views, clicks, and session duration for analytics.</li>
        </ul>

        <h3 style={styles.subSubHeading}>C. Data Collected from Other Sources</h3>
        <p style={styles.paragraph}>
          We may receive personal data from third-party services including:
        </p>
        <ul style={styles.list}>
          <li>Google Analytics for web traffic analysis.</li>
          <li>Google Sign-In for account creation and authentication.</li>
        </ul>

        <h3 style={styles.subSubHeading}>D. Other Purposes for Which We May Use Personal Data</h3>
        <p style={styles.paragraph}>
          We may use your personal data for:
        </p>
        <ul style={styles.list}>
          <li>Account administration and communication related to our services.</li>
          <li>Personalizing your user experience.</li>
          <li>Business analytics and research (without selling or sharing data).</li>
        </ul>

        <h2 style={styles.subHeading}>2. Do We Collect Data from Minors?</h2>
        <p style={styles.paragraph}>
          Our platform is not intended for individuals under the age of 18, and we do not knowingly collect personal data from minors. If we become aware of any such collection, we will delete the data promptly.
        </p>

        <h2 style={styles.subHeading}>3. How We Handle Your Social Logins</h2>
        <p style={styles.paragraph}>
          Our platform offers the option to log in using your Google account. When you choose to log in this way, we collect the necessary profile information (e.g., name, email) to create your account. You can manage what data is shared through your Google account settings.
        </p>

        <h2 style={styles.subHeading}>4. Use of Cookies and Other Tracking Technologies</h2>
        <p style={styles.paragraph}>
          We use cookies and similar technologies to:
        </p>
        <ul style={styles.list}>
          <li>Track user location to display region-specific pricing and currency.</li>
          <li>Analyze website usage patterns through Google Analytics.</li>
        </ul>
        <p style={styles.paragraph}>
          By using our website, you consent to our use of cookies as described in this Policy. You can control or disable cookies through your browser settings, although doing so may affect your experience on our website.
        </p>

        <h2 style={styles.subHeading}>5. How Your Personal Data is Shared</h2>
        <p style={styles.paragraph}>
          We only share personal data with third parties under the following conditions:
        </p>
        <ul style={styles.list}>
          <li><strong>Payment Processing:</strong> We share payment-related data with Razorpay for secure transactions. Razorpay's privacy policy governs the collection and use of your payment data.</li>
          <li><strong>Service Providers:</strong> We engage third-party service providers for website hosting, analytics, and customer support. All such providers comply with our data protection requirements.</li>
          <li><strong>Legal Compliance:</strong> We may share your data if required by law, such as to respond to subpoenas or comply with regulatory requirements.</li>
        </ul>
        <p style={styles.paragraph}>
          We do not sell or share your personal data for marketing purposes.
        </p>

        <h2 style={styles.subHeading}>6. Processors and International Data Transfers</h2>
        <p style={styles.paragraph}>
          We use third-party services, including AWS, to host and process data. This may involve international transfers of personal data. We ensure appropriate safeguards, such as encryption and standard contractual clauses, are in place to protect your data during these transfers. Our systems comply with ISO 27001 security standards.
        </p>

        <h2 style={styles.subHeading}>7. How Long We Keep Your Information</h2>
        <p style={styles.paragraph}>
          We retain personal data only as long as necessary to provide our services or comply with legal requirements. When you delete your account, we will either anonymize or delete your data unless retention is required for legitimate business purposes (e.g., tax or audit purposes).
        </p>

        <h2 style={styles.subHeading}>8. How We Keep Your Information Safe</h2>
        <p style={styles.paragraph}>
          We employ robust security measures to protect your personal data, including:
        </p>
        <ul style={styles.list}>
          <li><strong>Encryption:</strong> Data is encrypted both in transit and at rest.</li>
          <li><strong>Access Control:</strong> Access to data is restricted to authorized personnel only.</li>
          <li><strong>Compliance:</strong> Our data storage and processing practices comply with global security standards, including ISO 27001.</li>
        </ul>
        <p style={styles.paragraph}>
          In the event of a data breach, we will notify you in accordance with applicable legal requirements.
        </p>

        <h2 style={styles.subHeading}>9. De-Identified (Anonymized) and Aggregate Data</h2>
        <p style={styles.paragraph}>
          We may anonymize or aggregate personal data for research, analytics, or business purposes. Once anonymized, this data is no longer considered personal data and is not subject to data protection regulations.
        </p>

        <h2 style={styles.subHeading}>10. Your Privacy Rights and Choices</h2>
        <p style={styles.paragraph}>
          You have the right to:
        </p>
        <ul style={styles.list}>
          <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Correction:</strong> Request corrections to inaccurate or incomplete data.</li>
          <li><strong>Deletion:</strong> Request deletion of your personal data under certain conditions.</li>
          <li><strong>Objection:</strong> Object to the processing of your personal data for specific purposes.</li>
          <li><strong>Portability:</strong> Request that we transfer your data to another service provider.</li>
        </ul>

        <h3 style={styles.subSubHeading}>A. How to Submit a Request to Exercise Your Rights</h3>
        <p style={styles.paragraph}>
          To exercise your rights, please contact us at <a href="mailto:contact@happypeopleai.com" style={styles.link}>contact@happypeopleai.com</a>. We may request proof of identity before fulfilling your request to ensure the protection of your data.
        </p>

        <h3 style={styles.subSubHeading}>B. Your Account and Communication Choices</h3>
        <p style={styles.paragraph}>
          You may update your account information or opt out of marketing communications via your account settings. However, you will continue to receive essential service-related communications (e.g., billing or security alerts).
        </p>

        <h2 style={styles.subHeading}>11. Compliance with Global Data Protection Laws</h2>
        <p style={styles.paragraph}>
          We comply with data protection regulations in various jurisdictions including:
        </p>
        <ul style={styles.list}>
          <li><strong>General Data Protection Regulation (GDPR):</strong> For users in the European Union, we ensure that personal data is handled in accordance with GDPR requirements. This includes providing you with rights such as access, rectification, deletion, and portability of your data.</li>
          <li><strong>California Consumer Privacy Act (CCPA):</strong> For users in California, U.S., we comply with CCPA granting you rights to access, delete, and restrict the sharing of your personal data.</li>
          <li><strong>Other Jurisdictions:</strong> We comply with applicable data protection laws in other regions including the United Kingdom, Canada, and other U.S. states.</li>
        </ul>

        <h2 style={styles.subHeading}>12. Updates to This Policy</h2>
        <p style={styles.paragraph}>
          We may update this Privacy Policy from time to time. The updated version will be indicated by the "Last Updated" date, and any material changes will be communicated via email or a notice on our website. Please review this Policy periodically to stay informed about our data practices.
        </p>

        <h2 style={styles.subHeading}>13. How Can You Contact Us About This Policy?</h2>
        <p style={styles.paragraph}>
          If you have questions or comments about this Privacy Policy, you can contact us by email at 
          <a href="mailto:contact@happypeopleai.com" style={styles.link}> contact@happypeopleai.com</a>.
        </p>

        <p style={styles.paragraph_copyright} className='text-center'> © 2024 Happy People AI LLP</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
    lineHeight: '1.6',
  },
  heading_main: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2C3E50',
  },
  lastUpdated: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color:'#3498DB',
  },
  subHeading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
  },
  subSubHeading: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '15px',
    marginBottom: '8px',
  },
  paragraph: {
    fontSize: '1rem',
    marginBottom: '10px',
  },
  list: {
    paddingLeft: '20px',
    marginBottom: '20px',
    listStyleType: 'disc',
  },
  list_content: {
    paddingLeft: '20px',
    marginBottom: '20px',
    listStyleType: 'decimal',
  },
  subList: {
    paddingLeft: '40px',
    marginBottom: '10px',
    listStyleType: 'disc',
  },
  link: {
    color: '#3498DB',
    textDecoration: 'underline',
  },
  paragraph_copyright:{
    fontSize: '1rem',
    paddingTop: '2rem',
    marginBottom: '10px',
    color:'#2C3E50',
    fontWeight:'bold',
  },
};

export default PrivacyPolicy;
