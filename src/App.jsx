import React from 'react';
import './App.css';
import {Profile} from "./pages/Profile/Profile";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Partner} from "./pages/Partner/Partner";
import {SignUp} from "./pages/SignUp/SignUp";
import {NotFound} from "./pages/NotFound/NotFound";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "./utils/newApi";
import {setError, usersFetched} from "./store/slices/userSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import {SignIn} from "./pages/SignIn/SignIn";
import {tokenFetched} from "./store/slices/tokenSlice";
import {Modal} from "./components/Modal/Modal";

function App() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector(store => store.token.isSignIn);
  const [show, setShow] = React.useState(false);

  function closeModal(){
    setShow(false)
  }

  React.useEffect(() => {
    if (loggedIn) {
      fetchUsers().then(res => {
        dispatch(usersFetched(res));
      })
        .catch(dispatch(setError()))
    }
  }, [fetchUsers, loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      history('/profile')
    }
  }, [loggedIn])
  React.useEffect(() => {
    const jwt = localStorage.getItem('JWT')
    if (jwt) {
      dispatch(tokenFetched(jwt));
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn setShow={setShow}/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route exact path="/profile" element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>}/>
        <Route exact path="/partner/:id" element={
          <ProtectedRoute>
            <Partner/>
          </ProtectedRoute>
        }/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <Modal
        show={show}
        setShow={setShow}
        closeModal={closeModal}
        modalText={'Неправильный логин или пароль.'}
        modalTitle={'Внимание, произошла ошибка.'}/>
    </div>
  );
}

export default App;
