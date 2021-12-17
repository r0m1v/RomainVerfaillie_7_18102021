// import React, { useState } from "react";

// const Label = (props) => {
//   return <p>Texte : {props.text}</p>;
// };

// const TextInput = (props) => { //props pour propriété
//   const [content, setContent] = useState(props.toto);
// //content la valeur par defaut / setContent les changements appliqués
//   const handleChange = (event) => {
//     event.preventDefault();
//     setContent(event.target.value);
//   };

//   const handleClear = () => { // fonction pr clear, pas besoin d'event
//     setContent("");
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} />
//       <Label text={content} />
//       <button onClick={handleClear}>Clear</button>
//     </div>
//   );
// };

// export default TextInput;

// const buttonPublish = async (data) => {
//   const res = await fetch("http://localhost:8080/api/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
// };
// buttonPublish();

// const postToFill = (props) => {
// const [message, setMessage] = useState(props.test);
// const handleChange = (event) => {
//   event.preventDefault();
//   setMessage(event.target.value);
// };
// return (<div className="formatting-newpost">
// <form className="account-form">
//   <h1>Nouveau post :</h1>
//   <textarea maxlength="280" placeholder="280 caractères max" onChange={handleChange}></textarea>
//   <input type="file"></input>
//   {/* <button type="submit" onClick={buttonPublish}>
//     Publier
//   </button> */}
// </form>
// </div>)
// }
