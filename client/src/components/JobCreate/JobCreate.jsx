import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'
import deleteIcon from '../../assets/delete-icon.png'

const CreateForm = styled.form`
  color: #0F3875;
  display: flex;
  flex-direction: column;
  font-size: .6em;
  box-shadow: 2px 2px 4px #000000;
  position: absolute;
  background: #FFFFFF;
  padding: 20px;
  top: 20%;
  left: 30%;
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
  font-family: 'Raleway';
  font-size: 1.1em;
  padding: 10px;
  border: 1px solid #0F3875;
  autofocus;
  &:focus {
    outline: none;
    border: 1px solid #E94D4D;
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
  align-self: start;
  text-transform: uppercase;
  color: #E94D4D;
  letter-spacing: .5em;
  font-size: 1.2em;
  margin: 0 0 20px 30px;
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

export default function JobCreate({ job, user, newJob, setShowAddJobModal, columnId }) {
  const [appliedDate, setAppliedDate] = useState(new Date())
  const [interviewDate, setInterviewDate] = useState(new Date())
  const [offerDate, setOfferDate] = useState(new Date())
  const [formData, setFormData] = useState({
    company: '',
    location: '',
    position: '',
    salary: '',
    description: '',
    url: '',
    applied: '',
    interview: '',
    offer: '',
    offer_salary: '',
    priority: '3',
    column: `${columnId ? columnId :'wishlist'}`,
    contacts: [],
    notes: [],
    user_id: user.id
  })

  const {company, location, position, salary, url, offer_salary, applied, interview, offer} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleClose = () => {
    setShowAddJobModal(prev => !prev)
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
      <CreateForm onSubmit={e => {
        e.preventDefault()
        newJob(formData)
        setShowAddJobModal(prev => !prev)
      }}>
        <ButtonDiv onClick={handleClose}>
          <Icon src={deleteIcon} alt='close add new job form' />
        </ButtonDiv>
        <Title>Add Job Opportunity</Title>
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
            <label>Offer Date</label>
            <DatePicker 
              name='offer'
              value={offer}
              selected={offerDate} 
              onChange={(date) => handleDate(date, 'offer')} />
          </InputGroup>
          <InputGroup>
            <label htmlFor='offer_salary'>Offer Salary</label>
            <EditInput type='text' id='offer_salary' name='offer_salary' value={offer_salary} onChange={handleChange}/>
          </InputGroup>
        </FormSection>
        <Button type='submit'>
          submit
        </Button>

      </CreateForm>

    </div>
  )
}
