import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import styled from "styled-components";
import JobCreate from "../../components/JobCreate/JobCreate";
import JobEdit from "../../components/JobEdit/JobEdit";
import add from '../../assets/add-icon.svg'

const BoardContainer = styled.div`
  align-items: start;
  display: flex;
  height: 90%;
  justify-items: start;
  margin: 5px;
  overflow-x: auto;
  padding: 0 5px;
  width: 90%;

  @media (max-width: 425px) {
    height: 80%;
  }
`
const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`
const HelperDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  text-align: right;

  @media (max-width: 425px) {
    display: none;
  }
`
const Title = styled.h5`
  color: #0F3875;
  font-size: .7em;
  letter-spacing: .7em;
  margin: 30px 0 10px 0;
  text-transform: uppercase;
`
const PageTitle = styled.h4`
  align-self: start;
  color: #0F3875;
  font-size: 1.1em;
  font-weight: 300;
  justify-self: start;
  letter-spacing: .7em;
  margin: 20px 0 0 20px;
  text-transform: uppercase;
`
const HelperText = styled.div`
  color: #0F3875;
  font-style: italic;
  font-size: .7em;
`
const PriorityText = styled.div`
  color: #0F3875;
  font-size: .7em;  
`
const DroppableColumn = styled.div`
  border-radius: 5px;
  height: 600px;
  margin: 0 0 0 10px;
  padding: 10px;
  width: 250px;

  @media (max-width: 425px) {
    height: 450px;
    width: 200px;
  }
`

const ShowMore = styled.div`
  margin: 10px 0 0 15px;
`

const DetailsDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

const DetailsText = styled.div`
  font-size: .7em;
  line-height: 1.7em;
  text-align: left;
`

const DetailsTitle = styled.div`
  font-size: .7em;
  font-weight: 600;
  letter-spacing: .3em;
  line-height: 1.7em;
  text-align: left;
  text-transform: uppercase;
`

const AddIcon = styled.img`
  cursor: pointer;
  width: 25px;
`

const Overlay = styled.div`
  background-color: #0F3875;
  height: 100%;
  left: 0;
  opacity: .5;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

const DraggableItem = styled.div`
  background-color: #FFFFFF;
  background-image: ${props => 
    props.priority === '3' ? 'linear-gradient(90deg, #E94D4D 2%, #FFFFFF 0)' :
    props.priority === '2' ? 'linear-gradient(90deg, #F4C78E 2%, #FFFFFF 0)' : 
    'linear-gradient(90deg, #0F3875 2%, #FFFFFF 0)'};
  border: ${props => 
    props.priority === '3' ? '1px solid #E94D4D' :
    props.priority === '2' ? '1px solid #F4C78E' : 
    '1px solid #0F3875'};
  border-radius: 5px;
  box-shadow: 2px 2px 2px #B9B9B9;
  display: flex;
  flex-direction: column;
  font-size: .8em;
  margin: 10px 0;
  minHeight: 50px;
  padding: 16px;
  user-select: none;
  ...provided.draggableProps.style;
`
const DetailsLink = styled.div`
  display: flex;
  justify-content: end;
  font-size: .7em;
  line-height: 1.7em;
  text-align: right;
  margin: 5px 0 -5px 0;
  color: #E94D4D;
