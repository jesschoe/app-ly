import styled from "styled-components"

const Card = styled.div`
  background-color: #FFFFFF;
  width: 250px;
  height: 150px;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 10px;
`

const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`


export default function ContactCard({ job, contact }) {
  return (
    <Card>
      <h5>{contact.name}</h5>
      <DetailsText>company: {job.company}</DetailsText>
      <DetailsText>position: {contact.position}</DetailsText>
      <DetailsText>email: {contact.email}</DetailsText>
      <DetailsText>phone: {contact.phone}</DetailsText>
    </Card>
  )
}
