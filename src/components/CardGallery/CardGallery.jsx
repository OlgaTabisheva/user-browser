import React, {useEffect} from "react";
import './CardGallery.css'
import {Card} from "../Card/Card";
import more from '../../images/ShowMore.svg'
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
export const CardGallery = () => {
  const use = useSelector(store => store.users);


  return (
    <div className='card-gallery'>
      <div className='card-gallery__box'>
        {use.users?.map((obj) => (
          <Link to='/partner'>
            <Card
              key={obj.id} {...obj}/>
          </Link>
        ))}
      </div>
      <button className='card-gallery__button'>Показать еще
        <img className='card-gallery__button-image' src={more}/>
      </button>
    </div>

  );
};
