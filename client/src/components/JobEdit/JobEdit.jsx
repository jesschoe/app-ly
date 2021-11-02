import React, { useState } from 'react'
import styled from 'styled-components'

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #FFFFFF;
  padding: 20px;
  top: 40%;
  left: 50%;
`


export default function JobEdit({ job, editJob, setShowModal }) {
  const [formData, setFormData] = useState(job)
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
      <EditForm onSubmit={e => {
        e.preventDefault()
        editJob(job.id, formData)
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

      </EditForm>

    </div>
  )
}
