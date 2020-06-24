// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
const [comments, setComments] = useState(props.comments)
const submitComment = (e, newComment) => {
  e.preventDefault();
  let comment = {
    username: 'newusername',
    text: newComment
  }
  setComments([...comments, comment])
}


  return (
    <div>
      {comments.map(comment => {
        return <Comment comment={comment} />  //state comment is equal to comment

})}
      <CommentInput submitComment={submitComment}/> 
    
    </div>
  );
};

export default CommentSection;
