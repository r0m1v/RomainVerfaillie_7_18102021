import React, { useState } from "react";

const NewComment = (props) => {
  const [content, setContent] = useState("");

  //content la valeur par defaut / setContent les changements appliqués
  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleClear = () => {
    // fonction pr clear, pas besoin d'event
    setContent("");
  };

  const onPublish = (e) => {
    e.preventDefault();
    props.onPublish(content);
    handleClear();
  };

  return (
    <div className="post-comment">
      <p>
        Commenter<i className="far fa-comment-alt"></i>
      </p>
      <form className="account-form">
        <textarea
          maxLength="280"
          placeholder="280 caractères max"
          onChange={handleChange}
          value={content}
        ></textarea>
        <button type="button" onClick={onPublish}>
          Publier
        </button>
      </form>
    </div>
  );
};

export default NewComment;
