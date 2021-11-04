import styled from "styled-components"
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'



const Card = styled.div`
  flex-shrink: 0;
  background-color: #FFFFFF;
  width: 300px;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 10px;
`

const TitleOrange = styled.h5`
  text-transform: uppercase;
  color: #E94D4D;
  letter-spacing: .3em;
  margin-top: -5px;
`

const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`




export default function ContactCard({ job, contact, handleEdit }) {

  
  const handleDelete = () => {
  
  }
  
  return (
    <Card>
      <ButtonDiv>
        <div onClick={() => handleEdit(contact.id)}><Icon src={editIcon} alt='update contact' /></div>
        <div onClick={handleDelete}><Icon src={deleteIcon} alt='delete contact' /></div>
      </ButtonDiv>
      <TitleOrange>{contact.name}</TitleOrange>
      <DetailsText>company: {job.company}</DetailsText>
      <DetailsText>position: {contact.position}</DetailsText>
      <DetailsText>email: {contact.email}</DetailsText>
      <DetailsText>phone: {contact.phone}</DetailsText>
    </Card>
  )
}
