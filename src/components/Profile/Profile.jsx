import React from 'react';
import style from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Ava from "./Ava/Ava";

const Profile = () => {
    return (
        <div className={style.content}>
            <Ava/>
            <MyPosts />
        </div>
    )
}

export default Profile;