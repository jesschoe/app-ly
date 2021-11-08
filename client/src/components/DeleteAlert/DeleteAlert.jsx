import { useHistory } from "react-router"
import styled from "styled-components"

const Alert = styled.div`
  align-items: start;
  background: #FFFFFF;
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000000;
  display: flex;
  flex-direction: column;
  font-size: .6em;
  left: 40%;
  padding: 20px 10px 10px 10px;
  position: absolute;
  top: 30%;
  width: 200px;
  z-index: 20;
`

const ButtonDiv = styled.div`
  align-self: center;
  cursor: pointer;
  display: flex;
`

const Button = styled.button`
  align-self: center;
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: .9em;
  margin: 20px;
  padding: 7px 20px;
  text-transform: uppercase;
`

export default function DeleteAlert({ job, deleteJob, setShowDeleteAlert }) {
  const history = useHistory()
  const handleDelete = () => {
    deleteJob(job?.id)
    setShowDeleteAlert(prev => !prev)
    history.push(`/jobs`)
  }

  return (
    <Alert>
      Are you sure you want to stop tracking this job application? All associated notes and contacts will be deleted.
      <ButtonDiv>
        <Button onClick={handleDelete}>yes</Button>
        <Button onClick={() => setShowDeleteAlert(prev=>!prev)}>no</Button>
      </ButtonDiv>
    </Alert>
  )
}
