import './NotFound.css'
import {Link} from "react-router-dom";


export const NotFound = () => {
  return (
    <div className='not-found'>
      <div className='not-found__title'>Ошибка 404</div>
      <div className='not-found__text'>Такой страницы не существует.</div>
      <Link to="/">
        <button className='not-found__button' type="button">Вернутся на главную</button>
      </Link>
    </div>
  );
};