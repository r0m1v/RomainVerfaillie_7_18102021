import React, { useEffect, useState } from "react";
import NewComment from "./NewComment";

const Post = (props) => {
  const dataToken = localStorage.getItem("access_token");
  const [comments, setComments] = useState([]);
  const [commentCreatedCount, setCommentCreatedCount] = useState(0);

  const publishComment = (commentContent) => {
    fetch(`http://localhost:8080/api/post/${props.id}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
      },
      body: JSON.stringify({ message: commentContent }),
    }).then((res) => {
      setCommentCreatedCount((count) => count + 1);
    });
  };

  // récupération des comments
  const fetchComments = () => {
    console.log("fetchComments");
    fetch(`http://localhost:8080/api/post/${props.id}/message`, {
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
        console.log("comments", comments.data);
        setComments(comments.data);
      });
  };

  useEffect(fetchComments, [commentCreatedCount]);

  return (
    <div className="formatting-post">
      <div className="post-publish">
        <button className="button-modify-post" title="modifier post">
          <i className="far fa-edit"></i>
        </button>
        <button className="button-delete-post" title="supprimer post">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
      <div className="post-content">
        <p>{props.text}</p>
      </div>
      <>
        {comments.map((comment) => {
          return (
            <div className="line-comment">
              <p key={comment.id}>{comment.content}</p>;
              <button className="button-delete-post" title="supprimer post">
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          )
        })}
      </>
      <NewComment onPublish={publishComment} />
    </div>
  );
};

export default Post;
