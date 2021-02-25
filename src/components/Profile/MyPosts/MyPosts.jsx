import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post message="Hi, it's me!" likeCount={20}/>
                <Post message="It's my first post" likeCount={50}/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts;