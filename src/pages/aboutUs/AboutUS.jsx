import React from 'react';

function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-2xl dark:shadow-black rounded-3xl p-10 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <h1 className="text-5xl font-extrabold text-center text-emerald-700 dark:text-emerald-400 mb-10">
          About Us
        </h1>

        <p className="text-lg mb-6 leading-relaxed">
          Welcome to <span className="font-semibold text-emerald-600 dark:text-emerald-400">Mr. Weblog</span> — your trusted hub for the latest in tech, development, and digital trends.
          We’re a passionate team of developers, designers, and tech enthusiasts who believe in making technology accessible,
          exciting, and valuable for everyone — from beginners to pros.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          On this platform, you’ll find deep dives into modern frameworks like <span className="font-semibold text-emerald-600 dark:text-emerald-400">React</span>, <span className="font-semibold text-emerald-600 dark:text-emerald-400">Next.js</span>, and <span className="font-semibold text-emerald-600 dark:text-emerald-400">TypeScript</span>,
          along with practical tutorials, UI/UX tips, coding best practices, and personal insights into the world of web development.
          Whether you're looking to start your first blog, master APIs, or stay updated with the latest tools and trends — you're in the right place.
        </p>

        <p className="text-lg mb-6 leading-relaxed">
          Our mission is to empower developers and creators by sharing knowledge that’s practical, honest, and easy to apply.
          We also value <span className="italic text-emerald-700 dark:text-emerald-400">community</span> — so feel free to reach out, ask questions, or suggest topics you'd like us to cover.
        </p>

        <p className="text-xl font-bold text-center text-emerald-600 dark:text-emerald-400 mt-10">
          Thanks for being here — and welcome to the journey.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
