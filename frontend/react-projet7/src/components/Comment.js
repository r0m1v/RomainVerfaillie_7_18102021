import React, { useState } from "react";

const Comment = (props) => {
  const deleteComment = () => {
    return props.onDelete(props.comment);
  };

  return (
    <div className="line-comment">
      <p key={props.comment.id}>Auteur : {props.comment.content}</p>
      <div>
        <button className="button-modify-comment" title="modifier commentaire">
          <i className="far fa-edit"></i>
        </button>
        <button
          className="button-delete-comment"
          title="supprimer commentaire"
          onClick={deleteComment}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Comment;
