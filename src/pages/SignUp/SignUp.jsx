import React from "react";
import './SignUp.css'
import but from './../../images/HideShow.svg'
import {fetchSignUp} from "../../utils/newApi";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const SignUp = () => {
  const loggedIn = useSelector(store => store.token.isSignIn);
  const [type, setType] = React.useState(true);
  const handleSetType = () => setType(!type);
  const history = useNavigate()
  const [formValuesSignUp, setFormValuesSignUp] = React.useState({
    name: '',
    email: '',
    password: '',
    avatar: 'https://cdn.icon-icons.com/icons2/1130/PNG/512/questionincircularbutton_80033.png'
  });
  const [formValiditySignUp, setFormValiditySignUp] = React.useState({
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    passwordRepeat: false
  });
  const {nameValid, emailValid, passwordValid} = formValiditySignUp;

  /* setFormValiditySignUp(prevValidity => ({
     nameValid: formValuesSignUp.name,
     emailValid: formValuesSignUp.email,
     passwordValid: formValuesSignUp.password,
   }))*/
  const passwordRepeat = ''

  function signUp(e) {
    console.log('signUp')
    e.preventDefault();
    fetchSignUp(formValuesSignUp).then(() => {
      history('/sign-in')
    }).catch((err) => {
      console.log(err)
    })
  }

  React.useEffect(() => {
    if (loggedIn) {
      history('/profile')
    }
  }, [loggedIn])

  const isSubmitDisabled = !nameValid || !emailValid || !passwordValid;
  const handleInputChange = React.useCallback((e) => {
    const {id, value} = e.target;
    setFormValuesSignUp(prevState => ({...prevState, [id]: value}));
  }, [setFormValuesSignUp])

  return (
    <div className='sign-up'>
      <form onSubmit={signUp} className='sign-up__form'>
        <h2 className='sign-up__title'>Регистрация</h2>
        <h3 className='sign-up__name-input'>Имя</h3>
        <input
          className='sign-up__input'
          value={formValuesSignUp.name}
          onChange={handleInputChange}
          placeholder='Артур'
          type="text"
          id="name"
          pattern="[a-zA-Zа-яА-Я0-9ё\-\s]{2,}"
        ></input>
        {!nameValid && <span className='sign-up__error-message' id="error-name">Ошибка</span>}
        <h3 className='sign-up__name-input'>Электронная почта</h3>
        <input
          className='sign-up__input'
          value={formValuesSignUp.email}
          onChange={handleInputChange}
          placeholder='example@mail.ru'
          type="text"
          id="email"
          pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
        ></input>
        {!emailValid &&
          <span className='sign-up__error-message sign-up__error-message_visible' id="error-email">Ошибка</span>}
        <h3 className='sign-up__name-input'>Пароль</h3>
        <div className="sign-up__input-box">
          <input
            className='sign-up__input'
            value={formValuesSignUp.password}
            onChange={handleInputChange}
            placeholder='******'
            type={type ? "password" : "text"}
            id="password"
            pattern="[a-zA-Zа-яА-Я0-9ё\-\s]{2,}"
          ></input>
          <button className='sign-up__input-button' onClick={handleSetType}>
            <img className='sign-up__input-button-img' src={but}/>
          </button>
        </div>
        {!passwordValid && <span className='sign-up__error-message' id="error-password">Ошибка</span>}
        <h3 className='sign-up__name-input'>Подтвердите пароль</h3>
        <div className="sign-up__input-box">
          <input
            className='sign-up__input'
            placeholder='******'
            type={type ? "password" : "text"}
            id="repeat-password"
            value={passwordRepeat}
          ></input>
          <button className='sign-up__input-button-repeat' onClick={handleSetType}>
            <img className='sign-up__input-button-img-repeat' src={but}/>
          </button>
        </div>
        {passwordRepeat !== passwordValid &&
          <span className='sign-up__error-message' id="error-repeat-password">Ошибка</span>}
        <button disabled={!isSubmitDisabled} type='submit' className="sign-up__button">Зарегистрироваться</button>
      </form>

    </div>
  );
};