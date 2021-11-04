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

const SignUpForm = styled.form`
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

const SignUpInput = styled.input`
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

export default function SignUp({ handleRegister }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  })
  const { username, email, password, confirm_password } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Container>
      <SignUpForm onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }} >
        <InputGroup>
          <label>Username</label>
          <SignUpInput
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label>Email</label>
          <SignUpInput
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label>Password</label>
          <SignUpInput
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label>Confirm Password</label>
          <SignUpInput
            name="confirm_password"
            type="password"
            value={confirm_password}
            onChange={handleChange}
          />
        </InputGroup>
        
        <Button>Login</Button>
        <Link to="/">Sign In</Link>
      </SignUpForm>
    </Container>
  )
}
