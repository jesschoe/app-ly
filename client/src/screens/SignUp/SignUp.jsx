import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #FFF4EE;
  display: flex;
  font-family: 'Raleway', sans-serif;
  font-size: .7em;
  justify-content: center;
  letter-spacing: 1.5px;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 940px) {
    flex-direction: column;
  }

  @media (max-width: 375px) {
    flex-direction: column;
  }
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

  @media (max-width: 400px) {
    width: 275px;
  }
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

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 50px 0 50px;
  width: 350px;

  @media (max-width: 400px) {
    width: 275px;
  }
`

const Title = styled.h4`
  align-self: start;
  text-transform: uppercase;
  color: #0F3875;
  font-weight: 300;
  font-size: 32px;
  margin: 0;
  letter-spacing: .1em;

  @media (max-width: 400px) {
    font-size: 24px;
  }
`
const Title2 = styled.h4`
  align-self: start;
  text-transform: uppercase;
  color: #0F3875;
  font-weight: 300;
  font-size: 32px;
  margin: 0;
  letter-spacing: 0;

  @media (max-width: 400px) {
    font-size: 24px;
  }
`

const SmallTitle = styled.div`
  align-self: start;
  text-transform: uppercase;
  color: #0F3875;
  font-weight: 300;
  font-size: 1.5em;
  margin: 0;
  letter-spacing: .2em;

  @media (max-width: 400px) {
    font-size: 16px;
    letter-spacing: 0;
  }
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
  margin: -30px 0 30px 0;
  text-transform: none;
  letter-spacing: 0;
`
const Slash = styled.div`
  border-left: 1px solid #E94D4D;
  height: 80px;
  transform: skew(-35deg);
  margin: 10px 0 0 20px;
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
      <LogoDiv>
        <Title2>keep track of your</Title2>
        <Title>job applications</Title>
        <SmallTitle>from start to offer with</SmallTitle>
        <Logo>
          <div>app</div><Slash></Slash><div>ly</div>
        </Logo>
      </LogoDiv>
      <SignUpForm onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }} >
        <FormTitle>
          Create your app/ly account
        </FormTitle>
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
        
        <Button>Submit</Button>
          Already have an account? <Link style={{textDecoration:'none', color:'##E94D4D'}} to="/">Sign In</Link>
      </SignUpForm>
    </Container>
  )
}
