import './PartnerHeader.css'

export const PartnerHeader = ({partner}) => {


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