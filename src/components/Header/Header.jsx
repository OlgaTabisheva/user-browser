import './Header.css'
import {Link} from "react-router-dom";
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
        <div>
          <Link to='/profile'>
            <button className='header__button-return_mobile'/>
          </Link>
          <Link to='/profile'>
            <button className='header__button'>Назад</button>
          </Link>
        </div>
      }

      <div>
        <button onClick={() => handleLoggedOff()} className='header__button'>Выход</button>
        <button onClick={() => handleLoggedOff()} className='header__button-exit_mobile'></button>
      </div>

    </div>
  );
};

