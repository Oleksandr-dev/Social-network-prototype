import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src='https://i.pinimg.com/originals/0f/ad/d5/0fadd5465b3520e06f61d69a951ae60d.jpg'/>
            {props.message}
            <div>
                <span>{`Like ${HowManyLikes(props.likeCount)}`}</span>
            </div>
        </div>
    )
}

const HowManyLikes = (likes) =>{
    if(likes === undefined){
        return 0
    }
    else {
        return likes
    }
}

export default Post;