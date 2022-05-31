import React from "react";
import { avatar } from "../../../../assets";

const Post = (props) => {
  return (
    <div>
      <img src={avatar} alt="avatar" />
      {props.message}
      <div>
        <span>{props.like}</span>
      </div>
    </div>
  );
};

export default Post;
