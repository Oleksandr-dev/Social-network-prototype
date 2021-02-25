import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id:1, message:"Hi, it's me!", likeCount:20},
        {id:2, message:"It's my first post", likeCount:30},
        {id:3, message:"3 post", likeCount:40},
        {id:4, message:"4 post", likeCount:50},
    ]

    let postsElements = postsData.map( p => <Post message={p.message} likeCount={p.likeCount}/>)


    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;