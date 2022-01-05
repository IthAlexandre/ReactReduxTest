import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const CommentList = (props) => {
  const renderComments = () => {
    return (
      //props.auth &&
      props.comments.map((comment) => {
        return <li key={comment}>{comment}</li>;
      })
    );
  };

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
      <button className="fetch-comments" onClick={props.fetchComments}>
        Fetch Comments
      </button>
    </div>
  );
};

const mapStateToProps = ({ comments, auth }) => {
  return { comments, auth };
};

export default connect(mapStateToProps, actions)(CommentList);
