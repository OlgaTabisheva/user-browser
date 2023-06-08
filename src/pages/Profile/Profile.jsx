import './Profile.css';
import {ProfileHeader} from "../../components/ProfileHeader/ProfileHeader";
import React from "react";
import {CardGallery} from "../../components/CardGallery/CardGallery";


export const Profile = ({users,setUsers, user, setUser}) => {
  return (
    <div className='profile'>
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
