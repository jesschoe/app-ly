import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFF4EE;
  display: flex;
  flex-direction: column;
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

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  margin: -50px 50px 0 50px;
  width: 280px;
`

const Title = styled.h4`
  align-self: start;
  font-family: 'Raleway';
  text-transform: uppercase;
  color: #0F3875;
  font-weight: 300;
  font-size: 2em;
`

const FormTitle = styled.div`
  text-transform: uppercase;
  color: #E94D4D;
  font-weight: 300;
  font-size: 1.5em;
  margin: 0 0 10px 0;
  letter-spacing: .2em;

  @media (max-width: 400px) {
    font-size: 16px;
    letter-spacing: 0;
  }
`

const Logo = styled.div`
  display: flex;
  align-self: end;
  font-family: 'Ephesis', cursive;
  font-size: 84px;
  color: #E94D4D;
  margin: -70px 0 30px 0;
  text-transform: none;
  letter-spacing: 0;
`
const Slash = styled.div`
  border-left: 1px solid #E94D4D;
  height: 80px;
  transform: skew(-35deg);
  margin: 10px 0 0 20px;
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
          
          <Button>Sign In</Button>
          <Link style={{textDecoration:'none', color:'##E94D4D'}} to="/signup">Create an account</Link>
        </SignInForm>
      </Container>
    </>
  )
}
