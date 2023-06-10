import './Partner.css'
import {PartnerHeader} from "../../components/PartnerHeader/PartnerHeader";
import mail from "../../images/Mail.svg";
import phone from "../../images/Phone.svg";
import {Header} from "../../components/Header/Header";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";

export const Partner = () => {
  const partners = useSelector(store => store.users.users);
  const {id} = useParams();
  const partner = partners.find(elem => elem.id === Number(id));

  return (
    <section className='partner'>
      <Header
        isBtn={true}
      />
      <PartnerHeader partner={partner}/>
      <div className='partner__box'>
        <div className='partner__description'>
          {partner?.description}
        </div>
        <div className='partner__contacts'>
          <div className='partner__contact'>
            <img className='partner__image' src={phone}/>
            <p className='partner__text'>{partner?.phone}</p>
          </div>
          <div className='partner__contact'>
            <img className='partner__image' src={mail}/>
            <p className='partner__text'>{partner?.email}</p>
          </div>

        </div>
      </div>
    </section>
  );
};