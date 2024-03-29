import React from "react";
import { Layout } from "../../../core/components";

export const TermsAndConditionPage = () => {
     return (
          <Layout>
               <div className="container w-[80%] mx-auto flex flex-col gap-10 my-10">
                    <h6 className="text-3xl font-semibold capitalize">Terms & Conditions</h6>
                    <div className="whitespace-pre-wrap">
                         Terms and Conditions for Online Donations These Terms and Conditions ("Terms") govern your use
                         of our online donation platform ("Platform") provided by Subodh Gangaram Bawdane founder of{" "}
                         <span className="capitalize text-emerald-500">om shanti welfare trust</span>. By making a
                         donation through our Platform, you agree to these Terms. Please read them carefully before
                         proceeding with your donation.
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Donation Policy:</b>
                         <p className="text-gray-500">
                              {"\n"}
                              a. You must be legally capable of entering into a binding contract to make a donation.
                              {"\n"}
                              b. By making a donation, you agree to provide accurate and complete information about
                              yourself.
                              {"\n"}
                              c. You acknowledge that donations made through our Platform are voluntary and
                              non-refundable.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Payment Processing:</b>
                         <p className="text-gray-500">
                              {"\n"}
                              a. We use secure payment gateways to process donations. However, we do not store any
                              credit card details.
                              {"\n"}
                              b. You agree to comply with the terms and conditions of the payment processor used for
                              your donation.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Tax Deductibility:</b>
                         {"\n"}
                         <p className="text-gray-500">
                              a. Donations made to our Organization may be tax-deductible to the extent permitted by
                              law. Please consult your tax advisor for specific advice.
                              {"\n"}
                              b. We will provide donation receipts for tax purposes, where applicable.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Use of Donations:</b>
                         {"\n"}
                         <p className="text-gray-500">
                              a. We will use donated funds for the charitable purposes and projects of our Organization.
                              {"\n"}
                              b. While we endeavor to allocate donations as specified, we reserve the right to redirect
                              funds if necessary, in accordance with our charitable objectives.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Privacy Policy:</b>
                         {"\n"}
                         <p className="text-gray-500">
                              a. We respect your privacy and will handle your personal information in accordance with
                              our Privacy Policy.
                              {"\n"}
                              b. We may use your information to send you updates about our activities and fundraising
                              efforts unless you opt out.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Acknowledgment:</b>
                         {"\n"}
                         <p className="text-gray-500">
                              a. We will acknowledge your donation promptly after receiving it, typically through email
                              or other appropriate means.
                              {"\n"}
                              b. We reserve the right to decline or refund any donation at our discretion, including in
                              cases of suspected fraud or misuse.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Changes to Terms:</b>
                         {"\n"}
                         <p className="text-gray-500">
                              a. We reserve the right to update or modify these Terms at any time without prior notice.
                              {"\n"}
                              b. Continued use of our Platform after any such changes constitutes acceptance of the
                              revised Terms.
                         </p>
                         {"\n"}
                         {"\n"}
                         <b className="text-emerald-500">Governing Law:</b>
                         {"\n"}
                         <p className="text-gray-500">
                              a. These Terms are governed by the laws of India/Maharashtra, without regard to its
                              conflict of law provisions.
                              {"\n"}
                              b. Any dispute arising from or related to these Terms shall be resolved exclusively by the
                              courts of Maharashtra. By proceeding with your donation, you confirm that you have read,
                              understood, and agree to abide by these Terms. If you do not agree to these Terms, please
                              refrain from making a donation through our Platform. For any questions or concerns
                              regarding these Terms, please contact us at <b> +91 99204 41626</b>.
                         </p>
                    </div>
               </div>
          </Layout>
     );
};
