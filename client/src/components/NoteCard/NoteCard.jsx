import { useState } from "react"
import styled from "styled-components"
import deleteIcon from '../../assets/delete-icon.png'

export default function NoteCard({ id, job, handleNoteDelete, newNote, Icon, ButtonDiv, DateOrange }) {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
  const [formData, setFormData] = useState({
    date: date,
    content: '',
    job_id: id
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  return (
    <>
      <NotesForm onSubmit={e => {
            e.preventDefault()
            newNote(job.id, formData)
            setFormData({    
              date: date,
              content: '',
              job_id: id
            })
          }}>
            <NoteInput 
              type='text' 
              name='content' 
              value={formData.content} 
              onChange={handleChange} />
            <Button type='submit'>add</Button>
          </NotesForm>
          {job?.notes.slice(0).reverse().map(note => {
            return (
              <Card key={note.id}>
                <ButtonDiv onClick={() => handleNoteDelete(note.job_id, note.id)}>
                  <Icon src={deleteIcon} alt='delete note' />
                </ButtonDiv>
                <DateOrange>{note.date}</DateOrange>
                <DetailsText>{note.content}</DetailsText>
              </Card>
            )
          })}
    </>
  )
}

const NotesForm = styled.form`
  display: flex;
  margin: 20px;
`
const NoteInput = styled.input`
  autofocus;
  border: none;
  padding: 5px 10px;
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid #E94D4D;
  }
`
const Card = styled.div`
  align-items: start;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 2px 2px 3px grey;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`
const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
  margin: 5px 10px;
  text-align: left;

  @media (max-width: 425px) {
    font-size: .6em;
  }
`
const Button = styled.button`
align-self: center;
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: .5em;
  margin: 0 0 0 10px;
  padding: 7px 20px;
  text-transform: uppercase;
`

