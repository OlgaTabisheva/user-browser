import React from "react";
import './SignUp.css'
import but from './../../images/HideShow.svg'
import {fetchSignUp} from "../../utils/newApi";
import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

export const SignUp = () => {
  const loggedIn = useSelector(store => store.token.isSignIn);
  const [type, setType] = React.useState(true);
  const handleSetType = () => setType(!type);
  const history = useNavigate();
  const [formValuesSignUp, setFormValuesSignUp] = React.useState({
    name: '',
    email: '',
    password: '',
    avatar: 'https://cdn.icon-icons.com/icons2/1130/PNG/512/questionincircularbutton_80033.png',
    passwordRepeat: ''
  });
  const [formValiditySignUp, setFormValiditySignUp] = React.useState({
    nameValid: false,
    emailValid: false,
    passwordValid: false,
    passwordValidRepeat: false
  });
  const {nameValid, emailValid, passwordValid, passwordValidRepeat} = formValiditySignUp;
  const isSubmitDisabled = !nameValid || !emailValid || !passwordValid || !passwordValidRepeat;

  function signUp(e) {
    e.preventDefault();
    fetchSignUp(formValuesSignUp).then(() => {
      history('/')
    }).catch((err) => {
      console.log(err)
    })
  }

  React.useEffect(() => {
    if (loggedIn) {
      history('/profile')
    }
  }, [loggedIn])

  const handleInputChange = React.useCallback((e) => {
    console.log(e.target)
    const {id, value} = e.target;
    setFormValuesSignUp(prevState => ({...prevState, [id]: value}));
  }, [setFormValuesSignUp])

  React.useEffect(function validateInputs() {
    const isNameInputFilled = formValuesSignUp.name.length > 2
    const isNameInputValid = isNameInputFilled
    const emailTest = /\S+@\S+\.\S+/;
    const isEmailInputFilled = formValuesSignUp.email.length > 4
    const isEmail = emailTest.test(formValuesSignUp.email)
    const isEmailInputValid = isEmailInputFilled && isEmail
    const isPasswordInputFilled = formValuesSignUp.password.length >= 5
    const isPasswordInputValid = isPasswordInputFilled
    const isPasswordRepeat = formValuesSignUp.password === formValuesSignUp.passwordRepeat
    setFormValiditySignUp(prevValidity => ({
      nameValid: isNameInputValid,
      emailValid: isEmailInputValid,
      passwordValid: isPasswordInputValid,
      passwordValidRepeat: isPasswordRepeat
    }))
  }, [formValuesSignUp, setFormValuesSignUp])

  return (
    <div className='sign-up'>
      <form onSubmit={signUp} className='sign-up__form'>
        <h2 className='sign-up__title'>Регистрация</h2>
        <h3 className='sign-up__name-input'>Имя</h3>
        <input
          value={formValuesSignUp.name}
          onChange={handleInputChange}
          placeholder='Артур'
          type="text"
          id="name"
          className={ !nameValid ? 'sign-up__input sign-up__input-invalid' : ' sign-up__input ' }
        ></input>
        <span className={!nameValid ? 'sign-up__error-message sign-up__error-message_visible' : 'sign-up__error-message' } id="error-name">Ошибка</span>
        <h3 className='sign-up__name-input'>Электронная почта</h3>
        <input
          value={formValuesSignUp.email}
          onChange={handleInputChange}
          placeholder='example@mail.ru'
          type="text"
          id="email"
          className={ !emailValid ? 'sign-up__input sign-up__input-invalid' : ' sign-up__input ' }
        ></input>
        <span className={ !emailValid ? 'sign-up__error-message sign-up__error-message_visible': 'sign-up__error-message' } id="error-email">Ошибка</span>
        <h3 className='sign-up__name-input'>Пароль</h3>
        <div className="sign-up__input-box">
          <input
            value={formValuesSignUp.password}
            onChange={handleInputChange}
            placeholder='******'
            type={type ? "password" : "text"}
            id="password"
            className={ !passwordValid ? 'sign-up__input sign-up__input-invalid' : ' sign-up__input ' }
          ></input>
          <button className='sign-up__input-button' onClick={handleSetType}>
            <img className='sign-up__input-button-img' src={but}/>
          </button>
        </div>
        <span className={ !passwordValid ? 'sign-up__error-message sign-up__error-message_visible': 'sign-up__error-message' } id="error-password">Ошибка</span>
        <h3 className='sign-up__name-input'>Подтвердите пароль</h3>
        <div className="sign-up__input-box">
          <input
            value={formValuesSignUp.passwordRepeat}
            onChange={handleInputChange}
            placeholder='******'
            type={type ? "password" : "text"}
            id="passwordRepeat"
            className={ !passwordValidRepeat ? 'sign-up__input sign-up__input-invalid' : 'sign-up__input' }
          ></input>
          <button className='sign-up__input-button-repeat' onClick={handleSetType}>
            <img className='sign-up__input-button-img-repeat' src={but}/>
          </button>
        </div>
          <span className= {!passwordValidRepeat  ? 'sign-up__error-message sign-up__error-message_visible': 'sign-up__error-message' } id="error-repeat-password">Пароли не совпадают</span>
        <button disabled={isSubmitDisabled} type='submit' className="sign-up__button">Зарегистрироваться</button>
        <Link to='/'>
          <button type='button' className="sign-up__button">Вы уже зарегестировались?</button>
        </Link>
      </form>
    </div>
  );
};