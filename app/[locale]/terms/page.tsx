"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// export const metadata = {
//   title: "Terms & Conditions | Pick",
//   description: "Terms and Conditions for Pick app",
// };

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Header Section - Matches the image */}
      <div className="bg-gradient-to-r from-gray-900 to-emerald-500 relative">
        <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8 relative">
          <div className="mt-12 mb-10">
            <h1 className="text-5xl font-[900] text-white">
              Terms &<br />
              Conditions
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-gray-600">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularized in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Registration and Account
          </h2>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className="mt-4">
            To use certain features of the Service, you must register for an
            account with Pick ("Pick Account") and provide certain information
            about yourself as prompted by the registration form. You represent
            and warrant that: (a) all required registration information you
            submit is truthful and accurate; and (b) you will maintain the
            accuracy of such information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. Content and Conduct
          </h2>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Intellectual Property Rights
          </h2>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Third-Party Services
          </h2>
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-4">
            Email: terms@pickapp.com
            <br />
            Phone: (123) 456-7890
            <br />
            Address: 123 Pick Street, App City, CA 94105
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
