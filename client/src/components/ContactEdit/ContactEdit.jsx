import React, { useState } from 'react'
import styled from 'styled-components'

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
  left: 25%;
  z-index: 20;
`

export default function ContactEdit({ job, contact, editContact, setShowModal }) {
  const [formData, setFormData] = useState(contact)
  const {position, email, phone} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <EditForm onSubmit={e => {
        e.preventDefault()
        editContact(job.id, contact.id, formData)
        setShowModal(prev => !prev)
      }}>
        <label>
          <input type='text' name='name' value={formData.name} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='position' value={position} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='email' value={email} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='phone' value={phone} onChange={handleChange}/>
        </label>
        
        <button type='submit'>
          submit
        </button>

      </EditForm>
    </div>
  )
}
