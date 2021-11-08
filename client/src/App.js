import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth';
import MainContainer from './containers/MainContainer';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    try {
      const user = await loginUser(formData);
      setUser(user);
      setErrorMsg('')
      history.push('/jobs/all/board')
    } catch (error) {
      console.log(error)
      setErrorMsg('Invalid login credentials')
    }
  }

  const handleRegister = async (formData) => {
    try {
      const user = await registerUser(formData);
      setUser(user)
      setErrorMsg('')
      history.push('/jobs/all/board')
    } catch (error) {
      console.log(error)
      setErrorMsg('Sign up details invalid')
    }
  }

  const renderError = () => {
    if (errorMsg.length > 3) {
      return (
        <div>
          {errorMsg}
        </div>
      )
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    setUser(null);
    history.push('/')
  }
  return (
    <div className="App">
      <Switch>
        <Route path='/signup'>
          <SignUp handleRegister={handleRegister} renderError={renderError}/>
        </Route>
        <Route path='/jobs'>
          {user && 
          <MainContainer user={user} handleLogout={handleLogout} />}
        </Route>
        <Route exact path='/'>
          {!user? 
            <SignIn handleLogin={handleLogin} renderError={renderError}/> : 
            <Redirect to='/jobs/all/board'/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
