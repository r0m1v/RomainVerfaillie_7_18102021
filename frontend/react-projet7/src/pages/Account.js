import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import NewPost from "../components/NewPost";

const Account = () => {
  const [posts, setPosts] = useState([]);
  const [lastUpdateTime, setLastUpdateTime] = useState();
  const dataLogin = localStorage.getItem("username");
  const dataToken = localStorage.getItem("access_token");

  if (!dataToken) {
    window.location = "/";
  }

  const buttonLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location = "../connexion";
  };

  const deleteUser = (e) => {
    e.preventDefault();
    if (window.confirm("Êtes vous sure de vouloir supprimer votre compte ?")) {
      fetch("http://localhost:8080/api/auth/delete/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataToken}`,
        },
      }).then(() => {
        localStorage.clear();
        window.location = "../inscription";
      });
    }
  };

  const publishPost = (postContent) => {
    fetch("http://localhost:8080/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
      },
      body: JSON.stringify({ message: postContent }),
    }).then((res) => {
      setLastUpdateTime(Date.now());
    });
  };

  // récupération des posts
  const fetchPosts = () => {
    fetch("http://localhost:8080/api/post", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${dataToken}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts.data);
      });
  };

  // suppression d'un post
  const deletePost = (postToDelete) => {
    if (window.confirm("Êtes vous sure de vouloir supprimer ce post ?")) {
      fetch(`http://localhost:8080/api/post/${postToDelete.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${dataToken}`,
        },
      }).then((res) => {
        setLastUpdateTime(Date.now());
      });
    }
  };

  useEffect(fetchPosts, [lastUpdateTime]);

  return (
    <div className="account">
      <div className="logo">
        <img src="./images/icon-white.png" alt="logo" />
      </div>
      <div className="formatting-top-account">
        <h1>{dataLogin}</h1>
        <button
          className="button-form-account"
          type="submit"
          onClick={buttonLogout}
        >
          Déconnexion<i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
      <NewPost onPublish={publishPost} />
      <h1>Fil d'actualités :</h1>
      {posts.map((post) => {
        return <Post key={post.id} post={post} onDelete={deletePost} />;
      })}
      <button
        className="button-delete-account"
        type="button"
        onClick={deleteUser}
      >
        Supprimer compte <i className="fas fa-user-slash"></i>
      </button>
    </div>
  );
};

export default Account;
