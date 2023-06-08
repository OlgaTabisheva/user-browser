import React from 'react';
import './App.css';
import {Profile} from "./pages/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {Partner} from "./pages/Partner/Partner";
import {SignUp} from "./pages/SignUp/SignUp";
import {NotFound} from "./pages/NotFound/NotFound";

function App() {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState([]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Profile
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
        />}/>
        <Route path='/partner' element={<Partner/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>

    </div>
  );
}

export default App;
