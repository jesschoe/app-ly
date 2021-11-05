import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import deleteIcon from '../../assets/delete-icon.png'
import JobForm from '../JobForm/JobForm'

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

export default function JobEdit({ job, editJob, setShowModal }) {
  const [formData, setFormData] = useState(job)
  const [startDate, setStartDate] = useState(Date.now())

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDate = (date, field) => {
    setStartDate(date)
    setFormData(prev => ({
      ...prev,
      field: date
    }))
  }

  return (
    <div>
      {console.log(startDate)}
      <EditForm onSubmit={e => {
        e.preventDefault()
        editJob(job.id, formData)
        setShowModal(prev => !prev)
      }}>
        <JobForm 
          formData={formData}
          handleChange={handleChange}
          handleDate={handleDate}
          setShowModal={setShowModal}
          startDate={startDate}
          setStartDate={setStartDate}
          handleDate={handleDate}
        />
      </EditForm>
    </div>
  )
}
