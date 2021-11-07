import styled from "styled-components"
import editIcon from '../../assets/edit-icon.png'
import deleteIcon from '../../assets/delete-icon.png'



const Card = styled.div`
  flex-shrink: 0;
  background-color: #FFFFFF;
  width: 300px;
  height: 150px;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 10px 10px 20px 0;

  @media (max-width: 425px) {
    width: 240px;
  }
`

const TitleOrange = styled.h5`
  text-transform: uppercase;
  color: #E94D4D;
  letter-spacing: .3em;
  margin: 0 0 5px 0;

  @media (max-width: 425px) {
    font-size: .7em;
  }
`

const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;

  @media (max-width: 425px) {
    font-size: .6em;
  }
`

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
  margin: 0 5px;
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: end;
`




export default function ContactCard({ job, contact, deleteContact, handleContactEdit }) {

  
  const handleDelete = (id) => {
    deleteContact(job.id, id)
  }
  
  return (
    <Card>
      <ButtonDiv>
        <div onClick={() => handleContactEdit(contact.id)}><Icon src={editIcon} alt='update contact' /></div>
        <div onClick={() => handleDelete(contact.id)}><Icon src={deleteIcon} alt='delete contact' /></div>
      </ButtonDiv>
      <TitleOrange>{contact.name}</TitleOrange>
      <DetailsText>Company: {job.company}</DetailsText>
      <DetailsText>Position: {contact.position}</DetailsText>
      <DetailsText>Email: {contact.email}</DetailsText>
      <DetailsText>Phone: {contact.phone}</DetailsText>
    </Card>
  )
}
