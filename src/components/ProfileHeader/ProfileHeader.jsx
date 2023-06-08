import './ProfileHeader.css'
import {Header} from "../Header/Header";

export const ProfileHeader = () => {
  return (
    <section>

      <Header/>
      <div className='profile-header'>
        <h1 className='profile-header__title'>Наша команда</h1>
        <p className='profile-header__text'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</p>
      </div>
    </section>
  );
};
