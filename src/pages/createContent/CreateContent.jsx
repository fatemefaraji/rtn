import { useState } from "react";

function CreateContent() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    reading_time: "",
    excerpt: "",
    content: "",
  });

  const handleChangeArticle = (e) => {
    const { name, value } = e.target;
    setArticle((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = () => {
    console.log("📝 Submitted article:", article);
    
  };

  return (
    <div className="max-w-xl mx-auto p-8 mt-12 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
        ✍️ Create New Article
      </h1>

      <div className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            name="title"
            type="text"
            value={article.title}
            onChange={handleChangeArticle}
            placeholder="Enter article title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Date</label>
          <input
            name="date"
            type="date"
            value={article.date}
            onChange={handleChangeArticle}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Author</label>
          <input
            name="author"
            type="text"
            value={article.author}
            onChange={handleChangeArticle}
            placeholder="Author name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2"
          />
        </div>

        {/* Reading Time */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Reading Time</label>
          <input
            name="reading_time"
            type="text"
            value={article.reading_time}
            onChange={handleChangeArticle}
            placeholder="e.g. 6 min"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2"
          />
        </div>

        {/* Excerpt */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Excerpt</label>
          <textarea
            name="excerpt"
            value={article.excerpt}
            onChange={handleChangeArticle}
            placeholder="Short summary..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2 h-20"
          ></textarea>
        </div>

        {/* Content */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={article.content}
            onChange={handleChangeArticle}
            placeholder="Full article content..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2 h-40"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          ✅ Submit
        </button>
      </div>
    </div>
  );
}

export default CreateContent;


{/* const handleChangeArticle = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "title":
        setArticle((prev) => ({ ...prev, title: value }));
        break;
      case "date":
        setArticle((prev) => ({ ...prev, date: value }));
        break;
      case "content":
        setArticle((prev) => ({ ...prev, content: value }));
        break;
      case "author":
        setArticle((prev) => ({ ...prev, author: value }));
        break;
      case "readingTime":
        setArticle((prev) => ({ ...prev, readingTime: value }));
        break;
      default:
        break;
    }
  }; */} 