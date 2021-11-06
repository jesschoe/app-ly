import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth';
import MainContainer from './containers/MainContainer';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const user = await verifyUser();
      setUser(user);
    }
    handleVerify();
  }, [])

  const handleLogin = async (formData) => {
    const user = await loginUser(formData);
    setUser(user);
    history.push('/jobs/all/board')
  }

  const handleRegister = async (formData) => {
    const user = await registerUser(formData);
    setUser(user);
    history.push('/jobs/all/board')
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
          <SignUp handleRegister={handleRegister} />
        </Route>
        <Route path='/jobs'>
          <MainContainer user={user} handleLogout={handleLogout} />
        </Route>
        <Route exact path='/'>
          {!user? <SignIn handleLogin={handleLogin} /> : <Redirect to='/jobs/all/board'/>}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
