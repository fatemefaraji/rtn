function App() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-right">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">Hi!</h1>
        <p className="text-gray-700 text-lg mb-6">
          This page was created to test{' '}
          <span className="text-blue-600 font-semibold">Tailwind CSS</span>.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300">
          Test button
        </button>
      </div>
    </div>
  );
}

export default App;

