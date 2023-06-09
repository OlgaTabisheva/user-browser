import './Card.css'
import {useSelector} from "react-redux";

export const Card = ({name, avatar}) => {
  return (
    <div className='card'>
      <div className='card__box'>
        <img className='card__image' src={avatar}/>
        <p className='card__name'>{name}</p>
      </div>
      <button className='card__like'>
      </button>
    </div>
  );
};
