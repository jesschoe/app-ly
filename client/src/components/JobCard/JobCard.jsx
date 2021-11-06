import styled from "styled-components"

const Card = styled.div`
  background-color: #FFFFFF;
  width: 250px;
  height: 150px;
  margin: 20px;
  box-shadow: 2px 2px 3px grey;
  border-radius: 5px;
  padding: 5px 20px;

  @media (max-width: 920px) {
    width: 200px;
  }

  @media (max-width: 375px) {
    width: 180px;
    margin: 10px;
  }
`

const TitleOrange = styled.h5`
  color: #E94D4D;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: .3em;
  font-size: .9em;
  margin: 20px 0;

  @media (max-width: 375px) {
    font-size: .8em;
  }
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
