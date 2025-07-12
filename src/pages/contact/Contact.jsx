
import React from 'react';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-14 bg-gradient-to-br from-green-50 via-white to-green-100 rounded-xl shadow-xl">
      <h1 className="text-4xl font-extrabold text-center text-green-700 mb-4">Contact Us</h1>
      <p className="text-lg text-center text-green-900 mb-10">
        Have a question, suggestion, or just want to say hi? We’d love to hear from you!
      </p>

      <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100">
        <div className="mb-6">
          <p className="text-gray-700 mb-1 font-medium">📧 Email:</p>
          <a
            href="mailto:mrweblog@example.com"
            className="text-green-600 hover:text-green-800 transition-colors duration-200 underline"
          >
            mrweblog@example.com
          </a>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-1 font-medium">💼 LinkedIn:</p>
          <a
            href="https://linkedin.com/in/yourprofile"
            className="text-green-600 hover:text-green-800 transition-colors duration-200 underline"
          >
            linkedin.com/in/yourprofile
          </a>
        </div>

        <div>
          <p className="text-gray-700 mb-1 font-medium">🐦 Twitter:</p>
          <a
            href="https://twitter.com/yourhandle"
            className="text-green-600 hover:text-green-800 transition-colors duration-200 underline"
          >
            @yourhandle
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;