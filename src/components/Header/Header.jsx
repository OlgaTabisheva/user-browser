import './Header.css'
import {Link, Navigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logOut} from "../../store/slices/tokenSlice";

export const Header = ({isBtn}) => {
  const dispatch = useDispatch();

  function handleLoggedOff() {
    dispatch(logOut())
  }

  return (
    <div className={isBtn ? 'header' : "header__res"}>
      {isBtn &&
        <Link to='/profile'>
          <button className='header__button'>Назад</button>
        </Link>
      }
      <button onClick={() => handleLoggedOff()} className='header__button'>Выход</button>
    </div>
  );
};

