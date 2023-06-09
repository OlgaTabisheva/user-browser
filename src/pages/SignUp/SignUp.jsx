import React from "react";
import './SignUp.css'
import but from './../../images/HideShow.svg'
import {fetchSignUp} from "../../utils/newApi";
import {useNavigate} from "react-router-dom";
export const SignUp = ({setIsLoggedIn, isLoggedIn}) => {
  const [ type, setType ] = React.useState(true);
  const handleSetType = () => setType(!type);
  const history = useNavigate()
  const [formValuesSignUp, setFormValuesSignUp] = React.useState({
    name: '',
    email: '',
    password: '',
    avatar: 'https://cdn.icon-icons.com/icons2/1130/PNG/512/questionincircularbutton_80033.png'
  });
  function signUp(e) {
    console.log('signUp')
    e.preventDefault();
    fetchSignUp(formValuesSignUp).then(()=> {
      history('/sign-ip')
    }).catch((err)=>{ console.log(err)})
  }
/*  const isSubmitDisabled = !nameValid || !emailValid || !passwordValid || passwordInput!==passwordRepeatInput;*/
  const handleInputChange = React.useCallback((e) => {
    console.log(e.target)
    const {id, value} = e.target;
    console.log(id, value)
    setFormValuesSignUp(prevState => ({...prevState, [id]: value}));
  }, [setFormValuesSignUp])

  React.useEffect(()=>{
    if (isLoggedIn) {
      console.log(isLoggedIn)
      history('/profile')
    }
  },[isLoggedIn])
  return (
    <div className='sign-up'>
      <form onSubmit={signUp} className='sign-up__form'>
        <h2 className='sign-up__title' >Регистрация</h2>
        <h3 className='sign-up__name-input' >Имя</h3>
        <input className='sign-up__input'  value={formValuesSignUp.name} onChange={handleInputChange} placeholder='Артур' type="text" id="name" ></input>
        <span className='sign-up__error-message' id="error-name">Ошибка</span>
        <h3 className='sign-up__name-input'  >Электронная почта</h3>
        <input className='sign-up__input' value={formValuesSignUp.email} onChange={handleInputChange} placeholder='example@mail.ru' type="text" id="email" ></input>
        <span className='sign-up__error-message sign-up__error-message_visible' id="error-email">Ошибка</span>
        <h3 className='sign-up__name-input' >Пароль</h3>
        <div className="sign-up__input-box">
          <input className='sign-up__input' value={formValuesSignUp.password} onChange={handleInputChange} placeholder='******' type={type ? "password" : "text"} id="password" ></input>
          <button className='sign-up__input-button' onClick={handleSetType}>
            <img className='sign-up__input-button-img' src={but}/>
          </button>
        </div>
        <span className='sign-up__error-message' id="error-password">Ошибка</span>
        <h3 className='sign-up__name-input' >Подтвердите пароль</h3>
        <div className="sign-up__input-box">
          <input className='sign-up__input' placeholder='******' type={type ? "password" : "text"}  id="repeat-password" ></input>
          <button className='sign-up__input-button-repeat' onClick={handleSetType}>
            <img className='sign-up__input-button-img-repeat' src={but}/>
          </button>
        </div>
        <span className='sign-up__error-message' id="error-repeat-password">Ошибка</span>
        <button type='submit' className="sign-up__button">Зарегистрироваться</button>
      </form>

    </div>
  );
};