import {Header} from "../Header/Header";
import user from "../../images/ArturKorolev.svg";
import './PartnerHeader.css'

export const PartnerHeader = () => {
  return (
    <section>
      <div className='partner-header'>
        <img className='partner-header__image' src={user}/>
        <div className='partner-header__box'>
          <h1 className='partner-header__title'>Артур Королев</h1>
          <p className='partner-header__text'>Партнер</p>
        </div>

      </div>
    </section>
  );
};