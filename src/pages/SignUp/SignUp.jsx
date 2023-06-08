import React from "react";
import './SignUp.css'
import but from './../../images/HideShow.svg'
export const SignUp = () => {
  const [ type, setType ] = React.useState(true);
  const handleSetType = () => setType(!type);
  return (
    <div className='sign-up'>
      <form className='sign-up__form'>
        <h2 className='sign-up__title' >Регистрация</h2>
        <h3 className='sign-up__name-input' >Имя</h3>
        <input className='sign-up__input' placeholder='Артур' type="text" id="name" ></input>
        <span className='sign-up__error-message' id="error-name">Ошибка</span>
        <h3 className='sign-up__name-input'  >Электронная почта</h3>
        <input className='sign-up__input' placeholder='example@mail.ru' type="text" id="email" ></input>
        <span className='sign-up__error-message sign-up__error-message_visible' id="error-email">Ошибка</span>
        <h3 className='sign-up__name-input' >Пароль</h3>
        <div className="sign-up__input-box">
          <input className='sign-up__input' placeholder='******' type={type ? "password" : "text"} id="password" ></input>
          <button className='sign-up__input-button' onClick={handleSetType}>
            <img className='sign-up__input-button-img' src={but}/>
          </button>
        </div>
        <span className='sign-up__error-message'  id="error-password">Ошибка</span>
        <h3 className='sign-up__name-input' >Подтвердите пароль</h3>
        <div className="sign-up__input-box">
          <input className='sign-up__input' placeholder='******' type={type ? "password" : "text"}  id="repeat-password" ></input>
          <button className='sign-up__input-button-repeat' onClick={handleSetType}>
            <img className='sign-up__input-button-img-repeat' src={but}/>
          </button>
        </div>
        <span className='sign-up__error-message'  id="error-repeat-password">Ошибка</span>
        <button type='submit' className="sign-up__button">Зарегестрироваться</button>
      </form>

    </div>
  );
};