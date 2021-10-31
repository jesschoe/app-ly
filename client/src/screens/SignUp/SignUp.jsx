import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
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
    <>
      <SignUpForm onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }} >
        <label>
          Username:
            <input
            name="username"
            type="text"
            value={username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
            <input
            name="email"
            type="text"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
            <input
            name="password"
            type="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <label>
          Confirm Password:
            <input
            name="confirm_password"
            type="password"
            value={confirm_password}
            onChange={handleChange}
          />
        </label>
        <button>Login</button>
        <Link to="/signin">Sign In</Link>
      </SignUpForm>
    </>
  )
}
