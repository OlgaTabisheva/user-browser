import React from 'react';
import './App.css';
import {Profile} from "./pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Partner} from "./pages/Partner/Partner";
import {SignUp} from "./pages/SignUp/SignUp";
import {NotFound} from "./pages/NotFound/NotFound";
import {useDispatch, useSelector} from "react-redux";
import {fetchSignUp, fetchUsers, signUp} from "./utils/newApi";
import {setError, usersFetched} from "./store/slices/userSlice";
import ProtectedRoute from "./utils/ProtectedRoute";
import {setErrorSignUp, setSignUp} from "./store/slices/signUpSlice";

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    fetchUsers().then(res=> {
      console.log(res)
      dispatch(usersFetched(res));
    })
      .catch(dispatch(setError()))
  }, []);


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignUp
          setIsLoggedIn={setIsLoggedIn}
        />}/>
        <Route element={
                 <ProtectedRoute isLoggedIn={isLoggedIn}>
                   <Route path='/profile' element={<Profile/>}/>
                   <Route path='/partner' element={<Partner/>}/>
                 </ProtectedRoute>
               }
        />
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
