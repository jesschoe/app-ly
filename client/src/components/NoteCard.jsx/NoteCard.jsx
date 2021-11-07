import { useState } from "react"
import styled from "styled-components"
import deleteIcon from '../../assets/delete-icon.png'

const NotesForm = styled.form`
  display: flex;
  margin: 20px;
`

const NoteInput = styled.input`
  padding: 5px 10px;
  width: 100%;
  border: none;
  autofocus;
  &:focus {
    outline: none;
    border: 1px solid #E94D4D;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #FFFFFF;
  margin: 10px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
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
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  font-size: .5em;
  padding: 7px 20px;
  text-transform: uppercase;
  align-self: center;
  margin: 0 0 0 10px;
  cursor: pointer;
`

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
            <NoteInput type='text' name='content' value={formData.content} onChange={handleChange} />
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
