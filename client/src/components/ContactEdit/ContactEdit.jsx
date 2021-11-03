import React, { useState } from 'react'
import styled from 'styled-components'

export default function ContactEdit({ job, contact, editContact, setShowModal }) {
  const [formData, setFormData] = useState(contact)
  const {name, position, email, phone} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      {/* <EditForm onSubmit={e => {
        e.preventDefault()
        editContact(job.id, contact.id, formData)
        setShowModal(prev => !prev)
      }}>
        <label>
          <input type='text' name='company' value={company} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='location' value={location} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='position' value={position} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='salary' value={salary} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='url' value={url} onChange={handleChange}/>
        </label>
        <label>
          <input type='text' name='offer_salary' value={offer_salary} onChange={handleChange}/>
        </label>
        <button type='submit'>
          submit
        </button>

      </EditForm> */}
    </div>
  )
}
