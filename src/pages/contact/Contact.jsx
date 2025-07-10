import React from 'react';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-center mb-6">
        Have a question, suggestion, or just want to say hi? We’d love to hear from you!
      </p>
      
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <p className="mb-4">
          📧 <strong>Email:</strong> <a href="mailto:mrweblog@example.com" className="text-blue-600 underline">mrweblog@example.com</a>
        </p>
        <p className="mb-4">
          💼 <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 underline">linkedin.com/in/yourprofile</a>
        </p>
        <p>
          🐦 <strong>Twitter:</strong> <a href="https://twitter.com/yourhandle" className="text-blue-600 underline">@yourhandle</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
