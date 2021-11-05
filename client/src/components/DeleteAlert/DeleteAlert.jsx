import styled from "styled-components"


const Alert = styled.div`
  border-radius: 5px;
  box-shadow: 2px 2px 4px #000000;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: .6em;
  position: absolute;
  background: #FFFFFF;
  padding: 20px 10px 10px 10px;
  top: 30%;
  left: 40%;
  width: 200px;
  z-index: 20;
`

const ButtonDiv = styled.div`
  display: flex;
  align-self: center;
  cursor: pointer;
`

const Button = styled.button`
  background-color: #E94D4D;
  border: none;
  color: #FFFFFF;
  font-size: .9em;
  padding: 7px 20px;
  text-transform: uppercase;
  align-self: center;
  margin: 20px;
  cursor: pointer;
`

export default function DeleteAlert({ job, deleteJob, setShowDeleteAlert}) {

  const handleDelete = () => {
    deleteJob(job?.id)
    setShowDeleteAlert(prev => !prev)
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
