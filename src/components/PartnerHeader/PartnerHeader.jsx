import {Header} from "../Header/Header";
import user from "../../images/ArturKorolev.svg";
import './PartnerHeader.css'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export const PartnerHeader = () => {

  const partners = useSelector(store => store.users.users);
  const {id} = useParams();

  const partner = partners.find(elem => elem.id === id);
  return (
    <section>
      <div className='partner-header'>
        <img className='partner-header__image' src={partner.avatar}/>
        <div className='partner-header__box'>
          <h1 className='partner-header__title'>{partner.name}</h1>
          <p className='partner-header__text'>{partner.role}</p>
        </div>

      </div>
    </section>
  );
};