import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
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
  left: 25%;
  z-index: 20;
`

const FormSection = styled.div`
  display: flex;
  margin: 10px;
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 20px;
`

const EditInput = styled.input`
  padding: 10px;
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
const Title = styled.h5`
  text-transform: uppercase;
  color: #E94D4D;
  letter-spacing: .5em;
  font-size: 1.2em;
  margin: 20px 30px;
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

export default function JobEdit({ job, editJob, setShowEditJobModal }) {
  const [startDate, setStartDate] = useState(new Date())
  const [formData, setFormData] = useState(job)
  const {company, location, position, salary, url, offer_salary, applied} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    setShowEditJobModal(prev => !prev)
  }

  const handleDate = (date, field) => {
    setStartDate(date)
    setFormData(prev => ({
      ...prev,
      [field]: date
    }))
  }

  return (
    <div>
      {console.log(startDate)}
      <EditForm onSubmit={e => {
        e.preventDefault()
        editJob(job.id, formData)
        setShowEditJobModal(prev => !prev)
      }}>

        <ButtonDiv onClick={handleClose}>
          <Icon src={deleteIcon} alt='delete contact' />
        </ButtonDiv>
        <Title>Update Job Details</Title>
        <FormSection>
          <InputGroup>
            <label for='company'>Company</label>
            <EditInput type='text' id='company' name='company' value={company} onChange={handleChange}/>
          </InputGroup>
          <InputGroup>
            <label for='position'>Position</label>
            <EditInput type='text' id='position' name='position' value={position} onChange={handleChange}/>
          </InputGroup>
        </FormSection>
        <FormSection>
          <InputGroup>
            <label for='location'>Location</label>
            <EditInput type='text' id='location' name='location' value={location} onChange={handleChange}/>
          </InputGroup>
          <InputGroup>
            <label for='salary'>Salary</label>
            <EditInput type='text' id='salary' name='salary' value={salary} onChange={handleChange}/>
          </InputGroup>
        </FormSection>
        <FormSection>
          <InputGroup>
            <label for='url'>Post URL</label>
            <EditInput type='text' id='url' name='url' value={url} onChange={handleChange}/>
          </InputGroup>
        <FormSection>
          <InputGroup>
            <label>Date Applied</label>
            <DatePicker 
              name='applied'
              value={applied}
              selected={startDate} 
              onChange={(date) => handleDate(date, 'applied')} />
          </InputGroup>
        </FormSection>
          <InputGroup>
            <label for='offer_salary'>Offer Salary</label>
            <EditInput type='text' id='offer_salary' name='offer_salary' value={offer_salary} onChange={handleChange}/>
          </InputGroup>
        </FormSection>
        
        <Button type='submit'>
          update
        </Button>

      </EditForm>

    </div>
  )
}
