import React from 'react';
import { FiBook, FiAlertTriangle } from 'react-icons/fi';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      <header className="mb-12 bg-gradient-to-r from-sky-500 to-blue-600 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
          <FiBook className="mr-3" /> Terms of Use
        </h1>
        <p className="text-lg text-sky-100">
          Effective date: {new Date().toLocaleDateString()}
        </p>
      </header>

      <div className="bg-white border border-sky-200 rounded-xl shadow-md p-8 mb-8">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">1. Basic Rules</h2>
          <div className="space-y-4 text-sky-700">
            <p>
              By using this website, you agree to these simple terms:
            </p>
            <div className="bg-sky-50 p-4 rounded-lg border border-sky-100">
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the information provided responsibly</li>
                <li>Don't misuse or overload our servers</li>
                <li>Understand that opportunities listed are not endorsements</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sky-900 mb-4 flex items-center">
            <FiAlertTriangle className="mr-2 text-blue-500" /> 2. No Warranty
          </h2>
          <div className="space-y-4 text-sky-700">
            <p>
              This service is provided "as is" without any guarantees:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-medium text-yellow-600 mb-2">Information Accuracy</h3>
                <p>We strive for accuracy but can't guarantee all opportunity details are current or correct.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="font-medium text-yellow-600 mb-2">Availability</h3>
                <p>We don't guarantee uninterrupted access to the service.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">3. Content Usage</h2>
          <div className="space-y-4 text-sky-700">
            <p>
              You're free to:
            </p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <ul className="list-disc pl-6 space-y-2">
                <li>View and share the information</li>
                <li>Use the opportunity listings for personal research</li>
              </ul>
            </div>
            <p>
              Please don't:
            </p>
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <ul className="list-disc pl-6 space-y-2">
                <li>Scrape or automatically collect data without permission</li>
                <li>Present our content as your own</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-sky-900 mb-4">4. Changes to Terms</h2>
          <p className="text-sky-700">
            We may update these terms occasionally. The "Effective date" above will show when changes were made.
          </p>
        </section>
      </div>

      <div className="text-center text-sky-600">
        <p>This is a free informational resource. Use it responsibly.</p>
      </div>
    </div>
  );
};

export default TermsOfService;