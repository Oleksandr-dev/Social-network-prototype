import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.myPostsData.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    const addPost =()=>{
        //let text = newPostElement.current.value;
        props.addPost()

    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.changeNewPostMessage(text)
        console.log(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                        value={props.newPostMessage}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;