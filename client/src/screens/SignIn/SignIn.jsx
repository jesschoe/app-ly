import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFF4EE;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-size: .7em;
  justify-content: center;
  letter-spacing: 1.5px;
  align-items: center;
  width: 100vw;
  height: 100vh;
` 

const SignInForm = styled.form`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  width: 400px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 10px 20px;
`

const SignInInput = styled.input`
  padding: 10px;
  width: 200px;
`

const Button = styled.button`
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  font-size: 1em;
  padding: 7px 20px;
  text-transform: uppercase;
  align-self: center;
  margin: 20px;
  cursor: pointer;
`

export default function SignIn({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const { username, password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Container>
      <SignInForm onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }} >
        <InputGroup>
          <label for='username'>Username</label>
          <SignInInput
            id='username'
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label for='password'>Password</label>
          <SignInInput
            id='password'
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </InputGroup>
        
        <Button>Sign In</Button>
        <Link to="/signup">Create an account</Link>
      </SignInForm>
    </Container>
  )
}
