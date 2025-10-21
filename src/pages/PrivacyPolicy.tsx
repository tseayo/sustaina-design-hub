import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg shadow-soft p-8">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="lead text-muted-foreground text-xl mb-8">
              NetZero Energy Consultants Ltd is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal data in compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Data Controller</h2>
                <p className="text-muted-foreground">
                  The data controller responsible for your personal data is:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-foreground"><strong>NetZero Energy Consultants Ltd</strong></p>
                  <p className="text-muted-foreground">Email: info@netzeroenergyconsultantltd.com</p>
                  <p className="text-muted-foreground">Phone: +44 203 937 9903</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We may collect and process the following personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Identification Data:</strong> Name, job title, company name</li>
                  <li><strong>Contact Information:</strong> Email address, phone number</li>
                  <li><strong>Location Data:</strong> Approximate location to provide localized services</li>
                  <li><strong>Energy Data:</strong> Information related to energy usage and preferences</li>
                  <li><strong>Technical Data:</strong> Browser type, device information, IP address</li>
                  <li><strong>Communication Data:</strong> Records of interactions with us via email, phone, or in person</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use your personal data for the following purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>To provide and manage our consulting services</li>
                  <li>To respond to your inquiries and requests</li>
                  <li>To send you relevant information and updates about our services</li>
                  <li>To improve our services and website functionality</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Legal Basis for Processing</h2>
                <p className="text-muted-foreground">
                  We process your personal data based on the following legal grounds: Consent, Contractual Necessity, Legal Obligation, and Legitimate Interests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing and Transfers</h2>
                <p className="text-muted-foreground">
                  We do not sell or rent your personal data to third parties. However, we may share your information with trusted partners who assist us in delivering our services, subject to strict data protection agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Once your data is no longer needed, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  Under the GDPR, you have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                  <li><strong>Erasure:</strong> Request the deletion of your personal data</li>
                  <li><strong>Restriction:</strong> Limit the processing of your data</li>
                  <li><strong>Portability:</strong> Obtain and reuse your data across different services</li>
                  <li><strong>Objection:</strong> Object to the processing of your data in certain circumstances</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw any consent previously given</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  To exercise any of these rights, please contact us at info@netzeroenergyconsultantltd.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Security Measures</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security assessments.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground">
                  Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Third-Party Links</h2>
                <p className="text-muted-foreground">
                  Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Any updates will be posted on this page, and the "Last Updated" date will be revised accordingly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>NetZero Energy Consultants Ltd</strong></p>
                  <p className="text-muted-foreground">Email: info@netzeroenergyconsultantltd.com</p>
                  <p className="text-muted-foreground">Phone: +44 203 937 9903</p>
                </div>
                <p className="text-muted-foreground mt-4">
                  Alternatively, you can contact the Information Commissioner's Office (ICO) for further assistance.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
