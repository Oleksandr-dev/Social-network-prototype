import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.myPostsData.map( p => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef();

    const addPost =()=>{
        const action ={
            type: 'ADD-POST',
        }
        //let text = newPostElement.current.value;
        props.dispatch(action)

    }
    const onPostChange = () => {
        let text = newPostElement.current.value;
        const action = {
            type: 'CHANGE-NEW-POST-TEXT',
            newText: text,
        }
        props.dispatch(action)
        console.log(text)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                        value={props.newPostText}
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