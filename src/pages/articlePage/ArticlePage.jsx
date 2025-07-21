import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/articles/${id}`)
      .then((response) => setArticle(response.data))
      .catch((error) => console.error("Error fetching article:", error));
  }, [id]);

  if (!article)
    return (
      <div className="text-center py-8 text-gray-700 dark:text-gray-300">
         <Spinner />
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-md transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {article.title}
      </h1>

      {article.author && (
        <div className="flex items-center gap-4 mb-6 text-gray-700 dark:text-gray-300">
          <img
            src={article.author.avatar}
            alt={article.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">{article.author.name}</p>
            <div className="flex gap-2 text-sm">
              <span>{new Date(article.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{article.reading_time}</span>
            </div>
          </div>
        </div>
      )}

      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {article.excerpt && (
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{article.excerpt}</p>
      )}

      <div className="prose max-w-none dark:prose-invert text-gray-700 dark:text-gray-300">
        {article.content?.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ArticlePage;
