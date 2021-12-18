import React, { useEffect, useState } from "react";
import NewComment from "./NewComment";
import Comment from "./Comment";

const Post = (props) => {
  const dataToken = localStorage.getItem("access_token");
  const dataLogin = localStorage.getItem("username");
  const [comments, setComments] = useState([]);
  // contiendra le timestamp de la dernière màj pour relancer la requête vers le serveur
  // cf : useEffect(fetchComments, [lastUpdateTime]);
  const [lastUpdateTime, setLastUpdateTime] = useState();

  const publishComment = (commentContent) => {
    fetch(`http://localhost:8080/api/post/${props.post.id}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
      },
      body: JSON.stringify({ message: commentContent }),
    }).then((res) => {
      setLastUpdateTime(Date.now());
    });
  };

  // récupération des comments
  const fetchComments = () => {
    fetch(`http://localhost:8080/api/post/${props.post.id}/message`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((comments) => {
        setComments(comments.data);
      });
  };

  // supprime un commentaire
  const deleteComment = (commentToDelete) => {
    if (
      window.confirm("Êtes vous sure de vouloir supprimer ce commentaire ?")
    ) {
      fetch(
        `http://localhost:8080/api/post/${props.post.id}/message/${commentToDelete.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${dataToken}`,
          },
        }
      ).then((res) => {
        setLastUpdateTime(Date.now());
      });
    }
  };

  const deletePost = () => {
    props.onDelete(props.post);
  };

  // recupére les commentaires quand "lastUpdateTime" change de valeur
  useEffect(fetchComments, [lastUpdateTime]);

  return (
    <div>
      <div className="formatting-post">
        <div className="hearder-post">
          <div>
            <h2>{dataLogin} :</h2>
          </div>
          <div>
            <button
              className="button-delete-post"
              title="supprimer post"
              onClick={deletePost}
            >
              <i class="fas fa-times"></i>
            </button>
          </div>
        </div>
        <div className="post-content">
          <h3>{props.post.message}</h3>
        </div>
        <div>
          {comments.map((comment) => {
            return <Comment comment={comment} onDelete={deleteComment} />;
          })}
        </div>
        <NewComment onPublish={publishComment} />
      </div>
    </div>
  );
};

export default Post;
