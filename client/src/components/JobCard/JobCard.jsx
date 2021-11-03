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

const TitleOrange = styled.h4`
  color: #E94D4D;
  text-transform: uppercase;
`

const Details = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`


export default function JobCard({ job }) {
  return (
    <Card>
      <TitleOrange>{job.company}</TitleOrange>
      <Details>Location: {job.location}</Details>
      <Details>Position: {job.position}</Details>
      <Details>Salary: {job.salary}</Details>
    </Card>
  )
}
