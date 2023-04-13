import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "./MyPosts/Posts/Posts";

type ProfileType = {
    posts: Array<PostsType>
}

const Profile: React.FC<ProfileType>  = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;