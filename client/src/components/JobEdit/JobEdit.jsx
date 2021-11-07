import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import deleteIcon from '../../assets/delete-icon.png'

const EditForm = styled.form`
  color: #0F3875;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000000;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: .6em;
  position: absolute;
  background: #FFFFFF;
  padding: 10px;
  top: 20%;
  left: 25%;
  z-index: 20;

  @media (max-width: 425px) {
    align-items: center;
    width: 70%;
    font-size: .5em;
    top: 12%;
    left: 15%;
  }
`

const FormSection = styled.div`
  display: flex;
  margin: 10px;
  

  @media (max-width: 425px) {
    flex-direction: column;
    margin: 0;
    width: 180px;
  }
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 0 20px;

  @media (max-width: 425px) {
    margin: 5px 0 5px -10px;
    width: 100%;
  }
`

const EditInput = styled.input`
  font-family: 'Raleway';
  font-size: 1.1em;
  padding: 10px;
  border: 1px solid #0F3875;
  autofocus;

  &:focus {
    outline: none;
    border: 1px solid #E94D4D;
  }
  
  @media (max-width: 425px) {
    padding: 5px;
    width: 100%;
  }
`

const Dropdown = styled.select`
  font-family: 'Raleway';
  font-size: 1.1em;
  padding: 10px;
  border: 1px solid #0F3875;
  autofocus;
  &:focus {
    outline: none;
    border: 1px solid #E94D4D;
  }

  @media (max-width: 425px) {
    padding: 5px;
  }
`

const Calendar = styled.div`
  margin-bottom: 10px;
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

  @media (max-width: 425px) {
    margin: 5px;
  }
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
  const [appliedDate, setAppliedDate] = useState(new Date())
  const [interviewDate, setInterviewDate] = useState(new Date())
  const [offerDate, setOfferDate] = useState(new Date())
  const [formData, setFormData] = useState(job)

  const {company, location, position, salary, url, offer_salary, applied, interview, offer} = formData

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
    field === 'applied' ? setAppliedDate(date) : 
    field === 'interview' ? setInterviewDate(date) : setOfferDate(date)

    setFormData(prev => ({
      ...prev,
      [field]: date
    }))
  }

  return (
    <div>
      <EditForm onSubmit={e => {
        e.preventDefault()
        editJob(job.id, formData)
        setShowEditJobModal(prev => !prev)
      }}>

        <ButtonDiv onClick={handleClose}>
          <Icon src={deleteIcon} alt='delete contact' />
        </ButtonDiv>
        <Title>Update Job Opportunity</Title>
        <FormSection>
          <InputGroup>
            <label htmlFor='company'>Company</label>
            <EditInput type='text' id='company' name='company' value={company} onChange={handleChange}/>
          </InputGroup>
          <InputGroup>
            <label htmlFor='priority'>Priority</label>
            <Dropdown id='priority' name='priority' onChange={handleChange}>
              <option value='3'>High</option>
              <option value='2'>Medium</option>
              <option value='1'>Low</option>
            </Dropdown>
          </InputGroup>
        </FormSection>
        <FormSection>
          <InputGroup>
            <label htmlFor='position'>Position</label>
            <EditInput type='text' id='position' name='position' value={position} onChange={handleChange}/>
          </InputGroup>
          <InputGroup>
            <label htmlFor='location'>Location</label>
            <EditInput type='text' id='location' name='location' value={location} onChange={handleChange}/>
          </InputGroup>
        </FormSection>
        <FormSection>
          <InputGroup>
            <label htmlFor='salary'>Salary</label>
            <EditInput type='text' id='salary' name='salary' value={salary} onChange={handleChange}/>
          </InputGroup>
          <InputGroup>
            <label htmlFor='url'>Post URL</label>
            <EditInput type='text' id='url' name='url' value={url} onChange={handleChange}/>
          </InputGroup>
        </FormSection>
        <FormSection>
          <InputGroup>
            <label htmlFor='applied'>Date Applied</label>
            <Calendar>
              <DatePicker
                id='applied' 
                name='applied'
                value={applied}
                selected={appliedDate} 
                onChange={(date) => handleDate(date, 'applied')} 
              />
            </Calendar>
            <label>Next Interview</label>
            <Calendar>
              <DatePicker 
                name='interview'
                value={interview}
                selected={interviewDate} 
                onChange={(date) => handleDate(date, 'interview')} />
            </Calendar>

          </InputGroup>
          <InputGroup>
            <label htmlFor='offer_salary'>Offer Salary</label>
            <EditInput type='text' id='offer_salary' name='offer_salary' value={offer_salary} onChange={handleChange}/>
          </InputGroup>
        </FormSection>
        <FormSection style={{marginTop:'-5px'}}>
          <InputGroup>
              <label>Offer Date</label>
            <Calendar>
              <DatePicker 
                name='offer'
                value={offer}
                selected={offerDate} 
                onChange={(date) => handleDate(date, 'offer')} />
            </Calendar>
          </InputGroup>
        </FormSection>
        <Button type='submit'>
          update
        </Button>

      </EditForm>

    </div>
  )
}
