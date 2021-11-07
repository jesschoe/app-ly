import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  align-items: center;
  background-color: #FFF4EE;
  display: flex;
  flex-direction: column;
  font-family: 'Raleway', sans-serif;
  font-size: .7em;
  height: 100vh;
  justify-content: center;
  letter-spacing: 1.5px;
  width: 100vw;
` 
const SignInForm = styled.form`
  align-items: center;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #B7B7B7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 400px;

  @media (max-width: 425px) {
    width: 300px;
  }
`
const InputGroup = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`
const SignInInput = styled.input`
  padding: 10px;
  width: 200px;
`
const Button = styled.button`
  align-self: center;
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1em;
  margin: 20px;
  padding: 7px 20px;
  text-transform: uppercase;
`
const LogoDiv = styled.div`
  align-self: start;
  display: flex;
  flex-direction: column;
  margin: -50px 50px 0 50px;
  width: 280px;
`
const Title = styled.h4`
  align-self: start;
  color: #0F3875;
  font-size: 2em;
  font-weight: 300;
  text-transform: uppercase;
`
const FormTitle = styled.div`
  color: #E94D4D;
  font-size: 1.5em;
  font-weight: 300;
  letter-spacing: .2em;
  margin: 0 0 10px 0;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: 16px;
    letter-spacing: 0;
  }
`
const Logo = styled.div`
  align-self: end;
  color: #E94D4D;
  display: flex;
  font-family: 'Ephesis', cursive;
  font-size: 84px;
  letter-spacing: 0;
  margin: -70px 0 30px 0;
  text-transform: none;
`
const Slash = styled.div`
  border-left: 1px solid #E94D4D;
  height: 80px;
  margin: 10px 0 0 20px;
  transform: skew(-35deg);
`
const ErrorMsg = styled.h4`
  color: #E94D4D;
  font-style: italic;
`

export default function SignIn({ handleLogin, renderError }) {
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
    <>
      <Container>
        <LogoDiv>
          <Title>apply aptly with</Title>
          <Logo>
            <div>app</div><Slash></Slash><div>ly</div>
          </Logo>
        </LogoDiv>
        <SignInForm onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }} >
          <FormTitle>
            Sign in to app/ly
          </FormTitle>
          <InputGroup>
            <label htmlFor='username'>Username</label>
            <SignInInput
              id='username'
              name="username"
              type="text"
              value={username}
              onChange={handleChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor='password'>Password</label>
            <SignInInput
              id='password'
              name="password"
              type="password"
              value={password}
              onChange={handleChange}
            />
          </InputGroup>
          <ErrorMsg>{renderError()}</ErrorMsg>
          <Button>Sign In</Button>
        </SignInForm>
          <Link 
            style={{margin:'20px', textDecoration:'none', color:'#E94D4D'}} 
            to="/signup"
          >Create an account</Link>
      </Container>
    </>
  )
}
