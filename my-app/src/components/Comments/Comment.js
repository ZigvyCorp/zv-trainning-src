import React from 'react'
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import { Comment, Icon, Tooltip, Avatar } from 'antd';



export default function GroundComment({CommentData}) {
    const  {username,userImage,content} = CommentData;
    return (
        <Comment
        author={<a>{username}</a>}
        avatar={
          <Avatar
            src={userImage}
            alt="userImage"
          />
        }
        content={
          <p>
            {content}
          </p>
        }
      />    
    );
}