import React, { useState } from "react";

// const buttonPublish = async (data) => {
//     const res = await fetch("http://localhost:8080/api/post", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   };
//   buttonPublish();

const Post = (props) => {
  return (
    <div className="formatting-post">
      <div className="post-content">{props.text}</div>
      <div className="post-publish">
        <p>Emplacement des posts publier</p>
        <button className="button-modify-comment" title="modifier commentaire">
          <i class="far fa-edit"></i>
        </button>
        <button className="button-delete-comment" title="supprimer commentaire">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
      <div className="post-comment">
        Commenter<i class="far fa-comment-alt"></i>
      </div>
      <form className="account-form">
        <textarea maxlength="280" placeholder="280 caractères max"></textarea>
      </form>
    </div>
  );
};

const PostToFill = (props) => {
  const [content, setContent] = useState(props.content);
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
        <input type="file" accept=".gif" onChange={handleChange}></input>
      </form>
      <button>Publier</button>
      <Post text={content} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default PostToFill;
