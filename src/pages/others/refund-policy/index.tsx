import React from "react";
import { Layout } from "../../../core/components";

export const RefundPolicyPage = () => {
     return (
          <Layout>
               <div className="container w-[80%] mx-auto flex flex-col gap-10 my-10">
                    <h6 className="text-3xl font-semibold capitalize">Privacy & Refund Policy</h6>
                    <div className="whitespace-pre-line">
                         <p className="text-gray-500">
                              This Privacy and Refund Policy ("Policy") outlines how OM SHANTI WELFARE TRUST
                              ("Organization") handles personal information and refund requests in relation to online
                              donations. By making a donation through our online platform, you agree to the terms
                              outlined in this Policy.
                         </p>
                         {"\n"}
                         <b className="text-emerald-500">Privacy Policy:</b>
                         {"\n"} <b>a. Collection of Information:</b>{" "}
                         <p className="text-gray-500">
                              We collect personal information, including but not limited to name, email address, mailing
                              address, and payment details, when you make a donation through our online platform. We may
                              also collect non-personal information such as donation amounts and frequency for
                              analytical purposes.
                         </p>
                         {"\n "}
                         <b>b. Use of Information:</b>
                         <p className="text-gray-500">
                              We use the information collected to process your donation, issue tax receipts (where
                              applicable), communicate with you about your donation, and provide updates about our
                              activities and fundraising efforts. We do not sell, trade, or rent your personal
                              information to third parties.
                         </p>
                         {"\n"}
                         <p>c. Data Security: </p>
                         <p className="text-gray-500">
                              We implement appropriate security measures to protect your personal information from
                              unauthorized access, alteration, disclosure, or destruction. However, please note that no
                              method of transmission over the internet or electronic storage is completely secure.
                         </p>
                         {"\n"}
                         <p> d. Third-Party Services:</p>
                         <p className="text-gray-500">
                              We may use third-party service providers to process donations and manage donor
                              information. These providers are required to maintain the confidentiality of your
                              information and comply with applicable privacy laws.
                         </p>
                         {"\n"}
                         <p>e. Data Retention:</p>
                         <p className="text-gray-500">
                              We retain your personal information only for as long as necessary to fulfill the purposes
                              outlined in this Policy or as required by law. Upon request, we will delete or anonymize
                              your information, subject to legal and accounting requirements.
                         </p>
                         {"\n"}
                         <b>f. Opt-Out:</b> You may opt out of receiving communications from us at any time by
                         contacting us or using the unsubscribe link provided in our emails.
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Refund Policy:</b>
                         {"\n"}
                         <p>a. Refund Eligibility:</p>
                         <p className="text-gray-500">
                              Donations made through our online platform are generally non-refundable. However, if you
                              have made an error in your donation amount or have any concerns about the use of your
                              donation, please contact us within 6 days of making the donation to discuss a possible
                              refund or resolution.
                         </p>
                         {"\n"}
                         <p className="text-gray-500">Once 80G provided donators will not allowed to get refund</p>
                         {"\n"}
                         b. Discretionary Refunds:
                         <p className="text-gray-500">
                              We reserve the right to issue refunds at our discretion, taking into consideration the
                              circumstances of the donation and the donor's request.
                         </p>
                         {"\n"}
                         <p>c. Refund Process:</p>
                         <p className="text-gray-500">
                              If a refund is approved, it will be processed using the original method of payment.
                              Refunds may take 6 days to appear on your account, depending on your financial
                              institution.
                         </p>
                         {"\n"}
                         <p>d. Refund Exceptions:</p>
                         <p className="text-gray-500">
                              We may be unable to issue refunds i certain circumstances, such as donations made
                              anonymously or donations designated for specific projects or campaigns.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Changes to Policy:</b>
                         {"\n"}
                         a. We reserve the right to update or modify this Policy at any time without prior notice. Any
                         changes will be effective immediately upon posting on our website.
                         {"\n"}
                         b. Continued use of our online donation platform after any such changes constitutes acceptance
                         of the revised Policy.
                         {"\n"}
                         {"\n"}
                         <p className="text-emerald-500">Contact Information:</p> If you have any questions or concerns
                         about this Policy, or if you would like to request a refund, please contact us at:
                         <b> +91 99204 41626</b>
                    </div>
               </div>
          </Layout>
     );
};
