import React, { useState } from 'react'
import styled from 'styled-components'
import deleteIcon from '../../assets/delete-icon.png'

export default function ContactEdit({ id, contact, editContact, setShowEditContactModal }) {
  const [formData, setFormData] = useState(contact)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    setShowEditContactModal(prev => !prev)
  }

  return (
    <div>
      <EditForm onSubmit={e => {
        e.preventDefault()
        editContact(formData.job_id, id, formData)
        setShowEditContactModal(prev => !prev)
      }}>
        <ButtonDiv onClick={handleClose}>
          <Icon src={deleteIcon} alt='delete contact' />
        </ButtonDiv>
        <Title>Update Contact</Title>
        <InputGroup>
          <label htmlFor='name'>Name</label>
          <EditInput 
            type='text' 
            id='name' 
            name='name' 
            value={formData?.name} 
            onChange={handleChange} 
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor='position'>Position</label>
          <EditInput 
            type='text' 
            id='position' 
            name='position' 
            value={formData?.position} 
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor='email'>Email</label>
          <EditInput 
            type='text' 
            id='email' 
            name='email' 
            value={formData?.email} 
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup>
          <label htmlFor='phone'>Phone</label>
          <EditInput 
            type='text' 
            id='phone' 
            name='phone' 
            value={formData?.phone} 
            onChange={handleChange}
          />
        </InputGroup>
        <Button type='submit'>
          update
        </Button>
      </EditForm>
    </div>
  )
}

const EditForm = styled.form`
  align-items: center;
  display: flex;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000000;
  flex-direction: column;
  font-size: .6em;
  left: 40%;
  padding: 10px;
  position: absolute;
  top: 25%;
  z-index: 20;

  @media (max-width: 425px) {
    align-items: center;
    font-size: .5em;
    left: 13%;
    top: 20%;
    width: 70%;
  }
`

const Title = styled.h5`
  color: #E94D4D;
  font-size: 1.2em;
  letter-spacing: .5em;
  margin: 10px 30px 30px 30px;
  text-transform: uppercase;
`

const InputGroup = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  margin: 0 0 0 -20px;
`

const Button = styled.button`
  align-self: center;
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: .9em;
  margin: 20px;
  padding: 7px 20px;
  text-transform: uppercase;
`

const EditInput = styled.input`
  autofocus;
  border: 1px solid #0F3875;
  font-family: 'Raleway';
  font-size: 1.1em;
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #E94D4D;
  }
`

const ButtonDiv = styled.div`
  align-self: end;
  cursor: pointer;
  display: flex;
`

const Icon = styled.img`
  margin: 0 5px;
  text-align: right;
  width: 20px;
`

