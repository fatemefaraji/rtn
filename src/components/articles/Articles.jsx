import art from "../../../src/assets/images/1715604853550.png";

// Example tags for demonstration
const tags = ["JavaScript", "Beginner", "Tips"];

function Articles() {
  return (
    <div className="max-w-sm bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 my-10 mx-5 cursor-pointer border border-blue-200">
      {/* Image section */}
      <div className="overflow-hidden rounded-t-2xl relative group">
        <img
          src={art}
          alt="Article Illustration"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold opacity-90">
          New
        </span>
      </div>
      {/* Content section */}
      <div className="p-6">
        <h3 className="text-2xl font-extrabold text-blue-800 mb-2 tracking-tight hover:underline transition-colors duration-200">
          Variables in JavaScript: The Complete Guide
        </h3>
        <p className="text-gray-700 text-base mb-4">
          Unlock the secrets of variables in JavaScript! Learn best practices, common pitfalls, and how to write cleaner, more efficient code.
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
        {/* Author and Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Author"
              className="w-8 h-8 rounded-full border-2 border-blue-200"
            />
            <span className="text-sm text-gray-600 font-semibold">By John Doe</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow transition-colors duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;