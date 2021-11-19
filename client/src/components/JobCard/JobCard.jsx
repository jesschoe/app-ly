import styled from "styled-components"

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

const Card = styled.div`
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 2px 2px 3px grey;
  height: 150px;
  margin: 20px;
  padding: 5px 20px;
  width: 250px;

  @media (max-width: 920px) {
    width: 240px;
  }

  @media (max-width: 425px) {
    width: 220px;
    margin: 10px;
  }
`
const TitleOrange = styled.h5`
  color: #E94D4D;
  font-size: .9em;
  font-weight: 300;
  letter-spacing: .3em;
  margin: 20px 0;
  text-transform: uppercase;

  @media (max-width: 425px) {
    font-size: .8em;
  }
`
const Details = styled.div`
  font-size: .7em;
  line-height: 1.7em;
`

