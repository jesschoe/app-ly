import React, { useState } from 'react'
import styled from 'styled-components'

const CreateForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #FFFFFF;
  padding: 20px;
  top: 40%;
  left: 50%;
`

const Label = styled.label`
  font-size: .7em;
  line-height: 1.7em;
`


export default function JobCreate({ job, newJob, setShowModal }) {
  const [formData, setFormData] = useState({
    company: '',
    location: '',
    position: '',
    salary: '',
    url: '',
    offer_salary: ''
  })

  const {company, location, position, salary, url, offer_salary} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      <CreateForm onSubmit={e => {
        e.preventDefault()
        newJob(formData)
        setShowModal(prev => !prev)
      }}>
        <Label for='company'>company</Label>
          <input type='text' id='company' name='company' value={company} onChange={handleChange}/>
        <Label for='location'>location</Label>
          <input type='text' id='location' name='location' value={location} onChange={handleChange}/>
        <Label for='position'>position</Label>
          <input type='text' id='position' name='position' value={position} onChange={handleChange}/>
        <Label for='salary'>salary</Label>
          <input type='text' id='salary' name='salary' value={salary} onChange={handleChange}/>
        <Label for='url'>url</Label>
          <input type='text' if='url' name='url' value={url} onChange={handleChange}/>
        <Label for='offer_salary'>offer salary</Label>
          <input type='text' if='offer_salary' name='offer_salary' value={offer_salary} onChange={handleChange}/>
        <button type='submit'>
          submit
        </button>

      </CreateForm>

    </div>
  )
}
