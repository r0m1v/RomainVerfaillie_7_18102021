import React, { useState } from "react";

const Comment = (props) => {
  const dataUserId = localStorage.getItem("userId");
  const dataUserIsAdmin = JSON.parse(localStorage.getItem("userIsAdmin"));
  const [editingComment, setEditingComment] = useState(false);
  const [commentContent, setCommentContent] = useState(props.comment.content);

  const updateComment = () => {
    setEditingComment(false);
    return props.onUpdate(props.comment, commentContent);
  };

  const deleteComment = () => {
    return props.onDelete(props.comment);
  };

  const handleChangeCommentContent = (e) => {
    e.preventDefault();
    setCommentContent(e.target.value);
  };

  return (
    <div className="line-comment">
      {editingComment ? (
        // affichage en mode édition
        <div>
          <input value={commentContent} onChange={handleChangeCommentContent} />
          <button type="button" onClick={updateComment}>
            Modifier le commentaire
          </button>
        </div>
      ) : (
        // affichage classique
        <div>
          <p>
            {props.comment.user.username} : {props.comment.content}
          </p>
          {dataUserId == props.comment.userId || dataUserIsAdmin ? (
            <div>
              {dataUserIsAdmin ? null : (
                <button
                  className="button-modify-comment"
                  title="modifier commentaire"
                  onClick={() => setEditingComment(true)}
                >
                  <i className="far fa-edit"></i>
                </button>
              )}
              <button
                className="button-delete-comment"
                title="supprimer commentaire"
                onClick={deleteComment}
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Comment;
