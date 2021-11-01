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


export default function JobCard({ job }) {
  return (
    <Card>
      <h4>{job.company}</h4>
      <Details>location: {job.location}</Details>
      <Details>position: {job.position}</Details>
      <Details>salary: {job.salary}</Details>
    </Card>
  )
}
