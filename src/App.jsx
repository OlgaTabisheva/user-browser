import React from 'react';
import './App.css';
import {Profile} from "./pages/Profile/Profile";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Partner} from "./pages/Partner/Partner";
import {SignUp} from "./pages/SignUp/SignUp";
import {NotFound} from "./pages/NotFound/NotFound";
import {useDispatch} from "react-redux";
import {fetchUsers} from "./utils/newApi";
import {setError, usersFetched} from "./store/slices/userSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import {SignIn} from "./pages/SignIn/SignIn";

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [token, setToken] = React.useState('')
  React.useEffect(() => {
    const jwt = localStorage.getItem('JWT')
    if (jwt) {
      setToken(jwt);
      setIsLoggedIn(true)
    }
  }, [])
  React.useEffect(() => {
    fetchUsers().then(res => {
      dispatch(usersFetched(res));
    })
      .catch(dispatch(setError()))
  }, []);

  React.useEffect(() => {
   console.log(isLoggedIn, token)
  }, [isLoggedIn])

  return (
    <div className="App">
      <Routes>
        <Route path='/sign-in' element={<SignUp
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
        />}/>
        <Route path='/sign-in' element={<SignIn
          setIsLoggedIn={setIsLoggedIn}
          isLoggedIn={isLoggedIn}

        />}/>
        <Route exact path="/" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
         <Profile/>
          </ProtectedRoute>
        }/>
        <Route exact path="/partner" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
          <Partner/>
          </ProtectedRoute>
        }/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
