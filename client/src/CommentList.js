import React from "react";

const CommentList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          {comment.status === "approved"
            ? comment.content
            : comment.status === "rejected"
            ? "Rejected"
            : "Pending"}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
