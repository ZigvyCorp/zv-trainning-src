import  React from 'react'
import { Comment,Avatar } from 'antd';
import { Rate } from 'antd';


export default function GroundComment({CommentData}) {
    const  {username,team,userImage,content} = CommentData;
    return (
        <Comment
        author={
        <div className='user-info'>
          <a>{username}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
          <Rate allowHalf defaultValue={2.5} />
          <p>{team}</p>
        </div>
      }
        avatar={
          <Avatar
            src={userImage}
            alt="userImage"
          />
        }
        content={
          <p className='comment-content'>
            {content}
          </p>
        }
      />    
    );
}