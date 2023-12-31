import React from "react";
import './../SignUp/SignUp.css'
import './SignIn.css'
import but from './../../images/HideShow.svg'
import {fetchSignIn} from "../../utils/Api";
import {tokenFetched} from "../../store/slices/tokenSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

export const SignIn = ({setShow}) => {
  const loggedIn = useSelector(store => store.token.isSignIn);
  const [type, setType] = React.useState(true);
  const dispatch = useDispatch();
  const history = useNavigate()
  const handleSetType = () => setType(!type);
  const [formValuesSignIn, setFormValuesSignIn] = React.useState({
    email: '',
    password: '',
  });
  const [formValiditySignIn, setFormValiditySignIn] = React.useState({
    emailValid: false,
    passwordValid: false,
  });
  const {emailValid, passwordValid} = formValiditySignIn;
  const isSubmitDisabled = !emailValid || !passwordValid;

  function signIn(e) {
    e.preventDefault();
    fetchSignIn(formValuesSignIn).then(res => {
      dispatch(tokenFetched(res));
    }).catch((res) => {
      setShow(true)
    })
  }

  React.useEffect(() => {
    if (loggedIn) {
      history('/profile')
    }
  }, [loggedIn])


  const handleInputChange = React.useCallback((e) => {
    const {id, value} = e.target;
    setFormValuesSignIn(prevState => ({...prevState, [id]: value}));
  }, [setFormValuesSignIn])

  React.useEffect(function validateInputs() {
    const emailTest = /\S+@\S+\.\S+/;
    const isEmailInputFilled = formValuesSignIn.email.length > 4
    const isEmail = emailTest.test(formValuesSignIn.email)
    const isEmailInputValid = isEmailInputFilled && isEmail
    const isPasswordInputFilled = formValuesSignIn.password.length >= 5
    const isPasswordInputValid = isPasswordInputFilled
    setFormValiditySignIn(prevValidity => ({
      emailValid: isEmailInputValid,
      passwordValid: isPasswordInputValid
    }))
  }, [formValuesSignIn, setFormValiditySignIn])

  return (
    <div className='sign-up'>
      <form onSubmit={signIn} className='sign-up__form'>
        <h2 className='sign-up__title'>Авторизация</h2>
        <h3 className='sign-up__name-input'>Электронная почта</h3>
        <input
          value={formValuesSignIn.email}
          onChange={handleInputChange}
          placeholder='example@mail.ru'
          type="text"
          id="email"
          className={!emailValid ? 'sign-up__input sign-up__input-invalid' : ' sign-up__input '}
        ></input>
        <span
          className={!emailValid ? 'sign-up__error-message sign-up__error-message_visible' : 'sign-up__error-message'}
          id="error-email">Ошибка</span>
        <h3 className='sign-up__name-input'>Пароль</h3>
        <div className="sign-up__input-box">
          <input
            value={formValuesSignIn.password}
            onChange={handleInputChange}
            placeholder='******'
            type={type ? "password" : "text"}
            id="password"
            className={!passwordValid ? 'sign-up__input sign-up__input-invalid' : ' sign-up__input '}
          ></input>
          <button type='button' className='sign-up__input-button sign-in__input-button' onClick={handleSetType}>
            <img className='sign-up__input-button-img' src={but}/>
          </button>
        </div>
        <span
          className={!passwordValid ? 'sign-up__error-message sign-up__error-message_visible' : 'sign-up__error-message'}
          id="error-password">Ошибка</span>
        <button disabled={isSubmitDisabled} type='submit' className="sign-up__button">Вход</button>
        <Link to='/sign-up'>
          <button type='button' className="sign-up__button">Вы еще не зарегистрировались?</button>
        </Link>
      </form>
    </div>
  );
};