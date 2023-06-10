import React from 'react'
import {Navigate} from 'react-router-dom'
import {useSelector} from "react-redux";

function ProtectedRoute({children}) {
  const loggedIn = useSelector(store => store.token.isSignIn);
  if (!loggedIn) {
    return <Navigate to="/" replace/>
  }
  return children
}

export default ProtectedRoute