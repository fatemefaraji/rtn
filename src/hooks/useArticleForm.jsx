import { useState } from "react";

export function useArticleForm() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    reading_time: "",
    excerpt: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArticle((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArticle((prev) => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = () => {
    console.log("📄 Article Submitted:", article);
    //  can be send this to backend for using fetch or axios
  };

  return {
    article,
    handleChange,
    handleImageUpload,
    handleSubmit,
  };
}
