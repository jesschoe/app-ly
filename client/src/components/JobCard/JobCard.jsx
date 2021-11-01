import styled from "styled-components"

const Card = styled.div`
  margin: 20px;
`


export default function JobCard({ job }) {
  return (
    <Card>
      {job.company}
    </Card>
  )
}
