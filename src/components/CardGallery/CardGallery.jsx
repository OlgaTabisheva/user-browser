import React from "react";
import './CardGallery.css'
import {Card} from "../Card/Card";
import more from '../../images/ShowMore.svg'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {addMoreUsers} from "../../store/slices/userSlice";

export const CardGallery = () => {
  const dispatch = useDispatch();
  const use = useSelector(store => store.users);

  function handleShowMore() {
    dispatch(addMoreUsers())
  }

  const buttonHidden = use.viewCounter >= use.users.length;
  return (
    <div className='card-gallery'>
      <div className='card-gallery__box'>
        {use.viewUsers?.map((obj) => (
          <Link to={`/partner/${obj.id}`} key={obj.id}>
            <Card
              key={obj.id} {...obj}/>
          </Link>
        ))}
      </div>
      {!buttonHidden && <button onClick={() => handleShowMore()} className='card-gallery__button'>Показать еще
        <img className='card-gallery__button-image' src={more}/>
      </button>}

    </div>

  );
};
