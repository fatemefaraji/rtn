import React from "react";
import { ArrowRight } from "lucide-react";
import PropTypes from "prop-types";

function ArticleCard({ image, title, description, tags, author, authorImg, isNew }) {
  return (
    <div className="max-w-sm w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 my-8 mx-auto cursor-pointer border border-blue-200">
      {/* Image */}
      <div className="overflow-hidden rounded-t-2xl relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isNew && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md font-semibold">
            New
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-2 tracking-tight group-hover:underline transition-all">
          {title}
        </h3>
        <p className="text-gray-700 text-sm mb-4">{description}</p>

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

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={authorImg}
              alt={author}
              className="w-8 h-8 rounded-full border-2 border-blue-200"
            />
            <span className="text-sm text-gray-600 font-semibold">By {author}</span>
          </div>
          <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow transition">
            Read More <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  author: PropTypes.string.isRequired,
  authorImg: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
};

export default ArticleCard;
