import './Card.css'
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {setLike} from "../../store/slices/likeSlice";

export const Card = ({name, avatar, id}) => {

  const likes = useSelector(store => store.likes.likes);
  const dispatch = useDispatch();
  function handleClickLike(e) {
    dispatch(setLike(id))
    e.preventDefault()

  }

  return (
    <div className='card'>
      <div className='card__box'>
        <img className='card__image' src={avatar}/>
        <p className='card__name'>{name}</p>
      </div>
      <button className={(likes.includes(id)) ? 'card__like card__like_active' : 'card__like'}
              onClick={handleClickLike}>
      </button>
    </div>
  );
};
