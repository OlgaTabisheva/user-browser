import React from "react";
import './../SignUp/SignUp.css'
import './SignIn.css'
import but from './../../images/HideShow.svg'
import {fetchSignIn} from "../../utils/newApi";
import {tokenFetched} from "../../store/slices/tokenSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

export const SignIn = () => {
  const loggedIn = useSelector(store => store.token.isSignIn);
  const [type, setType] = React.useState(true);
  const dispatch = useDispatch();
  const history = useNavigate()
  const handleSetType = () => setType(!type);
  const [formValuesSignIn, setFormValuesSignIn] = React.useState({
    email: '',
    password: '',
  });
  React.useEffect(() => {
    if (loggedIn) {
      history('/profile')
    }
  }, [loggedIn])

  function signIn(e) {
    console.log('signIn')
    e.preventDefault();
    fetchSignIn(formValuesSignIn).then(res => {
      dispatch(tokenFetched(res.data));
      console.log(res.data)
      history('/profile')
    }).catch()
  }

  /*  const isSubmitDisabled = !nameValid || !emailValid || !passwordValid || passwordInput!==passwordRepeatInput;*/
  const handleInputChange = React.useCallback((e) => {
    const {id, value} = e.target;
    setFormValuesSignIn(prevState => ({...prevState, [id]: value}));
  }, [setFormValuesSignIn])
  return (
    <div className='sign-up'>
      <form onSubmit={signIn} className='sign-up__form'>
        <h2 className='sign-up__title'>Авторизация</h2>
        <h3 className='sign-up__name-input'>Электронная почта</h3>
        <input className='sign-up__input' value={formValuesSignIn.email} onChange={handleInputChange}
               placeholder='example@mail.ru' type="text" id="email"></input>
        <span className='sign-up__error-message sign-up__error-message_visible' id="error-email">Ошибка</span>
        <h3 className='sign-up__name-input'>Пароль</h3>
        <div className="sign-up__input-box">
          <input className='sign-up__input' value={formValuesSignIn.password} onChange={handleInputChange}
                 placeholder='******' type={type ? "password" : "text"} id="password"></input>
          <button className='sign-up__input-button sign-in__input-button' onClick={handleSetType}>
            <img className='sign-up__input-button-img' src={but}/>
          </button>
        </div>
        <span className='sign-up__error-message' id="error-password">Ошибка</span>
        <h3 className='sign-up__name-input'>Подтвердите пароль</h3>
        <div className="sign-up__input-box">
          <input className='sign-up__input' placeholder='******' type={type ? "password" : "text"}
                 id="repeat-password"></input>
          <button className='sign-up__input-button-repeat sign-in__input-button-repeat' onClick={handleSetType}>
            <img className='sign-up__input-button-img-repeat ' src={but}/>
          </button>
        </div>
        <span className='sign-up__error-message' id="error-repeat-password">Ошибка</span>
        <button type='submit' className="sign-up__button">Вход</button>
<Link to='/sign-up'>
  <button type='button' className="sign-up__button">Вы еще не зарегистрировались?</button>
</Link>

      </form>

    </div>
  );
};