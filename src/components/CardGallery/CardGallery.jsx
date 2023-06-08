import React, {useEffect} from "react";
import './CardGallery.css'
import {Card} from "../Card/Card";
import more from '../../images/ShowMore.svg'
import {api} from "../../utils/Api";
import {useSelector} from "react-redux";
import {fetchUsers} from "../../store/actions/userActions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
export const CardGallery = ({users,setUsers}) => {
  const dispatch = useDispatch();
 React.useEffect(() => {
    api.getUsers(setUsers)
  }, [setUsers]);

  dispatch(fetchUsers());
  const use = useSelector(store => store.users);
  React.useEffect(() => {
    console.log(use)
  }, []);
  return (
    <div className='card-gallery'>
      <div className='card-gallery__box'>
        {users?.map((obj) => (
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
