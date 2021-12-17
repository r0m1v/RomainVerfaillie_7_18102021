import React, { useState } from "react";

const Post = (props) => {
  return <p>Texte : {props.text}</p>;
};

const PostToFill = (props) => {
  const [content, setContent] = useState(props.toto);
  //content la valeur par defaut / setContent les changements appliqués
  const handleChange = (event) => {
    event.preventDefault();
    setContent(event.target.value);
  };

  const handleClear = () => {
    // fonction pr clear, pas besoin d'event
    setContent("");
  };

  return (
    <div className="formatting-newpost">
      <form className="account-form">
        <h1>Nouveau post :</h1>
        <textarea maxlength="280" placeholder="280 caractères max" onChange={handleChange}></textarea>
      </form>
      <Post text={content} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default PostToFill;
