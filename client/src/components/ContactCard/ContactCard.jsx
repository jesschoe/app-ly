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

const Details = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`


export default function ContactCard({ job }) {
  return (
    <Card>
      <h4>{job?.contacts[0].name}</h4>
      {/* <Details>name: {job?.contacts[0].name}</Details>
      <Details>position: {job.position}</Details>
      <Details>salary: {job.salary}</Details> */}
    </Card>
  )
}
