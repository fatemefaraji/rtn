function Articles({ article, index }) {
  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
        <div className="flex items-center mb-4">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm font-medium text-gray-700">{article.author.name}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{article.reading_time}</span>
          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <a
          href="#"
          className="mt-4 inline-block text-indigo-600 font-medium text-sm hover:text-indigo-800 transition-colors"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}

export default Articles;