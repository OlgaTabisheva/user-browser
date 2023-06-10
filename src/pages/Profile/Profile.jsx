import './Profile.css';
import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";
import React from "react";
import {CardGallery} from "../../components/CardGallery/CardGallery";
import {Header} from "../../components/Header/Header";

export const Profile = ({users, setUsers, user, setUser}) => {
  return (
    <div className='profile'>
      <Header isBtn={false}/>
      <ProfileHeader/>
      <CardGallery
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
      />
    </div>
  );
};
