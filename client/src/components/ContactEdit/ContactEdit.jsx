import React, { useState } from 'react'
import styled from 'styled-components'
import deleteIcon from '../../assets/delete-icon.png'

const EditForm = styled.form`
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000000;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: .6em;
  position: absolute;
  background: #FFFFFF;
  padding: 10px;
  top: 25%;
  left: 40%;
  z-index: 20;
`

const Title = styled.h5`
  text-transform: uppercase;
  color: #E94D4D;
  letter-spacing: .5em;
  font-size: 1.2em;
  margin: 20px 30px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 20px;
`

const Button = styled.button`
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  font-size: .9em;
  padding: 7px 20px;
  text-transform: uppercase;
  align-self: center;
  margin: 20px;
  cursor: pointer;
`

const EditInput = styled.input`
  padding: 10px;

`

const ButtonDiv = styled.div`
  display: flex;
  align-self: end;
  cursor: pointer;
`

const Icon = styled.img`
  width: 20px;
  margin: 0 5px;
  text-align: right;
`

export default function ContactEdit({ id, contact, user, editContact, setShowEditContactModal }) {
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

  console.log(contact)
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
          <EditInput type='text' id='name' name='name' value={formData?.name} onChange={handleChange}/>
        </InputGroup>
        <InputGroup>
          <label htmlFor='position'>Position</label>
          <EditInput type='text' id='position' name='position' value={formData?.position} onChange={handleChange}/>
        </InputGroup>
        <InputGroup>
          <label htmlFor='email'>Email</label>
          <EditInput type='text' id='email' name='email' value={formData?.email} onChange={handleChange}/>
        </InputGroup>
        <InputGroup>
          <label htmlFor='phone'>Phone</label>
          <EditInput type='text' id='phone' name='phone' value={formData?.phone} onChange={handleChange}/>
        </InputGroup>
        <Button type='submit'>
          submit
        </Button>

      </EditForm>
    </div>
  )
}