`

export default function Board({ jobs, user, saveBoard, newJob, editJob }) {
  const [formData, setFormData] = useState(null)
  const [showAddJobModal, setShowAddJobModal] = useState(false)
  const [showEditJobModal, setShowEditJobModal] = useState(false)
  const [job, setJob] = useState(null)
  const [columnId, setColumnId] = useState(null)
  const [showMore, setShowMore] = useState(false)
  const [items, setItems] = useState(null)
  const [detailsId, setDetailsId] = useState(null)

  useEffect(() => {
    setItems(jobs?.map(job => {
      return ({
        ...job,
        itemId: uuid()
      })
    }))
  }, [jobs])

  
  const [columns, setColumns] = useState({
  '100000': {
    name: 'wishlist',
    items: items?.filter(item => item.column === 'wishlist')
  },
  '200000': {
    name: 'applied',
    items: items?.filter(item => item.column === 'applied')
  },
  '300000': {
    name: 'interviews',
    items: items?.filter(item => item.column === 'interviews')
  },
  '400000': {
    name: 'offers',
    items: items?.filter(item => item.column === 'offers')
  }});

  useEffect(() => {
    setColumns({
      '100000': {
        name: 'wishlist',
        items: items?.filter(item => item.column === 'wishlist')
      },
      '200000': {
        name: 'applied',
        items: items?.filter(item => item.column === 'applied')
      },
      '300000': {
        name: 'interviews',
        items: items?.filter(item => item.column === 'interviews')
      },
      '400000': {
        name: 'offers',
        items: items?.filter(item => item.column === 'offers')
      }})
  }, [items])
  

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    let job = items.find(item => item.itemId === draggableId)

    setFormData({
      ...job,
      "column": columns[destination.droppableId].name
    })

    

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

  useEffect(() => {
      saveBoard(formData?.id, formData)
  }, [formData])

  const handleClick = (id) => {
    setShowMore(prev => !prev)
    setDetailsId(id)
  }

  const handleAdd = (id) => {
    let columnName = columns?.[id].name
    setColumnId(columnName)
    setShowAddJobModal(prev => !prev)
  }

  const handleEdit = (job) => {
    setJob(job)
    setShowEditJobModal(prev => !prev)
  }

  return (
    <>
      <TitleDiv>
        <PageTitle>All Jobs</PageTitle>
        <HelperDiv>
          <HelperText>Drag items, click to see more options</HelperText>
          <PriorityText>Priority: <span style={{color:'#E94D4D'}}>HIGH</span> <span style={{color:'#F4C78E'}}>MEDIUM</span> LOW</PriorityText>
        </HelperDiv>
      </TitleDiv>
      <BoardContainer>
        {!jobs ? 'Loading...' :
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
                key={columnId}
              >
                <Title>{column.name}</Title>
                <div style={{ margin: "0px 8px" }}>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <DroppableColumn
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                            ? "#FEDFCD"
                            : "#FFF4EE"}}
                        >
                          <div onClick={() => handleAdd(columnId)}><AddIcon src={add} alt='add job' /></div>
                          {column.items?.map((item, index) => {
                            return (
                              <Draggable
                                key={item.itemId}
                                draggableId={item.itemId}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <DraggableItem
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      onClick={() => handleClick(item.id)}
                                      priority={item.priority}
                                    >
                                      <div>
                                      <DetailsDiv>
                                        <DetailsTitle>{item.company}</DetailsTitle>
                                        <DetailsText>{column.name==='applied' ? item.applied :
                                          column.name==='interviews' ? item.interview :
                                          column.name==='offers' ? item.offer :
                                          ''}  
                                        </DetailsText>
                                      </DetailsDiv>
                                      <DetailsDiv>
                                        <DetailsText>{item.position}</DetailsText>
                                      </DetailsDiv>
                                        {showMore && detailsId === item.id ? (
                                          <ShowMore>
                                            <DetailsText>Location: {item.location}</DetailsText>
                                            <DetailsText>Salary: {item.salary}</DetailsText>
                                            <DetailsText>
                                              {column.name==='interviews' ? (
                                                <>
                                                  Applied: {item.applied} </>) :
                                                column.name==='offers' ? (
                                                  <>
                                                    Applied: {item.applied}<br />
                                                    Interviewed: {item.interview}<br />
                                                    Offer: {item.offer_salary}
                                                  </>) :
                                                ''}  
                                            </DetailsText>
                                            <DetailsLink>
                                              <Link style={{textDecoration:'none', color:'#E94D4D', marginRight:'5px', }} to={`/jobs/${item.id}`}>details</Link>
                                              <div style={{cursor:'pointer'}} onClick={() => handleEdit(item)}>edit</div>
                                            </DetailsLink>
                                          </ShowMore>
                                        ) : ''}
                                      </div>
                                    </DraggableItem>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </DroppableColumn>
                      );
                    }}
                  </Droppable>
                </div>
              </div>
            );
          })}
        </DragDropContext>}
        {showAddJobModal ? (
          <>
            <Overlay>/</Overlay>
            <JobCreate 
              user={user} 
              newJob={newJob} 
              setShowAddJobModal={setShowAddJobModal}
              columnId={columnId}/>
          </>) : ''}
        {showEditJobModal ? 
        <>
          <Overlay></Overlay>
          <JobEdit 
            job={job} 
            editJob={editJob} 
            setShowEditJobModal={setShowEditJobModal}/> 
        </>  : ''}
      </BoardContainer>
    </>
  )
}
