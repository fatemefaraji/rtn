import React, { useState } from "react";
import { useArticleForm } from "../../hooks/useArticleForm";
import Spinner from "../../components/spinner/Spinner";
function CreateContent() {
  const {
    article,
    handleChange,
    handleImageUpload,
    handleSubmit: originalHandleSubmit,
  } = useArticleForm();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await originalHandleSubmit();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 mt-12 bg-white dark:bg-gray-900 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-6 text-center">
        ✍️ Create New Article
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="space-y-4">
          {/* Title */}
          <FormInput
            label="Title"
            name="title"
            value={article.title}
            onChange={handleChange}
            placeholder="Enter article title"
          />

          {/* Date */}
          <FormInput
            label="Date"
            name="date"
            type="date"
            value={article.date}
            onChange={handleChange}
          />

          {/* Author */}
          <FormInput
            label="Author"
            name="author"
            value={article.author}
            onChange={handleChange}
            placeholder="Author name"
          />

          {/* Reading Time */}
          <FormInput
            label="Reading Time"
            name="reading_time"
            value={article.reading_time}
            onChange={handleChange}
            placeholder="e.g. 6 min"
          />

          {/* Excerpt */}
          <FormTextarea
            label="Excerpt"
            name="excerpt"
            value={article.excerpt}
            onChange={handleChange}
            placeholder="Short summary..."
            height="h-20"
          />

          {/* Content */}
          <FormTextarea
            label="Content"
            name="content"
            value={article.content}
            onChange={handleChange}
            placeholder="Full article content..."
            height="h-40"
          />

          {/* Cover Image */}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">
              Cover Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0 file:text-sm file:font-semibold
                file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200"
            />
            {article.image && (
              <img
                src={URL.createObjectURL(article.image)}
                alt="Preview"
                className="mt-2 max-h-40 object-cover rounded-md"
              />
            )}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-md hover:bg-emerald-700 transition-colors"
          >
            ✅ Submit
          </button>
        </div>
      )}
    </div>
  );
}

function FormInput({ label, ...props }) {
  return (
    <div>
      <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">{label}</label>
      <input
        {...props}
        type={props.type || "text"}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
      />
    </div>
  );
}

function FormTextarea({ label, height = "h-24", ...props }) {
  return (
    <div>
      <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">{label}</label>
      <textarea
        {...props}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-400 focus:ring-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white ${height}`}
      ></textarea>
    </div>
  );
}

export default CreateContent;
