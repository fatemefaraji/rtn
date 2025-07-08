import art from "../../../src/assets/images/1715604853550.png";

const tags = ["JavaScript", "Beginner", "Tips"];

function Articles() {
  return (
    <div className="max-w-md mx-auto bg-white/80 backdrop-blur-md border border-blue-200/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
      
  
      <div className="relative group">
        <img
          src={}
          alt="Article Visual"
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-lg font-semibold">
          Featured
        </span>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-2 leading-tight hover:underline">
        
        </h2>
        <p className="text-gray-700 text-sm mb-4">
         
        </p>

        

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Author"
              className="w-9 h-9 rounded-full border-2 border-blue-200"
            />
            <span className="text-sm text-gray-600 font-semibold">John Doe</span>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow transition">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Articles;
