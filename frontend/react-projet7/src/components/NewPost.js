import React, { useState } from "react";

const NewPost = (props) => {
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
    <div className="formatting-newpost">
      <form className="account-form">
        <h1>Nouveau post :</h1>
        <textarea
          maxLength="280"
          placeholder="280 caractères max"
          onChange={handleChange}
          value={content}
        ></textarea>
      </form>
      <div className="formatting-button-publish-newpost">
        <button className="button-publish-newpost" onClick={onPublish}>
          Publier
        </button>
      </div>
    </div>
  );
};

export default NewPost;
