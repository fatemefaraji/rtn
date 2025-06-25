import art from "../../../src/assets/images/1715604853550.png";

function Articles() {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 my-10 mx-5 cursor-pointer">
      {/* Image section */}
      <div className="overflow-hidden rounded-t-lg">
        <img
          src={art}
          alt="Article Illustration"
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Content section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">Variables</h3>
        <p className="text-gray-600 text-sm">
          This is dummy text. Describe your article briefly here to engage the reader.
        </p>
      </div>
    </div>
  );
}

export default Articles;