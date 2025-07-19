import React from 'react';
import { FiShield, FiDatabase, FiInfo } from 'react-icons/fi';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <header className="mb-12 bg-gradient-to-r from-sky-500 to-blue-600 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <FiShield className="mr-3" /> Privacy Policy
        </h1>
        <p className="text-lg text-sky-100">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      <div className="bg-white border border-sky-200 rounded-xl shadow-md p-8 mb-8">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center">
            <FiInfo className="mr-2 text-blue-500" /> Simple Data Collection
          </h2>
          <div className="space-y-4 text-sky-700">
            <p>
              We believe in minimal data collection. Here's what we do and don't track:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-medium text-green-600 mb-2">We Do Collect</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Anonymous usage statistics</li>
                  <li>Basic browser information</li>
                  <li>Pages visited (for analytics)</li>
                </ul>
              </div>
              <div className="bg-sky-50 p-4 rounded-lg border border-sky-200">
                <h3 className="font-medium text-blue-600 mb-2">We Don't Collect</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personal information</li>
                  <li>Email addresses</li>
                  <li>Any account data</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center">
            <FiDatabase className="mr-2 text-blue-500" /> Third-Party Services
          </h2>
          <div className="space-y-4 text-sky-700">
            <p>
              We use these third-party services that may collect standard internet data:
            </p>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> Helps us understand how visitors use our site</li>
                <li><strong>Vercel Analytics:</strong> Provides basic performance metrics</li>
              </ul>
            </div>
            <p>
              These services have their own privacy policies which we recommend reviewing.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-sky-900 mb-4">Changes to This Policy</h2>
          <p className="text-sky-700">
            We may occasionally update this policy. The "Last updated" date at the top will reflect any changes.
          </p>
        </section>
      </div>

      <div className="text-center text-sky-600">
        <p>This is a simple informational website. We don't collect personal data.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;