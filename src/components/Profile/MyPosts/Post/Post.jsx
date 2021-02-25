import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://i.pinimg.com/originals/0f/ad/d5/0fadd5465b3520e06f61d69a951ae60d.jpg'/>
            {props.message}
            <div>
                <span>{`Like ${props.likeCount}`}</span>
            </div>
        </div>
    )
}

export default Post;